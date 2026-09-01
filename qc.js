// Kmeggie+ QC engine — runs entirely in the browser.
// Mirrors the checks in the Python kmeggie_core engine: read counts, length
// distribution, GC content, Phred quality, N content, and duplication.

const GZIP_MAGIC = [0x1f, 0x8b];

/** Detect gzip by magic bytes rather than trusting the filename. */
function isGzipped(bytes) {
  return bytes.length > 2 && bytes[0] === GZIP_MAGIC[0] && bytes[1] === GZIP_MAGIC[1];
}

/** Decompress a gzip File/ArrayBuffer using the native DecompressionStream. */
async function decompressGzip(arrayBuffer) {
  if (typeof DecompressionStream === 'undefined') {
    throw new Error(
      'This browser does not support DecompressionStream, so .gz files can\u2019t be read. Try Chrome, Edge, or Firefox 113+, or decompress the file first.'
    );
  }
  const stream = new Blob([arrayBuffer]).stream().pipeThrough(new DecompressionStream('gzip'));
  const buf = await new Response(stream).arrayBuffer();
  return buf;
}

/**
 * Stream-parse a FASTQ text blob into records without holding every
 * intermediate string alive at once. Yields { seq, qual } pairs.
 */
function* parseFastqRecords(text) {
  const lines = text.split('\n');
  // Trailing newline produces one empty final element — drop it.
  const lineCount = lines.length && lines[lines.length - 1] === '' ? lines.length - 1 : lines.length;

  for (let i = 0; i + 4 <= lineCount; i += 4) {
    const header = lines[i];
    const seq = lines[i + 1];
    const plus = lines[i + 2];
    const qual = lines[i + 3];
    if (header === undefined || seq === undefined || qual === undefined) break;
    if (!header.startsWith('@')) {
      throw new Error(`Malformed FASTQ at line ${i + 1}: expected a header starting with "@".`);
    }
    if (plus === undefined || !plus.startsWith('+')) {
      throw new Error(`Malformed FASTQ at line ${i + 3}: expected a "+" separator line.`);
    }
    if (seq.length !== qual.length) {
      throw new Error(
        `Malformed FASTQ near line ${i + 2}: sequence length (${seq.length}) does not match quality length (${qual.length}).`
      );
    }
    yield { seq, qual };
  }
}

/** Phred+33 (Illumina 1.8+ / Sanger) quality decoding. */
function phredScore(char) {
  return char.charCodeAt(0) - 33;
}

const QUALITY_ENCODING = 'Phred+33 (Sanger / Illumina 1.8+)';

function classify(value, warnAt, failAt, direction = 'above') {
  // direction 'above': higher is better (e.g. mean quality)
  // direction 'below': lower is better (e.g. N content, duplication)
  if (direction === 'above') {
    if (value >= warnAt) return 'PASS';
    if (value >= failAt) return 'WARN';
    return 'FAIL';
  }
  if (value <= warnAt) return 'PASS';
  if (value <= failAt) return 'WARN';
  return 'FAIL';
}

/**
 * Run QC over a FASTQ text blob and return a report matching the shape the
 * UI expects. gcRange lets the caller pass an organism-specific expected
 * range; defaults to a broad generic bacterial/human range.
 */
function runQC(text, { filename = 'input.fastq', gcRange = [35, 65] } = {}) {
  let totalReads = 0;
  let totalBases = 0;
  let gcBases = 0;
  let nBases = 0;
  let minLen = Infinity;
  let maxLen = 0;
  let qualSum = 0;
  let q30Bases = 0;

  // Per-position mean quality, capped at the first 150 cycles so long reads
  // don't blow up memory; this matches how FastQC caps its per-base plot.
  const MAX_POSITIONS = 150;
  const posQualSum = new Float64Array(MAX_POSITIONS);
  const posQualCount = new Uint32Array(MAX_POSITIONS);

  // Exact-sequence duplication estimate over a capped sample, same
  // trade-off FastQC makes to keep memory bounded on large files.
  const DEDUP_SAMPLE_CAP = 200000;
  const seen = new Map();
  let sampledForDup = 0;

  for (const { seq, qual } of parseFastqRecords(text)) {
    totalReads += 1;
    const len = seq.length;
    totalBases += len;
    if (len < minLen) minLen = len;
    if (len > maxLen) maxLen = len;

    for (let i = 0; i < len; i++) {
      const base = seq[i];
      if (base === 'G' || base === 'C' || base === 'g' || base === 'c') gcBases += 1;
      else if (base === 'N' || base === 'n') nBases += 1;

      const q = phredScore(qual[i]);
      qualSum += q;
      if (q >= 30) q30Bases += 1;
      if (i < MAX_POSITIONS) {
        posQualSum[i] += q;
        posQualCount[i] += 1;
      }
    }

    if (sampledForDup < DEDUP_SAMPLE_CAP) {
      seen.set(seq, (seen.get(seq) || 0) + 1);
      sampledForDup += 1;
    }
  }

  if (totalReads === 0) {
    throw new Error('No FASTQ records found. Check that the file is a valid, non-empty FASTQ.');
  }
  if (minLen === Infinity) minLen = 0;

  const meanLen = totalBases / totalReads;
  const gcContent = totalBases > 0 ? (gcBases / totalBases) * 100 : 0;
  const nContent = totalBases > 0 ? (nBases / totalBases) * 100 : 0;
  const meanQuality = totalBases > 0 ? qualSum / totalBases : 0;
  const pctQ30 = totalBases > 0 ? (q30Bases / totalBases) * 100 : 0;

  let duplicated = 0;
  for (const count of seen.values()) {
    if (count > 1) duplicated += count;
  }
  const duplicationRate = sampledForDup > 0 ? (duplicated / sampledForDup) * 100 : 0;

  const perBaseQuality = [];
  const positions = Math.min(maxLen, MAX_POSITIONS);
  for (let i = 0; i < positions; i++) {
    if (posQualCount[i] > 0) {
      perBaseQuality.push({ position: i + 1, meanQuality: posQualSum[i] / posQualCount[i] });
    }
  }

  const overrepresented = [...seen.entries()]
    .filter(([, count]) => count / sampledForDup >= 0.001 && count >= 5)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)
    .map(([seq, count]) => ({
      sequence: seq.length > 60 ? seq.slice(0, 60) + '\u2026' : seq,
      count,
      pct: (count / sampledForDup) * 100
    }));

  const [gcLow, gcHigh] = gcRange;
  const gcStatus = gcContent >= gcLow && gcContent <= gcHigh
    ? 'PASS'
    : (gcContent >= gcLow - 5 && gcContent <= gcHigh + 5 ? 'WARN' : 'FAIL');

  const metrics = [
    {
      key: 'totalReads', label: 'Total reads', value: totalReads.toLocaleString(),
      status: 'PASS'
    },
    {
      key: 'totalBases', label: 'Total bases', value: totalBases.toLocaleString(),
      status: 'PASS'
    },
    {
      key: 'readLength', label: 'Read length (min / mean / max)',
      value: `${minLen} / ${meanLen.toFixed(1)} / ${maxLen}`,
      status: minLen === maxLen ? 'PASS' : (minLen > 0 ? 'PASS' : 'WARN')
    },
    {
      key: 'gcContent', label: 'GC content', value: `${gcContent.toFixed(1)}%`,
      status: gcStatus
    },
    {
      key: 'meanQuality', label: 'Mean base quality (Phred)', value: meanQuality.toFixed(1),
      status: classify(meanQuality, 30, 20, 'above')
    },
    {
      key: 'pctQ30', label: 'Bases \u2265 Q30', value: `${pctQ30.toFixed(1)}%`,
      status: classify(pctQ30, 80, 50, 'above')
    },
    {
      key: 'nContent', label: 'N content', value: `${nContent.toFixed(2)}%`,
      status: classify(nContent, 1, 5, 'below')
    },
    {
      key: 'duplication', label: `Duplication (sampled, n=${sampledForDup.toLocaleString()})`,
      value: `${duplicationRate.toFixed(1)}%`,
      status: classify(duplicationRate, 20, 50, 'below')
    }
  ];

  const statuses = metrics.map((m) => m.status);
  const overall = statuses.includes('FAIL') ? 'FAIL' : statuses.includes('WARN') ? 'WARN' : 'PASS';

  return {
    filename,
    encoding: QUALITY_ENCODING,
    overall,
    metrics,
    perBaseQuality,
    overrepresented,
    generatedAt: new Date().toISOString()
  };
}

/**
 * Entry point used by the UI: takes a File, handles gzip transparently,
 * and returns a QC report.
 */
async function analyzeFastqFile(file, opts = {}) {
  const buf = await file.arrayBuffer();
  const bytes = new Uint8Array(buf.slice(0, 2));
  let text;
  if (isGzipped(bytes) || file.name.endsWith('.gz')) {
    const decompressed = await decompressGzip(buf);
    text = new TextDecoder('utf-8').decode(decompressed);
  } else {
    text = new TextDecoder('utf-8').decode(buf);
  }
  return runQC(text, { filename: file.name, ...opts });
}

export { analyzeFastqFile, runQC, parseFastqRecords, isGzipped };

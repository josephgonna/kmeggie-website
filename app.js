import { analyzeFastqFile } from './engine/qc.js';

const state = {
  status: 'idle', // idle | processing | results | error
  report: null,
  error: null
};

function render(root) {
  root.innerHTML = '';
  root.appendChild(header());

  if (state.status === 'idle') root.appendChild(idleView());
  else if (state.status === 'processing') root.appendChild(processingView());
  else if (state.status === 'error') root.appendChild(errorView());
  else if (state.status === 'results') root.appendChild(resultsView());

  root.appendChild(footer());
  wireEvents(root);
}

function el(tag, attrs = {}, children = []) {
  const node = document.createElement(tag);
  for (const [key, val] of Object.entries(attrs)) {
    if (key === 'class') node.className = val;
    else if (key === 'html') node.innerHTML = val;
    else node.setAttribute(key, val);
  }
  for (const child of [].concat(children)) {
    if (child) node.appendChild(typeof child === 'string' ? document.createTextNode(child) : child);
  }
  return node;
}

function header() {
  return el('div', { class: 'header' }, [
    el('div', { class: 'brand' }, [
      el('div', {
        class: 'brand-mark', html: `
        <svg viewBox="0 0 64 64" width="22" height="22">
          <polygon points="32,3 58,17.5 58,46.5 32,61 6,46.5 6,17.5" fill="#0F3D3E"/>
          <path d="M22 14 C22 24, 42 24, 42 34 C42 44, 22 44, 22 50" fill="none" stroke="#4FD1C5" stroke-width="2.4" stroke-linecap="round"/>
          <path d="M42 14 C42 24, 22 24, 22 34 C22 44, 42 44, 42 50" fill="none" stroke="#4FD1C5" stroke-width="2.4" stroke-linecap="round" opacity="0.55"/>
        </svg>`
      }),
      el('div', { class: 'brand-name' }, ['Kmeggie', el('span', { class: 'plus' }, '+')])
    ]),
    el('div', { class: 'header-sub' }, 'FASTQ QC \u2014 runs locally in your browser')
  ]);
}

function idleView() {
  const wrap = el('div');
  wrap.appendChild(el('div', { class: 'intro' }, [
    el('h1', {}, 'Check a FASTQ file before it goes into the pipeline'),
    el('p', {}, 'Drop in a .fastq, .fq, or gzipped file. Kmeggie+ checks read quality, GC content, and duplication against standard thresholds \u2014 nothing leaves this browser tab.')
  ]));
  wrap.appendChild(el('div', { class: 'dropzone', id: 'dropzone', tabindex: '0' }, [
    el('div', {
      class: 'dropzone-icon', html: `
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
        <path d="M12 3v12m0-12l-4 4m4-4l4 4M5 17v2a2 2 0 002 2h10a2 2 0 002-2v-2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>`
    }),
    el('div', { class: 'dropzone-title' }, 'Drop a FASTQ file here, or click to browse'),
    el('div', { class: 'dropzone-sub' }, '.fastq \u00b7 .fq \u00b7 .fastq.gz \u00b7 .fq.gz'),
    el('input', { type: 'file', id: 'file-input', accept: '.fastq,.fq,.fastq.gz,.fq.gz,.gz' })
  ]));
  return wrap;
}

function processingView() {
  return el('div', { class: 'processing' }, [
    el('div', { class: 'spinner' }),
    el('div', { class: 'processing-label' }, `Parsing and scoring ${state.filename || 'file'}\u2026`)
  ]);
}

function errorView() {
  const panel = el('div', { class: 'error-panel' }, [
    el('div', {}, [
      el('strong', {}, 'Could not process this file'),
      el('p', {}, state.error || 'Unknown error.'),
      el('button', { id: 'retry-btn' }, 'Try another file')
    ])
  ]);
  return panel;
}

function statusBadge(status) {
  return el('span', { class: `badge badge-${status}` }, status);
}

function metricsTable(report) {
  const rows = report.metrics.map((m) =>
    el('tr', {}, [
      el('td', { class: 'metric-name' }, m.label),
      el('td', { class: 'metric-value' }, m.value),
      el('td', {}, statusBadge(m.status))
    ])
  );
  return el('table', { class: 'metrics' }, [
    el('thead', {}, el('tr', {}, [
      el('th', {}, 'Metric'), el('th', {}, 'Value'), el('th', {}, 'Status')
    ])),
    el('tbody', {}, rows)
  ]);
}

function perBaseChart(report) {
  const points = report.perBaseQuality;
  if (!points.length) return el('div', { class: 'empty-note' }, 'Not enough sequence length to plot per-base quality.');

  const w = 960, h = 220, padL = 34, padR = 12, padT = 12, padB = 24;
  const maxQ = Math.max(41, Math.ceil(Math.max(...points.map((p) => p.meanQuality)) + 2));
  const xFor = (i) => padL + (i / (points.length - 1 || 1)) * (w - padL - padR);
  const yFor = (q) => padT + (1 - q / maxQ) * (h - padT - padB);

  const bandColor = (q) => (q >= 30 ? 'var(--pass)' : q >= 20 ? 'var(--warn)' : 'var(--fail)');

  let path = '';
  points.forEach((p, i) => {
    const x = xFor(i).toFixed(1);
    const y = yFor(p.meanQuality).toFixed(1);
    path += (i === 0 ? 'M' : 'L') + x + ',' + y + ' ';
  });

  const dots = points
    .filter((_, i) => i % Math.max(1, Math.floor(points.length / 60)) === 0)
    .map((p) => {
      const i = points.indexOf(p);
      return `<circle cx="${xFor(i).toFixed(1)}" cy="${yFor(p.meanQuality).toFixed(1)}" r="2" fill="${bandColor(p.meanQuality)}" />`;
    })
    .join('');

  const gridLines = [40, 30, 20, 10, 0]
    .filter((q) => q <= maxQ)
    .map((q) => {
      const y = yFor(q).toFixed(1);
      return `<line x1="${padL}" y1="${y}" x2="${w - padR}" y2="${y}" stroke="var(--border-soft)" stroke-width="1"/>
              <text x="${padL - 8}" y="${y}" fill="var(--text-faint)" font-size="10" font-family="var(--mono)" text-anchor="end" dominant-baseline="middle">${q}</text>`;
    })
    .join('');

  const xLabelEvery = Math.max(1, Math.round(points.length / 8));
  const xLabels = points
    .filter((p, i) => i % xLabelEvery === 0)
    .map((p) => {
      const i = points.indexOf(p);
      return `<text x="${xFor(i).toFixed(1)}" y="${h - 6}" fill="var(--text-faint)" font-size="10" font-family="var(--mono)" text-anchor="middle">${p.position}</text>`;
    })
    .join('');

  const svg = `
    <svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="xMidYMid meet">
      ${gridLines}
      <path d="${path}" fill="none" stroke="var(--teal)" stroke-width="1.5" />
      ${dots}
      ${xLabels}
    </svg>`;

  const wrap = el('div', { class: 'chart-wrap' });
  wrap.innerHTML = svg;
  wrap.appendChild(el('div', { class: 'chart-legend' }, [
    el('span', { class: 'legend-pass' }, '\u2265 Q30'),
    el('span', { class: 'legend-warn' }, 'Q20\u2013Q29'),
    el('span', { class: 'legend-fail' }, '< Q20')
  ]));
  return wrap;
}

function overrepresentedPanel(report) {
  if (!report.overrepresented.length) {
    return el('div', { class: 'panel' }, [
      el('div', { class: 'panel-title' }, 'Overrepresented sequences'),
      el('div', { class: 'empty-note' }, 'None found above the 0.1% threshold in the sampled reads.')
    ]);
  }
  const rows = report.overrepresented.map((o) =>
    el('tr', {}, [
      el('td', { class: 'seq-mono' }, o.sequence),
      el('td', { class: 'metric-value' }, o.count.toLocaleString()),
      el('td', { class: 'metric-value' }, `${o.pct.toFixed(2)}%`)
    ])
  );
  return el('div', { class: 'panel' }, [
    el('div', { class: 'panel-title' }, 'Overrepresented sequences'),
    el('table', { class: 'metrics' }, [
      el('thead', {}, el('tr', {}, [
        el('th', {}, 'Sequence'), el('th', {}, 'Count'), el('th', {}, '% of sample')
      ])),
      el('tbody', {}, rows)
    ])
  ]);
}

function resultsView() {
  const report = state.report;
  const wrap = el('div', { class: 'results' });

  wrap.appendChild(el('div', { class: 'result-header' }, [
    el('div', {}, [
      el('div', { class: 'result-filename' }, report.filename),
      el('div', { class: 'result-meta' }, `${report.encoding} \u00b7 generated ${new Date(report.generatedAt).toLocaleTimeString()}`)
    ]),
    statusBadge(report.overall)
  ]));

  wrap.appendChild(el('div', { class: 'panel' }, [
    el('div', { class: 'panel-title' }, 'Metrics'),
    metricsTable(report)
  ]));

  wrap.appendChild(el('div', { class: 'panel' }, [
    el('div', { class: 'panel-title' }, 'Per-base quality (first ' + report.perBaseQuality.length + ' cycles)'),
    perBaseChart(report)
  ]));

  wrap.appendChild(overrepresentedPanel(report));

  wrap.appendChild(el('div', { class: 'actions' }, [
    el('button', { class: 'primary', id: 'download-json' }, 'Download report (JSON)'),
    el('button', { id: 'new-file-btn' }, 'Check another file')
  ]));

  return wrap;
}

function footer() {
  return el('div', { class: 'footer' }, [
    el('span', {}, 'Kmeggie+ \u00b7 Veritas AI'),
    el('span', {}, 'Processing happens on-device \u2014 files are never uploaded')
  ]);
}

function downloadJSON(report) {
  const blob = new Blob([JSON.stringify(report, null, 2)], { type: 'application/json' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = report.filename.replace(/\.(fastq|fq)(\.gz)?$/i, '') + '.qc.json';
  a.click();
  URL.revokeObjectURL(url);
}

async function handleFile(root, file) {
  state.status = 'processing';
  state.filename = file.name;
  render(root);
  try {
    const report = await analyzeFastqFile(file);
    state.report = report;
    state.status = 'results';
  } catch (err) {
    state.error = err.message || String(err);
    state.status = 'error';
  }
  render(root);
}

function wireEvents(root) {
  const dropzone = root.querySelector('#dropzone');
  const input = root.querySelector('#file-input');

  if (dropzone && input) {
    dropzone.addEventListener('click', () => input.click());
    dropzone.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); input.click(); }
    });
    input.addEventListener('change', () => {
      if (input.files[0]) handleFile(root, input.files[0]);
    });
    ['dragenter', 'dragover'].forEach((evt) =>
      dropzone.addEventListener(evt, (e) => { e.preventDefault(); dropzone.classList.add('drag-active'); })
    );
    ['dragleave', 'drop'].forEach((evt) =>
      dropzone.addEventListener(evt, (e) => { e.preventDefault(); dropzone.classList.remove('drag-active'); })
    );
    dropzone.addEventListener('drop', (e) => {
      const file = e.dataTransfer.files[0];
      if (file) handleFile(root, file);
    });
  }

  const retryBtn = root.querySelector('#retry-btn');
  if (retryBtn) retryBtn.addEventListener('click', () => { state.status = 'idle'; state.error = null; render(root); });

  const newFileBtn = root.querySelector('#new-file-btn');
  if (newFileBtn) newFileBtn.addEventListener('click', () => { state.status = 'idle'; state.report = null; render(root); });

  const downloadBtn = root.querySelector('#download-json');
  if (downloadBtn) downloadBtn.addEventListener('click', () => downloadJSON(state.report));
}

export function mountApp(root) {
  render(root);
}

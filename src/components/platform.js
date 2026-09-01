export function Platform() {
  return `
    <section class="platform" id="platform">

      <div class="container">

        <span class="section-tag">THE PLATFORM</span>

        <h2>One Platform. Every Genomics Workflow.</h2>

        <p class="section-sub">
          From raw sequencing data to clinical-grade reports, Kmeggie+
          brings validation, QC, and AI analysis into a single pipeline.
        </p>

        <div class="platform-layout">

          <div class="module-list">

            <div class="module-item active" data-module="0">
              <div class="icon">🧬</div>
              <h3>Clinical Genomics</h3>
              <p>Variant calling and clinical interpretation with
                 built-in QC checkpoints at every stage.</p>
            </div>

            <div class="module-item" data-module="1">
              <div class="icon">🌍</div>
              <h3>Population Genomics</h3>
              <p>Track variant frequencies and outbreak signals
                 across regional and national sample sets.</p>
            </div>

            <div class="module-item" data-module="2">
              <div class="icon">🤝</div>
              <h3>Research Collaboration</h3>
              <p>Share pipelines and datasets securely across
                 labs, universities, and public health bodies.</p>
            </div>

            <div class="module-item" data-module="3">
              <div class="icon">⚙️</div>
              <h3>AI Analytics</h3>
              <p>Automated FASTQ validation and QC reporting
                 powered by the Kmeggie+ pipeline engine.</p>
            </div>

            <div class="module-item" data-module="4">
              <div class="icon">🧫</div>
              <h3>Biobank Management</h3>
              <p>Track sample lineage, storage, and chain of
                 custody from collection to sequencing.</p>
            </div>

            <div class="module-item" data-module="5">
              <div class="icon">🖥️</div>
              <h3>Laboratory Operations</h3>
              <p>Orchestrate pipeline runs and monitor lab
                 throughput from a single command center.</p>
            </div>

          </div>

          <div class="platform-preview">

            <div class="preview-card">

              <div class="preview-header">

                <div class="preview-dots">
                  <span></span><span></span><span></span>
                </div>

                <span class="preview-label" id="preview-label">Clinical Genomics</span>

              </div>

              <div class="preview-body" id="preview-body">

                <div class="preview-row">
                  <span>Sample ID</span>
                  <strong>KM-2026-0417</strong>
                </div>

                <div class="preview-row">
                  <span>Read Quality</span>
                  <strong class="ok">Passed QC</strong>
                </div>

                <div class="preview-row">
                  <span>Variants Detected</span>
                  <strong>142</strong>
                </div>

                <div class="preview-row">
                  <span>Pathogenic Flags</span>
                  <strong class="warn">3</strong>
                </div>

                <div class="preview-bar">
                  <div class="preview-bar-fill" style="width:82%"></div>
                </div>

                <span class="preview-caption">Clinical report generation — 82% complete</span>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  `;
}

export const platformModules = [
  {
    label: "Clinical Genomics",
    rows: [
      ["Sample ID", "KM-2026-0417"],
      ["Read Quality", "Passed QC", "ok"],
      ["Variants Detected", "142"],
      ["Pathogenic Flags", "3", "warn"]
    ],
    progress: 82,
    caption: "Clinical report generation — 82% complete"
  },
  {
    label: "Population Genomics",
    rows: [
      ["Region", "Nairobi County"],
      ["Samples Aggregated", "4,210"],
      ["Novel Variants", "58"],
      ["Outbreak Signal", "None detected", "ok"]
    ],
    progress: 64,
    caption: "Cohort analysis — 64% complete"
  },
  {
    label: "Research Collaboration",
    rows: [
      ["Active Projects", "6"],
      ["Shared Datasets", "19"],
      ["Partner Labs", "4"],
      ["Access Level", "Restricted", "warn"]
    ],
    progress: 45,
    caption: "Dataset sync in progress — 45%"
  },
  {
    label: "AI Analytics",
    rows: [
      ["FASTQ Files Queued", "12"],
      ["Avg. Read Length", "148 bp"],
      ["QC Pass Rate", "97.2%", "ok"],
      ["Pipeline Status", "Running"]
    ],
    progress: 91,
    caption: "Validation pipeline — 91% complete"
  },
  {
    label: "Biobank Management",
    rows: [
      ["Samples Stored", "18,204"],
      ["Storage Temp", "-80°C", "ok"],
      ["Chain of Custody", "Verified", "ok"],
      ["Pending Intake", "27"]
    ],
    progress: 100,
    caption: "Inventory sync complete"
  },
  {
    label: "Laboratory Operations",
    rows: [
      ["Active Runs", "5"],
      ["Instruments Online", "8/8", "ok"],
      ["Avg. Turnaround", "36 hrs"],
      ["Alerts", "1", "warn"]
    ],
    progress: 70,
    caption: "Daily throughput — 70% of target"
  }
];
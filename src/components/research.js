export function Research() {
  return `
    <section class="research" id="research">

      <div class="container">

        <span class="section-tag">RESEARCH</span>

        <h2>Built On Real Lab Workflows</h2>

        <p class="section-sub">
          Kmeggie+ started as an internal tool for validating sequencing
          data before it hit downstream pipelines. Every feature traces
          back to a real bottleneck a lab ran into.
        </p>

        <div class="research-grid">

          <div class="research-card">
            <h3>FASTQ Integrity at Scale</h3>
            <p>
              Notes on the structural and encoding failure modes we see
              most often across sequencing runs, and how early detection
              changes downstream cost.
            </p>
          </div>

          <div class="research-card">
            <h3>Standardizing QC Metrics</h3>
            <p>
              Why hand-written QC notes don't scale past a single tech,
              and what a consistent reporting format buys a lab over time.
            </p>
          </div>

          <div class="research-card">
            <h3>Pipeline Orchestration Without the Overhead</h3>
            <p>
              How a CLI-first design keeps Kmeggie+ usable on modest lab
              hardware, without requiring a GPU or cloud dependency.
            </p>
          </div>

        </div>

      </div>

    </section>
  `;
}
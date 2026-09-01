export function ResearchDetail() {
  return `
    <section class="page-hero">
      <div class="container">
        <span class="section-tag">RESEARCH</span>
        <h1>Built On Real Lab Workflows</h1>
        <p>
          Kmeggie+ started as an internal tool for validating sequencing
          data before it hit downstream pipelines. Every feature traces
          back to a real bottleneck a lab ran into.
        </p>
      </div>
    </section>

    <section class="platform-detail">
      <div class="container">

        <div class="detail-block">
          <span class="detail-tag">FIELD NOTES</span>
          <h2>FASTQ Integrity at Scale</h2>
          <p>
            The structural and encoding failure modes we see most often
            across sequencing runs, and how early detection changes the
            cost of fixing them downstream.
          </p>
        </div>

        <div class="detail-block">
          <span class="detail-tag">FIELD NOTES</span>
          <h2>Standardizing QC Metrics</h2>
          <p>
            Why hand-written QC notes don't scale past a single tech, and
            what a consistent reporting format buys a lab over time —
            especially once more than one person touches the data.
          </p>
        </div>

        <div class="detail-block">
          <span class="detail-tag">FIELD NOTES</span>
          <h2>Pipeline Orchestration Without the Overhead</h2>
          <p>
            How a CLI-first design keeps Kmeggie+ usable on modest lab
            hardware, without requiring a GPU, a heavyweight GUI, or a
            cloud dependency.
          </p>
        </div>

        <div class="detail-block roadmap">
          <span class="detail-tag">IN PROGRESS</span>
          <h2>Benchmarking Against Manual Review</h2>
          <p>
            We're running comparisons between Kmeggie+ automated
            validation and traditional manual QC review to quantify time
            saved and error rates caught earlier in the pipeline.
          </p>
        </div>

      </div>
    </section>

    <section class="platform-cta">
      <div class="container">
        <h2>Curious how this applies to your data?</h2>
        <div class="hero-buttons">
          <a href="mailto:hello@kmeggie.com?subject=Demo%20Request" class="primary" style="text-decoration:none;display:inline-flex;align-items:center;">Request Demo</a>
          <a href="/" class="secondary" style="text-decoration:none;display:inline-flex;align-items:center;">Back to Home</a>
        </div>
      </div>
    </section>
  `;
}

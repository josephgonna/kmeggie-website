export function PlatformDetail() {
  return `
    <section class="page-hero">

      <div class="container">

        <span class="section-tag">THE PLATFORM</span>

        <h1>Everything Kmeggie+ Handles, In Detail</h1>

        <p>
          A closer look at how validation, QC reporting, and pipeline
          orchestration work together — and where the platform is headed.
        </p>

      </div>

    </section>

    <section class="platform-detail">

      <div class="container">

        <div class="detail-block">

          <span class="detail-tag">AVAILABLE TODAY</span>

          <h2>FASTQ Validation</h2>

          <p>
            Kmeggie+ runs structural and content-level checks on raw FASTQ
            files before they enter any downstream pipeline — catching
            malformed reads, truncated files, and encoding issues early,
            when they're cheapest to fix.
          </p>

        </div>

        <div class="detail-block">

          <span class="detail-tag">AVAILABLE TODAY</span>

          <h2>Automated QC Reporting</h2>

          <p>
            Every validation run produces a standardized quality-control
            report — consistent formatting, consistent metrics, every
            time. No more comparing hand-written notes between techs.
          </p>

        </div>

        <div class="detail-block">

          <span class="detail-tag">AVAILABLE TODAY</span>

          <h2>CLI-First Pipeline Orchestration</h2>

          <p>
            Chain validation and QC steps into a single automated
            command-line workflow. Built to run on modest lab hardware —
            no GPU, no heavyweight GUI, no cloud dependency required.
          </p>

        </div>

        <div class="detail-block roadmap">

          <span class="detail-tag">ROADMAP</span>

          <h2>AI-Assisted Variant Triage</h2>

          <p>
            Planned capability to help researchers prioritize which
            variants deserve a closer look first, using pattern
            recognition trained on lab-specific data.
          </p>

        </div>

        <div class="detail-block roadmap">

          <span class="detail-tag">ROADMAP</span>

          <h2>Multi-Lab Dashboard</h2>

          <p>
            A planned web dashboard for labs running Kmeggie+ across
            multiple sites, giving a consolidated view of pipeline
            status and QC trends over time.
          </p>

        </div>

      </div>

    </section>

    <section class="platform-cta">

      <div class="container">

        <h2>Want to see how it fits your lab's workflow?</h2>

        <div class="hero-buttons">
          <a href="mailto:hello@kmeggie.com?subject=Demo%20Request" class="primary" style="text-decoration:none;display:inline-flex;align-items:center;">Request Demo</a>
          <a href="/" class="secondary" style="text-decoration:none;display:inline-flex;align-items:center;">Back to Home</a>
        </div>

      </div>

    </section>
  `;
}

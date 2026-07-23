export function BlogDetail() {
  return `
    <section class="page-hero">
      <div class="container">
        <span class="section-tag">BLOG</span>
        <h1>Notes From The Lab Bench</h1>
        <p>
          Thoughts on sequencing data quality, pipeline design, and
          what we're building at Kmeggie+.
        </p>
      </div>
    </section>

    <section class="blog-section">
      <div class="container">

        <div class="blog-grid">

          <a href="#" class="blog-card">
            <span class="detail-tag">COMING SOON</span>
            <h2>What "Good QC" Actually Means</h2>
            <p>
              A closer look at what separates a useful QC report from
              one nobody reads.
            </p>
          </a>

          <a href="#" class="blog-card">
            <span class="detail-tag">COMING SOON</span>
            <h2>The Real Cost Of Bad FASTQ Files</h2>
            <p>
              Why catching malformed reads early saves far more time
              than catching them downstream.
            </p>
          </a>

          <a href="#" class="blog-card">
            <span class="detail-tag">COMING SOON</span>
            <h2>Designing For CLI-First Labs</h2>
            <p>
              How we think about building tools for labs without
              dedicated DevOps support.
            </p>
          </a>

        </div>

        <p class="blog-note">
          We're just getting the blog started — check back soon for
          the first posts.
        </p>

      </div>
    </section>

    <section class="platform-cta">
      <div class="container">
        <h2>Want updates when we publish?</h2>
        <div class="hero-buttons">
          <a href="mailto:hello@kmeggie.com?subject=Demo%20Request" class="primary" style="text-decoration:none;display:inline-flex;align-items:center;">Request Demo</a>
          <a href="/" class="secondary" style="text-decoration:none;display:inline-flex;align-items:center;">Back to Home</a>
        </div>
      </div>
    </section>
  `;
}

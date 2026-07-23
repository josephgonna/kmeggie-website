import companyLab from "../assets/company-lab.jpg";

export function CompanyDetail() {
  return `
    <section class="page-hero">
      <div class="container">
        <span class="section-tag">COMPANY</span>
        <h1>Why We Built Kmeggie+</h1>
        <p>
          We got tired of watching good sequencing data get slowed down
          by bad tooling — so we built the tool we wished we had.
        </p>
      </div>
    </section>

    <section class="detail-image">
      <div class="container">
        <img src="${companyLab}" alt="Scientists working together in a genomics lab" class="detail-photo" />
      </div>
    </section>

    <section class="platform-detail">
      <div class="container">
        <div class="detail-block">
          <span class="detail-tag category">PHILOSOPHY</span>
          <h2>Lab-First, Not Cloud-First</h2>
          <p>
            Most QC tooling assumes you have cloud infrastructure and a
            dedicated DevOps person. We built Kmeggie+ to run on the
            hardware labs already have.
          </p>
        </div>
        <div class="detail-block">
          <span class="detail-tag category">RELIABILITY</span>
          <h2>Consistency Over Cleverness</h2>
          <p>
            A validation tool is only useful if it produces the same
            answer every time. We optimize for reliable, repeatable
            results over flashy features.
          </p>
        </div>
        <div class="detail-block">
          <span class="detail-tag category">PROCESS</span>
          <h2>Built With Labs, Not Just For Them</h2>
          <p>
            Every feature in Kmeggie+ started as feedback from a real
            lab hitting a real bottleneck — not a feature we guessed
            people might want.
          </p>
        </div>
      </div>
    </section>

    <section class="platform-cta">
      <div class="container">
        <h2>Want to see it in action?</h2>
        <div class="hero-buttons">
          <a href="mailto:hello@kmeggie.com?subject=Demo%20Request" class="primary" style="text-decoration:none;display:inline-flex;align-items:center;">Request Demo</a>
          <a href="/" class="secondary" style="text-decoration:none;display:inline-flex;align-items:center;">Back to Home</a>
        </div>
      </div>
    </section>
  `;
}
import aboutLab from "../assets/about-lab.jpg";

export function AboutDetail() {
  return `
    <section class="page-hero">
      <div class="container">
        <span class="section-tag">ABOUT</span>
        <h1>The Story Behind Kmeggie+</h1>
        <p>
          A small team focused on one problem: making sequencing data
          validation something labs can trust without thinking about.
        </p>
      </div>
    </section>

    <section class="detail-image">
      <div class="container">
        <img src="${aboutLab}" alt="Scientist working in a genomics lab" class="detail-photo" />
      </div>
    </section>

    <section class="platform-detail">
      <div class="container">

        <div class="detail-block">
          <span class="detail-tag">OUR MISSION</span>
          <h2>Make QC A Non-Event</h2>
          <p>
            Good validation should be invisible when it's working and
            impossible to miss when something's wrong. That's the bar
            we hold Kmeggie+ to.
          </p>
        </div>

        <div class="detail-block">
          <span class="detail-tag">HOW WE WORK</span>
          <h2>Small Team, Direct Feedback Loop</h2>
          <p>
            We stay close to the labs using Kmeggie+ day to day. When
            something doesn't work, we hear about it fast — and fix it
            fast.
          </p>
        </div>

        <div class="detail-block roadmap">
          <span class="detail-tag">WHERE WE'RE HEADED</span>
          <h2>Growing With The Labs We Serve</h2>
          <p>
            As more labs run Kmeggie+ across multiple sites, we're
            building the tooling to support that scale — without losing
            the simplicity that got us here.
          </p>
        </div>

      </div>
    </section>

    <section class="platform-cta">
      <div class="container">
        <h2>Want to work with us or learn more?</h2>
        <div class="hero-buttons">
          <a href="mailto:hello@kmeggie.com?subject=Demo%20Request" class="primary" style="text-decoration:none;display:inline-flex;align-items:center;">Request Demo</a>
          <a href="/" class="secondary" style="text-decoration:none;display:inline-flex;align-items:center;">Back to Home</a>
        </div>
      </div>
    </section>
  `;
}
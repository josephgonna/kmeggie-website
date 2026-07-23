export function PricingDetail() {
  return `
    <section class="page-hero">
      <div class="container">
        <span class="section-tag">PRICING</span>
        <h1>Simple Pricing For Every Lab Size</h1>
        <p>
          No per-sample fees, no surprise overages. Pick the tier that
          matches how your lab runs today.
        </p>
      </div>
    </section>

    <section class="pricing-section">
      <div class="container">

        <div class="pricing-grid">

          <div class="pricing-card">
            <span class="detail-tag">STARTER</span>
            <h2>For Single-Site Labs</h2>
            <p class="pricing-desc">
              Core FASTQ validation and QC reporting for one lab
              running one pipeline.
            </p>
            <ul class="pricing-features">
              <li>FASTQ validation</li>
              <li>Automated QC reports</li>
              <li>CLI pipeline orchestration</li>
              <li>Email support</li>
            </ul>
            <a href="mailto:hello@kmeggie.com?subject=Demo%20Request" class="secondary" style="text-decoration:none;display:inline-flex;align-items:center;">Request Demo</a>
          </div>

          <div class="pricing-card featured">
            <span class="detail-tag">TEAM</span>
            <h2>For Growing Labs</h2>
            <p class="pricing-desc">
              Everything in Starter, plus support for multiple
              pipelines and priority onboarding.
            </p>
            <ul class="pricing-features">
              <li>Everything in Starter</li>
              <li>Multiple concurrent pipelines</li>
              <li>Priority support</li>
              <li>Onboarding assistance</li>
            </ul>
            <a href="mailto:hello@kmeggie.com?subject=Demo%20Request" class="primary" style="text-decoration:none;display:inline-flex;align-items:center;">Request Demo</a>
          </div>

          <div class="pricing-card">
            <span class="detail-tag">ENTERPRISE</span>
            <h2>For Multi-Site Operations</h2>
            <p class="pricing-desc">
              Consolidated QC standards and reporting across every
              site your lab network runs.
            </p>
            <ul class="pricing-features">
              <li>Everything in Team</li>
              <li>Multi-site dashboard (roadmap)</li>
              <li>Dedicated support contact</li>
              <li>Custom onboarding</li>
            </ul>
            <a href="mailto:hello@kmeggie.com?subject=Sales%20Inquiry" class="secondary" style="text-decoration:none;display:inline-flex;align-items:center;">Contact Sales</a>
          </div>

        </div>

        <p class="pricing-note">
          Exact pricing depends on lab size and pipeline volume — reach
          out and we'll put together a quote.
        </p>

      </div>
    </section>

    <section class="platform-cta">
      <div class="container">
        <h2>Not sure which tier fits?</h2>
        <div class="hero-buttons">
          <a href="mailto:hello@kmeggie.com?subject=Demo%20Request" class="primary" style="text-decoration:none;display:inline-flex;align-items:center;">Request Demo</a>
          <a href="/" class="secondary" style="text-decoration:none;display:inline-flex;align-items:center;">Back to Home</a>
        </div>
      </div>
    </section>
  `;
}

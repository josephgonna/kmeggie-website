export function ContactDetail() {
  return `
    <section class="page-hero">
      <div class="container">
        <span class="section-tag">CONTACT</span>
        <h1>Talk To The Team</h1>
        <p>
          Questions about the platform, pricing, or piloting Kmeggie+ in
          your lab — reach out and we'll get back to you.
        </p>
      </div>
    </section>

    <section class="contact">
      <div class="container">
        <div class="contact-box">
          <p>Email us directly at:</p>
          <a href="mailto:hello@kmeggie.com" class="contact-email">hello@kmeggie.com</a>
        </div>
      </div>
    </section>

    <section class="platform-cta">
      <div class="container">
        <h2>Prefer a live walkthrough?</h2>
        <div class="hero-buttons">
          <a href="mailto:hello@kmeggie.com?subject=Demo%20Request" class="primary" style="text-decoration:none;display:inline-flex;align-items:center;">Request Demo</a>
          <a href="/" class="secondary" style="text-decoration:none;display:inline-flex;align-items:center;">Back to Home</a>
        </div>
      </div>
    </section>
  `;
}

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
        <form id="contact-form" class="contact-box">
          <input type="text" id="contact-name" placeholder="Your name" required />
          <input type="email" id="contact-email" placeholder="Your email" required />
          <textarea id="contact-message" placeholder="Your message" required></textarea>
          <button type="submit" class="primary">Send Message</button>
          <p id="contact-status"></p>
        </form>

        <p>Or email us directly at:</p>
        <a href="mailto:hello@kmeggie.com" class="contact-email">hello@kmeggie.com</a>
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

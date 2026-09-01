export function Navbar() {
  return `
    <header class="navbar">
      <div class="container">
        <div class="logo">Kmeggie+</div>

        <nav>
          <a href="/">Home</a>
          <a href="/platform.html">Platform</a>
          <a href="/research.html">Research</a>
          <a href="/solutions.html">Solutions</a>
          <a href="/pricing.html">Pricing</a>
          <a href="/blog.html">Blog</a>
          <a href="/company.html">Company</a>
          <a href="/about.html">About</a>
          <a href="/contact.html">Contact</a>
        </nav>

        <a href="mailto:hello@kmeggie.com?subject=Demo%20Request" class="btn" style="text-decoration:none;display:inline-flex;align-items:center;">Request Demo</a>
      </div>
    </header>
  `;
}
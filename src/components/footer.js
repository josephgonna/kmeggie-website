export function Footer() {
  return `
    <footer class="footer">

      <div class="container">

        <div class="footer-top">

          <div class="footer-brand">

            <div class="footer-logo">
              <img src="/logos/kmeggie-logo.svg" alt="Kmeggie+">
            </div>

            <p>
              A CLI-first genomics toolkit for FASTQ validation, automated
              QC reporting, and pipeline orchestration — built for public
              health laboratories in Kenya and the wider African region.
            </p>

          </div>

          <div class="footer-links">

            <div>
              <h4>Platform</h4>
              <a href="#platform">Clinical Genomics</a>
              <a href="#platform">Population Genomics</a>
              <a href="#platform">AI Analytics</a>
              <a href="#platform">Laboratory Operations</a>
            </div>

            <div>
              <h4>Company</h4>
              <a href="#why">Why Kmeggie+</a>
              <a href="#solutions">Solutions</a>
              <a href="#security">Security</a>
              <a href="#workflow">How It Works</a>
            </div>

            <div>
              <h4>Contact</h4>
              <a href="mailto:hello@kmeggie.ai">hello@kmeggie.ai</a>
              <a href="#">Nairobi, Kenya</a>
              <a href="#">Veritas AI</a>
            </div>

          </div>

        </div>

        <div class="footer-bottom">

          <span>© 2026 Kmeggie+ by Veritas AI. All rights reserved.</span>

          <span>Genomic data, refined with Veritas.</span>

        </div>

      </div>

    </footer>
  `;
}
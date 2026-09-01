import heroLab from "../assets/hero-lab.jpg";

export function Hero() {
  return `
  <section class="hero">

    <div class="hero-background">

        <img
            src="${heroLab}"
            alt="Genomics Laboratory"
            class="hero-bg-image"
        />

        <div class="hero-overlay"></div>

    </div>

    <div class="container hero-grid">

        <div class="hero-content">

          <span class="eyebrow">
            GENOMIC QC, POWERED BY VERITAS AI
          </span>

          <h1>
            FASTQ Validation and Pipeline QC, With An AI Layer Built In
          </h1>

          <p>
            Kmeggie+ validates sequencing data and automates QC reporting
            for labs, hospitals, universities, and biotech organizations —
            with Veritas AI handling variant analysis and anomaly detection
            on top of every pipeline you run.
          </p>

          <div class="hero-buttons">

            <a href="mailto:hello@kmeggie.com?subject=Demo%20Request" class="primary" style="text-decoration:none;display:inline-flex;align-items:center;">
              Request Demo
            </a>

            <a href="/platform.html" class="secondary" style="text-decoration:none;display:inline-flex;align-items:center;">
              Explore Platform
            </a>

          </div>

        </div>

        <div class="hero-visual">

          <span class="preview-tag">PRODUCT PREVIEW</span>

          <div class="dashboard">

            <div class="dashboard-navbar">

              <div class="dashboard-logo">

                <div class="logo-circle">
                  K+
                </div>

                <div class="logo-info">

                  <strong>Kmeggie+</strong>

                  <small>Veritas AI</small>

                </div>

              </div>

              <div class="dashboard-search">

                🔍 Search Workspace

              </div>

              <div class="dashboard-user">

                <span class="live-dot"></span>

                Live

              </div>

            </div>

            <div class="dashboard-overview">

              <div class="overview-card">

                <span>Genome Samples</span>

                <strong>1.28M</strong>

                <small>+18.4%</small>

              </div>

              <div class="overview-card">

                <span>AI Models</span>

                <strong>12</strong>

                <small>Running</small>

              </div>

              <div class="overview-card">

                <span>Institutions</span>

                <strong>28</strong>

                <small>Connected</small>

              </div>

              <div class="overview-card">

                <span>Variants Analysed</span>

                <strong>96.4M</strong>

                <small>Today</small>

              </div>

            </div>

            <div class="ai-engine">

              <div>

                <span>AI Engine</span>

                <h3>Veritas AI</h3>

              </div>

              <div class="engine-status">

                <span class="pulse"></span>

                Processing 4 Research Projects

              </div>

            </div>

            <div class="dashboard-chart">

              <div class="chart-header">

                <div>

                  <small>Genome Analysis</small>

                  <h4>Sequencing Performance</h4>

                </div>

                <div class="chart-badge">

                  LIVE

                </div>

              </div>

              <div class="line-chart">

                <svg viewBox="0 0 700 220">

                  <defs>

                    <linearGradient id="chartGradient" x1="0" y1="0" x2="0" y2="1">

                      <stop offset="0%" stop-color="#4da3ff"/>

                      <stop offset="100%" stop-color="#1a4dff"/>

                    </linearGradient>

                  </defs>

                  <path

                    d="M0 180
                       C70 160 100 120 150 130
                       S250 70 320 95
                       S420 45 500 80
                       S610 35 700 55"

                    fill="none"
                    stroke="url(#chartGradient)"
                    stroke-width="6"
                    stroke-linecap="round"/>

                  <circle cx="700" cy="55" r="7" fill="#4da3ff"/>

                </svg>

              </div>

            </div>

            <div class="graph">

              <div style="height:28%"></div>
              <div style="height:35%"></div>
              <div style="height:46%"></div>
              <div style="height:60%"></div>
              <div style="height:72%"></div>
              <div style="height:84%"></div>
              <div style="height:95%"></div>
              <div style="height:88%"></div>
              <div style="height:80%"></div>
              <div style="height:90%"></div>
              <div style="height:100%"></div>
              <div style="height:92%"></div>

            </div>

            <div class="analysis-grid">

              <div class="analysis-card">

                <span>DNA Reads</span>

                <strong>4.6B</strong>

                <small>+12.4%</small>

              </div>

              <div class="analysis-card">

                <span>Variant Calls</span>

                <strong>28,451</strong>

                <small>98.9% Accuracy</small>

              </div>

              <div class="analysis-card">

                <span>Research Pipelines</span>

                <strong>42</strong>

                <small>Currently Running</small>

              </div>

            </div>

            <div class="research-feed">

              <h4>Latest Research Activity</h4>

              <div class="feed-row">

                <span>🧬 Whole Genome Sequencing</span>

                <small>2 min ago</small>

              </div>

              <div class="feed-row">

                <span>🧪 Variant Annotation Complete</span>

                <small>7 min ago</small>

              </div>

              <div class="feed-row">

                <span>🌍 African Population Dataset Synced</span>

                <small>11 min ago</small>

              </div>

            </div>

            <div class="pipeline">

              <h4>Sequencing Pipeline</h4>

              <div class="pipeline-row">

                <div class="pipeline-step complete">

                  <div class="circle"></div>

                  <span>Sample</span>

                </div>

                <div class="line"></div>

                <div class="pipeline-step complete">

                  <div class="circle"></div>

                  <span>Sequence</span>

                </div>

                <div class="line"></div>

                <div class="pipeline-step active">

                  <div class="circle"></div>

                  <span>AI Analysis</span>

                </div>

                <div class="line"></div>

                <div class="pipeline-step">

                  <div class="circle"></div>

                  <span>Clinical Report</span>

                </div>

              </div>

            </div>

            <div class="ai-summary">

              <div class="ring">

                99%

              </div>

              <div>

                <h4>AI Confidence</h4>

                <p>

                  Veritas AI is analysing genomic variants with enterprise-grade
                  machine learning confidence.

                </p>

              </div>

            </div>

            <div class="activity">

              <h4>Recent AI Activity</h4>

              <div class="activity-row">

                <span>🧬 Variant Classification</span>

                <strong>Completed</strong>

              </div>

              <div class="activity-row">

                <span>🧪 Genome Annotation</span>

                <strong>Running</strong>

              </div>

              <div class="activity-row">

                <span>📄 Clinical Report</span>

                <strong>Generated</strong>

              </div>

              <div class="activity-row">

                <span>🌍 Africa Variant Study</span>

                <strong>Syncing</strong>

              </div>

            </div>

          </div> <!-- dashboard -->

          <div class="floating-card top-card">

            <span>🧬 Active Genomes</span>

            <h3>1.28 Million</h3>

            <small>Across 28 Institutions</small>

          </div>

          <div class="floating-card bottom-card">

            <span>🤖 Veritas AI</span>

            <h3>99.4%</h3>

            <small>Prediction Accuracy</small>

          </div>

        </div> <!-- hero-visual -->

    </div> <!-- container -->

  </section>
  `;
}
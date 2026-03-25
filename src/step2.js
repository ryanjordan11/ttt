import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="site-shell">
    <div class="ambient ambient-left"></div>
    <div class="ambient ambient-right"></div>

    <header class="topbar">
      <p class="brand-mark">Timoteo Wellness</p>
      <p class="brand-note">Thoughtful guidance for a cleaner home</p>
    </header>

    <main class="funnel" aria-labelledby="step-2-title">
      <section class="step step-single">
        <div class="step-copy">
          <p class="eyebrow">Guide delivery</p>
          <h1 id="step-2-title">Your guide is ready to download.</h1>
          <p class="lead">
            Use this quick reference to spot hidden toxin categories, understand what to
            replace first, and choose simple upgrades that fit your routine.
          </p>
          <div class="guide-details">
            <p>Concise ingredient breakdowns for everyday products</p>
            <p>Room-by-room swap ideas that feel practical</p>
            <p>Clear next steps without overwhelm</p>
          </div>
        </div>

        <div class="card guide-card">
          <div class="guide-visual" aria-hidden="true">
            <span class="guide-chip">PDF Guide</span>
            <p>The Toxin-Free Home</p>
          </div>
          <p class="card-text">
            Placeholder download experience. Replace this with the final PDF link and cover
            artwork when ready.
          </p>
          <div class="guide-actions">
            <a class="button button-primary" href="/guide.pdf">Download the guide</a>
            <a class="button button-secondary" href="/step3.html">Start the quiz</a>
          </div>
          <p class="microcopy">Quiz opens after the download until automation is connected.</p>
        </div>
      </section>
    </main>

    <div class="progress-shell" aria-label="Progress">
      <div class="progress-track">
        <div class="progress-fill" style="width: 40%;"></div>
      </div>
      <p class="progress-label">Guide unlocked</p>
    </div>
  </div>
`

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
          <p class="eyebrow">Step 2 of 3</p>
          <h1 id="step-2-title">Your guide is on its way, and there is one principle to keep in mind.</h1>
          <p class="lead">
            A healthier home is not built through perfection. It is built through steady,
            better decisions that fit naturally into everyday life.
          </p>
          <div class="quote-block">
            <p>Start with one product. Replace it well. Then keep going with confidence.</p>
          </div>
        </div>

        <div class="card media-card">
          <div class="video-placeholder" aria-hidden="true">
            <div class="play-chip">2 min</div>
            <p>Video message placeholder</p>
          </div>
          <p class="card-text">
            This section is ready for Timoteo’s short welcome video. Until that is added,
            the page still communicates the core message clearly and keeps the user moving.
          </p>
          <a class="button button-primary" href="/step3.html">Continue to the final step</a>
        </div>
      </section>
    </main>

    <nav class="step-nav" aria-label="Progress">
      <a class="step-pill" href="/">01 Guide</a>
      <span class="step-pill step-pill-active" aria-current="step">02 Message</span>
      <span class="step-pill">03 Next step</span>
    </nav>
  </div>
`

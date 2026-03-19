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

    <main class="funnel" aria-labelledby="step-3-title">
      <section class="step step-single">
        <div class="step-copy">
          <p class="eyebrow">Step 3 of 3</p>
          <h1 id="step-3-title">Choose the next step that matches where you are right now.</h1>
          <p class="lead">
            Some people want direct guidance. Others want to start replacing products
            immediately. Both options should feel simple, warm, and easy to trust.
          </p>
        </div>

        <div class="choice-grid">
          <article class="card choice-card">
            <p class="card-kicker">Option 1</p>
            <h2>Need personal guidance?</h2>
            <p class="card-text">
              Book a short conversation for tailored direction on what to change first, what to
              ignore for now, and how to make progress without overwhelm.
            </p>
            <a class="button button-secondary" href="#booking-placeholder">Book a 15-minute call</a>
            <p class="microcopy">Booking integration will be connected once the final link is ready.</p>
          </article>

          <article class="card choice-card">
            <p class="card-kicker">Option 2</p>
            <h2>Ready to browse products?</h2>
            <p class="card-text">
              Explore a curated collection of cleaner, organic alternatives selected to help you
              make practical swaps with more confidence.
            </p>
            <a class="button button-primary" href="https://www.essanteorganics.com/LiveAlkalineAF" target="_blank" rel="noreferrer">
              Explore recommended products
            </a>
            <p class="microcopy">This can be updated later if the client wants a different storefront or tracking.</p>
          </article>
        </div>
      </section>
    </main>

    <nav class="step-nav" aria-label="Progress">
      <a class="step-pill" href="/">01 Guide</a>
      <a class="step-pill" href="/step2.html">02 Message</a>
      <span class="step-pill step-pill-active" aria-current="step">03 Next step</span>
    </nav>
  </div>
`

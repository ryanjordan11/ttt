import './style.css'

const app = document.querySelector('#app')

app.innerHTML = `
  <div class="site-shell">
    <div class="ambient ambient-left"></div>
    <div class="ambient ambient-right"></div>

    <header class="topbar">
      <p class="brand-mark">Timoteo Wellness</p>
      <p class="brand-note"></p>
    </header>

    <main class="funnel hero-funnel" aria-labelledby="step-1-title">
      <section class="step step-single hero-step">
        <div class="step-copy">
          <p class="eyebrow">Your guide is waiting</p>
          <h1 id="step-1-title">What you use every day may be adding more stress to your body than you realize.</h1>
          <p class="lead">
            This guide shows you where it’s coming from and what to change first, without overcomplicating your routine.
          </p>
          <div class="benefits" aria-label="Guide benefits">
            <p>Understand what’s actually showing up in your daily routine</p>
            <p>See what to replace first (without changing everything at once)</p>
            <p>Make simple changes that feel realistic and sustainable</p>
          </div>
        </div>

        <div class="card capture-card">
          <p class="card-kicker">Get the guide</p>
          <h2>Your Free Guide</h2>
          <p class="card-text">
            A simple breakdown of what may be affecting your body daily, where it shows up, and what to do first.
          </p>
          <form class="capture-form" action="/step2.html">
            <label class="sr-only" for="email">Email address</label>
            <input
              id="email"
              name="email"
              class="email-input"
              type="email"
              placeholder="Enter your best email address"
              autocomplete="email"
              required
            />
            <button type="submit" class="button button-primary">Get The Free Guide</button>
          </form>
          <a class="button button-secondary" href="/full-reset.html">View The Full Body Reset Page</a>
          <p class="microcopy">
            👉 Takes less than 2 minutes to go through.
          </p>
        </div>
      </section>
    </main>

    <div class="progress-shell" aria-label="Progress">
      <div class="progress-track">
        <div class="progress-fill" style="width: 20%;"></div>
      </div>
      <p class="progress-label">Getting started</p>
    </div>
  </div>
`

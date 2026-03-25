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

    <main class="funnel" aria-labelledby="step-1-title">
      <section class="step step-single">
        <div class="step-copy">
          <p class="eyebrow">Your guide is waiting</p>
          <h1 id="step-1-title">Create a healthier home with calm, informed product swaps.</h1>
          <p class="lead">
            Learn the five hidden toxin categories that quietly show up in everyday routines,
            and get a practical starting point for replacing them with better options.
          </p>
          <div class="benefits" aria-label="Guide benefits">
            <p>Simple explanations instead of fear-based advice</p>
            <p>Clear examples of what to replace first</p>
            <p>Designed for real families, budgets, and routines</p>
          </div>
        </div>

        <div class="card capture-card">
          <p class="card-kicker">Get the guide</p>
          <h2>The Toxin-Free Home</h2>
          <p class="card-text">
            A concise, well-structured starter guide covering common ingredients, where they
            show up, and cleaner alternatives to consider first.
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
            <button type="submit" class="button button-primary">Send Me the Free Guide</button>
          </form>
          <p class="microcopy">
            Email delivery will be connected later. For now, this moves to the next step.
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

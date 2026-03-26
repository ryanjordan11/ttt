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

    <main class="funnel" aria-labelledby="step-5-title">
      <section class="step step-single">
        <div class="step-copy">
          <p class="eyebrow">Final step</p>
          <h1 id="step-5-title">You made it here. Now let’s get connected.</h1>
          <p class="lead">
            Book a short call so we can clarify your best next step and keep your progress simple.
          </p>
          <div class="guide-details">
            <p>This is a focused 1:1 call to pinpoint what is sabotaging your health at home.</p>
            <p>Identify hidden toxins in daily products and why energy, digestion, or skin may not be improving.</p>
            <p>Walk away with a simple, realistic swap plan.</p>
          </div>
          <p class="microcopy">Book your free call and take the first step.</p>
        </div>

        <div class="choice-grid choice-grid-single">
          <article class="card choice-card">
            <p class="card-kicker">Schedule</p>
            <h2>Book your free call.</h2>
            <div class="calendar-embed">
              <iframe
                title="Schedule a free call"
                src="https://tidycal.com/timoteo/free-call-eliminate-the-hidden-toxins-wrecking-your-health"
                loading="lazy"
              ></iframe>
            </div>
          </article>
        </div>
      </section>
    </main>

    <div class="progress-shell" aria-label="Progress">
      <div class="progress-track">
        <div class="progress-fill" style="width: 100%;"></div>
      </div>
      <p class="progress-label">All set</p>
    </div>
  </div>
`

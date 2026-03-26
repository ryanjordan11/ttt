const app = document.querySelector('#app')

document.body.classList.add('full-reset-body')

app.innerHTML = `
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Anton&family=Roboto:wght@300;400;500;700&display=swap');

    .full-reset-body {
      margin: 0;
      background: #0f0f0f;
      color: #111;
      font-family: "Roboto", "Helvetica Neue", Arial, sans-serif;
    }

    .full-reset-body #app {
      min-height: 100vh;
    }

    .reset-page {
      display: flex;
      flex-direction: column;
      min-height: 100vh;
    }

    .reset-ribbon {
      background: #171717;
      color: #f5f5f5;
      text-transform: uppercase;
      letter-spacing: 0.24em;
      font-size: 0.7rem;
      text-align: center;
      padding: 14px 16px;
    }

    .reset-hero {
      background: radial-gradient(circle at top, #e84a1a 0%, #c62812 55%, #a31f0d 100%);
      color: #fff;
      text-align: center;
      padding: 66px 20px 54px;
    }

    .reset-kicker {
      margin: 0 0 18px;
      font-size: 0.85rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
    }

    .reset-headline {
      margin: 0 auto;
      max-width: 16ch;
      font-family: "Anton", Impact, sans-serif;
      font-size: clamp(2.8rem, 6.2vw, 5.1rem);
      text-transform: uppercase;
      line-height: 1.02;
    }

    .reset-subhead {
      margin: 18px auto 0;
      max-width: 36ch;
      font-size: 1.1rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
    }

    .reset-cta {
      margin-top: 26px;
      display: flex;
      justify-content: center;
      gap: 14px;
      flex-wrap: wrap;
    }

    .reset-button {
      border: 0;
      border-radius: 999px;
      padding: 14px 26px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      cursor: pointer;
      background: #0f0f0f;
      color: #fff;
      text-decoration: none;
      box-shadow: 0 16px 30px rgba(0, 0, 0, 0.25);
    }

    .reset-button.secondary {
      background: rgba(255, 255, 255, 0.16);
      border: 1px solid rgba(255, 255, 255, 0.5);
    }

    .reset-urgency {
      margin-top: 14px;
      font-size: 0.85rem;
      letter-spacing: 0.06em;
      text-transform: uppercase;
      opacity: 0.9;
    }

    .reset-media {
      margin: 34px auto 0;
      max-width: 920px;
      padding: 0 18px;
      display: grid;
      gap: 16px;
      grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
      align-items: stretch;
    }

    .reset-tile {
      background: rgba(0, 0, 0, 0.25);
      border: 2px solid rgba(255, 255, 255, 0.2);
      border-radius: 14px;
      min-height: 110px;
      display: grid;
      place-items: center;
      color: rgba(255, 255, 255, 0.8);
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 0.7rem;
    }

    .reset-section {
      padding: 60px 20px;
    }

    .reset-section.light {
      background: #f7f5f2;
    }

    .reset-section.dark {
      background: #141414;
      color: #f3f3f3;
    }

    .reset-section.accent {
      background: #ffffff;
      color: #1b1b1b;
    }

    .reset-container {
      max-width: 900px;
      margin: 0 auto;
    }

    .reset-title {
      font-family: "Anton", Impact, sans-serif;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: clamp(2rem, 4.2vw, 3.4rem);
      margin: 0 0 22px;
    }

    .reset-subtitle {
      margin: 0 0 18px;
      font-size: 1.05rem;
      text-transform: uppercase;
      letter-spacing: 0.12em;
    }

    .reset-copy {
      font-size: 1.08rem;
      line-height: 1.75;
      color: inherit;
    }

    .reset-copy p {
      margin: 0 0 18px;
    }

    .reset-divider {
      margin: 26px 0;
      text-align: center;
      color: #c62812;
      letter-spacing: 0.45em;
      font-weight: 700;
    }

    .reset-proof-grid {
      display: grid;
      gap: 18px;
      grid-template-columns: repeat(auto-fit, minmax(210px, 1fr));
      margin-top: 24px;
    }

    .reset-proof-card {
      background: #ffffff;
      border: 1px solid rgba(0, 0, 0, 0.08);
      border-radius: 16px;
      padding: 20px;
      color: #1b1b1b;
      box-shadow: 0 18px 40px rgba(0, 0, 0, 0.08);
    }

    .reset-proof-card h3 {
      margin: 0 0 10px;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      font-size: 0.85rem;
    }

    .reset-review {
      display: grid;
      gap: 10px;
      border-top: 1px solid rgba(255, 255, 255, 0.2);
      padding-top: 20px;
      margin-top: 20px;
    }

    .reset-review strong {
      text-transform: uppercase;
      letter-spacing: 0.12em;
      font-size: 0.85rem;
    }

    .reset-form {
      display: grid;
      gap: 16px;
      margin-top: 26px;
      max-width: 520px;
    }

    .reset-input {
      padding: 14px 16px;
      border-radius: 999px;
      border: 1px solid rgba(0, 0, 0, 0.2);
      font-size: 1rem;
    }

    .reset-submit {
      border: 0;
      border-radius: 999px;
      padding: 14px 22px;
      background: #c62812;
      color: #fff;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.08em;
      cursor: pointer;
    }

    @media (max-width: 640px) {
      .reset-hero {
        padding: 56px 16px 44px;
      }

      .reset-subhead {
        font-size: 1rem;
      }

      .reset-section {
        padding: 46px 16px;
      }
    }
  </style>

  <div class="reset-page">
    <div class="reset-ribbon">Exclusive offer for: #1 Amazon bestseller</div>

    <header class="reset-hero">
      <p class="reset-kicker">The full body reset</p>
      <h1 class="reset-headline">Why you still feel off</h1>
      <p class="reset-subhead">And how to fix it properly</p>
      <div class="reset-cta">
        <a class="reset-button" href="#reset-form">Get the guide</a>
        <a class="reset-button secondary" href="#reset-proof">See the proof</a>
      </div>
      <p class="reset-urgency">Hurry, limited copies for this test run</p>
      <div class="reset-media" aria-hidden="true">
        <div class="reset-tile">Cover</div>
        <div class="reset-tile">Results</div>
        <div class="reset-tile">Story</div>
        <div class="reset-tile">Proof</div>
      </div>
    </header>

    <section class="reset-section dark">
      <div class="reset-container reset-copy">
        <p>Most people assume this means they need to try something new.</p>
        <p>A different diet. A different supplement. A different approach.</p>
        <p>But that is not where the problem is.</p>
        <p>The issue is not what you are adding. It is what your body is actually able to use.</p>
      </div>
    </section>

    <section class="reset-section light" id="reset-proof">
      <div class="reset-container">
        <p class="reset-subtitle">Proof it works</p>
        <h2 class="reset-title">What happens when the system clears</h2>
        <div class="reset-proof-grid">
          <div class="reset-proof-card">
            <h3>Steady energy</h3>
            <p>People report energy that stops crashing, because their system finally processes what it takes in.</p>
          </div>
          <div class="reset-proof-card">
            <h3>Cleaner digestion</h3>
            <p>The heavy feeling after meals starts to lift as the system begins moving again.</p>
          </div>
          <div class="reset-proof-card">
            <h3>Less resistance</h3>
            <p>The body stops pushing back and starts responding to what you give it.</p>
          </div>
        </div>
      </div>
    </section>

    <section class="reset-section accent">
      <div class="reset-container">
        <p class="reset-subtitle">From the desk</p>
        <h2 class="reset-title">Why this matters right now</h2>
        <div class="reset-copy">
          <p>There is a point where you start noticing it.</p>
          <p>Not dramatically. Not all at once. Just small things.</p>
          <p>You wake up and you are not fully rested. You eat, and something feels heavy after.</p>
          <p>Your energy does not stay consistent through the day.</p>
          <p>Nothing is completely broken. But nothing feels right either.</p>
          <p>And that is what makes it frustrating. Because you are not ignoring your health.</p>
          <p>You have tried to do the right things. You have eaten better. You have paid attention.</p>
          <p>You probably even added supplements. And yet you still do not feel how you know you should.</p>
        </div>
      </div>
    </section>

    <section class="reset-section light">
      <div class="reset-container reset-copy">
        <p>Inside your body, everything you consume goes through a process.</p>
        <p>Food is broken down. Nutrients are extracted. Waste is moved out.</p>
        <p>When that process slows down, even slightly, something starts to change.</p>
        <p>Material that should move through begins to sit longer than it should.</p>
        <p>And when that happens repeatedly, your body adapts. It does not just leave things there.</p>
        <p>It builds around them.</p>

        <div class="reset-divider">---</div>

        <p>This is where people start to feel the effects without understanding why.</p>
        <p>Because from the outside, nothing looks wrong. You are doing what you are supposed to do.</p>
        <p>But internally, your system is not moving cleanly anymore.</p>
      </div>
    </section>

    <section class="reset-section dark">
      <div class="reset-container reset-copy">
        <p>When that happens, everything becomes less efficient.</p>
        <p>Your body does not absorb nutrients as well. Your digestion becomes inconsistent.</p>
        <p>Your energy starts to fluctuate instead of staying steady.</p>
        <p>And it does not feel like a specific problem. It just feels like something is off.</p>
      </div>
    </section>

    <section class="reset-section light">
      <div class="reset-container reset-copy">
        <p>That is why most people never fix it. Because they do not see it clearly.</p>
        <p>They just keep trying to add more solutions on top of a system that is not working properly underneath.</p>
        <div class="reset-divider">---</div>
        <p>And when you do that, nothing really changes.</p>
        <p>You might feel a temporary shift. But it never lasts.</p>
        <p>Because the foundation has not been addressed.</p>
      </div>
    </section>

    <section class="reset-section accent">
      <div class="reset-container reset-copy">
        <p>If your system is not clear, your body cannot function the way it is designed to.</p>
        <p>It does not matter how good your inputs are.</p>
        <p>It only matters how well your system can process them.</p>
      </div>
    </section>

    <section class="reset-section light">
      <div class="reset-container reset-copy">
        <p>This is where everything shifts.</p>
        <p>Not when you add more. But when you start by clearing what is already there.</p>
      </div>
    </section>

    <section class="reset-section dark">
      <div class="reset-container reset-copy">
        <p>A functioning body follows a simple pattern.</p>
        <p>First, it removes what is interfering.</p>
        <p>Then, it restores what is missing.</p>
        <p>And finally, it maintains balance so the problem does not come back.</p>
      </div>
    </section>

    <section class="reset-section light">
      <div class="reset-container reset-copy">
        <p>When you approach your body in that order, things start to change.</p>
        <p>Not instantly. But clearly.</p>
        <div class="reset-divider">---</div>
        <p>The first thing you notice is that things begin to move again.</p>
        <p>Digestion feels lighter. Bloating starts to reduce. Your body feels less resistant.</p>
        <p>Then, once your system is no longer blocked, something else happens.</p>
        <p>Your body starts responding to what you give it.</p>
        <p>Nutrients actually begin to make a difference.</p>
        <p>Energy becomes more stable.</p>
        <p>You do not feel like you are constantly trying to fix yourself anymore.</p>
      </div>
    </section>

    <section class="reset-section dark">
      <div class="reset-container reset-copy">
        <p>And this is where people finally start to feel like themselves again.</p>
        <p>Not because they found a trick. But because their system is working the way it was always supposed to.</p>
      </div>
    </section>

    <section class="reset-section light">
      <div class="reset-container reset-copy">
        <p>From there, the focus shifts.</p>
        <p>It is no longer about fixing something. It is about maintaining what is working.</p>
        <p>Because without consistency, your body will fall back into the same patterns.</p>
        <p>That is just how it works.</p>
      </div>
    </section>

    <section class="reset-section accent">
      <div class="reset-container reset-copy">
        <p>So instead of constantly starting over, you stay in a rhythm.</p>
        <p>You support your system daily. You keep things moving.</p>
        <p>You prevent buildup before it becomes a problem again.</p>
        <div class="reset-divider">---</div>
        <p>And that is the difference between something that works temporarily and something that actually lasts.</p>
      </div>
    </section>

    <section class="reset-section light">
      <div class="reset-container reset-copy">
        <p>Most people spend years trying to figure this out.</p>
        <p>Not because it is complicated. But because they are doing it in the wrong order.</p>
        <p>They try to rebuild before they clear.</p>
        <p>They try to maintain something that was never working properly to begin with.</p>
        <div class="reset-divider">---</div>
        <p>When you reverse that, everything becomes simpler.</p>
        <p>Clear what is in the way. Support what your body needs. Maintain it consistently.</p>
        <p>That is it.</p>
      </div>
    </section>

    <section class="reset-section dark">
      <div class="reset-container reset-copy">
        <p>Not a hack. Not a shortcut. Not something you do once and forget.</p>
        <p>A system you run.</p>
        <p>And once you understand that, you stop guessing.</p>
        <p>You stop jumping between solutions.</p>
        <p>And your body finally starts responding the way it should.</p>
        <p>That is where real change happens.</p>
      </div>
    </section>

    <section class="reset-section light" id="reset-form">
      <div class="reset-container">
        <p class="reset-subtitle">Get the guide</p>
        <h2 class="reset-title">Start the reset with the right order</h2>
        <div class="reset-copy">
          <p>This is the full guide written in the same order your body needs.</p>
          <p>Clear what is in the way. Restore what is missing. Maintain the result.</p>
        </div>
        <form class="reset-form" action="/step2.html">
          <input class="reset-input" type="text" name="name" placeholder="Your name" required />
          <input class="reset-input" type="email" name="email" placeholder="Your best email" required />
          <button class="reset-submit" type="submit">Send me the guide</button>
        </form>
      </div>
    </section>
  </div>
`

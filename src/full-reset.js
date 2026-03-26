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
      letter-spacing: 0.2em;
      font-size: 0.7rem;
      text-align: center;
      padding: 14px 16px;
    }

    .reset-hero {
      background: radial-gradient(circle at top, #e84a1a 0%, #c62812 55%, #a31f0d 100%);
      color: #fff;
      text-align: center;
      padding: 64px 20px 50px;
    }

    .reset-kicker {
      margin: 0 0 18px;
      font-size: 0.85rem;
      letter-spacing: 0.2em;
      text-transform: uppercase;
    }

    .reset-headline {
      margin: 0 auto;
      max-width: 16ch;
      font-family: "Anton", Impact, sans-serif;
      font-size: clamp(2.6rem, 6vw, 4.8rem);
      text-transform: uppercase;
      line-height: 1.02;
    }

    .reset-subhead {
      margin: 18px auto 0;
      max-width: 32ch;
      font-size: 1.1rem;
      letter-spacing: 0.05em;
      text-transform: uppercase;
    }

    .reset-media {
      margin: 34px auto 0;
      max-width: 860px;
      padding: 18px;
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

    .reset-body {
      background: #f7f5f2;
      padding: 56px 20px 80px;
    }

    .reset-copy {
      max-width: 740px;
      margin: 0 auto;
      font-size: 1.08rem;
      line-height: 1.75;
      color: #1b1b1b;
    }

    .reset-divider {
      margin: 26px 0;
      text-align: center;
      color: #c62812;
      letter-spacing: 0.45em;
      font-weight: 700;
    }

    .reset-copy p {
      margin: 0 0 18px;
    }

    .reset-copy p:last-of-type {
      margin-bottom: 0;
    }

    @media (max-width: 640px) {
      .reset-hero {
        padding: 52px 16px 42px;
      }

      .reset-subhead {
        font-size: 1rem;
      }

      .reset-body {
        padding: 44px 16px 64px;
      }
    }
  </style>

  <div class="reset-page">
    <div class="reset-ribbon">Exclusive offer for: #1 Amazon bestseller</div>

    <header class="reset-hero">
      <p class="reset-kicker">The full body reset</p>
      <h1 class="reset-headline">Why you still feel off</h1>
      <p class="reset-subhead">And how to fix it properly</p>
      <div class="reset-media" aria-hidden="true">
        <div class="reset-tile">Proof</div>
        <div class="reset-tile">Cover</div>
        <div class="reset-tile">Story</div>
        <div class="reset-tile">Results</div>
      </div>
    </header>

    <main class="reset-body">
      <section class="reset-copy">
        <p>There is a point where you start noticing it.</p>
        <p>Not dramatically. Not all at once.</p>
        <p>Just small things.</p>
        <p>You wake up and you are not fully rested.</p>
        <p>You eat, and something feels heavy after.</p>
        <p>Your energy does not stay consistent through the day.</p>
        <p>Nothing is completely broken.</p>
        <p>But nothing feels right either.</p>
        <p>And that is what makes it frustrating.</p>
        <p>Because you are not ignoring your health.</p>
        <p>You have tried to do the right things.</p>
        <p>You have eaten better.</p>
        <p>You have paid attention.</p>
        <p>You probably even added supplements.</p>
        <p>And yet you still do not feel how you know you should.</p>

        <div class="reset-divider">---</div>

        <p>Most people assume this means they need to try something new.</p>
        <p>A different diet.</p>
        <p>A different supplement.</p>
        <p>A different approach.</p>
        <p>But that is not where the problem is.</p>
        <p>The issue is not what you are adding.</p>
        <p>It is what your body is actually able to use.</p>

        <div class="reset-divider">---</div>

        <p>Your body is built to regulate itself.</p>
        <p>It is designed to take in what it needs, process it, and eliminate the rest.</p>
        <p>That process is happening constantly, whether you think about it or not.</p>
        <p>But it only works when the system is moving properly.</p>
        <p>And over time, for most people, it stops doing that efficiently.</p>
        <p>Not enough to cause a clear, obvious issue.</p>
        <p>But enough to create resistance.</p>

        <div class="reset-divider">---</div>

        <p>Inside your body, everything you consume goes through a process.</p>
        <p>Food is broken down.</p>
        <p>Nutrients are extracted.</p>
        <p>Waste is moved out.</p>
        <p>When that process slows down, even slightly, something starts to change.</p>
        <p>Material that should move through begins to sit longer than it should.</p>
        <p>And when that happens repeatedly, your body adapts.</p>
        <p>It does not just leave things there.</p>
        <p>It builds around them.</p>

        <div class="reset-divider">---</div>

        <p>This is where people start to feel the effects without understanding why.</p>
        <p>Because from the outside, nothing looks wrong.</p>
        <p>You are doing what you are supposed to do.</p>
        <p>But internally, your system is not moving cleanly anymore.</p>

        <div class="reset-divider">---</div>

        <p>When that happens, everything becomes less efficient.</p>
        <p>Your body does not absorb nutrients as well.</p>
        <p>Your digestion becomes inconsistent.</p>
        <p>Your energy starts to fluctuate instead of staying steady.</p>
        <p>And it does not feel like a specific problem.</p>
        <p>It just feels like something is off.</p>

        <div class="reset-divider">---</div>

        <p>That is why most people never fix it.</p>
        <p>Because they do not see it clearly.</p>
        <p>They just keep trying to add more solutions on top of a system that is not working properly underneath.</p>

        <div class="reset-divider">---</div>

        <p>And when you do that, nothing really changes.</p>
        <p>You might feel a temporary shift.</p>
        <p>But it never lasts.</p>
        <p>Because the foundation has not been addressed.</p>

        <div class="reset-divider">---</div>

        <p>If your system is not clear, your body cannot function the way it is designed to.</p>
        <p>It does not matter how good your inputs are.</p>
        <p>It only matters how well your system can process them.</p>

        <div class="reset-divider">---</div>

        <p>This is where everything shifts.</p>
        <p>Not when you add more.</p>
        <p>But when you start by clearing what is already there.</p>

        <div class="reset-divider">---</div>

        <p>A functioning body follows a simple pattern.</p>
        <p>First, it removes what is interfering.</p>
        <p>Then, it restores what is missing.</p>
        <p>And finally, it maintains balance so the problem does not come back.</p>

        <div class="reset-divider">---</div>

        <p>That is the structure most people never follow.</p>
        <p>And it is the reason they stay stuck.</p>

        <div class="reset-divider">---</div>

        <p>When you approach your body in that order, things start to change.</p>
        <p>Not instantly.</p>
        <p>But clearly.</p>

        <div class="reset-divider">---</div>

        <p>The first thing you notice is that things begin to move again.</p>
        <p>Digestion feels lighter.</p>
        <p>Bloating starts to reduce.</p>
        <p>Your body feels less resistant.</p>

        <div class="reset-divider">---</div>

        <p>Then, once your system is no longer blocked, something else happens.</p>
        <p>Your body starts responding to what you give it.</p>
        <p>Nutrients actually begin to make a difference.</p>
        <p>Energy becomes more stable.</p>
        <p>You do not feel like you are constantly trying to fix yourself anymore.</p>

        <div class="reset-divider">---</div>

        <p>And this is where people finally start to feel like themselves again.</p>
        <p>Not because they found a trick.</p>
        <p>But because their system is working the way it was always supposed to.</p>

        <div class="reset-divider">---</div>

        <p>From there, the focus shifts.</p>
        <p>It is no longer about fixing something.</p>
        <p>It is about maintaining what is working.</p>

        <div class="reset-divider">---</div>

        <p>Because without consistency, your body will fall back into the same patterns.</p>
        <p>That is just how it works.</p>

        <div class="reset-divider">---</div>

        <p>So instead of constantly starting over, you stay in a rhythm.</p>
        <p>You support your system daily.</p>
        <p>You keep things moving.</p>
        <p>You prevent buildup before it becomes a problem again.</p>

        <div class="reset-divider">---</div>

        <p>And that is the difference between something that works temporarily and something that actually lasts.</p>

        <div class="reset-divider">---</div>

        <p>Most people spend years trying to figure this out.</p>
        <p>Not because it is complicated.</p>
        <p>But because they are doing it in the wrong order.</p>

        <div class="reset-divider">---</div>

        <p>They try to rebuild before they clear.</p>
        <p>They try to maintain something that was never working properly to begin with.</p>

        <div class="reset-divider">---</div>

        <p>When you reverse that, everything becomes simpler.</p>

        <div class="reset-divider">---</div>

        <p>Clear what is in the way.</p>
        <p>Support what your body needs.</p>
        <p>Maintain it consistently.</p>

        <div class="reset-divider">---</div>

        <p>That is it.</p>

        <div class="reset-divider">---</div>

        <p>Not a hack.</p>
        <p>Not a shortcut.</p>
        <p>Not something you do once and forget.</p>

        <div class="reset-divider">---</div>

        <p>A system you run.</p>

        <div class="reset-divider">---</div>

        <p>And once you understand that, you stop guessing.</p>
        <p>You stop jumping between solutions.</p>
        <p>And your body finally starts responding the way it should.</p>

        <div class="reset-divider">---</div>

        <p>That is where real change happens.</p>
      </section>
    </main>
  </div>
`

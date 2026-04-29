import "./guide.css"

const navItems = [
  { href: "/guide-welcome.html", label: "Welcome" },
  { href: "/guide-day1.html", label: "Day 1" },
  { href: "/guide-day2.html", label: "Day 2" },
  { href: "/guide-day3.html", label: "Day 3" },
  { href: "/guide-day4.html", label: "Day 4" },
  { href: "/guide-day5.html", label: "Day 5" }
]

export function renderGuidePage({ day, title, intro, contentHtml, videoSrc = "", videoTitle = "" }) {
  const app = document.querySelector("#app")
  app.innerHTML = `
    <div class="guide-shell">
      <div class="ambient ambient-left"></div>
      <div class="ambient ambient-right"></div>
      <header class="topbar"><p class="brand-mark">Timoteo Wellness</p></header>
      <div class="guide-layout">
        <aside class="guide-nav" aria-label="Guide pages">
          <p>5-Day Guide</p>
          <nav class="nav-list">
            ${navItems
              .map(
                (item) =>
                  `<a class="nav-link ${item.label === day ? "active" : ""}" href="${item.href}">${item.label}</a>`
              )
              .join("")}
          </nav>
        </aside>
        <main class="guide-main">
          <section class="section-card">
            <p class="eyebrow">${day}</p>
            <h1>${title}</h1>
            ${
              videoSrc
                ? `
              <div class="welcome-video">
                <video controls preload="metadata" playsinline>
                  <source src="${videoSrc}" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                ${videoTitle ? `<p class="video-caption">${videoTitle}</p>` : ""}
              </div>
            `
                : ""
            }
            <p class="lead">${intro}</p>
          </section>
          <section class="section-card copy-block">${contentHtml}</section>
          <section class="section-card" id="disclaimer">
            <h2>Disclaimer</h2>
            <p class="disclaimer">This guide provides general health information and is not a substitute for professional medical advice. Consult with a healthcare provider before making significant dietary changes, especially if you have pre-existing health conditions.</p>
          </section>
        </main>
      </div>
    </div>
  `
}

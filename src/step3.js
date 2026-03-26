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

    <main class="funnel quiz-funnel" aria-labelledby="step-3-title">
      <section class="step step-single quiz-step">
        <div class="card quiz-card quiz-card-minimal">
          <div class="quiz-header">
            <div class="quiz-progress">
              <div class="quiz-progress-fill"></div>
            </div>
            <p class="quiz-status">Getting oriented</p>
          </div>

          <div class="quiz-panel step-active" id="quiz-panel">
            <h1 id="step-3-title" class="quiz-question">Question</h1>
            <form class="quiz-form" id="quiz-form">
              <div class="quiz-options" id="quiz-options"></div>
              <button type="submit" class="button button-primary quiz-next-hidden" id="quiz-next">Next</button>
            </form>
          </div>
        </div>
      </section>
    </main>
  </div>
`

const questions = [
  {
    prompt: 'Where do you feel the greatest disconnect right now?',
    options: [
      'My energy does not feel stable',
      'My body feels like it is working harder than it should',
      'I do not feel as clear or focused as I want to',
      'I feel like something in my routine may be working against me'
    ]
  },
  {
    prompt: 'Which area do you most want to improve?',
    options: [
      'Energy and stamina',
      'Clarity and mental sharpness',
      'Daily balance and resilience',
      'Understanding what may be disrupting my progress'
    ]
  },
  {
    prompt: 'Which statement sounds most like you?',
    options: [
      'I want to feel better naturally',
      'I want to understand what may be throwing things off',
      'I want a clearer starting point',
      'I want expert guidance on my next step'
    ]
  }
]

const quizQuestion = document.querySelector('#step-3-title')
const quizOptions = document.querySelector('#quiz-options')
const quizForm = document.querySelector('#quiz-form')
const quizPanel = document.querySelector('#quiz-panel')
const quizProgress = document.querySelector('.quiz-progress-fill')
const quizStatus = document.querySelector('.quiz-status')

let currentIndex = 0
const answers = []

const statusLabels = ['Getting oriented', 'Finding your focus', 'Choosing your direction']
const typeLabels = ['energy', 'resilience', 'clarity', 'interference']

const resultCopy = {
  energy: {
    headline: 'Your body is asking for steadier energy, not more hustle.',
    body:
      'Your answers point to energy stability as the fastest win. We will help you reduce the daily load that quietly drains stamina and show simple swaps that support more consistent energy.'
  },
  clarity: {
    headline: 'Your next step is mental clarity, not doing more.',
    body:
      'Your responses suggest focus is getting clouded by subtle interference. We will start by identifying the biggest routine disruptors and simplify what to change first.'
  },
  resilience: {
    headline: 'Your rhythm wants balance before intensity.',
    body:
      'You are not far off. Your system just needs fewer stressors. We will prioritize small, sustainable changes that help your body feel less overworked.'
  },
  interference: {
    headline: 'You are ready to find what is quietly throwing things off.',
    body:
      'Your answers show strong awareness that routine factors matter. We will pinpoint the top categories most likely affecting you and guide the first replacements.'
  }
}

const renderQuestion = () => {
  const question = questions[currentIndex]
  quizQuestion.textContent = question.prompt
  quizOptions.innerHTML = question.options
    .map(
      (option, index) => `
        <label class="quiz-option">
          <input type="radio" name="quiz-option" value="${index}" required />
          ${option}
        </label>
      `
    )
    .join('')

  quizProgress.style.width = `${((currentIndex + 1) / questions.length) * 100}%`
  quizStatus.textContent = statusLabels[currentIndex] || 'Progress'
  quizPanel.classList.remove('step-active')
  window.requestAnimationFrame(() => quizPanel.classList.add('step-active'))
}

const scoreResults = () => {
  const scores = {
    energy: 0,
    resilience: 0,
    clarity: 0,
    interference: 0
  }

  answers.forEach((answer, index) => {
    const type = typeLabels[answer]
    if (!type) return
    scores[type] += 1
    if (index === 2) {
      scores[type] += 0.5
    }
  })

  const highest = Object.entries(scores).sort((a, b) => b[1] - a[1])
  const topScore = highest[0][1]
  const topTypes = highest.filter(([, score]) => score === topScore).map(([type]) => type)
  if (topTypes.length === 1) return topTypes[0]

  const q3Type = typeLabels[answers[2]]
  return topTypes.includes(q3Type) ? q3Type : topTypes[0]
}

const renderCompletion = () => {
  const resultType = scoreResults()
  const copy = resultCopy[resultType]
  quizQuestion.textContent = copy.headline
  quizOptions.innerHTML = `
    <div class="quiz-complete">
      <p>${copy.body}</p>
    </div>
    <div class="quiz-cta">
      <a class="button button-primary" href="/step4.html">Watch Your Next Step</a>
      <p class="microcopy">This 2-minute message explains what to focus on first.</p>
    </div>
  `
  quizProgress.style.width = '100%'
  quizStatus.textContent = 'Ready for the next step'
}

quizOptions.addEventListener('change', (event) => {
  const selected = event.target.closest('input[name="quiz-option"]')
  if (!selected) return

  answers[currentIndex] = Number(selected.value)
  if (currentIndex < questions.length - 1) {
    currentIndex += 1
    window.setTimeout(renderQuestion, 220)
    return
  }

  renderCompletion()
})

renderQuestion()

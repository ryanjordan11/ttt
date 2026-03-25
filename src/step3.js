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
              <button type="submit" class="button button-primary" id="quiz-next">Next</button>
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
const quizNext = document.querySelector('#quiz-next')
const quizPanel = document.querySelector('#quiz-panel')
const quizProgress = document.querySelector('.quiz-progress-fill')
const quizStatus = document.querySelector('.quiz-status')

let currentIndex = 0
const answers = []

const statusLabels = ['Getting oriented', 'Finding your focus', 'Choosing your direction']

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

  quizNext.textContent = currentIndex === questions.length - 1 ? 'See my next step' : 'Next'
  quizProgress.style.width = `${((currentIndex + 1) / questions.length) * 100}%`
  quizStatus.textContent = statusLabels[currentIndex] || 'Progress'
  quizPanel.classList.remove('step-active')
  window.requestAnimationFrame(() => quizPanel.classList.add('step-active'))
}

const renderCompletion = () => {
  quizQuestion.textContent = 'You are all set.'
  quizOptions.innerHTML = `
    <div class="quiz-complete">
      <p>Your responses point to a clean, focused next step. We will guide you there now.</p>
    </div>
  `
  quizNext.textContent = 'Continue to the message'
  quizProgress.style.width = '100%'
  quizStatus.textContent = 'Ready for the next step'
}

quizForm.addEventListener('submit', (event) => {
  event.preventDefault()
  const selected = quizForm.querySelector('input[name="quiz-option"]:checked')
  if (!selected) return

  answers[currentIndex] = Number(selected.value)
  if (currentIndex < questions.length - 1) {
    currentIndex += 1
    renderQuestion()
    return
  }

  renderCompletion()
  quizNext.type = 'button'
  quizNext.addEventListener(
    'click',
    () => {
      window.location.href = '/step4.html'
    },
    { once: true }
  )
})

renderQuestion()

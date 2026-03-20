const form = document.querySelector('#quiz-form')

if (form) {
  const steps = [...form.querySelectorAll('.quiz-step')]
  const dots = [...form.querySelectorAll('.quiz-dot')]

  function showStep(stepIndex) {
    steps.forEach((step, index) => {
      const active = index === stepIndex
      step.hidden = !active
      step.classList.toggle('quiz-step-active', active)
    })

    dots.forEach((dot, index) => {
      dot.classList.toggle('quiz-dot-active', index === stepIndex)
    })
  }

  function goToResults() {
    const data = new FormData(form)
    const params = new URLSearchParams({
      q1: data.get('q1') || '',
      q2: data.get('q2') || '',
      q3: data.get('q3') || '',
    })

    window.location.href = `./step3.html?${params.toString()}`
  }

  steps.forEach((step, index) => {
    const inputs = [...step.querySelectorAll('input[type="radio"]')]

    inputs.forEach((input) => {
      input.addEventListener('change', () => {
        const nextStep = index + 1

        if (nextStep < steps.length) {
          showStep(nextStep)
          return
        }

        goToResults()
      })
    })
  })
}

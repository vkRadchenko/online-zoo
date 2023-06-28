const firstNavButton = document.querySelector('.burger__menu')
const burger__overlay = document.querySelector('.header')
const scrolLock = document.body

firstNavButton.addEventListener('click', (event) => {
  firstNavButton.classList.toggle('active__burger_menu')
  burger__overlay.classList.toggle('active__burger_header')
  scrolLock.classList.toggle('lock')
})
burger__overlay.addEventListener('click', (event) => {
  if (event.target.classList.contains('active__burger_header')) {
    burger__overlay.classList.remove('active__burger_header')
  }
})

const inputWrapper = document.querySelector('.input__wrapper')
const inputDonate = document.querySelector('.input_amount')
const inputOption = document.querySelectorAll('.option-input')

inputWrapper.addEventListener('change', (event) => {
  const { target } = event
  const { value } = target
  inputDonate.value = value
})

inputDonate.addEventListener('input', (event) => {
  const { target } = event
  const { value } = target
  const { checked } = target
  const valueDonate = value

  inputOption.forEach(({ value, id }) => {
    const checkId = document.getElementById(`${id}`)
    console.log(checked)
    checkId.removeAttribute('checked')

    if (valueDonate === value) {
      checkId.checked = true
    } else {
      checkId.checked = false
    }
  })
})

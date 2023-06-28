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

/* ////////////////////////////////////// */

//CardPets
const items = document.querySelectorAll('.pets__container')
const cardPets = document.querySelectorAll('.foto__card')
const windowWidth = window.innerWidth

//Testimonials
const containerCardTestimonials = document.querySelector(
  '.container__card_testimonials'
)
const inputTestimonials = document.querySelector('#myRange')
const cardTestimonials = document.querySelectorAll('.card_testimonials')
const popup = document.querySelector('.popup__testimonials')

let currentItem = 0
let isEnabled = true

function cardOff() {
  if (windowWidth <= 940) {
    for (let i = 0; i < cardPets.length; i += 3) {
      cardPets[i].classList.add('deactive__card')
    }
  }
}
cardOff()

function generateCardPets() {
  cardPets.forEach((el, n, arr) => {
    el.style.order = `${Math.floor(Math.random() * 12)}`
  })
}

function changeCurrentItem(n) {
  currentItem = (n + items.length) % items.length
}

function hideItem(direction) {
  isEnabled = false
  items[currentItem].classList.add(direction)
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('active', direction)
  })
}

function showItem(direction) {
  items[currentItem].classList.add('next', direction)
  items[currentItem].addEventListener('animationend', function () {
    this.classList.remove('next', direction)
    this.classList.add('active')
    isEnabled = true
    generateCardPets()
  })
}

function previousItem() {
  hideItem('to__right')
  changeCurrentItem(currentItem - 1)
  showItem('from__left')
}
function nextItem() {
  hideItem('to__left')
  changeCurrentItem(currentItem + 1)
  showItem('from__right')
}

document
  .querySelector('.slider__arrow_right')
  .addEventListener('click', function () {
    if (isEnabled) {
      previousItem(currentItem)
    }
  })
document
  .querySelector('.slider__arrow_left')
  .addEventListener('click', function () {
    if (isEnabled) {
      nextItem(currentItem)
    }
  })

/* card testimonials /////////////////////////////////// */

inputTestimonials.addEventListener('input', (event) => {
  const { target } = event
  const { value } = target
  let curentTest = 0
  if (windowWidth <= 1000) {
    curentTest = value * 315
  } else curentTest = value * 292

  containerCardTestimonials.style.transform = `translateX(-${curentTest}px)`
})

if (windowWidth <= 768) {
  cardTestimonials.forEach((t, i) => {
    t.addEventListener('click', (event) => {
      scrolLock.classList.add('lock')
      let cloneCardId = cardTestimonials[i].cloneNode(true)
      cloneCardId.classList.add('testimonials__card_open')
      document.querySelector('.section5__testimonials').append(cloneCardId)
      popup.classList.add('popup__active')

      popup.addEventListener('click', (event) => {
        cloneCardId.remove()
        popup.classList.remove('popup__active')
        scrolLock.classList.remove('lock')
      })
    })
  })
}

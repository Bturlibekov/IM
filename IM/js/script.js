const header = document.querySelector('.header')

window.addEventListener('scroll', function() {
  checkScroll()
});

window.addEventListener('DOMContentLoaded', function() {
  checkScroll()
})
  const checkScroll = () => {

    const scrollPos = window.scrollY

    if (scrollPos > 0) {
      header.classList.add('fixed')
    } else {
      header.classList.remove('fixed')
    }
  }

// !

const navToggle = document.getElementById('menu-bar')
const headerMenu = document.querySelector('.header-menu')
const headerMenuBlock = document.querySelector('.header-menu-block')

navToggle.addEventListener('click', () => {
  navToggle.classList.toggle('fa-times')
  document.body.classList.toggle('lock')
  headerMenu.classList.toggle('active')
})
window.addEventListener('click', e => {
  const target = e.target
  if (!target.closest('.header-menu-block') && !target.closest('#menu-bar')) {
    navToggle.classList.remove('fa-times')
    headerMenu.classList.remove('active')
    document.body.classList.remove('lock')
  }

})
// !

const filterBtn = document.querySelectorAll(".tol-inner ul li")

filterBtn.forEach(filter => {
  filter.addEventListener('click', function() {
    filterBtn.forEach(filter => filter.classList.remove('active'))
    this.classList.add('active')
  })
})

// !

// const navHeader = document.querySelectorAll('.f-catalog-header')
// const navItem = document.querySelectorAll('.nav-item')

// navHeader.forEach(btn => {
//   btn.addEventListener('click', () => {
//     const panel = btn.nextElementSibling
//     panel.classList.toggle('active')
//     btn.classList.toggle('active')
//   })
// })

// nujno

const chsBtn = document.querySelector('.choose-color-btn')
const chsModal = document.querySelector('.choose-color-modal')
const modalClose = document.querySelector('.modal-close')

chsBtn.addEventListener('click', () => {
  chsModal.classList.add('open')
})

modalClose.addEventListener('click', () => {
  chsModal.classList.remove('open')
})
// /nujno

// nujno2
const p_Photo = document.querySelectorAll('.product-photo')

p_Photo.forEach(photo => {
  photo.addEventListener('click', function() {
    p_Photo.forEach(photo => photo.classList.remove('active'))
    this.classList.add('active')
  })
})
// /nujno2

// sliders
// !

const cardSlider = new Swiper('.list-cards', {
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  autoplay: {
    delay: 3000,
    stopLastSlide: true,
    disableOnInteraction: false,
  },
  slidesPerView: 4,
  loop: true,
  adaptiveHeight: true,
  breakpoints: {
    320: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    480: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
    768: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    992: {
      slidesPerView: 3,
      slidesPerGroup: 3,
    },
  }
})

// !

const contentSlider = new Swiper('.content', {
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
})

// !

const infoSlider = new Swiper('.al-slider', {
  navigation: {
    nextEl: '.swiper-next',
    prevEl: '.swiper-prev'
  },
  pagination: {
    el: '.pagination',
    clickable: true,
  },
  slidesPerView: 1,
})

// !
const swiperSlide = new Swiper('.swiper-container', {
  loop: true,
  speed: 800,
  direction: 'horizontal',

  breakpoints: {
    576: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1200: {
      slidesPerView: 3
    }
  }
})
let closeBtn = document.querySelector(".headerx")
let openBtn = document.querySelector(".fa-bars")
let menu = document.querySelector('.header-list')
let dark = document.querySelector(".dark")
let header = document.querySelector('.header')
let mySwiper = document.querySelector(".mySwiper")
closeBtn.addEventListener('click',()=>{
    menu.classList.remove("open")
    dark.classList.remove("darkBlock")
})

openBtn.addEventListener('click' ,()=>{
    menu.classList.add("open")
    dark.classList.add("darkBlock")
})


window.addEventListener('scroll', function() {
  let scrollPosition = window.scrollY;

  if (scrollPosition > 20) {
    header.classList.add('shadow');
  } else {
    header.classList.remove('shadow');
  }
});

let swiper = new Swiper(mySwiper, {
  slidesPerView: 3,
  spaceBetween: 30,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".button-next",
    prevEl: ".button-prev",
  },
});
const btop = document.querySelector(".backtotop");
window.addEventListener("scroll", () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset >= 200) {
    btop.classList.add("show");
    } else {
    btop.classList.remove("show");
    }
});



const menu = document.querySelector(".toggle__menu");
const headernav = document.querySelector(".header__nav");
const malabo = document.querySelector(".joshuaulaga")

menu.addEventListener("click", () =>{
    menu.classList.toggle("open");
    headernav.classList.toggle("open");
    headernav.style=("transition: .5s ease")
    malabo.classList.toggle("blur");
})


const links = document.querySelectorAll(".links__item h4")
links.forEach((go) => {
    go.addEventListener("click", () => {
        go.nextElementSibling.classList.toggle("open");
        go.querySelector("i").classList.toggle("open");
    })
})



// documunetation

// const togglemenu = document.querySelector(".doc__toggle__menu");
// const navi = document.querySelector(".doc__nav ul");
// // const bg = document.querySelector(".joshuaulaga")

// togglemenu.addEventListener("click", () =>{
//     togglemenu.classList.toggle("open");
//     navi.classList.toggle("open");
//     navi.style=("transition: .5s ease")
//     // malabo.classList.toggle("show");
// })






// swiper

const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    centeredSlides: true,
    loop: true,
    effect: 'coverflow',
    grabCursor: true,
    coverflowEffect: {
      rotate: 0,
      stretch: 0,
      depth: 70,
      modifier: 10,
      slideShadows: true,
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination:{
        el:'.swiper-pagination',
        clickable: true,
    },
    breakpoints:{
        400:{
            slidesPerView:1,
        },
        1880:{
            slidesPerView:'2',
        }
    }
     
  });


  // text animation

ScrollReveal({
    reset: true,
    distance: "20rem",
    duration: 1000,
    delay: 200,
  });
  
  ScrollReveal().reveal(
    ".banner__content, .about__title, .skills__tittle, .services__tittle, .works__tittle, .contact__tittle ", 
    { delay: 300, origin: "top" }
  );
  ScrollReveal().reveal(
    ".skills__tittle, .services .services__content",
    { delay: 500, origin: "top" }
  );
  ScrollReveal().reveal(
    " .swiper ",
    { delay: 200, origin: "left" }
  );
  ScrollReveal().reveal(
    ".context p, .socmed, .contact_form ",
    { delay: 300, origin: "right" }
  );
  ScrollReveal().reveal(
    "#card1",
    { delay: 500, origin: "top" }
  );
  ScrollReveal().reveal(
    "#card2",
    { delay: 550, origin: "top" }
  );
  ScrollReveal().reveal(
    "#card3",
    { delay: 600, origin: "top" }
  );
  ScrollReveal().reveal(
    "#card4",
    { delay: 650, origin: "top" }
  );
  ScrollReveal().reveal(
    "#card5",
    { delay: 700, origin: "top" }
  );




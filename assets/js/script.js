
//navbar
const navBerger = document.querySelector('.nav-berger');
const navMenu = document.querySelector('.nav-menu');

navBerger.addEventListener("click", () => {
  navBerger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  navBerger.classList.remove("active");
  navMenu.classList.remove("active");
}
));
//navbar end



//slide
const slider = document.querySelector('.slider');
const slides = slider.querySelectorAll('li');

// Store the total number of images
const slideCount = slides.length;
let activeSlide = 0;

// To change the images dynamically every
// 5 Secs, use SetInterval() method
setInterval(() => {
  slides[activeSlide].classList.remove('active');
  activeSlide++;
  if (activeSlide === slideCount) {
    activeSlide = 0;
  }
  slides[activeSlide].classList.add('active');
}, 1500);
//slide end




//reveal
function reveall() {
  var reveals = document.querySelectorAll(".reveall");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveall);
//reveal end




//menuiserie slide
new Splide('.splide', {
  autoScroll: {
    speed: 2,
  },
}).mount(window.splide.Extensions);



document.addEventListener('DOMContentLoaded', function () {
  var splide = new Splide('.splide');
  splide.mount();
});
//menuiserie slide end



//habillage slide
function changeColor(imgToChange) {

  var img = document.getElementById('main-image');
  img.src = "assets/src/habillage/" + imgToChange + ".jpg";
  console.log(img);
}
//habillage slide end

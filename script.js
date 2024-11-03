// hero section

const slideContainer = document.querySelector("#slides-container");
const arrowLeft = document.querySelector(".fa-chevron-left");
const arrowRight = document.querySelector(".fa-chevron-right");
const slide = document.querySelector(".slide-hero");

const intervalTime = 6000;
let currentSlide = 0;
const totalSlides = 4;
let slideWidth = slide.clientWidth;

arrowLeft.addEventListener("click", function () {
  slideContainer.scrollLeft -= slideWidth;
});

arrowRight.addEventListener("click", function () {
  slideContainer.scrollLeft += slideWidth;
});

setInterval(() => {
  slideContainer.scrollLeft += slideWidth;
  currentSlide++;

  if (currentSlide === totalSlides) {
    slideContainer.scrollLeft -= slideWidth * totalSlides;
    currentSlide = 0;
  }
}, intervalTime);

// scroll up

window.addEventListener("scroll", () => {
  const upIcon = document.querySelector(".up-icon");
  const isScrolled = window.scrollY;
  let scrollable = document.documentElement.scrollHeight - window.innerHeight;

  if (Math.ceil(isScrolled) >= scrollable) {
    upIcon.style.display = "block";
  }
  if (Math.ceil(isScrolled) < 300) {
    upIcon.style.display = "none";
  }
  upIcon.addEventListener("click", () => {
    window.scrollTo(0, 0);
    upIcon.style.display = "none";
  });
});

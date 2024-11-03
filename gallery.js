// gallery

const slides = document.querySelectorAll(".slide");

function deteleActiveClass() {
  slides.forEach(function (mySlide) {
    mySlide.classList.remove("active");
  });
}

slides.forEach(function (oneSlide) {
  oneSlide.addEventListener("click", function () {
    deteleActiveClass();
    oneSlide.classList.add("active");
  });
});

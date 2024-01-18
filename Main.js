let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
let slideInterval;

function showSlide(index) {
    slides.forEach((slide, idx) => {
        slide.style.display = idx === index ? 'block' : 'none';
    });
}

function nextSlide() {
    currentSlide = currentSlide < slides.length - 1 ? currentSlide + 1 : 0;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = currentSlide > 0 ? currentSlide - 1 : slides.length - 1;
    showSlide(currentSlide);
}

document.getElementById('prev').addEventListener('click', function() {
    prevSlide();
    restartSlideInterval();
});

document.getElementById('next').addEventListener('click', function() {
    nextSlide();
    restartSlideInterval();
});

function startSlideShow() {
    slideInterval = setInterval(nextSlide, 5000); // Change slide every 3000ms (3 seconds)
}

function restartSlideInterval() {
    clearInterval(slideInterval);
    startSlideShow();
}

// Start the slideshow
showSlide(currentSlide);
startSlideShow();






function toggleAnswer(element) {
  var answer = element.nextElementSibling;
  var icon = element.querySelector("i");
  if (answer.style.display === "block") {
      answer.style.display = "none";
      icon.classList.remove("rotated");
  } else {
      answer.style.display = "block";
      icon.classList.add("rotated");
  }
}


var slides = document.querySelectorAll('.projects__slide');
var arrowLeft = document.querySelector('.projects__arrow-left');
var arrowRight = document.querySelector('.projects__arrow-right');
var correntSlide = 0;
window.onload = function() {
  slides[1].style.display = 'none';
};
arrowLeft.addEventListener('click', function() {
    slides[correntSlide].style.display = 'none';
    correntSlide = Math.abs(correntSlide - 1) % slides.length;
    slides[correntSlide].style.display = 'block';
  }
);
arrowRight.addEventListener('click', function() {
    slides[correntSlide].style.display = 'none';
    correntSlide = Math.abs(correntSlide + 1) % slides.length;
    slides[correntSlide].style.display = 'block';

  }
);

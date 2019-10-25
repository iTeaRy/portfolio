var slides = document.querySelectorAll('.projects__slide');
var arrowLeft = document.querySelector('.projects__arrow-left');
var arrowRight = document.querySelector('.projects__arrow-right');
var linkToProject = document.querySelectorAll('.projects__slide-link');
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
for (var i = 0; i < linkToProject.length; i++) {
  linkToProject[i].addEventListener('click', function() {
      document.querySelector('header').style.display = 'none';
      document.querySelector('.education').style.display = 'none';
      document.querySelector('.projects').style.display = 'none';
      document.querySelector('iframe').style.display = 'block';
    }
  );
}

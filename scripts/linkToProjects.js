var linkToProject = document.querySelectorAll('.projects__slide-link');
for (var i = 0; i < linkToProject.length; i++) {
   linkToProject[i].addEventListener('click', function() {
        document.querySelector('header').style.display = 'none';
        document.querySelector('.education').style.display = 'none';
        document.querySelector('.projects').style.display = 'none';
        document.querySelector('iframe').style.display = 'block';
     }
  );
}

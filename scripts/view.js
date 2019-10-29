var btnView = document.querySelector('#view');
var wrapper = document.querySelector('.wrapper');
var body = document.querySelector('body');
var btnback = document.querySelector('#back');
var link = document.querySelectorAll('.projects__slide-link');
var img = document.querySelectorAll('.projects__slide img');
var view = 'desktop';
btnView.addEventListener('click', function() {
    if (view == 'desktop') {
      wrapper.style.width = '375px';
      view = 'mobile';
      btnView.innerHTML = "Desktop";
      document.querySelector('.projects').style.fontSize = '16px';
      for (var i = 0; i < link.length; i++) {
        link[i].style.fontSize = '12px';
        link[i].style.bottom = '-27vh';
        img[i].style.height ='200px';
      }
    }
    else {
      wrapper.style.width = '100%';
      view = 'desktop';
      btnView.innerHTML = 'Mobile';
      document.querySelector('.projects').style.fontSize = '30px';
      for (var i = 0; i < link.length; i++) {
        link[i].style.fontSize = '30px';
        link[i].style.bottom = '-65vh';
        img[i].style.height ='auto';
      }
    }
  }
);
btnback.addEventListener('click', function() {
    document.location.href = 'index.html';
  }
);

var btnView = document.querySelector('#view');
var wrapper = document.querySelector('.wrapper');
var body = document.querySelector('body');
var btnback = document.querySelector('#back');
var view = 'desktop';
btnView.addEventListener('click', function() {
    if (view == 'desktop') {
    wrapper.style.width = '375px';
    view = 'mobile';
    btnView.innerHTML = "Desktop";
    }
    else {
      wrapper.style.width = '100%';
      view = 'desktop';
      btnView.innerHTML = 'Mobile';
    }
  }
);
btnback.addEventListener('click', function() {
    document.location.href = 'index.html';
  }
);

var expansionPanel = document.querySelector('#expansion-panel');
var expansionPanelContent = document.querySelector('#expansion-panel__content');
var arrowUp = document.querySelectorAll('.education__arrow-up');
var arrowDown = document.querySelectorAll('.education__arrow-down');
expansionPanel.addEventListener('click', function(){
   if (expansionPanelContent.style.display == 'block') {
     expansionPanelContent.style.display = 'none';
     for (var i = 0; i < arrowUp.length; ++i) {
       arrowUp[i].style.display = 'none';
       arrowDown[i].style.display = 'inline';
     }
 }
   else {
     expansionPanelContent.style.display = 'block';
     for (var i = 0; i < arrowUp.length; ++i) {
       arrowUp[i].style.display = 'inline';
       arrowDown[i].style.display = 'none';
      }
   }
  }
);

window.onload = function(){
  var hamburger = document.getElementsByClassName('hamburger')[0];
  var header = document.getElementsByClassName('header')[0];
  
  hamburger.onclick = function(){
    hamburger.classList.toggle("open");
    header.classList.toggle("open");
  }

  var $svg = $('svg').drawsvg({
       duration: 4000
  });
  $svg.drawsvg('animate');
}

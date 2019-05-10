window.onload = function(){
  var hamburger = document.getElementsByClassName('hamburger')[0];
  var header = document.getElementsByClassName('header')[0];

  hamburger.onclick = function(){
    hamburger.classList.toggle("open");
    header.classList.toggle("open");
  }
}

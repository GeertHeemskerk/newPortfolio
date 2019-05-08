window.onload = function(){
  var hamburger = document.getElementsByClassName('hamburger')[0];

  hamburger.onclick = function(){
    hamburger.classList.toggle("open");
  }
}

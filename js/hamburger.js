$(window).ready(function(){
  var hamburger = document.getElementsByClassName('hamburger')[0];
  var header = document.getElementsByClassName('header')[0];
  var closeTrigger = false;

  hamburger.onclick = function(){
    if($(".hamburger").hasClass("open")){
      $(".hamburger").removeClass("open");
      $(".header").removeClass("open");
      hamburger.classList.toggle("close");
      header.classList.toggle("close");
    }
    else{
      $(".hamburger").removeClass("close");
      $(".header").removeClass("close");
      hamburger.classList.toggle("open");
      header.classList.toggle("open");
      
      closeTrigger = false;

      $(document).scroll(function(){
        if(!closeTrigger){
          if($(this).scrollTop()){
            $(".hamburger").removeClass("open");
            $(".header").removeClass("open");
            hamburger.classList.toggle("close");
            header.classList.toggle("close");
            closeTrigger = true;
          }
        }
      });
      var mySVG = $('.logo').drawsvg();
      mySVG.drawsvg('animate');
    }
  }
});

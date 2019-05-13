$(window).ready(function(){
  var firstTrigger = false;
  var secondTrigger = false;

  $(document).scroll(function(){
    //console.log($(document).scrollTop());
    if($(this).scrollTop() > 1800 && !firstTrigger){
      var mySVG = $('#coding').drawsvg();
      mySVG.drawsvg('animate');
      $('path').css({
        "fill" : "#646464",
        "-webkit-animation": "opacity 9s"
      });
      firstTrigger = true;
    }if($(this).scrollTop() > 2265 && !secondTrigger){
      var mySVG = $('#designing').drawsvg();
      mySVG.drawsvg('animate');
      $('path').css({
        "fill" : "#646464",
        "-webkit-animation": "opacity 7s"
      });
      secondTrigger = true;
    }
  });
});

$(window).ready(function(){
  var firstTrigger = false;
  var secondTrigger = false;

  $(document).scroll(function(){
    //console.log($(document).scrollTop());

    //FadeIn projects onScroll
    var pt1 = $('#project1').offset().top,
        ph1 = $('#project1').outerHeight(),
        pt2 = $('#project2').offset().top,
        ph2 = $('#project2').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();

    //console.log((pt2+ph2), '= pt2-ph2' , wS);

    if(wS > (pt1+ph1-wH)){
      $('#project1').css({
        "-webkit-animation": "test 1.5s"
      });
      $('#project1').fadeIn(1500);
      // console.log(wS, 'p1');
    }if(wS > (pt2+ph1) + wH){
      $('#project2').css({
        "-webkit-animation": "test 1.5s"
      });
      $('#project2').fadeIn(1500);
    }

    //Drawsvg on scroll animations
    var svgT1 = $('#comp1').offset().top,
        svgH1 = $('#comp1').outerHeight();
        svgT2 = $('#comp2').offset().top,
        svgH2 = $('#comp2').outerHeight();

    //console.log(wS > (svgT2 - svgH2) - wH);

    if(wS > (svgT1 - svgH1) - wH && !firstTrigger){
      var mySVG = $('#coding').drawsvg();
      mySVG.drawsvg('animate');
      $('path').css({
        "fill" : "#646464",
        "-webkit-animation": "opacity 9s"
      });
      firstTrigger = true;
    }if(wS > (svgT2 - svgH2) - wH && !secondTrigger){
      var mySVG = $('#designing').drawsvg();
      mySVG.drawsvg('animate');
      $('path').css({
        "fill" : "#646464",
        "-webkit-animation": "opacity 9s"
      });
      secondTrigger = true;
    }
  });
});

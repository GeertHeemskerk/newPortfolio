$(window).ready(function(){
  var img = $(".imgHolder");

  $("#s1").click(function(){
    if($("#s2" + ".current") || $("#s3" + ".current")){
      img.css('background-image', 'url("img/mockup1.jpg")');
      $("#s1").addClass('current');
      $("#s2").removeClass('current');
      $("#s3").removeClass('current');
    }
  });

  $("#s2").click(function(){
    if($("#s1" + ".current") || $("#s3" + ".current")){
      img.css('background-image', 'url("img/mockup2.jpg")');
      img.addClass('sliderAnimation');
      $("#s2").addClass('current');
      $("#s1").removeClass('current');
      $("#s3").removeClass('current');
    }
  });

  $("#s3").click(function(){
    if($("#s1" + ".current") || $("#s2" + ".current")){
      img.css('background-image', 'url("img/mockup3.jpg")');
      img.addClass('sliderAnimation');
      $("#s3").addClass('current');
      $("#s1").removeClass('current');
      $("#s2").removeClass('current');
    }
  });

});

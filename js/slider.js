$(window).ready(function(){
  var img = $(".imgHolder");

  $("#s1").click(function(){
    if($("#s2" + ".current") || $("#s3" + ".current")){
      img.css('background-image', 'url("img/mockup1.jpg")');

      img.hide();
      img.animate({
        width: "toggle"
      }, 1200);

      $("#s1").addClass('current');
      $("#s2").removeClass('current');
      $("#s3").removeClass('current');
      $("#pName").html('API challenge');
      $("#pDescription").html('School challenge, let two API calls communicate with eachother.');
      $("#number").html('01.');
    }
  });

  $("#s2").click(function(){
    if($("#s1" + ".current") || $("#s3" + ".current")){
      img.css('background-image', 'url("img/mockup2.jpg")');

      img.hide();
      img.animate({
        width: "toggle"
      }, 1200);

      $("#s2").addClass('current');
      $("#s1").removeClass('current');
      $("#s3").removeClass('current');
      $("#pName").html('Clock Challenge');
      $("#pDescription").html('School assignment, Make a clock that response to the time of the day.');
      $("#number").html('02.');
    }
  });

  $("#s3").click(function(){
    if($("#s1" + ".current") || $("#s2" + ".current")){
      img.css('background-image', 'url("img/mockup3.jpg")');

      img.hide();
      img.animate({
        width: "toggle"
      }, 1200);

      $("#s3").addClass('current');
      $("#s1").removeClass('current');
      $("#s2").removeClass('current');
      $("#pName").html('Velvet Music');
      $("#pDescription").html('Group project, design a landing page and a product detail page.');
      $("#number").html('03.');
    }
  });
});

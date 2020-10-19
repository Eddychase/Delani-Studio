$(document).ready(function() {

  $(".Hover").hover(function(){
    $(this).animate({opacity:'1'});
  })
 

  $("#design").click(function(){
    $("#showDesign").toggle();
    $(".hideDesign").toggle();
  })

  $("#development").click(function(){
    $("#development-showing").toggle();
    $(".hideDevelopment").toggle();
  })

  $("#productManagement").click(function(){
    $("#showProductmanagement").toggle();
    $(".hideProductmanagement").toggle();
  })
});

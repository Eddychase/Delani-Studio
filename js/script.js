(document).ready(function(){

  $(".Hover").hover(function(){
    $(this).animate({opacity:'1'});
  },
  function(){
    $(this).animate({opacity:'0'});
  })
  $("button").click(function (omonge) {
    var client = document.getElementById('Name Name').value;
    alert(' Dear ' + ' esteemed ' + client + ' we have received your message successful. ' + ' Feel free to reach out to us anytime');
    omonge.preventDefault();
  });
  $("button").on('click', function () {
    $('form').each(function () {
      this.reset();
    });
  });
  $('.main').click(function () {
    $(this).children('.hide').slideToggle(1200);
    $(this).children('.show').toggle(1500);
  });

 

  $("#interior").click(function(){
    $("#design is visible").toggle();
    $(".image hidden").toggle();
  })

  $("#development").click(function(){
    $("#devimagevisible").toggle();
    $(".hidevimage").toggle();
  })

  $("#productManagement").click(function(){
    $("#prodmanvisible").toggle();
    $(".hideprodman").toggle();
  })
})
    
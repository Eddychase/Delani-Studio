(document).ready(function(){

  $('.submit').click(function () {
    var Name = $('#mce-NAME').val();
    var Email = $('#mce-EMAIL').val();
    var Message = $('#mce-MESSAGE');
    
    if (Name == '' || Email == '' || Message == '') {
        alert('Please Fill in the form correctly!');
    } else {
        alert(' Greetings ' + Name + ' We have received your message. Thank you.');
    }
});

  
$("#design").click(function(){
  $("#design-showing").toggle();
  $(".hide-design-image").toggle();
})

$("#development").click(function(){
  $("#development-showing").toggle();
  $(".hide-development-image").toggle();
})

$("#productManagement").click(function(){
  $("#product-management-showing").toggle();
  $(".hide-product-management").toggle();
})
})

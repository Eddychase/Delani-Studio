(document).ready(function(){
  
  $('form#myForm').submit(function(){
      var name = $('#name').val();
      var pass = $('#email').val();
      var mess = $('#mess').val();
      alert("Hi " +name+ " we have received your message and we will get in touch. Thank you for contacting us.");
    });
});

 

  

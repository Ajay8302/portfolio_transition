$(document).ready(function() {
  // Your JavaScript code here
  $('.btn').click(function(){
      $('body').hasClass('open') ? $('body').removeClass('open') : $('body').addClass('open');
  });
});

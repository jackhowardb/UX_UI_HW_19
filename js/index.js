$(function(){
  $(window).scroll(function() {              
    $('#footer').toggle($(document).scrollTop() > 100);
      });
  })

$(document).ready(function () {
  
    $(window).scroll(function () {
      if ($(this).scrollTop() > 20) {
        $('header').addClass('header-scroll')
      } else {
        $('header').removeClass('header-scroll');
      }
    });
  });


$(window).scroll(function() {
    $('.mov').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('bounceInRight');
      }
    });
  });

$(window).scroll(function() {
    $('.movee').each(function(){
      var imagePos = $(this).offset().top;
      var topOfWindow = $(window).scrollTop();
      if (imagePos < topOfWindow+500) {
        $(this).addClass('fadeInDown');
      }
    });
  });
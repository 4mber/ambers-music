// Arrow/Link scroll to Sections
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});	


// Responsive Nav Update
if ($(window).width() > 415) {
  function update() {
      if ($(window).scrollTop() > 200) {
          $('#page-head').animate({
              "font-size": '36px'
          }, 100);
      } else {
          $('#page-head').animate({
              "font-size": '70px'
          }, 100);
      }
  }
  setInterval(update, 500);
}
else {
}
if ($(window).width() > 415) {
  function update() {
      if ($(window).scrollTop() > 200) {
          $('#main-nav').animate({
              "opacity": '0.0'
          }, 100);
      } else {
          $('#main-nav').animate({
              "opacity": '1.0'
          }, 100);
      }
  }
  setInterval(update, 500);
}
else {
}
if ($(window).width() > 415) {
  function update() {
      if ($(window).scrollTop() > 200) {
          $('#small-nav').animate({
              "opacity": '1.0'
          }, 100);
      } else {
          $('#small-nav').animate({
              "opacity": '0.0'
          }, 100);
      }
  }
  setInterval(update, 500);
}
else {
}


// Animated down arrow
$(window).scroll(function() {
  $('.arrows').fadeOut( "slow", function() {});
});
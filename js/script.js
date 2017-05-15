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


// Nav Scroll Update
$(function () {
  $(document).scroll(function () {
    var $nav = $("#nav-contain");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
  });
});
if ($(window).width() > 415) {
  function update() {
      if ($(window).scrollTop() > 1100 && $(window).scrollTop() < 3400) {
          $('#small-socials').animate({
              "opacity": '1.0'
          }, 100);
      }
      else {
          $('#small-socials').animate({
              "opacity": '0.0'
          }, 100);
      }
  }
  setInterval(update, 500);
}
else {
}


// Responsive Music/Bio Head Switcher

if ($(window).width() > 1000) {
  function update() {
      if ($(window).scrollTop() > 1700) {
          $('#bio-title').animate({
              "opacity": '1.0'
          }, 100);
          $('#music-title').animate({
                "opacity": '0.0'
          }, 100);
      } else {
          $('#bio-title').animate({
              "opacity": '0.0'
          }, 100);
          $('#music-title').animate({
                "opacity": '1.0'
          }, 100);
      }
  }
  setInterval(update, 100);
}
else {
      function update() {
      if ($(window).scrollTop() > 1300) {
          $('#bio-title').animate({
              "opacity": '1.0'
          }, 100);
          $('#music-title').animate({
                "opacity": '0.0'
          }, 100);
      } else {
          $('#bio-title').animate({
              "opacity": '0.0'
          }, 100);
          $('#music-title').animate({
                "opacity": '1.0'
          }, 100);
      }
  }
  setInterval(update, 100);
}

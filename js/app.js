

  window.sr = ScrollReveal();
  sr.reveal('.navbar', {
      duration: 1500,
      origin: 'bottom'
  });
  sr.reveal('.welcome', {
    delay: 600,
    duration: 1000,
    origin: 'left',
    distance: '300px'
});
  sr.reveal('.showcase-left', {
      delay: 900,
      duration: 1500,
      origin: 'top',
      distance: '300px'
  });
  sr.reveal('.showcase-right', {
      delay: 900,
      duration: 1500,
      origin: 'right',
      distance: '300px'
  });
  sr.reveal('.btn', {
      delay: 900,
      duration: 1500,
      origin: 'right',
      distance: '300px'
  });
  sr.reveal('#testimonial', {
    delay: 900,
    duration: 1500,
    origin:'bottom',
    distance: '300px'
  });
  sr.reveal('.service-box', {
    delay: 1000,
    duration: 2000,
    origin: 'top',
    distance: '300px'
});

sr.reveal('.service-ico', {
  delay: 1500,
  duration: 2000,
  origin: 'bottom',
  distance: '300px'
});

sr.reveal('.exp-left', {
  delay: 2000,
  duration: 1500,
  origin: 'left',
  distance: '300px'
});
sr.reveal('.exp-right1', {
  delay: 2100,
  duration: 1500,
  origin: 'right',
  distance: '300px'
});
sr.reveal('.exp-right2', {
  delay: 2200,
  duration: 1500,
  origin: 'right',
  distance: '300px'
});
sr.reveal('.exp-right3', {
  delay: 2300,
  duration: 1500,
  origin: 'right',
  distance: '300px'
});
sr.reveal('.mywork-left1', {
  delay: 3100,
  duration: 1500,
  origin: 'left',
  distance: '300px'
});

sr.reveal('.mywork-left2', {
  delay: 3200,
  duration: 1500,
  origin: 'left',
  distance: '300px'
});
sr.reveal('.mywork-left3', {
  delay: 3250,
  duration: 1500,
  origin: 'left',
  distance: '300px'
});
sr.reveal('.github-widget', {
  delay: 3000,
  duration: 1500,
  origin: 'right',
  distance: '300px'
});


$(function() {
  // Smooth Scrolling
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
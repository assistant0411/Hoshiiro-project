(function() {
    var parallax, speed;
  
    parallax = document.querySelectorAll('.parallax-image');
  
    speed = 0.25;
  
    window.onscroll = function() {
      return [].slice.call(parallax).forEach(function(el, i) {
        var dist;
        dist = $(window).scrollTop() - $(el).offset().top;
        return $(el).css('top', dist * speed + 'px');
      });
    };
  
  }).call(this);
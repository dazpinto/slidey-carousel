(function( $ ) {
  $.fn.slidey = function(options) {
    return this.each(function() {
      var target = $(this);
      var children = target.children();
      var settings = $.extend( {
        'speed'  : 500,
        'element_width'  : children.first().width(),
        'element_height' : children.first().height(),
        'controls_either_side' : false,
        'elements_displayed': 1
      }, options);
      var full_width = children.length * settings.element_width;
      var carousel_width = settings.elements_displayed * settings.element_width;
      target
        .children()
          .css('float','left')
          .width(settings.element_width)
          .wrapAll($('<div />').width(full_width))
      .end()
      .css('overflow','hidden')
      .width(carousel_width)
      .height(settings.element_height);

      var prev_button = $('<a href="#">Previous</a>').click(function(e){
          e.preventDefault();
          if ($(target).scrollLeft() == 0){
            $(target).animate({scrollLeft:full_width},settings.speed)
          }else{
            $(target).animate({scrollLeft:"-="+settings.element_width},settings.speed)
          }
        });

      var max_scroll = ((children.length - settings.elements_displayed) * settings.element_width);

      var next_button = $('<a href="#">Next</a>').click(function(e){
          e.preventDefault();
          if ($(target).scrollLeft() == max_scroll){
            $(target).animate({scrollLeft: 0},settings.speed);
          }else{
            $(target).animate({scrollLeft:"+="+settings.element_width},settings.speed, function(){console.log($(target).scrollLeft());});
          }
        });

      if (settings.controls_either_side){
        target.parent()
          .prepend(prev_button).append(next_button);
      }
      else{
        target.parent()
          .append(prev_button).append(next_button);
      }
    });
  };
})( jQuery );

(function( $ ) {
  $.fn.slidey = function(options) {
    return this.each(function() {
      var target = $(this);
      var children = target.children();

      var settings = $.extend( {
        'speed'  : 500,
        'element_width'  : children.first().width(),
        'element_height' : children.first().height(),
        'display': 1,
        'next_button' : null,
        'previous_button' : null,
        'loop' : true
      }, options);

      var full_width = children.length * settings.element_width;
      var carousel_width = settings.elements_displayed * settings.element_width;
      var max_scroll = ((children.length - settings.elements_displayed) * settings.element_width);

      target
        .children()
          .css('float','left')
          .width(settings.element_width)
          .wrapAll($('<div />').width(full_width))
      .end()
      .css('overflow','hidden')
      .width(carousel_width)
      .height(settings.element_height);

      var prev_button;
      var next_button;

      if (settings.previous_button){
        prev_button = $(settings.previous_button);
      }else{
        prev_button = $('<a href="#" class="slidey_previous">Previous</a>').appendTo(target.parent());
      }

      if (settings.next_button){
        next_button = $(settings.next_button);
      }else{
        next_button = $('<a href="#" class="slidey_next">Next</a>').appendTo(target.parent());
      }

      prev_button.click(function(e){
        e.preventDefault();
        if (settings.loop && ($(target).scrollLeft() == 0)){
          $(target).animate({scrollLeft:full_width},settings.speed)
        }else{
          $(target).animate({scrollLeft:"-="+settings.element_width},settings.speed)
        }
      });

      next_button.click(function(e){
        e.preventDefault();
        if (settings.loop && ($(target).scrollLeft() == max_scroll)){
          $(target).animate({scrollLeft: 0},settings.speed);
        }else{
          $(target).animate({scrollLeft:"+="+settings.element_width},settings.speed);
        }
      });
    });
  };
})( jQuery );

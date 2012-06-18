(function( $ ) {
  $.fn.slidey = function(options) {
    return this.each(function() {
      var target = $(this);
      var children = target.children();
      var settings = $.extend( {
        'speed'  : 500,
        'element_width'  : children.first().width(),
        'element_height' : children.first().height()
      }, options);
      var full_width = children.length * settings.element_width;

      target
        .children()
          .css('float','left')
          .width(settings.element_width)
          .wrapAll($('<div />').width(full_width))
      .end()
      .css('overflow','hidden')
      .width(settings.element_width)
      .height(settings.element_height)
      .parent()
      .append(
        $('<a href="#">Previous</a>').click(function(e){
          e.preventDefault();
          if ($(target).scrollLeft() == 0){
            $(target).animate({scrollLeft:full_width},settings.speed)
          }else{
            $(target).animate({scrollLeft:"-="+settings.element_width},settings.speed)
          }
        })
      )
      .append(
        $('<a href="#">Next</a>').click(function(e){
          e.preventDefault();
          if ($(target).scrollLeft() == (full_width - settings.element_width)){
            $(target).animate({scrollLeft: 0},settings.speed)
          }else{
            $(target).animate({scrollLeft:"+="+settings.element_width},settings.speed)
          }
        })
      );
    });
  };
})( jQuery );
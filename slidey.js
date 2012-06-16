(function( $ ) {
  $.fn.slidey = function() {
  	var full_width = 0;
    var element_height = this.children().first().height();
    var element_width = this.children().first().width();
    var full_width = this.children().length * element_width;
    var target = this;
    this
      .children()
        .css('float','left')
        .width(element_width)
        .wrapAll($('<div id="aaa" />').width(full_width))
    .end()
    .css('overflow','hidden')
    .width(element_width)
    .height(element_height)
    .parent()
    .append(
      $('<a href="#">Previous</a>').click(function(e){
        e.preventDefault();
        if ($(target).scrollLeft() == 0){
          $(target).animate({scrollLeft:full_width},500)
        }else{
          $(target).animate({scrollLeft:"-="+element_width},500)
        }
      })
    )
    .append(
      $('<a href="#">Next</a>').click(function(e){
        e.preventDefault();
        if ($(target).scrollLeft() == (full_width - element_width)){
          $(target).animate({scrollLeft: 0},500)
        }else{
          $(target).animate({scrollLeft:"+="+element_width},500)
        }
      })
    );
  };
})( jQuery );
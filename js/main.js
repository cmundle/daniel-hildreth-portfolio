// Open main mobile menu
$('#menu').on('click', function() {
  $('#menuOverlay').addClass("open");
  $('body').addClass("noScroll");
});

// Open social mobile menu
$('#social').on('click', function() {
  $('#socialOverlay').addClass("open");
  $('body').addClass("noScroll");
});

// Close mobile menus
$('.closeButton').on('click', function() {
  $('#menuOverlay').removeClass("open");
  $('#socialOverlay').removeClass("open");
  $('body').removeClass("noScroll");
});

// Close mobile menu if open and screen rotates back from a medium breakpoint
$(window).on('changed.zf.mediaquery', function(event, newSize, oldSize) {
  if (oldSize = 'medium') {
    $('#menuOverlay').removeClass("open");
    $('#socialOverlay').removeClass("open");
    $('body').removeClass("noScroll");
  }
});

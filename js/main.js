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

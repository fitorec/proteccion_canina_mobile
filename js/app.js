$(function() {
  // Handler for .ready() called.
  console.log($('.main-btn'));
  $('.main-btn').click(function() {
      $(this).addClass('ui-btn-active');
      var idSubmenu = '#details-' + $(this).attr('id');
      $(idSubmenu).fadeIn();
  });
});

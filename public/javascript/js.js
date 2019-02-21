$(document).ready(function() {

  // Hidden menu
  $('.btn-menu, .hidden-menu ul a').click(function () {
    if ($('.hidden-menu').is(':hidden')) {
      $('.hidden-menu').show();
    } else {
      $('.hidden-menu').hide();
    }
  });


});
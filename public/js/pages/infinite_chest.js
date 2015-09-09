$(document).ready(function() {
  window_height = $(document).height();
  var scroll_percent = 0;
  $(window).scroll(function(e){
    scroll_percent = $(this).scrollTop()/window_height;
    $(".pages-read").html(Math.floor(scroll_percent*1079));
    $(".footnotes-read").html(Math.floor(scroll_percent*332));
  });
});

$(document).ready(function() {
  window_height = $(document).height();
  var scroll_percent = 0;
  $(window).scroll(function(e){
    scroll_percent = ($(this).scrollTop() + $(this).height())/window_height;
    console.log($(this), window_height);
    $(".pages-read").html(Math.round(scroll_percent*1079));
    $(".footnotes-read").html(Math.round(scroll_percent*332));
  });
});

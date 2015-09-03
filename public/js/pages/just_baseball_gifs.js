$(document).ready(function() {
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search?q=baseball&api_key=dc6zaTOxFJmzC&limit=100",
    type: 'GET',
    dataType: 'json',
  })
  .done(function( object ) {
    var data = object.data;
    (".btn btn-default btn-lg").on("click", function(){
      $('.gif-container').append("<img src='" + data[0].images.downsized_large.url + "' />");
      $(".btn btn-default btn-lg").hide()
      $(".btn btn deftault").show()
      });
    for (var i = 0; i < data.length; i++) {
      (".btn btn-default").on("click", function(){
      $('.gif-container').append("<img src='" + data[i+1].images.downsized_large.url + "' />");
      })
    }
  });
    
  .fail(function( e ) {
    console.log('error' , e);
  });
});

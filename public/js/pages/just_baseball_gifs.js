$(document).ready(function() {
  $.ajax({
    url: "http://api.giphy.com/v1/gifs/search?q=baseball&api_key=dc6zaTOxFJmzC&limit=100",
    type: 'GET',
    dataType: 'json',
  })
  .done(function( object ) {
    var data = object.data;
    for (var i = 0; i < data.length; i++) {
      $('.gif-container').append("<img src='" + data[i].images.downsized_large.url + "' />");
    }
  })
  .fail(function( e ) {
    console.log('error' , e);
  });
});

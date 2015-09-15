$(document).ready(function() {
    var gif_array = [];
    var gif_index = 0;
    var random = Math.floor(Math.random() * 70) + 1

    $.ajax({
        url: "http://api.giphy.com/v1/gifs/search?q=baseball&api_key=dc6zaTOxFJmzC&limit=100&offset=" + random,
        type: 'GET',
        dataType: 'json',
    }).done(function(object) {
        var data = object.data;
        console.log(data);
        $(".btn btn-default btn-lg").on("click", function() {
            $(".btn btn-default btn-lg").hide()
            $(".btn btn deftault").show()
        });
        for (var i = 0; i < data.length; i++) {
            gif_array.push(data[i].images.original.url);
        }
    }).fail(function(e) {
        $gif_container.prepend("Failed to retrieve gifs. Check console for error.");
        console.log('error', e);
    });

    $(".btn-default").on("click", function() {
        console.log(gif_array[gif_index], gif_index);
        $(".gif-container").html("<img src='" + gif_array[gif_index] + "' />");
        gif_index = gif_index + 1;
    })
});

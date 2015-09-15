$(document).ready(function() {

    // We can change our parameters here.
    var params = {
        bgColor: "rgb(312,311,3)"
            // maxRad: 150px;
            // minRad: 10px;
    }

    // Initialize canvas
    var canvas = document.getElementById("circles");
    var ctx = canvas.getContext("2d");

    // Get window dimensions and make canvas full screen
    canvas.width = $(document).width();
    canvas.height = $(document).height();

    // Fill the canvas background
    ctx.fillStyle = params.bgColor;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    //Defines Radius of Circle


    // Draws a circles
    var drawCircle = function(x, y) {
        var radius = Math.floor(Math.random() * (150 - 1 + 1) + 1);
        console.log(x, y);
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, 2 * Math.PI);
        ctx.stroke();
    }

    // Draw a circle wherever user clicks
    $("#circles").on('click', function(e) {
        console.log(e);
        drawCircle(e.pageX, e.pageY);
    });

});

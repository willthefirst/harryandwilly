$(document).ready(function() {

    // Params
    var square_dims = 300;
    var padding = 30;
    var spacing = 20;
    var clock_color = "#580000";

    var square_center = square_dims / 2 + padding;

    // Initialize canvas
    var canvas = document.getElementById("the-clock");
    var ctx = canvas.getContext("2d");

    // Set canvas dimensions
    canvas.width = square_dims + 2 * padding;
    canvas.height = square_dims + 2 * padding;

    // Draws the progress
    var drawClock = function(current, total, radius) {
      var percent = current / total;
      ctx.beginPath();
      ctx.arc(square_center, square_center, radius - padding, -0.5 * Math.PI, (percent * 2 * Math.PI - 0.5 * Math.PI));
      ctx.lineWidth = 15;
      ctx.strokeStyle = clock_color;
      ctx.stroke();
    }

    // Update the canvas Clock
    var updateCanvasClock = function(hour, minute, second) {
      var hourHand = drawClock(hour, 24, square_center);
      var minuteHand = drawClock(minute, 60, square_center - (spacing));
      var secondHand = drawClock(second, 60, square_center - (spacing * 2));
    }

    //Getting current time in hrs, mins, secs
    var getTime = function () {
      var currTime = new Date();
      var hours = currTime.getHours();
      var minutes = currTime.getMinutes();
      var seconds = currTime.getSeconds();
      updateCanvasClock(hours, minutes, seconds);
    }

    //calling get time every 1/2 second
    setInterval(getTime, 500);

});

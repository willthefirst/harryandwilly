$(document).ready(function() {

  // Params
  var square_dims = 300;
  var spacing = 20;

  var square_center = square_dims/2;

  // Initialize canvas
  var canvas = document.getElementById("the-clock");
  var ctx = canvas.getContext("2d");

  // Set canvas dimensions
  canvas.width = square_dims;
  canvas.height = square_dims;

  // Draws the progress
  var drawClock = function( current , total , radius ) {
      var percent = current/total;
      ctx.beginPath();
      ctx.arc(square_center,square_center,radius,-0.5*Math.PI,(percent*2*Math.PI - 0.5*Math.PI));
      ctx.stroke();
  }

  // Update the canvas Clock
  var updateCanvasClock = function( hour, minute, second ) {
    drawClock( hour , 24 , square_center);
    drawClock( minute , 60 , square_center-(spacing));
    drawClock( second , 60 , square_center-(spacing*2));;
  }

  // Sample call of the updateClock function
  updateCanvasClock(16,30,45);
});

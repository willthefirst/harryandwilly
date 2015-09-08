$(document).ready(function() {

  // Initialize canvas
  var canvas = document.getElementById("circles");
  var ctx = canvas.getContext("2d");

  // Draws a circles
  var drawCircle = function( x , y ) {
    var radius = Math.floor(Math.random() * (150 - 1 +1 ) + 1);
      ctx.beginPath();
      ctx.arc(x,y,radius,0,2*Math.PI);
      ctx.stroke();
  }
});

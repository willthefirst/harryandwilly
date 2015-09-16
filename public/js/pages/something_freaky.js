(function() {

  // Params
  var spacing = 100; // spacing between circles
  var growthFactor = 5; // how quickly the circles grow

  // Initialize canvas
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.getElementsByTagName('body')[0].appendChild(canvas);

  colors = [
    "#000", "#fff", "red"
  ]

  // Alternates colors of drawn circles.
  var colorIndex = 0;
  var nextColor = function() {
    var color = "";
    if (colorIndex >= (colors.length-1)) {
      colorIndex = 0;
    } else {
      colorIndex++;
    }
    return colors[colorIndex];
  }

  var circles = 0;

  // Grow a circle
  var drawIt = function(color) {
    var i = 0;
    console.log("Circle #: " + circles + " color= " + color);
    return function draw() {
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(canvas.width/2, canvas.height/2, i, 0, 2 * Math.PI);
      ctx.fill();
      i+=1*growthFactor;
      // Growing circles until they are huge
      if (i < canvas.width) {
        window.requestAnimationFrame(draw);
        if (i === spacing) {
          circles++
          drawIt(nextColor())();
        }
      }
    }
  };
  drawIt(nextColor())();
})();

(function() {

  // Initialize canvas
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");

  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.getElementsByTagName('body')[0].appendChild(canvas);

  colors = [
    "#000", "#e0e0e0", "rgb(63, 217, 115)"
  ]

  // Alternates colors of drawn circles.
  var colorIndex = 0;
  var nextColor = function() {
    var color = "";
    if (colorIndex >= colors.length) {
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
    return function draw() {
      // Stop drawing once the circle is big enough
      // ctx.clearRect(0,0,canvas.width,canvas.height);
      ctx.fillStyle = color;
      ctx.beginPath();
      ctx.arc(canvas.width/2, canvas.height/2, i, 0, 2 * Math.PI);
      ctx.fill();
      console.log('bang');
      i+=1;
      if (i < canvas.width) {
        window.requestAnimationFrame(draw);
      } else {
        circles++;
        console.log(circles);
      }
    }


  };
  var go =  drawIt(nextColor());
  window.setInterval(go,3000);

})();

// From http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/

document.addEventListener("DOMContentLoaded", function(e) {
  // Create the canvas
  var canvas = document.createElement("canvas");
  var ctx = canvas.getContext("2d");
  console.log(window);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  document.getElementById("game-container").appendChild(canvas);

  // Game objects
  var dot = {
  	x: canvas.width/2,
  	y: canvas.height/2,
    r: 40, // Radius
    color: "rgb(249, 205, 73)"
  };

  var hits = 0;
  var misses = 0;

  // Event handling
  addEventListener("mousedown", function(e) {

  }, false);

  // Reset the game when the player click a dot
  var reset = function () {
    // Move the dot somewhere new
  };

  // Update game objects
  var update = function () {

  }

  var updateFastestCatch = function() {
    var caught_now = Date.now();
    var catchTime = caught_now - lastCatch;
    lastCatch = caught_now;
    if (catchTime <= fastestCatch) {
      fastestCatch = catchTime;
    }
  }

  // Draw everything
  var render = function () {

    // Draw background
    ctx.fillStyle = "rgb(53, 219, 219)"
    ctx.fillRect(0,0,canvas.width,canvas.height);

    // Draw dot
    ctx.fillStyle = dot.color;
    ctx.beginPath();
    ctx.arc(dot.x, dot.y, dot.r , 0 , 2*Math.PI);
    ctx.fill();
    ctx.stroke();
  };

  // Cross-browser support for requestAnimationFrame
  var w = window;
  requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

  // The main game loop
  var main = function () {
  	var now = Date.now();
  	var delta = now - then;

  	update(delta / 1000);
  	render();

  	then = now;

  	// Request to do this again ASAP
  	requestAnimationFrame(main);
  };

  // Let's play this game!
  var then = Date.now();
  var lastCatch = Date.now();
  reset();
  main();
});

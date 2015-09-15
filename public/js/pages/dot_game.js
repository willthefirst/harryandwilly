// From http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/

document.addEventListener("DOMContentLoaded", function(e) {
    // Create the canvas
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    document.getElementById("game-container").appendChild(canvas);

    // Game objects
    var dot = {
        x: canvas.width / 2,
        y: canvas.height / 2,
        r: 40, // Radius
        minRadius: 10,
        maxRadius: 80,
        color: "rgb(249, 205, 73)"
    };

    var hits = 0;
    var misses = 0;

    // Event handling
    addEventListener("click", function(e) {
        // Is the click in the dot
        if (Math.sqrt((e.x - dot.x) * (e.x - dot.x) + (e.y - dot.y) * (e.y - dot.y)) < dot.r) {
            hits++;
            reset();
        } else {
            misses++;
        }
        console.log("Hits: " + hits + " | Misses: " + misses);
    }, false);

    // Reset the game when the player click a dot
    var reset = function() {
        // Resize the dot
        dot.r = Math.random() * (dot.maxRadius - dot.minRadius) + dot.minRadius;

        // Color the dot
        dot.color = getRandomColor();

        // Move the dot
        dot.x = Math.random() * ((canvas.width - dot.r) - dot.r) + dot.r;
        dot.y = Math.random() * ((canvas.height - dot.r) - dot.r) + dot.r;
    };

    // Draw everything
    var render = function() {

        // Draw background
        ctx.fillStyle = "rgb(53, 219, 219)"
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        // Draw dot
        ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.r, 0, 2 * Math.PI);
        ctx.fill();
        ctx.stroke();

        // Draw score
        ctx.fillStyle = "rgb(250, 250, 250)";
        ctx.font = "14px Comic Sans MS";
        ctx.textAlign = "left";
        ctx.textBaseline = "top";
        ctx.fillText("Hits: " + hits, 4, 0);
        ctx.fillText("Misses: " + misses, 4, 18);


    };

    // Cross-browser support for requestAnimationFrame
    var w = window;
    requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

    // The main game loop
    var main = function() {
        var now = Date.now();
        var delta = now - then;

        render();

        then = now;

        // Request to do this again ASAP
        requestAnimationFrame(main);
    };

    // Let's play this game!
    var then = Date.now();
    reset();
    main();
});

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

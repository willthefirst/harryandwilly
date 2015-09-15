// From http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/

document.addEventListener("DOMContentLoaded", function(e) {

    // Game objects
    var hits = 0;
    var misses = 0;
    var score = 0;

    var number = 0;

    // Event handling
    $(document).on('keydown', function(e) {
         
        if (String.fromCharCode(e.which) === number.toString()) {
            reset();
            hits += 5;
           
            //flash big + 5 
            $('#five').css("color", getRandomColor());
            $('#five').show(0).delay(200).hide(0);
        } else {
            misses += 10;
            //flash big -10
            $('#ten').css("color", getRandomColor());
            $('#ten').show(0).delay(200).hide(0);
        }
        score = Math.floor(hits - misses);
        $(".score-number").html(score);
    });

    var reset = function() {
        var score
        number = Math.floor(Math.random() * 10);
        $("#number").html(number).css("color", getRandomColor());
        $("body").css("background-color", getRandomColor());
    };

});

function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

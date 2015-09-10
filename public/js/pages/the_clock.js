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

    // Update the canvas Clock: Seconds, Minutes, Hours
    var updateSecondHand = function(second) {
        var secondHand = drawClock(second, 60, square_center - (spacing * 2));
    }

    var updateMinuteHand = function(minute) {
        var minuteHand = drawClock(minute, 60, square_center - (spacing));
    }

    var updateHourHand = function(hour) {
        var hourHand = drawClock(hour, 12, square_center);

    }
   
   //Overwrite each hand with white
    var clearSecondHand = function(){
      ctx.beginPath();
      ctx.arc(square_center, square_center, 120, 0, Math.PI*2, true); 
      ctx.closePath();
      ctx.fillStyle = "#fff";
      ctx.fill();
    }   

    var clearMinuteHand = function() {
      ctx.beginPath();
      ctx.arc(square_center, square_center, 140, 0, Math.PI*2, true); 
      ctx.closePath();
      ctx.fillStyle = "#fff";
      ctx.fill();
    }   

    var clearHourHand = function() {
      ctx.beginPath();
      ctx.arc(square_center, square_center, 160, 0, Math.PI*2, true); 
      ctx.closePath();
      ctx.fillStyle = "#fff";
      ctx.fill();
    } 


    //Updating the clock
    var getTime = function() {
      var currTime = new Date();
      var hours = currTime.getHours();
      var minutes = currTime.getMinutes();
      var seconds = currTime.getSeconds(); 
      if (hours > 12){
        var hours = currTime.getHours()-12;
        }
        updateSecondHand(seconds);
        updateMinuteHand(minutes);
        updateHourHand(hours);
        if (seconds == 59) {
            updateMinuteHand(minutes);
            clearSecondHand();
        }
        if (minutes == 59) {
            updateHourHand(hours);
            clearMinuteHand();
        }
        if (hours==12) {
          clearHourHand();
        }
    }
     


      //calling get time every 1/2 second
      setInterval(getTime, 500);

});

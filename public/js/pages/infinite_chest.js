$(document).ready(function() {
    window_height = $(document).height();
    
    var available;
    var half_screen;
    var height;
    var scroll_percent = 0;
    var quarter_screen;
    $(window).scroll(function(e) {
        scroll_percent = ($(this).scrollTop() + $(this).height()) / window_height;
        $(".pages-read").html(Math.round(scroll_percent * 1079));
        $(".footnotes-read").html(Math.round(scroll_percent * 332));
        available = $(document).height();
        percentage_of_page = 0.5;
        half_screen = available * percentage_of_page;
        quarter_screen = available * .75
        height = $(window).scrollTop();
        if ((height > half_screen) && (height < quarter_screen)) {
            displayMessage();
        }

    });
});


var displayMessage = function(){
var messagesArray = ["Keep on Going, Almost There!", "Tired Yet?", 
"It isn't Infinite for nothing", "Wondering about the futility of it all?", 
"What do you think entertainment really consists of?"]
var randomMessage = messagesArray[Math.floor(Math.random()*messagesArray.length)];
$("#box").append(randomMessage).show(0).delay(2000).fadeOut(300);

}
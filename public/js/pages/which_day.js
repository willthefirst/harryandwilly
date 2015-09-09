$(document).ready(function() {
    $('#datepicker_submit').on('click', function(e) {
        e.preventDefault();
        var answer = "";

        // Gets the user's date.
        var date = $('#datepicker_entry').val()
        console.log(date);
        var answer = date.getDay();

        //object that stores days and codes
        var dayHolder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var date = "December 25, 1995 23:15:00"
        
        console.log(date);

        // Spits our answer back into the HTML.
        $('.answer').html(date + ' is a ' + answer);
    })
});

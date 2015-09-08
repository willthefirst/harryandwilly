$(document).ready(function() {
    $('#datepicker_submit').on('click', function(e) {
        e.preventDefault();
        var answer = "";

        // Gets the user's date.
        var date = $('#datepicker_entry').val();
        //object that stores days and codes
        var dayHolder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var dayReturned = function() {
            var day = date.getDay();
            for (var i = 0; i < dayHolder.length; i++)
                if (dayHolder[i] == day) {
                    var answer = dayHolder[i]
                } else {
                    return alert("It appears your date doesn't exist, please enter it using the correct format")
                }


        }




        // We've saved the user's entry to the variable "date".
        // Calculate the day of the week below, and saving it to
        // the variable "answer".



        // Spits our answer back into the HTML.
        $('.answer').html(date + ' is a ' + answer);
    })
});

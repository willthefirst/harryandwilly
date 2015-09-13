$(document).ready(function() {
    $('#datepicker_submit').on('click', function(e) {
        e.preventDefault();
        var answer = "";

        // Gets the user's date.
        var date = new Date($('#datepicker_entry').val());
        date.setDate(date.getDate()+ 1);
       console.log(date);
        //error message
        if (date.toString() === "Invalid Date") {
            alert("Please Enter a Valid Date!")
        } else {   
        var answer = date.getDay();
        var displayAnswer;
        //object that stores days and codes
        var dayHolder = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        var displayAnswer = dayHolder[answer]

        //Formatting adjustment of the date display
        var displayDate =  date.toString();
        var displayDate = displayDate.substring(4,15);
    
        
        console.log(typeof displayDate);

        // Spits our answer back into the HTML.
        $('.answer').html(displayDate + ' is a ' +  displayAnswer);
    }
    })
});

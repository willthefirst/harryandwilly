$(document).ready(function(){
  $('#datepicker_submit').on('click', function(e) {
    e.preventDefault();
    var answer= "";

    // Gets the user's date.
    var date = $('#datepicker_entry').val();

    // We've saved the user's entry to the variable "date".
    // Calculate the day of the week below, and saving it to
    // the variable "answer".



    // Spits our answer back into the HTML.
    $('.answer').html(date + ' is a ' + answer);
  })
});

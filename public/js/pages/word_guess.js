// Dumby array of words to guess
var answers = ["uniformise","zidkijah","bookrest","dartingness","splendiferously","stadiometer","mesogloea","provoking","unsmokily","undersupport","nonrecessive","recency","currency","wis","fissionability","interlace","anderson","covenanter","muniting","gnostic","meretriciousness","rec","d","velitation","woodmancraft","volscian","lodgeable","philos","jauntiest","sanitised","quebecker","algerian","kylin","uninstrumental","scleroprotein","relet","napkin","interjoist","entomolegist","reproving","motion","polypemon","unhelved","vocal","ray","integrability","unscourged","adactylous","methenyl","photomechanical","minutia","rebato","marconigraph","smearier","demythify","sachet","shamelessness","faroes","mannerlessness","unborrowing","anesthetize","rowting","uninitialled","ramsden","lazar","serratia","nerval","podagral","xenocryst","rollskating","unsuffusive","algebraic","patronizer","cottonade","smilax","antioxidizing","detachedly","cassowaries","biarritz","tetrazene","unassailed","survive","cathie","zoophobia","epitomised","gravedigger","sachsen","origenism","persecutingly","goon","cyanogenetic","centring","interradiating","amidst","androscoggin","topiary","respectfully","unabruptly","edaphic","unmate", "melungeon"];

// The word to guess
var word = "";
var numFound = 0;
var lettersGuessed = [];

var reset = function() {
  word = "";
  numFound = 0;
  lettersGuessed = [];

  $('.word').html("");
  $('.wrong').html("");

  // Set a new word to guess
  word = answers[Math.floor(Math.random()*answers.length)];
  
  // Create the empty spaces on the page
  for (var i = 0; i < word.length; i++) {
    $(".word").append('<span class="word-letter">' + word[i] + '</span>');
  }
}

var isAlreadyGuessed = function(letter) {
  for (var i = 0; i < lettersGuessed.length; i++) {
    if (lettersGuessed[i] === letter) {
      return true;
    }
  }
  return false;
}

$(document).ready(function() {
  reset();
  // Listen for key input
  $(document).on('keyup', function(e) {
    var keyPressed = String.fromCharCode(e.which).toLowerCase();
    var selector = ".word-letter:contains(" + keyPressed + ")";
    if word.includes(keyPressed){

  
    // Is keyPressed is in the word?
    if (word.indexOf(keyPressed) > -1) {
      if (!isAlreadyGuessed(keyPressed)) {
        numFound += $(selector).length;
        lettersGuessed.push(keyPressed);
        $(selector).addClass("found");
      }
      // If user has guessed the whole word
      if (numFound === word.length) {
        $('.word-letter').addClass('victory').removeClass('found');
        window.setTimeout(function(){
          reset();
        }, 2000)
      }
    } else {
      if (!isAlreadyGuessed(keyPressed)) {
        lettersGuessed.push(keyPressed);
        $(".wrong").append('<span class="guessed-wrong">' + keyPressed + '</span>');
      }
    }
  });

});

var reset = function() {
        var score
        number = Math.floor(Math.random() * 10);
        $("#number").html(number).css("color", getRandomColor());
        $("body").css("background-color", getRandomColor());
    };


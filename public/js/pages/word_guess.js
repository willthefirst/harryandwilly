// Dumby array of words to guess
var answers = ["uniformise","zidkijah","bookrest","dartingness","splendiferously","stadiometer","mesogloea","provoking","unsmokily","undersupport","nonrecessive","recency","currency","wis","fissionability","interlace","anderson","covenanter","muniting","gnostic","meretriciousness","rec","d","velitation","woodmancraft","volscian","lodgeable","philos","jauntiest","sanitised","quebecker","algerian","kylin","uninstrumental","scleroprotein","relet","napkin","interjoist","entomolegist","reproving","motion","polypemon","unhelved","vocal","ray","integrability","unscourged","adactylous","methenyl","photomechanical","minutia","rebato","marconigraph","smearier","demythify","sachet","shamelessness","faroes","mannerlessness","unborrowing","anesthetize","rowting","uninitialled","ramsden","lazar","serratia","nerval","podagral","xenocryst","rollskating","unsuffusive","algebraic","patronizer","cottonade","smilax","antioxidizing","detachedly","cassowaries","biarritz","tetrazene","unassailed","survive","cathie","zoophobia","epitomised","gravedigger","sachsen","origenism","persecutingly","goon","cyanogenetic","centring","interradiating","amidst","androscoggin","topiary","respectfully","unabruptly","edaphic","unmate", "melungeon"];

// The word to guess
var word = "";

var reset = function() {
  // Set a new word to guess
  word = answers[Math.floor(Math.random()*answers.length)];
  console.log(word);
  // Create the empty spaces on the page
  for (var i = 0; i < word.length; i++) {
    $(".word").append('<span class="word-letter">' + word[i] + '</span>');
  }
}


$(document).ready(function() {

  reset();

  // Listen for key input
  $(document).on('keyup', function(e) {
    var keyPressed = String.fromCharCode(e.which).toLowerCase();
    var selector = ".word-letter:contains(" + keyPressed + ")";

    // Is keyPressed is in the word?
    if (word.indexOf(keyPressed) > -1) {
      $(selector).addClass("found");
    } else {
      console.log("wrong");
    }
  });

});

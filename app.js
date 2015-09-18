// set variables for environment
var express = require('express');
var app = express();
var path = require('path');

// views as directory for all template files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs'); // use either jade or ejs

// instruct express to server up static assets
app.use(express.static('public'));

// Routes!
app.get('/', function(req, res) {
  res.render('index');
});

// Sample page sample_page
app.get('/sample_page', function(req, res) {
  res.render('sample_page');
});

// Day 2: Just Baseball Gifs
app.get('/just-baseball-gifs', function(req, res) {
  res.render('just_baseball_gifs');
});

// Day 3: Bookmarklets
app.get('/bookmarklets', function(req, res) {
  res.render('bookmarklets');
});

// Day 4: Circle Canvas
app.get('/circle-canvas', function(req, res) {
  res.render('circle_canvas');
});

// Day 5: Which Day?
app.get('/which-day', function(req, res) {
   res.render('which_day');
});

// Day 6: Synoym Autocorrect
app.get('/synonym-autocorrect', function(req, res) {
  res.render('synonym_autocorrect');
});


// Day 7: Crazy Typer
app.get('/crazy-typer', function(req, res) {
  res.render('crazy_typer');
});


// Day 8: The Clock
app.get('/the-clock', function(req, res) {
  res.render('the_clock');
});

// Day 9: Infinite Chest
app.get('/infinite-chest', function(req, res) {
  res.render('infinite_chest');
});

// Day 10: Just Headlines
app.get('/just-headlines', function(req, res) {
  res.render('just_headlines');
});

// Day 11: Simple Game
app.get('/simple-game', function(req, res) {
  res.render('simple_game');
});

// Day 12: Dot Game
app.get('/dot-game', function(req, res) {
  res.render('dot_game');
});

// Day 13: Speed Numbers
app.get('/speed-numbers', function(req, res) {
  res.render('speed_numbers');
});

// Day 14: Something Freaky
app.get('/something-freaky', function(req, res) {
  res.render('something_freaky');
});

// Day 15: Word Guess
app.get('/word-guess', function(req, res) {
  res.render('word_guess');
});




// Set server port
app.listen(process.env.PORT || 3000)
console.log('server is running');

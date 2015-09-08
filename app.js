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

// Day 7: The Clock
app.get('/the-clock', function(req, res) {
  res.render('the_clock');
});




// Set server port
app.listen(process.env.PORT || 3000)
console.log('server is running');

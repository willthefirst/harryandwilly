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

// Day 2: Which Day?
app.get('/which-day', function(req, res) {
  res.render('which_day');
});

// Day 4: Crazy Typer
app.get('/crazy-typer', function(req, res) {
  res.render('crazytyper');
});

// Day 7: Synoym Autocorrect
app.get('/synonym-autocorrect', function(req, res) {
  res.render('synonym_autocorrect');
});


// Set server port
app.listen(process.env.PORT || 3000)
console.log('server is running');

// Setup
var params = {
  // Adding a source creates the button for it on the page.
  sources: [
     {
      url   : "http://elitedaily.com/feed/",
      name  : "Elite Daily"
    },
    {
      url   : "http://feeds.feedburner.com/TheAtlantic?format=xml",
      name  : "The Atlantic"
    },
    {
      url   : "http://www.newrepublic.com/rss.xml",
      name  : "The New Republic"
    }
  ],
  // Add template sentences here following the format.
  opinions: [
    "Have you read $TITLE by $AUTHOR yet? You should.",
    "You can't call yourself educated unless you've read this: $TITLE.",
    "I spat up my double latte all over my Mac Air after seeing this: $TITLE.",
    "$AUTHOR really hit the nail on the head, can't believe this is not more of an issue.",
    "Where does $AUTHOR come up with this bullshit: $TITLE.",
    "This reads like it was written by 100 monkeys shitting on a typewriter: $TITLE."
  ]
}

$(document).ready(function() {

  // Generate buttons for our sources
  for (var i = 0; i < params.sources.length; i++) {
    $("#sources")
    .append('<button id="js-source-' + params.sources[i].name.replace(/ /g, '-').toLowerCase() + '" class="source-button" data-source="'+ params.sources[i].url  +'">' + params.sources[i].name + '</button>')
  }

  // Click handler for buttons.
  $(".source-button").on('click', function() { getRSS( $(this).attr("data-source")) });
});

// Gets RSS feed data
function getRSS( url ) {
  $.ajax({
    url: convertToJSON( url ),
    dataType: "jsonp",
  }).done(function(data) {
    var items = extractHeadlines(data);
    var sentence = "";
    $(".article-holder").html("");
    for (var i = 0; i < items.length; i++) {
        $("#template-article")
          .clone()
          .appendTo(".article-holder")
          .removeAttr("id")
          .html(opinionate(items[i].author, items[i].title));
    }
  }).fail(function(e) {
    console.log("Ajax error:" , e);
  });
}

// Uses Google's tool to convert XML to JSON
function convertToJSON( string ) {
  return "https://ajax.googleapis.com/ajax/services/feed/load?v=2.0&q=" + string + "&num=20";
}

// Returns info from RSS
function extractHeadlines( object ) {
  var articles_info = [];
  var articles = object.responseData.feed.entries;
  for (var i = 0; i < articles.length; i++) {
    articles_info.push({
      author: articles[i].author,
      title: articles[i].title
    });
  }
  return articles_info;
}

function opinionate( author, title, callback ) {
  var rand = Math.floor(Math.random() * params.opinions.length);
  var complete_sentence = params.opinions[rand].replace("$AUTHOR" , author).replace("$TITLE" , '"'+title+'"');
  return complete_sentence;
}

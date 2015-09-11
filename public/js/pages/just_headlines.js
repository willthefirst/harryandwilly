$(document).ready(function() {

  var URL_NYT = "";
  var URL_ATL = "";
  var URL_ELITE = "http://elitedaily.com/feed/";

  // Get Elite Daily's RSS feed
  $.ajax({
    url: convertToJSON(URL_ELITE),
    dataType: "jsonp",
  }).done(function(data) {
    var items = extractHeadlines(data);
    for (var i = 0; i < items.length; i++) {
      $("#template-article")
      .clone()
      .appendTo(".article-holder")
      .removeAttr("id")
      .html( opinionate( items[i].author, items[i].title ));
    }
  }).fail(function(e) {
    console.log("Ajax error:" , e);
  });

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

  function opinionate( author, title ) {
    var opinions = [
      "Have you read $TITLE by $AUTHOR yet? You should.",
      "You can't call yourself educated unless you've read this: $TITLE.",
      "I spit my double latte all over my Mac Air after seeing this: $TITLE.",
      "$AUTHOR really hit the nail on the head, can't believe this is not more of an issue.",
      "Where does $AUTHOR come up with bullshit: $TITLE.",
      "This reads like it was written by 100 monkeys shitting on a typewriter: $TITLE."
    ]
    for (var i = 0; i < opinions.length; i++) {
      opinions[i] = opinions[i].replace("$AUTHOR" , author).replace("$TITLE" , '"'+title+'"');
    }
    return opinions[Math.floor(Math.random() * opinions.length)];
  }
});

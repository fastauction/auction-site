$(function(){
    url = "http://rss.autoweek.com/?page=n-55998";
    $.ajax({
    type: "GET",
    url: document.location.protocol + '//ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=1000&callback=?&q=' + encodeURIComponent(url),
    dataType: 'json',
    error: function(){
        console.alert('autoweek rss feed not loaded');
    },
    success: function(xml){
        values = xml.responseData.feed.entries;
        console.info("Current Autoweek RSS feed: ",values);
        console.info(values[0].title);
        console.info(values[0].contentSnippet);
        $(".rss-feed").append("<span>" + values[1].title + " --- " + values[1].contentSnippet + " --- " + values[2].title + "</span>");
    }
  });
});

module.exports.parseAndDisplay = function(data){
    data.response.setHeader('Content-Type', 'application/json');
    var temp = JSON.parse(data.body);
    console.log('here');
    var result = proccessSection(temp);
    data.response.send(result);
}

function proccessSection(data){

    var section = {};

    section.articleTeasers = [];
    /*
        Apple news works as follows
        An Escenic url is provided to the conversion tool
        A) http://apple-feed.thesun.co.uk/sol/homepage/feeds/applenews/applenewslive/applenewslivetopstories/
        1. From there, the conversion tool loops through the articleTeasers object, gets the object with the provided id
        2. From the object it picks up the articleUrl and makes an ajax request to eedUrl.protocol + '//' + feedUrl.host + articleTeaser.articleUrl
        In this case is protocol and host from A http://apple-feed.thesun.co.uk + the url from the feed /sol/homepage/6879261/Cops-remove-giant-penis-drawn-on-frozen-lake-so-pranksters-make-an-ever-BIGGER-one.html
        This returns teh escenic feed for an article
    */
    data.results.forEach(function(item, index) {
            section.articleTeasers.push({
                articleId: item.id,
                articleUrl: "/applenews/feed/article/"+item.id,
                articleData : {
                    teaserHeadline: item.title,
                    teaserText : item.subtitle
                }
            });
            console.log(index,' ------');
    });

    return section;
}
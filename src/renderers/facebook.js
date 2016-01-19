module.exports.parseAndDisplay = function(data){
    data.response.setHeader('Content-Type', 'text/xml');

    data.response.render('facebook',{
        articles: createRssFeed(data)
    });
}

function createRssFeed(data){
    var content = JSON.parse(data.body);
    var articles = [];
    content.results.forEach(function(item, index){
        articles.push({
            title:item.title,
            link:item.link,
            id:item.id,
            pubDate:item.dateLive,
            authors: item.authors,
            description: item.description,
            subtitle: item.subtitle,
            body: item.body,
            timeStampPublished:item.dateLive,
            dateAndTimePublished: item.dateLive,
            timeStampUpdated: item.dateUpdated,
            dateAndTimeUpdated: item.dateUpdated
        });
    });
    return articles;
}
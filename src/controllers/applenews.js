var requestService = require('../services/requestService');
var appleNewsRenderer = require('../renderers/applenews');

module.exports.getSection = function (request, response , next) {
        requestService.getContentById(request, response, next).then(appleNewsRenderer.parseAndDisplay);
}

module.exports.getSectionArticles = function (request, response , next) {
        //we don't have an apple news collection therefore just use a random one
        // the following id correcsponds to this collection http://www.heraldsun.com.au/entertainment/confidential
        request.params.id = "b84832220a15a2176d46d1162b76fb89";
        requestService.getCollection(request, response, next).then(appleNewsRenderer.parseAndDisplay);
}

module.exports.getArticleFeed = function (request, response, next) {
    requestService.getContentById(request, response, next).then(parseRequest);
};

function parseRequest (data) {
        data.response.setHeader('Content-Type', 'application/json');
        var content = JSON.parse(data.body);
        data.response.send({
            articleId:content.id,
            pageData: {
                    pageUrl: content.link
            }
        });
}

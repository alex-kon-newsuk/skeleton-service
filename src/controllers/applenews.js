var requestService = require('../services/requestService');
var appleNewsRenderer = require('../renderers/applenews');

module.exports.getSingleArticle = function (request, response , next) {
        requestService.getContentById(request, response, next).then(appleNewsRenderer.parseAndDisplay);
}
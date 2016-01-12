var requestService = require('../services/requestService');
var webRenderer = require('../renderers/web');

module.exports.getSingleArticle = function (request, response , next) {
        requestService.getContentById(request, response, next).then(webRenderer.parseAndDisplay);
}
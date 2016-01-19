var requestService = require('../services/requestService');
var facebookRenderer = require('../renderers/facebook');

module.exports.getSingleArticle = function (request, response , next) {
        requestService.getCollection(request, response, next).then(facebookRenderer.parseAndDisplay);
}
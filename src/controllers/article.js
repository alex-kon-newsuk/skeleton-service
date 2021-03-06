var requestService = require('../services/requestService');

module.exports.getSingleArticle = function (request, response, next) {
    requestService.getContentById(request, response, next).then(parseRequest);
 };

function parseRequest (data) {
    var processedData = processResponseData (data.body);
    data.response.setHeader('Content-Type', 'application/json');
    data.response.send(processedData);
}

function processResponseData (data) {
    return data;
}
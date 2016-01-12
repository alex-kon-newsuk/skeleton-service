var requestService = require('../services/requestService');

module.exports.get = function (request, response, next) {
    requestService.get(request, response, next).then(parseRequest);
 };

function parseRequest (data) {
    var processedData = processResponseData (data.body);
    data.response.setHeader('Content-Type', 'application/json');
    data.response.send(data);
}

function processResponseData (data) {
    return data;
}
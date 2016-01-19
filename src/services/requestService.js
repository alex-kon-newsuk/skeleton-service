var requestModule = require('request');
var Promise = require('promise');
var config = require('config');

var basepath = config.get('CAPI.basepath');
var version = config.get('CAPI.version');
var apikey = config.get('CAPI.apikey');

module.exports.getContentById = function (request, response, next, callback) {

    return new Promise(function (resolve, reject) {

        requestModule(basepath + '/content/' + version + '/' + request.params.id +
                      '?format=json&includeRelated=true&html=full%2Cbody&api_key=' + apikey,
                        function (error, httpResponse, body) {

            resolve({
                body : body,
                response : response
            });

        });
    });

}

module.exports.getCollection = function (request, response, next, callback) {

     return new Promise(function (resolve, reject) {

         requestModule(basepath + '/content/' + version + '/collection/' + request.params.id +
                       '?format=json&includeRelated=true&html=full%2Cbody&api_key=' + apikey,
                         function (error, httpResponse, body) {
             resolve({
                 body : body,
                 response : response
             });

         });
     });

 }

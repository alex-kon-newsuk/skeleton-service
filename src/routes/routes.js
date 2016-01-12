var articleRoutes = require('./article');
var web = require('./web');
var facebook = require('./facebook');
var applenews = require('./applenews');

module.exports = function (app) {
    articleRoutes(app);
    facebook(app);
    applenews(app);
    web(app);
}
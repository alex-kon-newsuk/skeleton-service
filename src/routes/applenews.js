var appleNewsController = require('../controllers/applenews');

module.exports = function (app) {
    app.get('/applenews/feed/article/:id', function (request, response, next) {
        appleNewsController.getArticleFeed(request, response, next);
    });
    app.get('/applenews/:section/', function (request, response, next) {
        response.setHeader('Content-Type', 'text/xml');
        response.render('applenews-section');
    });
    app.get('/applenews/:section/:subsection', function (request, response, next) {
        appleNewsController.getSectionArticles(request, response, next);
    });
}
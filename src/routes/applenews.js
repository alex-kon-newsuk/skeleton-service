var appleNewsController = require('../controllers/applenews');

module.exports = function (app) {
    app.get('/applenews/article/:id', function (request, response, next) {
        appleNewsController.getSingleArticle(request, response, next);
    });
}
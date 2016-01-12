var webController = require('../controllers/web');

module.exports = function (app) {
    app.get('/web/article/:id', function (request, response, next) {
        webController.getSingleArticle(request, response, next);
    });
}
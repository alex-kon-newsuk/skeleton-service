var facebookController = require('../controllers/facebook');

module.exports = function (app) {
    app.get('/facebook/article/:id', function (request, response, next) {
        facebookController.getSingleArticle(request, response, next);
    });
}
var articleController = require('../controllers/article');

module.exports = function (app) {

    app.get('/article/:id', function (request, response, next) {
        articleController.get(request, response, next);
    });


}
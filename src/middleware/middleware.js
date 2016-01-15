var viewMiddleware = require('./view-middleware');

module.exports = function (app) {
    viewMiddleware(app);
}



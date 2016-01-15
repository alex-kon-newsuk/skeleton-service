var express = require('express');
var routes = require('./routes/routes');
var middleware = require('./middleware/middleware');
var app = express();

middleware(app);
routes(app);

app.listen(3000, function () {
  console.log('Skeleton app listening on port 3000!');
});
This is a node.js service that at the moment calls the AU CAPI for data and exposes the following urls :

/web/article/:id
Ask for a single article to be displayed (uses a basic web site renderer)

/facebook/article/:id
Ask for a single article to be displayed (uses the facebook instant articles renderer)

/applenews/article/:id
Ask for a single article to be displayed (uses the apple news renderer)


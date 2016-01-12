#This is a node.js service that calls the AU CAPI. 
It exposes several urls, each one corresponding to a different renderer engine. It displays the content in different formats (simple web site, facebook instant articles, apple news)

To start the app 
1. Navigate in the src folder
2. npm install
3. nodemon app.js

##/web/article/:id
Ask for a single article to be displayed (uses a basic web site renderer)

##/facebook/article/:id
Ask for a single article to be displayed (uses the facebook instant articles renderer)

##/applenews/article/:id
Ask for a single article to be displayed (uses the apple news renderer)



// Require the Express Module
var express = require('express');

// Create an Express App
var app = express();
// Require body-parser (to receive post data from clients)
var bodyParser = require('body-parser');
// Integrate body-parser with our App
app.use(bodyParser.json());
app.use(express.static( __dirname + '/public/dist/public' ));

require('./server/config/routes.js')(app);
// Express is listening on port 8000
var server = app.listen(8000, function() {
    console.log("Node.js is running on port 8000!");
});

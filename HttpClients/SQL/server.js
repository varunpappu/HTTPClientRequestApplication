/* Starting up a server with required port number */

var express = require('express');
var cors = require('cors')
var bodyparser = require('body-parser');
var connection = require('./connection');
var routes = require('./api');

var app = express();
app.use(cors());
app.use(bodyparser.urlencoded({
    extended: true
}));
app.use(bodyparser.json());

connection.init();
routes.configure(app);

var server = app.listen(8081, function() {
    console.log('Server listening on port ' + server.address().port);
});

/* Creates a local static server 
   for hosting the extension */

var connect = require('connect');
var serveStatic = require('serve-static');
connect().use(serveStatic(__dirname)).listen(8080, function() {
    console.log('Server running on 8080...');
}); 
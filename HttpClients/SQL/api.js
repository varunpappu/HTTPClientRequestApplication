/* The code below contains the routes for each 
   HTTP method calls (GET, POST, PUT, DELETE)
   with a specified URL call at the end
*/
var todo = require('./models/customer');

module.exports = {
    configure: function(app) {

        app.get('/', function(req, res) {
            // do something here.
        });

        // GET Method
        app.get('/listUsers/', function(req, res) {
            todo.get(res);
        });

        // POST Method
        app.post('/listUsers/', function(req, res) {
            todo.create(req.body, res);
        });

        // PUT Method
        app.put('/listUsers/', function(req, res) {
            todo.update(req.body, res);
        });

        // DELETE Method
        app.delete('/listUsers/:id/', function(req, res) {
            todo.delete(req.params.id, res);
        });
    }
};

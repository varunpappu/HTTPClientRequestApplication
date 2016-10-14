/* Connection is established using the HTTP request 
   (GET, PUT, UPDATE, DELETE) and returned as results
*/
var connection = require('../connection');

function Todo() {

    // GET - Retrieves the Customer Details
    this.get = function(res) {
        connection.acquire(function(err, con) {
            con.query('select * from Customer_details', function(err, result) {
                con.release();
                res.send(result);
            });
        });
    };

    // POST - Creation of new data in the database
    this.create = function(todo, res) {
        connection.acquire(function(err, con) {
            con.query('insert into Customer_details set ?', todo, function(err, result) {
                con.release();
                if (err) {
                    res.send({
                        status: 1,
                        message: 'Customer Details creation failed'
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'Customer Details created successfully'
                    });
                }
            });
        });
    };

    // UPDATE - Updating an already existing value in the database
    this.update = function(todo, res) {
        connection.acquire(function(err, con) {
            con.query('update Customer_details set ? where CustomerID = ?', [todo, todo.CustomerID], function(err, result) {
                con.release();
                if (err) {
                    res.send({
                        status: 1,
                        message: 'Customer Details update failed'
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'Customer Details updated successfully'
                    });
                }
            });
        });
    };

    // DELETE - Deleting a value from database
    this.delete = function(id, res) {
        connection.acquire(function(err, con) {
            con.query('delete from Customer_details where CustomerID = ?', [id], function(err, result) {
                con.release();
                if (err) {
                    res.send({
                        status: 1,
                        message: 'Failed to delete'
                    });
                } else {
                    res.send({
                        status: 0,
                        message: 'Deleted successfully'
                    });
                }
            });
        });
    };
}

module.exports = new Todo();

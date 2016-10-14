// Dependencies
var restful = require('node-restful');
var mongoose = restful.mongoose;

// Schema
var customerSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    address: String,
    city: String
});

// Return model
module.exports = restful.model('Customers', customerSchema);

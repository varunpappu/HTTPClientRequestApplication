// Dependencies
var express = require('express');
var router = express.Router();

//Product
var Customer = require('../models/customer');
Customer.methods(['get', 'put', 'post', 'delete']);
Customer.register(router, '/customers');

// Return router
module.exports = router;

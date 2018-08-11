'use strict'

var express = require('express');
var ProductController = require('../controllers/product');
var api = express.Router();

api.post('/new-product', ProductController.newProduct);

module.exports = api;
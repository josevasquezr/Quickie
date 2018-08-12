'use strict'

var express = require('express');
var ProductController = require('../controllers/product');
var api = express.Router();

api.get('/get-product/:id', ProductController.getProduct);
api.get('/get-product-list/:page?', ProductController.getProductList);
api.post('/new-product', ProductController.newProduct);
api.put('/update-product/:id', ProductController.updateProduct);
api.delete('/delete-product/:id', ProductController.deleteProduct);

module.exports = api;
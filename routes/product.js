'use strict'

var express = require('express');
var ProductController = require('../controllers/product');
var api = express.Router();

var multipart = require('connect-multiparty');
var md_upload = multipart({ uploadDir: './uploads/products' });

api.get('/get-product/:id', ProductController.getProduct);
api.get('/get-product-list/:page?', ProductController.getProductList);
api.post('/new-product', ProductController.newProduct);
api.put('/update-product/:id', ProductController.updateProduct);
api.delete('/delete-product/:id', ProductController.deleteProduct);
api.post('/upload-image-product/:id', [md_upload], ProductController.uploadImage);
api.get('/get-image-product/:imageFile', ProductController.getImageFile);

module.exports = api;
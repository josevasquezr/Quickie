'use strict'

var express = require('express');
var orderController = require('../controllers/order');
var api = express.Router();

api.post('/new-order', orderController.newOrder);
api.post('/update-order/:id', orderController.updateOrder);
api.get('/get-order/:id', orderController.getOrder);

module.exports = api;
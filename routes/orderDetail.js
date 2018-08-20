'use strict'

var express = require('express');
var OrderDetailController = require('../controllers/orderDetail');
var api = express.Router();

api.post('/new-order-detail', OrderDetailController.newOrderDetail);
api.get('/get-order-detail/:id', OrderDetailController.getOrderDetail);
api.delete('/delete-order-detail/:id&:productId?', OrderDetailController.deleteOrderDetail);

module.exports = api;
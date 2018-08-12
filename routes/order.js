'use strict'

var express = require('express');
var orderController = require('../controllers/order');
var api = express.Router();

api.post('/new-order', orderController.newOrder);

module.exports = api;
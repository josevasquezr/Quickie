'use strict'

var express = require('express');
var UserController = require('../controllers/user');

var api = express.Router();

api.get('/get-user-list', UserController.getUserList);

module.exports = api;
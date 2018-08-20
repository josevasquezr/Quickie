'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var userRoutes = require('./routes/user');
var productRoutes = require('./routes/product');
var orderRoutes = require('./routes/order');
var orderDetailRoutes = require('./routes/orderDetail');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//configurar cabeceras http

//rutas base
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', orderDetailRoutes);

module.exports = app;

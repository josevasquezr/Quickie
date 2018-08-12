'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var userRoutes = require('./routes/user');
var productRoutes = require('./routes/product');
var orderRoutes = require('./routes/order');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//configurar cabeceras http

//rutas base
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);

module.exports = app;

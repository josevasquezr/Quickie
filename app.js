'use strict'
const path = require("path");
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var userRoutes = require('./routes/user');
var productRoutes = require('./routes/product');
var orderRoutes = require('./routes/order');
var orderDetailRoutes = require('./routes/orderDetail');

app.use(express.static("./static"));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + "/static/index.html"));
  });
//configurar cabeceras http

//rutas base
app.use('/api', userRoutes);
app.use('/api', productRoutes);
app.use('/api', orderRoutes);
app.use('/api', orderDetailRoutes);

module.exports = app;

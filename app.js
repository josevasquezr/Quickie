'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var userRoutes = require('./routes/user');
var productRoutes = require('./routes/product');

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//configurar cabeceras http

//rutas base
app.use('/api', userRoutes);
app.use('/api', productRoutes);

app.get('/pruebas', function(request, response){
    response.status(200).send({message: "Esto esta avanzando!"});
});

module.exports = app;

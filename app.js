'use strict'

var express = require('express');
var bodyParser = require('body-parser');

var app = express();

//cargar rutas
var user_routes = require('./routes/user');


app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

//configurar cabeceras http

//rutas base
app.use('/api', user_routes);

app.get('/pruebas', function(request, response){
    response.status(200).send({message: "Esto esta avanzando!"});
});

module.exports = app;

'use strict'

var mongoose = require('mongoose');
var app = require('./app');
var port = process.env.PORT || 3977;

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://josevasquezr:proyectoindustria2018@ds125602.mlab.com:25602/quickiedb', (error, response) => {
    if(error){
        throw error;
    }else{
        console.log('La conexión base de datos esta funcionando correctamente!');

        app.listen(port, function(){
            console.log('Servidor del api rest de Quickie escuchando en http://localhost:' + port);
        });
    }
});

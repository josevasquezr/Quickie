'use strict'
var User = require('../models/user');

function getUserList(request, response){
    User.find((error, products) => {
        if(error){
            response.status(500).send({message: 'Error en la peticion!'});
        }else if(!products){
            response.status(404).send({message: 'No hay Productos!'});
        }else{
            response.status(200).send({
                products
            });
        }
    });
}

module.exports = {
    getUserList
}
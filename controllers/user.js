'use strict'
var User = require('../models/user');

function getUserList(request, response){
    User.find((error, users) => {
        if(error){
            response.status(500).send({message: 'Error en la peticion!'});
        }else if(!users){
            response.status(404).send({message: 'No hay usuarios!'});
        }else{
            response.status(200).send({
                users
            });
        }
    });
}

function newUser(request, response){
    var user = new User();
    var params = request.body;

    user.googleId = params.googleId || '';
    user.firstName = params.firstName || '';
    user.lastName = params.lastName || '';
    user.email = params.email || '';

    user.save(function(error, userStored){
        if(error){
            response.status(500).send({message: 'Error en la peticion!'});        
        }else if(!userStored){
            response.status(404).send({message: 'Error al guardar la usuario!'});        
        }else{
            response.status(200).send({userStored});
        }
    });
}

module.exports = {
    getUserList,
    newUser
}
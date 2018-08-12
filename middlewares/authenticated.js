'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_proyecto';

exports.ensureAuth = function(request, response, functionNext){
    if(!request.headers.authorization){
        return response.status(403).send({message: 'La peticion no tiene cabecera de autenticacion!'});
    }

    var token = request.headers.authorization.replace(/[""']+/g, '');

    try{
        var decodeToken = jwt.decode(token, secret);

        if(decodeToken.expirationDateToken <= moment().unix()){
            return response.status(401).send({message: 'El Token ha expirado'}); 
        }
        
    }catch(ex){
        console.log(ex);
        return response.status(404).send({message: 'Token inválido'});
    }
    
    request.user = decodeToken;

    functionNext();
};
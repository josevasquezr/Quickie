'use strict'

function pruebas(request, response){
    response.status(200).send({message: 'Probando Controlador de producto'});    
}

module.exports = {
    pruebas
}
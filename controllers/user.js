'use strict'

function pruebas(request, response){
    response.status(200).send({message: 'Probando Controlador'});    
}

module.exports = {
    pruebas
}
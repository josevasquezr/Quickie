'use strict'

var Product = require('../models/product');

function pruebas(request, response){
    response.status(200).send({message: 'Probando Controlador de producto'});    
}

function newProduct(request, response){
    var product = new Product();
    var params = request.body;

    product.code = params.code || '';
    product.name = params.name || '';
    product.description = params.description || '';
    product.price = params.price || '';

    if(product.code && product.name && product.price){
        product.save((error, productStored) => {
            if(error){
                response.status(500).send({message: 'Error al guardar producto!'});
            }else{
                response.status(200).send({
                    productStored
                });
            }
        });
    }else{
        response.status(500).send({message: 'Existen datos requeridos'});
    }
}

module.exports = {
    pruebas,
    newProduct
}
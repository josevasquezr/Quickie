'use strict'

var Product = require('../models/product');
var mongoosePaginate = require('mongoose-pagination');

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

function updateProduct(request, response){
    var idProduct = request.params.id;
    var paramsByUpdate = request.body;
    
    Product.findByIdAndUpdate(idProduct, paramsByUpdate, function(error, productUpdated){
        if(error){
            response.status(500).send({message: 'Error al actualizar el producto!'});        
        }else if(!productUpdated){
            response.status(404).send({message: 'No se ha podido actualizar el producto!'});
        }else{
            response.status(200).send({poduct: productUpdated});
        }
    });
}

function getProduct(request, response){
    var idProduct = request.params.id;

    Product.findById(idProduct, function(error, product){
        if(error){
            response.status(500).send({message: 'Error en la Peticion!'});
        }else{
            if(!product){
                response.status(404).send({message: 'El producto no existe!'});
            }else{
                response.status(200).send({product});
            }
        }
    });
}

function getProductList(request, response){
    var page = request.params.page || 1;
    var itemForPage = 15;

    Product.find().sort('code').paginate(page, itemForPage, function(error, products, total){
        if(error){
            response.status(500).send({message: 'Error en la peticion!'});
        }else if(!products){
            response.status(404).send({message: 'No hay Productos!'});
        }else{
            response.status(200).send({
                total: total,
                products: products
            });
        }
    });
}

function deleteProduct(request, response){
    var productId = request.params.id;

    Product.findByIdAndRemove(productId, function(error, productDeleted){
        if(error){
            response.status(500).send({message: 'Error en la peticion!'});
        }else if(!productDeleted){
            response.status(404).send({message: 'No se ha podido eliminar el producto o no existe!'});
        }else{
            response.status(200).send({
                productDeleted
            });
        }
    });
}

module.exports = {
    newProduct,
    updateProduct,
    getProduct,
    getProductList,
    deleteProduct
}
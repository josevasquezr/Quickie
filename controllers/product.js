'use strict'

var Product = require('../models/product');
var fs = require('fs');
var path = require('path');
var mongoosePaginate = require('mongoose-pagination');

function newProduct(request, response){
    var product = new Product();
    var params = request.body;

    product.code = params.code || '';
    product.name = params.name || '';
    product.description = params.description || '';
    product.image = params.image || '';
    product.category = params.category || '';
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

function uploadImage(request, response) {
	var productId = request.params.id;
	var file_name = 'No subido...';

	if (request.files) {
		var file_path = request.files.image.path;
		var file_split = file_path.split('\\');
		var file_name = file_split[2];
		var ext_split = file_name.split('\.');
		var ext = ext_split[1];

		if (ext === 'png' || ext === 'jpg' || ext === 'gif') {
			Product.findByIdAndUpdate(productId, {
				image: file_name
			}, (error, productUpdated) => {
				if (error) {
					response.status(500).send({
						message: 'Error al actualizar imagen del producto'
					});
				} else {
					if (productUpdated) {
						response.status(200).send({
							product: productUpdated
						});
					} else {
						response.status(404).send({
							message: 'No se pudo actualizar la imagen del producto'
						});
					}
				}
			});
		} else {
			response.status(200).send({
				message: 'EL archivo no es válido.'
			});
		}

	} else {
		response.status(200).send({
			message: 'No has subido ninguna imagen...'
		});
	}
}

function getImageFile(request, response) {
	var imageFile = request.params.imageFile;
	var path_file = './uploads/products/' + imageFile;
	fs.exists(path_file, function(exist) {
		if (exist) {
			response.sendFile(path.resolve(path_file));
		} else {
			response.status(200).send({
				message: 'No existe la imagen...'
			});
		}
	});
}

module.exports = {
    newProduct,
    updateProduct,
    getProduct,
    getProductList,
    deleteProduct,
    uploadImage,
    getImageFile
}
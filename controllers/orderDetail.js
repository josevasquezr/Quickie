'use strict'

var OrderDetail = require('../models/orderDetail');
var mongoosePaginate = require('mongoose-pagination');

function newOrderDetail(request, response){
    var params = request.body;
    var orderDetail = new OrderDetail();

    orderDetail.order = params.idOrder || '';
    orderDetail.product = params.idProduct || '';

    if(orderDetail.order && orderDetail.product){
        orderDetail.save(function(error, orderDetailStored){
            if(error){
                response.status(500).send({message: 'Error en la peticion!'});
            }else if(!orderDetailStored){
                response.status(404).send({message: 'Error al guardar detalle de orden!'});
            }else{
                response.status(200).send({
                    orderDetailStored
                });
            }
        });
    }else{
        response.status(500).send({message: 'Existen datos requeridos!'});
    }
}

function getOrderDetail(request, response){
    var idOrder = request.params.id;

    OrderDetail.find({order: idOrder}).sort('product').populate({path: 'product'}).exec(function(error, products){
        if(error){
            response.status(500).send({message: 'Error en la peticion!'});
        }else if(!products){
            response.status(404).send({message: 'No existen productos en el detalle de la orden!'});
        }else{
            response.status(200).send({
                products: products
            });
        }
    });
}

function deleteOrderDetail(request, response){
    var orderId = request.params.id;
    var productId = request.params.productId;
    var filterForDelete = {};

    if(orderId){
        filterForDelete.order = orderId;
    }

    if(productId){
        filterForDelete.product = productId;
    }

    OrderDetail.deleteOne(filterForDelete, function(error, orderDetailDeleted){
        if(error){
            response.status(500).send({message: 'Error en la peticion!'});
        }else if(!orderDetailDeleted){
            response.status(404).send({message: 'No se ha podido eliminar el detalle de la orden!'});
        }else{
            response.status(200).send({
                orderDetailDeleted
            });
        }
    });
}

module.exports = {
    getOrderDetail,
    newOrderDetail,
    deleteOrderDetail
}
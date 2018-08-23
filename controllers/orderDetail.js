'use strict'

var OrderDetail = require('../models/orderDetail');

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

    OrderDetail.deleteMany(filterForDelete, function(error, orderDetailDeleted){
        if(error){
            response.status(500).send({message: 'Error en la peticion!'});
        }else if(orderDetailDeleted && orderDetailDeleted.n === 0){
            response.status(404).send({message: 'No existe detalle de la orden!'});
        }else{
            response.status(200).send({
                orderDetailDeleted
            });
        }
    });
}

function updateOrderDetail(request, response){
    var orderDetailId = request.params.id;
    var paramsByUpdate = request.body;
    
    OrderDetail.findByIdAndUpdate(orderDetailId, paramsByUpdate, function(error, orderDetailUpdated){
        if(error){
            response.status(500).send({message: 'Error en la peticion!'});        
        }else if(!orderDetailUpdated){
            response.status(404).send({message: 'No se ha podido actualizar el detalle de la orden!'});
        }else{
            response.status(200).send({orderDetail: orderDetailUpdated});
        }
    });
}

module.exports = {
    getOrderDetail,
    newOrderDetail,
    deleteOrderDetail,
    updateOrderDetail
}
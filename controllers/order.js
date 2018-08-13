'use strict'

var Order = require('../models/order');
var moment = require('moment');
var mongoosePaginate = require('mongoose-pagination');

function newOrder(request, response){
    var order = new Order();
    var params = request.body;

    order.orderNumber = params.orderNumber || '';
    order.state = params.state || '';
    order.orderDate = moment().unix();
    order.deliveredOrderDate = params.deliveredOrderDate || '';
    order.user = params.user || '';
    order.totalToPay = params.totalToPay || 0;

    if(order.orderNumber
        && order.state
        && order.user
    ){
        order.save(function(error, orderStored){
            if(error){
                response.status(500).send({message: 'Error en la peticion!'});        
            }else if(!orderStored){
                response.status(404).send({message: 'Error al guardar la orden!'});        
            }else{
                response.status(200).send({orderStored});
            }
        });
    }else{
        response.status(500).send({message: 'Llene datos requeridos!'});
    }
}

function updateOrder(request, response){
    var orderId = request.params.id;
    var dataUpdate = request.body;

    Order.findByIdAndUpdate(orderId, dataUpdate, function(error, orderUpdated){
        if(error){
            response.status(500).send({message: 'Error en la peticion!'});                   
        }else if(!orderUpdated){
            response.status(404).send({message: 'Error al editar orden!'});
        }else{
            response.status(200).send({order: orderUpdated});
        }
    });
}

function getOrder(request, response){
    var orderId = request.params.id;

    Order.findById(orderId).populate({path: 'user'}).exec(function(error, order){
        if(error){
            response.status(500).send({message: 'Error en la peticion!'});
        }else if(!order){
            response.status(404).send({message: 'La Orden no existe!'});
        }else{
            response.status(200).send({order});
        }
    });
}

function getOrderList(request, response){
    Order.find().sort('orderNumber').populate({path: 'user'}).exec(function(error, orders){
        if(error){
            response.status(500).send({message: 'Error en la peticion!'});
        }else if(!orders){
            response.status(404).send({message: 'No existen ordenes!'});
        }else{
            response.status(200).send({
                orders: orders
            });
        }
    });
}

function deleteOrder(request, response){
    var orderId = request.params.id;

    Order.findByIdAndRemove(orderId, function(error, orderDeleted){
        if(error){
            response.status(500).send({message: 'Error en la peticion!'});
        }else if(!orderDeleted){
            response.status(404).send({message: 'No se ha podido eliminar la orden o no existe!'});
        }else{
            response.status(200).send({
                orderDeleted
            });
        }
    });
}

module.exports = {
    newOrder,
    updateOrder,
    getOrder,
    getOrderList,
    deleteOrder
}
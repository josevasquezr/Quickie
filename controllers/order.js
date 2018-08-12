'use strict'

var Order = require('../models/order');
var moment = require('moment');

function newOrder(request, response){
    var order = new Order();
    var params = request.body;

    order.orderNumber = params.orderNumber || '';
    order.state = params.state || '';
    order.orderDate = moment().unix();
    order.deliveredOrderDate = params.deliveredOrderDate || '';
    order.idUser = params.idUser || '';
    order.totalToPay = params.totalToPay || 0;

    if(order.orderNumber
        && order.state
        && order.idUser
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

module.exports = {
    newOrder
}
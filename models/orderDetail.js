'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderDetailSchema = Schema({
    orderNumber: { type: Schema.ObjectId, ref: 'Order' },
    idProduct: {type: Schema.ObjectId, ref: 'Product'}
});

module.exports = mongoose.model('OrderDetail', OrderDetailSchema);
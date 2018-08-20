'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderDetailSchema = Schema({
    order: { type: Schema.ObjectId, ref: 'Order' },
    product: {type: Schema.ObjectId, ref: 'Product'}
});

module.exports = mongoose.model('OrderDetail', OrderDetailSchema);
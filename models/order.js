'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = Schema({
    orderNumber: String,
    state: String,
    orderDate: String,
    deliveredOrderDate: String,
    idUser: { type: Schema.ObjectId, ref: 'User' },
    totalToPay: Number
});

module.exports = mongoose.model('Order', OrderSchema);
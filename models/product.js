'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = Schema({
    code: String,
    name: String,
    description: String,
    price: Double
});

module.exports = mongoose.model('Product', ProductSchema);
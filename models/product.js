'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ProductSchema = Schema({
    code: String,
    name: String,
    description: String,
    image: String,
    category: String,
    price: Number
});

module.exports = mongoose.model('Product', ProductSchema);
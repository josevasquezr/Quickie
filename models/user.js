'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = Schema({
    id: String,
    googleId: String,
    firstName: String,
    lastName: String,
    email: String
});

module.exports = mongoose.model('User', UserSchema);
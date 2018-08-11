'use strict'

var jwt = require('jwt-simple');
var moment = require('moment');
var secret = 'clave_secreta_proyecto';

exports.createToken = function(user){
    dataForCreateToken = {
        id: user.id,
        googleId: user.googleId,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        creationDateToken: moment().unix(),
        expirationDateToken: moment().add('30', 'days').unix()
    };

    return jwt.encode(dataForCreateToken, secret);
}
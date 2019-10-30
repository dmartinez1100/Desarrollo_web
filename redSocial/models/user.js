"user strict"

var mongoose = require('mongoose')
var Schema = mongose.Schema;

var UserSchema = Schema({
    name:String,
    surname:String,
    email:String,
    nick:String,
    image:String,
    password:String,
    role:String,
    birthdate:String
})

module.exports = mongose.model('user',UserSchema);
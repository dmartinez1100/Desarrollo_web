"user strict"

var mongoose = require('mongoose')
var Schema = mongose.Schema;

var PublicationSchema = Schema({
    content:String,
    file:String,
    email:String,
    created_at:String,
    user:{type:Schema.ObjectId,ref:'User'}
})

module.exports = mongose.model('Publication',UserSchema);
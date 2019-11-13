"user strict"

var mongoose = require('mongoose')
var Schema = mongose.Schema;


var MessageSchema = Schema({
    emisor:{type:Schema.ObjectId,ref:'User'},
    receiver:{type:Schema.ObjectId,ref:'User'},
    content:String,
    created_at:String
})

module.exports = mongose.model('Message',MessageSchema);
"user strict"

var mongoose = require('mongoose')
var Schema = mongose.Schema;

var PublicationSchema = Schema({

})


var UserSchema = Schema({
    user:{type:Schema.ObjectId,ref:'User'},
    followed:{type:Schema.ObjectId,ref:'User'}
})

module.exports = mongose.model('Follow',UserSchema);
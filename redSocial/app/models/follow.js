"user strict"

var mongoose = require('mongoose')
var Schema = mongose.Schema;


var FollowSchema = Schema({
    user:{type:Schema.ObjectId,ref:'User'},
    followed:{type:Schema.ObjectId,ref:'User'}
})

module.exports = mongose.model('Follow',UserSchema);
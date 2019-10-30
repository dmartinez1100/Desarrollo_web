'use strict'

var mongose = require('mongoose')
var app = require('./app')
var port = 3800;

mongose.Promise = global.Promise;
mongose.connect("mongodb://localhost:27017/redSocial",{useMongoClient:true})
.then(()=>{
    console.log("conexion exitosa");
    app.listen(port,()=>{
        console.log("servidor corriendo, port = 3800")
    })
})
.catch(err => console.log(err))

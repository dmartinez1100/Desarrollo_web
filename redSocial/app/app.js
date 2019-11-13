"use strict"

var express = require('express');
var bodyParser = require('body-parser')
var user_routes = require("./routes/user")
var app = express();

//Cargar Rutas

/*app.get("/",(req,res)=>{
    res.status(200).send({
        message:"Feliz Cumple"
    })
})
app.get("/pruebas",(req,res)=>{
    res.status(200).send({
        message:"lolo"
    })
})
app.post("/",(req,res)=>{
    console.log(req.body);
    res.status(200).send({
        message:"lolo"
    })
})*/
app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use("/api",user_routes)
//Midelwares



//export

module.exports = app;
"use strict"

var express = require('express');
var bodyParser = require('body-parser')
var app = express();

//Cargar Rutas

app.get("/",(req,res)=>{
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
})

//Midelwares

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())



//export

module.exports = app;
'use strict'

var User = require("../models/user")
var bcrypt = require("bcrypt")

function home(req,res){
    res.status(200).send({
        message: "Bienvenido al home"
    })
}

function pruebas(req,res){
    res.status(200).send({
        message:"hola a la ruta de pruebas"
    })
}
function SaveUser(req,res){
    var params = req.body;
    var user = new User();
    console.log(params)

    if(params.name){
        user.name = params.name;
        user.surname = params.surname;
        user.email = params.email;
        user.role = params.role;
        user.image = params.image;
        bcrypt.hash(params.password,null,null,(err,hash)=>{
            user.password = hash;
            user.save((err,userStored)=>{
                if(err){res.status(500).send({message:"error al almacenar datos"})}
                if(userStored){return res.status(200).send({user})}
                else{return res.status(404).send({message:"algo fallo, ni idea que es"})}
            })
        })
        return res.status(200).send(user)
    }
    else{
        return res.status(200).send({message:"envia los datos completos"})
    }
}
module.exports = {home,pruebas,SaveUser}
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
//sign up
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
    }
    else{
        return res.status(200).send({message:"envia los datos completos"})
    }
}
//log in
function LogIn(req,res){
    var params = req.body;
    var email = params.email;
    var password = params.password;

    User.findOne({email:email},(err,user)=>{
        if(err){return res.status(500).send({message:"error al buscar usuario"})}
        if(user){
            bcrypt.compare(password,user.password,(err,check)=>{
                if(err){return res.status(404).send({message:"invalid password"})}
                else{return res.status(200).send({user})}
            })
        }
    })
}
module.exports = {home,pruebas,SaveUser}
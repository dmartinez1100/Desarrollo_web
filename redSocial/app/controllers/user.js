'use strict'

var User = require("../models/user")
var bcrypt = require("bcrypt")
var token = require("../services/jwt")
var pagination = require("mongoose-pagination")

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
    //console.log(params)

    if(params.name){
        user.name = params.name;
        user.surname = params.surname;
        user.email = params.email;
        user.role = params.role;
        user.image = params.image;
        bcrypt.hash(params.password,5,(err,hash)=>{
            user.password = hash;
            //console.log(hash)
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
                if(check){
                    if(params.gettoken){
                        return res.status(200).send({token:token.createToken(user)})
                    }else{
                        return res.status(200).send({user})
                    }
                }
                else{return res.status(404).send({message:"invalid password"})}
            })// Obtener varios usuarios

            function getUsers(req,res){
                var identityId = req.user.sub;
                var page = 1;
            
                if(req.params.page){
                    page = req.params.page;
                }
            
                var itemsPerPage = 3;
            
                User.find().sort("_id")
            }
        }
    })
}

//obtener usuario
function getUser(req, res){
    var userId = req.params.id;
    User.findById(userId,(err, user)=>{
        if(err){
            return res.status(500).send({message:"error al consultar la base de datos"})
        }
        if(!user){
            return res.status(404).send({message:"Usuario no encontrado"})
        }
        return res.status(200).send({user})
    })
}

// Obtener varios usuarios

function getUsers(req,res){
    var identityId = req.user.sub;
    var page = 1;

    if(req.params.page){
        page = req.params.page;
    }

    var itemsPerPage = 3;

    User.find().sort("_id").paginate(page,itemsPerPage,(err,users,total)=>{
        if(err){
            return res.status(500).send({message:"ocurrio un error"})
        }
        if(!users){
            return res.status(404).send({message:"no hay usuarios para mostrar"})
        }
        return res.status(200).send({
            users: users,
            total:total,
            pages:Math.ceil(total/itemsPerPage)
        })
    })
}

module.exports = {home,pruebas,SaveUser,LogIn,getUser,getUsers}
"use strict"

var jwt = require("jwt-simple")
var moment = require("moment")
var secret = "calve_segura123"

function auth(req,res,next){
    if(!req.headers.auth){
        return res.status(403).send({
            message:"La aplicacion no tiene cabecera de autenticacion"
        })
    }
    var token = req.headers.auth.replace(/['"]+/g,'')

    try{
        var payload = jwt.encode(token,secret)
        if (payload.exp <= moment().unix()){
            return res.status(401).send({message:"usuario no autorizado"})
        }
    }
    catch(ex){
        return res.status(500).send({message:"error en autenticacion"})
    }
    req.user = payload;
    next();
}

module.exports = ({auth})
'use strict'

var express = require("express")
var UserController = require("../controllers/user")
var auth = require("../middlewares/auth");

var api = express.Router();

//Definir las rutas

api.get("/home",UserController.home)
api.get("/pruebas",auth.auth,UserController.pruebas)
api.post("/registrar",UserController.SaveUser)
api.post("/login",UserController.LogIn)
api.get("/getuser/:id",auth.auth,UserController.getUser)
api.get("/getusers/:page?",auth.auth,UserController.getUsers)


module.exports = api;
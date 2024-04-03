const userModel = require("../models/user.model");

function home(req,res) {
    res.send("home")
}

function login(req,res) {
    res.send("login")
}

function register(req,res) {
    res.send("register")
}

function addItems(req,res) {
    res.send("addItems")
}

function getItems(req,res) {
    res.send("getItems")
}

function placeOrder(req,res) {
    res.send("placeOrder")
}


module.exports={home,login,register,addItems,getItems,placeOrder}
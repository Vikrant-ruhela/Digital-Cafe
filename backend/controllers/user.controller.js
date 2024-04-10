const User = require("../models/user.model");
const bcrypt=require("bcrypt");

function home(req,res) {
    res.send("home")
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

//validator package add to this..backend nodemodules


const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!(name && email && password)) {
            throw new Error('All fields are required')
        }

        const userExists = await User.findOne({ email })

        if (userExists) {
            throw new Error("User already exists")
        }

        if (password.length < 8) {
            throw new Error('Enter strong password')
        }
 
        const hashPassword = await bcrypt.hash(password, 10)
 
        // const user = await User.create({ name, email, password: hashPassword, pic: pic.secure_url })
        const user = await User.create({ name, email, password: hashPassword })
        user.password = undefined
 
        res.status(201).json({
            success: true,
            message: "user registered successfully",
            user
        })
     } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }

}

const login = async (req, res) => {
    try {
        const { email, password } = req.body

        if (!(email && password)) {
            throw new Error('All fields are required')
        }

        if (password.length < 8) {
            throw new Error('Enter strong password')
        }

        
        const userExists = await User.findOne({ email }).select('+password')

        if (!userExists) {
            throw new Error("User not exists")
        }

        const checkPassword = await bcrypt.compare(password, userExists.password)

        if (!checkPassword) {
            throw new Error("wrong password")
        }

        userExists.password = undefined
 
        res.status(201).json({
            success: true,
            message: "user login successfully",
             user: userExists,
        })
     } catch (error) {
        res.status(400).json({
            success: false,
            message: error.message,
        })
    }
}

function logOut(req, res) {
      res.status(200).json({
        "success": true,
        "message": "User logout success"
    })

}

module.exports={home,login,register,addItems,getItems,placeOrder}
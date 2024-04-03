require('dotenv').config()
console.log(process.env.MONGODB_URI)
const express=require('express')
const app=require('./app')
const connectToDb=require('./config/db')

connectToDb()


app.listen(4000,()=>{
    console.log("server is started")
})
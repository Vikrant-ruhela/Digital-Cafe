require('dotenv').config() 
const express=require('express')
const app=require('./app')
const connectToDb=require('./config/db')

connectToDb()


app.listen(3000,()=>{
    console.log("server is started")
})
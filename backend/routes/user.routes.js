const {home}=require('../controllers/user.controller')
const express=require('express')
const router = express.Router()

router.get('/',home)

module.exports=router

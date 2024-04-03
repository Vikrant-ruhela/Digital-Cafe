const {home,login,register,addItems,getItems,placeOrder}=require('../controllers/user.controller')
const express=require('express')
const router = express.Router()

router.get('/',home)
router.post('/login',login)
router.post('/register',register)
router.post('/addItems',addItems)
router.get('/getItems',getItems)
router.post('/placeOrder',placeOrder)

module.exports=router

const mongoose=require('mongoose')

const userSchema=mongoose.Schema({
    name:{
        type:String
    },
    email:{
        type:String
    },
    password:{
        type:String,
        select:false
    }

})

module.exports=mongoose.model('User',userSchema)

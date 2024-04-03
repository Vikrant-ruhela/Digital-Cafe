const mongoose=require('mongoose')

async function connectToDb() {
    try {
        
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Database connected successfully")
    } catch (error) {
        console.log("Error in database connection",error)
    }
}

module.exports=connectToDb;
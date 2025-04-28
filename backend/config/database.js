const mongoose= require('mongoose')

const connectDB= async()=>{
    await mongoose.connect('mongodb+srv://gaurav1:gaurav123@cluster0.0w0ur.mongodb.net/User_taskManager_jwt')

}

module.exports= connectDB


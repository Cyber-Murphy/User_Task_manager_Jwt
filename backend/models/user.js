const mongoose= require('mongoose')

const UserSchema=  mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    mobileNo:{
        type:Number
    },
    photoUrl:{
        type:String
    },
    About:{
        type:String,
        default:"Hello I am a student"
    }
},{timestamps:true})

module.exports=mongoose.model("User", UserSchema)
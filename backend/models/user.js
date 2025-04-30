const mongoose= require('mongoose')
const validator = require('validator')
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
        unique:true,
        validate (value){
            if(!validator.isEmail(value)){
                throw new Error("Please enter correct form of email")
            }
        }
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
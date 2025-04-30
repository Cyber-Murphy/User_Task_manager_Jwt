const mongoose= require('mongoose')

const taskSchema= mongoose.Schema({
    Task:{
        type:String,
        required:true,
    },
    About:{
        type:String,
        default:'Today I am doing'
    }
})

module.exports=mongoose.model('TaskUser',taskSchema)
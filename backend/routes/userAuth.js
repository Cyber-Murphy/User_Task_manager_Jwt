const express= require('express')
const bcrypt= require('bcrypt')
const authRout= express.Router()
const User= require('../models/user')
const jwt= require('jsonwebtoken')

authRout.post('/signup', async(req,res)=>{
    const {name,password,email,mobileNo}= req.body

    const HashPassword= await bcrypt.hash(password,10)

    const user= await User({
        name,
        email,
        password:HashPassword,
        mobileNo
    })
    await user.save()
// creating jwt
    const token = await jwt.sign({id:user._id},'gaurav@123')


    res.cookie('gauravcookie',token)
    res.send(user)
    
})

authRout.post('/login', async(req,res)=>{
        const {password,email}= req.body
        const user= await User.findOne({email:email})
        if(!user){
            return res.send('Please enter valid emailId')
        }
        const checkPassword= await bcrypt.compare(password,user.password)
        if(!checkPassword){
            return res.send('Please enter the correct Password')
        }
        res.send('User loggedIn successfull',user)
})


module.exports=authRout
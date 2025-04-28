const express= require('express')
const app= express()
const User= require('./backend/models/user')
const cookieparser=require('cookie-parser')

const connectDB= require('./backend/config/database')
const authRout= require('./backend/routes/userAuth')

app.use(express.json())
app.use(cookieparser())

app.use('/',authRout)







connectDB().then(()=>{
    console.log('Database connected successfully');
    app.listen(8080,()=>{
        console.log('port connected successfully');
        
    })
}).catch(()=>{
    console.log('database not connected successfully');
    
})
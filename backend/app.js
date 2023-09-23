const express=require('express')
require('dotenv').config()
const cors=require('cors')
const router=require('./routers/router.js')
const app=express()

app.use(cors())

app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api',router)

app.get('/',(req,res)=>{
    res.json("Hello world")
})

app.listen(process.env.PORT,()=>{console.log('connected to port');})
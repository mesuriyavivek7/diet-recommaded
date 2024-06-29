import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
//importing mongoose
import mongoose from "mongoose"


const app=express()
dotenv.config()

const connect=async ()=>{
    try{
        await mongoose.connect(process.env.MONGO)
        console.log("connected to mongodb!")
    }catch(err){
        throw err
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("mongodb disconnected")
 })
 mongoose.connection.on("connected",()=>{
     console.log("mongodb connected")
 })

 app.get('/',(req,res)=>{
    res.send("Bahut maja ara hai bhai🐱")
})


//using json middleware where we can easily get our json data
app.use(express.json())

//this middleware for authentication
app.use(cookieParser())


//middleware for error handeling
app.use((err,req,res,next)=>{
    const errStatus=err.status || 500
    const errmsg=err.message || "Something went wrong"
    return res.status(errStatus).json({
        success:false,
        status:errStatus,
        message:errmsg,
        stack:err.stack

    })
})


app.listen(8080,()=>{
    connect()
    console.log("connected on port:8080 to backend!")
})
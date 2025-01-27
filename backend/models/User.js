import mongoose from "mongoose";

const userSchema=new mongoose.Schema({

    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    age:{
        type:Number,
    },
    gender:{
        type:String,
    },
    weight:{
        type:Number,
    },
    height:{
        type:Number
    },
    dietary_select:{
        type:String
    },
    allergies:{
        type:String,
    },
    health_goals:{
        type:String,
    }


})

export default mongoose.model("User",userSchema)
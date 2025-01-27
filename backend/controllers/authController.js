import User from "../models/User.js";

import bcrypt from "bcrypt";
import { createError } from '../utils/error.js';

import jwt from 'jsonwebtoken'


//register controller
export const register=async (req,res,next)=>{

    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(req.body.password, salt); 
    try{
       const newUser=new User({
         ...req.body,
         password:hash
       })
       await newUser.save()
       res.status(200).send("New user created sucessfully")
    }catch(err){
     next(err)
    }
 }



export const login=async (req,res,next)=>{
    try{
       const user=await User.findOne({email:req.body.email})
       if(!user) return next(createError(404,"user not found!"))
 
       const isPasswordCorrect= await bcrypt.compare(req.body.password,user.password)
       if(!isPasswordCorrect) return next(createError(404,"Password is not correct!"))
       const token=jwt.sign({id:user._id,isAdmin:user.isAdmin},process.env.JWT)
       const {password,isAdmin,...otherDetails}=user._doc;
       res.cookie("access_token",token,{httpOnly:true,}).status(200).json({details:{...otherDetails},isAdmin})
    }catch(err){
        next(err)
    }
 }

 export const updateUser=async (req,res,next)=>{

   try{
       const updateUser=await User.findByIdAndUpdate(req.params.id,{$set:req.body})
       console.log(updateUser)
       res.status(200).json(updateUser)
    }catch(err){
       next(err)
    }

}

export const getUser=async (req,res,next)=>{
   try{
       const myuser=await User.findById(req.params.id)
       res.status(200).json(myuser)
   }catch(err){
      next(err)
   }
}
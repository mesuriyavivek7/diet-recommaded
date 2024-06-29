import mongoose from "mongoose";

const recipesSchema=new mongoose.Schema({
    recipe_name:{
        type:String,
        required:true
    },
    recipe_instruction:{
        type:String,
        required:true
    },
    recipe_duration:{
        type:String,
        required:true
    },
    min_r2_score:{
        type:Number,
        required:true
    },
    max_r2_score:{
        type:Number,
        required:true
    }
    

})

export default mongoose.model("Recipe",recipesSchema)
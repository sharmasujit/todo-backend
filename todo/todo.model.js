import mongoose, { Schema } from "mongoose";

//set rule
const todoSchema=new Schema({
    title:{
        type:String,
        required:true,
        trim:true,
        maxlength:30,
    },
    description:{
        type:String,
        required:true,
        trim:true,
        maxlength:55,
    },
    date:{
        type:Date,
        required:true,
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User",
    },
});

//create table
export const Todo=mongoose.model("Todo",todoSchema);

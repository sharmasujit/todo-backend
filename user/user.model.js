import mongoose from "mongoose";

//create rule
const userSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true,
        maxlength:55,
    },
    lastName:{
        type:String,
        required:true,
        trim:true,
        maxlength:55,
    },
    email:{
        type:String,
        required:true,
        trim:true,
        lowerCase:true,
        unique:true,
    },
    password: {
        type: String,
        required: true,
      },
      gender: {
        type: String,
        enum: ["male", "female", "preferNotToSay"],
        required: false,
      },
})

//create table
export const User=mongoose.model("User",userSchema);
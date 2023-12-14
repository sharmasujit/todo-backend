import express from "express";
import { dbConnect } from "./db.connect.js";

const app=express();

//connect db
dbConnect();
//register routes

const port=8000;
app.listen(port,()=>{
    console.log(`App is listening at port ${port}`);
})
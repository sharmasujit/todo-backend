import express from "express";
import { dbConnect } from "./db.connect.js";
import todoRoutes from "./todo/todo.routes.js";
import userRoutes from "./user/user.routes.js";


const app=express();
app.use(express.json());

//connect db
dbConnect();
//register routes
app.use(todoRoutes);
app.use(userRoutes);

const port=process.env.PORT;
app.listen(port,()=>{
    console.log(`App is listening at port ${port}`);
})
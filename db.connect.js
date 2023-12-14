import mongoose from "mongoose";
const dbName=process.env.DB_NAME;
const dbPassword= encodeURIComponent(process.env.DB_PASSWORD)
const userName=process.env.DB_USERNAME;

export const dbConnect=async()=>{
    try {
        await mongoose.connect(`mongodb+srv://${userName}:${dbPassword}@cluster0.3fthfcl.mongodb.net/${dbName}?retryWrites=true&w=majority`);
        console.log("DB has been connected successfully");
    } catch (error) {
        console.log(error.message);
        console.log("DB connection failed");
    }
}
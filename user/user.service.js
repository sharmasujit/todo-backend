import { registerUserValidationSchema,emailValidationSchema } from "./user.validation.js";
import { User } from "./user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
//!validate user data before registration
export const validateNewUser= async(req,res,next)=>{
    //extract user data from req.body
    const newUser=req.body;

    //validate new user
    try {
        await registerUserValidationSchema.validate(newUser); 
    } catch (error) {
        //if validate fails throw error
        return res.status(400).send({message:error.message});
    }
    next();
}

//!adds user
export const registerUser=async(req,res)=>{
    const newUser=req.body;

    //check if user with this email exists
    const user=await User.findOne({email:newUser.email});

    //if user exists ,throw error
    if(user)
    {
        return res.status(409).send({message:"User already exists in our system.."})
    }

    //hash   password using bcrypt
    const hashPassword=await bcrypt.hash(newUser.password,10);
    newUser.password=hashPassword;

    //create user
    await User.create(newUser);
    return res.status(201).send({message:"User has been registered successfully.."})
};

//!validate user email
export const validateUserEmail=async(req,res,next)=>{
    //extract login credentials from req.body
    const loginCredentials=req.body;

    //validate email
    try {
        await emailValidationSchema.validate(loginCredentials.email)
    } catch (error) {
        return res.status(400).send({message:error.message}); 
    }
    next();
}

//!login user and send web token
export const loginUser=async(req,res)=>{
    //extract login credentials from req.body
    const loginCredentials=req.body;

    //check if email match
    const user=await User.findOne({email:loginCredentials.email});

    //if not user
    if(!user)
    {
        return res.status(409).send({message:"Invalid credentials.."})
    }

    //if email exists then check password match or not
    const passwordMatch=await bcrypt.compare(loginCredentials.password,user.password);

    //if password donot match
    if(!passwordMatch)
    {
        return res.status(404).send({message:"Password doesnot match"});
    }
    user.password=undefined;

    //generate web token using encryption algorithm
    const token=jwt.sign({email:user.email},process.env.ACCESS_TOKEN_SECERET);

    return res.status(200).send({user,accessToken:token});
}
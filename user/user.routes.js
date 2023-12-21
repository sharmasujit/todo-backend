import express from "express";
import { loginUser, registerUser, validateNewUser, validateUserEmail } from "./user.service.js";

const router=express.Router();

//register user in the system
router.post("/user/register",validateNewUser,registerUser);

//login user
router.post("/user/login",validateUserEmail,loginUser);



export default router;
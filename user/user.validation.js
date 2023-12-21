import * as Yup from "yup";

export const registerUserValidationSchema=Yup.object({
    firstName:Yup.string()
    .required("First name is required")
    .trim()
    .max(55,"First name must be 55 character.."),

    lastName:Yup.string()
    .required("Last name is required")
    .trim()
    .max(55,"Last name must be 55 character.."),

    email:Yup.string().email()
    .required("Email is required")
    .trim()
    .max(60,"Email must be 60 character..")
    .lowercase(),

    password:Yup.string().min(4,"Password must be at least 4 character")
    .max(16,"Password must be maximum 16 character").required(),

    gender:Yup.string().trim().oneOf(["male","female","preferNotToSay"]),
})

export const emailValidationSchema= Yup.string().email().required().trim().lowercase()
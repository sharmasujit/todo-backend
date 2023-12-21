import * as Yup from "yup";
import dayjs from "dayjs";

const currentDate=dayjs();

export const todoValidationSchema= Yup.object({
    title:Yup.string()
    .max(20,"Title must be maximum 20 characters")
    .trim()
    .required("Title is required"),
    
    description:Yup.string()
    .max(55,"Description must not exceed 55 characters")
    .required("Description is required")
    .trim(),

    date:Yup.date().min(currentDate,"Date cannot be past date.")
    .required("Date is required")
})
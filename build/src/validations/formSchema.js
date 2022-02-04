import * as yup from "yup";

const formSchema = yup.object().shape({
    username: yup 
        .string()
        .trim()
        .min(4, "Username must be at least 4 characters")
        .required("Name is required"),
    password: yup
        .string()
        .trim()
        .min(7, 'Password must be at least 7 characters')
        .required('A Password is required'),
    phone: yup 
        .string()
        .trim()
        .min(10, 'Phone number must be at least 10 digits')
})

export default formSchema;
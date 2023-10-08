import * as yup from "yup";

const passwordRules =
    /^(?=.*\d)(?=.*[a-zA-Z])(?=.*[A-Z])(?=.*[-\#\$\.\%\&\*])(?=.*[a-zA-Z]).{8,16}$/;

export const basicSchema = yup.object().shape({
    name: yup.string().required("Required"),
    email: yup
        .string()
        .email("Please enter an valid email")
        .required("Required"),
    password: yup
        .string()
        .min(8)
        .matches(passwordRules, {
            message: "Please create a stronger password",
        })
        .required("Required"),
    confirmPassword: yup
        .string()
        .oneOf([yup.ref("password")], "Passwords must match")
        .required(),
    age: yup.number().positive().integer().required("Required"),
    class: yup.string().required("Required "),
    bio: yup.string(),
});

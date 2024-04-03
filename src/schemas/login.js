import * as yup from "yup";

export const userLoginRequestSchema = yup.object().shape({
  email: yup.string().email().required("Email !"),
  password: yup.string().required("password !").min(6),
});

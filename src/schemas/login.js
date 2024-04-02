import * as yup from "yup";

export const userLoginRequestSchema = yup.object().shape({
  userName: yup.string().required("Name !"),
  email: yup.string().email().required("Email !"),
  phone: yup.string().required("Phone !"),
  password: yup.string().required("password !").min(6),
  rePassword: yup.string().required("Re-password !").min(6),
});

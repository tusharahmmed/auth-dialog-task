import * as yup from "yup";

export const resetPasswordRequestSchema = yup.object().shape({
  password: yup.string().required("password !").min(6),
  rePassword: yup.string().required("rePassword !").min(6),
});

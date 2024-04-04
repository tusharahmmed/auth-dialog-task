import * as yup from "yup";

export const resetVerifyRequestSchema = yup.object().shape({
  verification_code: yup.string().required("code !").min(6),
});

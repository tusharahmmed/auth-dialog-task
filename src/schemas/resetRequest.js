import * as yup from "yup";

export const resetRequestSchema = yup.object().shape({
  email: yup.string().email(),
  phone: yup.string().when("email", {
    is: (email) => email.length === 0,
    then: () =>
      yup
        .string()

        .required("Required"),
  }),
});

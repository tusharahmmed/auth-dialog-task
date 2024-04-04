"use client";

import {Button} from "@/components/ui/button";

import Form from "../form/Form";
import FormInput from "../form/FormInput";
import {yupResolver} from "@hookform/resolvers/yup";
import {resetPasswordRequestSchema} from "@/schemas/resetPassword";
import {useDispatch} from "react-redux";
import {setValues, toggleModal} from "@/rtk/features/authModal/authModalSlice";

const ResetPassword = () => {
  //rtk
  const dispatch = useDispatch();

  // submit handler
  const onSubmit = (data) => {
    console.log(data);
    dispatch(setValues(data));
    dispatch(toggleModal());
  };
  const defaultVal = {
    password: "",
    rePassword: "",
  };

  return (
    <div className="grid lg:grid-cols-[1fr,1.7fr] xl:grid-cols-[1fr,1.7fr] 2xl:grid-cols-[1fr,1.7fr] 3xl:grid-cols-[1fr,1.7fr]">
      <div
        style={{backgroundSize: "102%"}}
        className="hidden lg:flex xl:flex 2xl:flex 3xl:flex bg-login-modal bg-center bg-no-repeat	rounded-tl-[20px] rounded-bl-[20px] 
          items-center justify-center">
        <div>
          <h2 className="text-4xl font-poppins font-semibold text-center text-theme-white mb-5">
            Thank You
          </h2>
          <h3 className="font-roboto text-2xl text-center text-theme-gray">
            keep your account safe !
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full px-[30px] md:px-[60px] lg:px-[60px] xl:px-[60px] 2xl:px-[60px] 3xl:px-[60px]">
          <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl 3xl:text-4xl font-poppins font-semibold text-center text-theme-blue mb-8">
            Reset Password!
          </h2>
          <div>
            <Form
              submitHandler={onSubmit}
              defaultValues={defaultVal}
              resolver={yupResolver(resetPasswordRequestSchema)}>
              <div className="grid gap-4 mb-[35px] lg:mb-[45px] xl:mb-[60px] 2x:mb-[60px] 3xl:mb-[60px]">
                <div>
                  <FormInput
                    type={"password"}
                    name="password"
                    placeholder="Password"
                    icon={"/icon/key.svg"}
                    id={"password"}
                  />
                </div>

                <div>
                  <FormInput
                    type={"password"}
                    name="rePassword"
                    placeholder="Confirm Password"
                    icon={"/icon/key.svg"}
                    id={"rePassword"}
                  />
                </div>

                <div>
                  <p className="font-roboto text-sm text-theme-dark leading-[124.386%]">
                    If You Want To Change/Reset Your Password Then Submit Your
                    New Password.
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Button className="block bg-theme-blue text-theme-white font-roboto leading-[124.386%] h-auto rounded-[90px] hover:bg-theme-blue py-4 px-[60px] md:px-[70px] lg:px-[80px] xl:px-[100px] 2xl:px-[100px] 3xl:px-[100px]">
                  SUBMIT
                </Button>
              </div>
            </Form>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="my-4 font-roboto text-sm text-theme-dark leading-[124.386%] tiny:text-center sm:text-center md:text-center lg:text-center">
              Not interested in changing the password?{" "}
              <span className="inline xl:hidden 2xl:hidden 3xl:hidden">
                <br />
              </span>
              <span
                onClick={() => dispatch(toggleModal())}
                className="cursor-pointer text-theme-blue text-base tiny:text-center sm:text-center md:text-center lg:text-center">
                BACK TO PROFILE
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;

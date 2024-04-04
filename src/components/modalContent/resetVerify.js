"use client";

import {Button} from "@/components/ui/button";

import Form from "../form/Form";
import FormInput from "../form/FormInput";
import {useDispatch, useSelector} from "react-redux";
import {yupResolver} from "@hookform/resolvers/yup";
import {resetVerifyRequestSchema} from "@/schemas/resetVerify";
import {setRender, setValues} from "@/rtk/features/authModal/authModalSlice";

const ResetVerify = () => {
  // rtk
  const dispatch = useDispatch();
  const modalState = useSelector((state) => state.authModal);

  // submit handler
  const onSubmit = (data) => {
    console.log(data);
    dispatch(setValues(data));
    dispatch(setRender("resetPassword"));
  };
  const defaultVal = {
    verification_code: modalState.verification_code || "",
  };

  const backHandler = () => {
    dispatch(setRender("resetRequest"));
  };

  return (
    <div className="grid lg:grid-cols-[1fr,1.7fr] xl:grid-cols-[1fr,1.7fr] 2xl:grid-cols-[1fr,1.7fr] 3xl:grid-cols-[1fr,1.7fr]">
      <div
        style={{backgroundSize: "102%"}}
        className="hidden lg:flex xl:flex 2xl:flex 3xl:flex bg-login-modal bg-center bg-no-repeat	rounded-tl-[20px] rounded-bl-[20px] 
          items-center justify-center">
        <div>
          <h2 className="text-4xl font-poppins font-semibold text-center text-theme-white mb-5">
            congrats!
          </h2>
          <h3 className="font-roboto text-2xl text-center text-theme-gray">
            This is how you will be with us
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
              resolver={yupResolver(resetVerifyRequestSchema)}>
              <div className="grid gap-4 mb-[35px] lg:mb-[45px] xl:mb-[60px] 2x:mb-[60px] 3xl:mb-[60px]">
                <div>
                  <FormInput
                    name="verification_code"
                    placeholder="Enter 6 Deist Verification code "
                    //   icon={"/icon/mail.svg"}
                  />
                </div>

                <div className="flex items-center justify-between">
                  <p className=" font-roboto text-sm text-theme-dark leading-[124.386%] ">
                    Enter your Six Deist Verification Code.
                    <span className="text-[#565656]"> 60s</span>
                  </p>
                  <p className=" font-roboto text-sm text-[#26235B] leading-[124.386%]  underline cursor-pointer">
                    Sent Again!
                  </p>
                </div>
              </div>

              <div className="flex items-center justify-center gap-4">
                <div
                  onClick={backHandler}
                  className="cursor-pointer block bg-theme-dark text-[#565656] font-roboto leading-[124.386%] px-[40px] py-4 h-auto rounded-[90px] hover:bg-theme-dark">
                  BACK
                </div>
                <Button className="block bg-theme-blue text-theme-white font-roboto leading-[124.386%] px-[40px] py-4 h-auto rounded-[90px] hover:bg-theme-blue">
                  NEXT
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResetVerify;

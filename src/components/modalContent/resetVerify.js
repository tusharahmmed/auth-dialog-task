"use client";

import {Button} from "@/components/ui/button";

import Form from "../form/Form";
import FormInput from "../form/FormInput";
// import {yupResolver} from "@hookform/resolvers/yup";
// import {userLoginRequestSchema} from "@/schemas/login";

const ResetVerify = () =>
  // {open, setOpen}
  {
    // console.log(open);
    const onSubmit = (data) => {
      console.log(data);
    };
    const defaultVal = {
      verification_code: "",
    };

    return (
      <div className="grid grid-cols-[1fr,1.7fr]">
        <div
          style={{backgroundSize: "102%"}}
          className="bg-login-modal bg-center bg-no-repeat	rounded-tl-[20px] rounded-bl-[20px] flex
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
          <div className="w-full px-[60px]">
            <h2 className="text-4xl font-poppins font-semibold text-center text-theme-blue mb-8">
              Reset Password!
            </h2>
            <div>
              <Form
                submitHandler={onSubmit}
                defaultValues={defaultVal}
                // resolver={yupResolver(userLoginRequestSchema)}
              >
                <div className="grid gap-4 mb-[60px]">
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
                  <Button className="block bg-theme-dark text-[#565656] font-roboto leading-[124.386%] px-[40px] py-4 h-auto rounded-[90px] hover:bg-theme-dark">
                    BACK
                  </Button>
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
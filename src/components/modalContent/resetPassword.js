"use client";

import {Button} from "@/components/ui/button";

import Form from "../form/Form";
import FormInput from "../form/FormInput";
// import {yupResolver} from "@hookform/resolvers/yup";
// import {userLoginRequestSchema} from "@/schemas/login";

const ResetPassword = () =>
  // {open, setOpen}
  {
    // console.log(open);
    const onSubmit = (data) => {
      console.log(data);
    };
    const defaultVal = {
      password: "",
      rePassword: "",
    };

    return (
      <div className="grid grid-cols-[1fr,1.7fr]">
        <div
          style={{backgroundSize: "102%"}}
          className="bg-login-modal bg-center bg-no-repeat	rounded-tl-[20px] rounded-bl-[20px] flex
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
                    <p className="font-roboto text-sm text-theme-dark leading-[124.386%] mr-4">
                      If You Want To Change/Reset Your Password Then Submit Your
                      New Password.
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Button className="block bg-theme-blue text-theme-white font-roboto leading-[124.386%] px-[100px] py-4 h-auto rounded-[90px] hover:bg-theme-blue">
                    SUBMIT
                  </Button>
                </div>
              </Form>
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="my-4 font-roboto text-sm text-theme-dark leading-[124.386%]">
                Not interested in changing the password?{" "}
                <span className="text-theme-blue text-base">
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

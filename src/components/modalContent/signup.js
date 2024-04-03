"use client";
import Image from "next/image";

import {Label} from "../ui/label";
import {Checkbox} from "../ui/checkbox";
import {Button} from "@/components/ui/button";

import Form from "../form/Form";
import FormInput from "../form/FormInput";
import {yupResolver} from "@hookform/resolvers/yup";
import {userSignupRequestSchema} from "@/schemas/signup";

const Signup = () => {
  const onSubmit = (data) => {
    console.log(data);
  };
  const defaultVal = {
    userName: "",
    email: "",
    phone: "",
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
            Welcome!
          </h2>
          <h3 className="font-roboto text-2xl text-center text-theme-gray">
            To keep connected with us pleasesign up here
          </h3>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full px-[60px]">
          <h2 className="text-4xl font-poppins font-semibold text-center text-theme-blue mb-8">
            Create an account
          </h2>
          <div>
            <Form
              submitHandler={onSubmit}
              defaultValues={defaultVal}
              resolver={yupResolver(userSignupRequestSchema)}>
              <div className="grid grid-cols-2 gap-4 mb-[30px]">
                <div className="col-span-2">
                  <FormInput
                    name="userName"
                    placeholder="User Name"
                    icon={"/icon/user.svg"}
                  />
                </div>
                <div>
                  <FormInput
                    name="email"
                    placeholder="Email Address"
                    icon={"/icon/mail.svg"}
                  />
                </div>
                <div>
                  <FormInput
                    name="phone"
                    placeholder="Phone Number"
                    icon={"/icon/phone.svg"}
                  />
                </div>
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
                <div className="col-span-2 flex items-center space-x-2">
                  <Checkbox
                    className="border-theme-blue data-[state=checked]:bg-theme-blue"
                    id="terms"
                  />
                  <Label
                    htmlFor="terms"
                    className="font-roboto text-sm text-theme-dark leading-[124.386%]">
                    By signing up, you agree to our {" "}
                    <span className="text-theme-blue">
                      Terms & Conditions / Privacy Policy
                    </span>
                  </Label>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <Button className="block bg-theme-blue text-theme-white font-roboto leading-[124.386%] px-[100px] py-4 h-auto rounded-[90px] hover:bg-theme-blue">
                  SIGN UP
                </Button>
              </div>
            </Form>
          </div>
          <div className="flex items-center justify-center flex-col">
            <p className="my-4 font-roboto text-sm text-theme-dark leading-[124.386%]">
              Have an account? {" "}
              <span className="text-theme-blue text-base">Sign In</span>
            </p>
            <div className="flex gap-4">
              <Image
                className="cursor-pointer"
                src={"/icon/facebook.svg"}
                alt="facebook"
                height={24}
                width={24}
              />
              <Image
                className="cursor-pointer"
                src={"/icon/google.svg"}
                alt="facebook"
                height={24}
                width={24}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;

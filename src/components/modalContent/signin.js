"use client";
import Image from "next/image";

import {Label} from "../ui/label";
import {Checkbox} from "../ui/checkbox";
import {Button} from "@/components/ui/button";

import Form from "../form/Form";
import FormInput from "../form/FormInput";
import {yupResolver} from "@hookform/resolvers/yup";
import {userLoginRequestSchema} from "@/schemas/login";

const Signin = () =>
  // {open, setOpen}
  {
    // console.log(open);
    const onSubmit = (data) => {
      console.log(data);
    };
    const defaultVal = {
      email: "",
      password: "",
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
              Log In
            </h2>
            <div>
              <Form
                submitHandler={onSubmit}
                defaultValues={defaultVal}
                resolver={yupResolver(userLoginRequestSchema)}>
                <div className="grid gap-4 mb-[60px]">
                  <div>
                    <FormInput
                      name="email"
                      placeholder="Email Address"
                      icon={"/icon/mail.svg"}
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

                  <div className=" flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        className="border-theme-blue data-[state=checked]:bg-theme-blue"
                        id="remember"
                      />
                      <Label
                        htmlFor="remember"
                        className="font-roboto text-sm text-theme-dark leading-[124.386%]">
                        Remember Account
                      </Label>
                    </div>
                    <p className="font-roboto text-sm text-theme-blue leading-[124.386%] mr-4">
                      Forgot Password?
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-center">
                  <Button className="block bg-theme-blue text-theme-white font-roboto leading-[124.386%] px-[100px] py-4 h-auto rounded-[90px] hover:bg-theme-blue">
                    LOG IN
                  </Button>
                </div>
              </Form>
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="my-4 font-roboto text-sm text-theme-dark leading-[124.386%]">
                Don’t Have an account? {" "}
                <span className="text-theme-blue text-base">Sign Up</span>
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

export default Signin;

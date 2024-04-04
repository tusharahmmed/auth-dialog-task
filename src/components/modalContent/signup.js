"use client";
import Image from "next/image";

import {Label} from "../ui/label";
import {Checkbox} from "../ui/checkbox";
import {Button} from "@/components/ui/button";

import Form from "../form/Form";
import FormInput from "../form/FormInput";
import {yupResolver} from "@hookform/resolvers/yup";
import {userSignupRequestSchema} from "@/schemas/signup";
import DialogModal from "../shared/dialogModal";
import {useDispatch} from "react-redux";
import {setRender, toggleModal} from "@/rtk/features/authModal/authModalSlice";
// import Signin from "./signin";
// import {DialogClose} from "../ui/dialog";

const Signup = () =>
  // {open, setOpen}
  {
    // console.log(open);

    const dispatch = useDispatch();

    const onSubmit = (data) => {
      console.log(data);
      dispatch(toggleModal());
    };
    const defaultVal = {
      userName: "",
      email: "",
      phone: "",
      password: "",
      rePassword: "",
    };

    return (
      <div className="grid lg:grid-cols-[1fr,1.7fr] xl:grid-cols-[1fr,1.7fr] 2xl:grid-cols-[1fr,1.7fr] 3xl:grid-cols-[1fr,1.7fr]">
        <div
          style={{backgroundSize: "102%"}}
          className="hidden xl:flex 2xl:flex 3xl:flex bg-login-modal bg-center bg-no-repeat	rounded-tl-[20px] rounded-bl-[20px] 
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
        <div className="lg:col-span-2 flex items-center justify-center">
          <div className="w-full px-[30px] md:px-[60px] lg:px-[60px] xl:px-[60px] 2xl:px-[60px] 3xl:px-[60px]">
            <h2 className="text-2xl md:text-3xl lg:text-4xl xl:text-4xl 2xl:text-4xl 3xl:text-4xl font-poppins font-semibold text-center text-theme-blue mb-8 lg:mb-4">
              Create an account
            </h2>
            <div>
              <Form
                submitHandler={onSubmit}
                defaultValues={defaultVal}
                resolver={yupResolver(userSignupRequestSchema)}>
                <div className="grid grid-cols-2 gap-4  mb-[35px] lg:mb-[20px] xl:mb-[60px] 2x:mb-[60px] 3xl:mb-[60px]">
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
                  <Button className="block bg-theme-blue text-theme-white font-roboto leading-[124.386%] h-auto rounded-[90px] hover:bg-theme-blue py-4 px-[60px] md:px-[70px] lg:px-[80px] xl:px-[100px] 2xl:px-[100px] 3xl:px-[100px]">
                    SIGN UP
                  </Button>
                </div>
              </Form>
            </div>
            <div className="flex items-center justify-center flex-col">
              <p className="my-4 lg:my-2 font-roboto text-sm text-theme-dark leading-[124.386%]">
                Have an account? 
                <span
                  onClick={() => {
                    dispatch(setRender("signin"));
                  }}
                  className="cursor-pointer text-theme-blue text-base">
                  Sign In
                </span>
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

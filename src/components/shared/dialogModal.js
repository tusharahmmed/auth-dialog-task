"use client";
import {useSelector} from "react-redux";

import Signin from "../modalContent/signin";
import Signup from "../modalContent/signup";
import ResetRequest from "../modalContent/resetRequest";
import ResetVerify from "../modalContent/resetVerify";
import ResetPassword from "../modalContent/resetPassword";

import {Dialog, DialogContent} from "@/components/ui/dialog";

const contents = {
  signin: Signin,
  signup: Signup,
  resetRequest: ResetRequest,
  resetVerify: ResetVerify,
  resetPassword: ResetPassword,
};

export default function DialogModal() {
  const authModalState = useSelector((state) => state.authModal);

  const ToRender = contents[authModalState.render];

  return (
    <Dialog open={authModalState?.open}>
      <DialogContent className="h-[580px] lg:h-[450px] lg:max-w-[767px] xl:max-w-[1080px]  2xl:max-w-[1080px] 3xl:max-w-[1080px] rounded-[25px] bg-theme-white-light border-4 border-theme-gray shadow-[0px 0px 4px 0px rgba(129, 129, 129, 0.25)] p-0 flex-col">
        <ToRender />
      </DialogContent>
    </Dialog>
  );
}

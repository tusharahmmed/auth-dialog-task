"use client";
import {Dialog, DialogContent, DialogTrigger} from "@/components/ui/dialog";
import {useState} from "react";
import Signin from "../modalContent/signin";
import Signup from "../modalContent/signup";
import ResetRequest from "../modalContent/resetRequest";

const contents = {
  signin: Signin,
  signup: Signup,
  resetRequest: ResetRequest,
};

export default function DialogModal({render, children}) {
  const [open, setOpen] = useState(false);

  // const [ToRender, setToRender] = useState(contents[render]);

  // console.log(ToRender);
  const ToRender = contents[render];

  // useEffect(() => {
  //   setToRender(changeContent);
  // }, [changeContent]);

  return (
    <Dialog open={open}>
      <DialogTrigger onClick={() => setOpen(true)} className="w-full">
        {children}
      </DialogTrigger>
      {/* sm:max-w-[425px] */}
      <DialogContent
        setOpen={setOpen}
        className="lg:max-w-[767px] xl:max-w-[1080px]  2xl:max-w-[1080px] h-[580px] rounded-[25px] bg-theme-white-light border-4 border-theme-gray shadow-[0px 0px 4px 0px rgba(129, 129, 129, 0.25)] p-0 flex-col">
        {/* <Content open={open} setOpen={setOpen} /> */}
        <ToRender open={open} setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
}

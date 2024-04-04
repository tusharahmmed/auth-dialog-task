"use client";

import Image from "next/image";

import {useDispatch} from "react-redux";
import {setRender, toggleModal} from "@/rtk/features/authModal/authModalSlice";

const Header = () => {
  const dispatch = useDispatch();

  const signinModalHandler = () => {
    dispatch(toggleModal());
    dispatch(setRender("signin"));
  };

  const signupModalHandler = () => {
    dispatch(toggleModal());
    dispatch(setRender("signup"));
  };

  return (
    <header className=" h-20 bg-theme-blue text-theme-white flex items-center jutify-between">
      <div className="section-padding w-full flex items-center justify-between ">
        <div>
          <Image
            className="tiny:w-full"
            src="/image/logo.png"
            alt="logo"
            width={190}
            height={67}
            priority
          />
        </div>
        <ul className="gap-8 ml-5 hidden xl:flex 2xl:flex 3xl:flex">
          <li>HOME</li>
          <li>ABOUT</li>
          <li>COURSES</li>
          <li>SHOP</li>
          <li>EVENTS</li>
          <li>CONTACT</li>
        </ul>
        <div className="group items-center justify-between cursor-pointer relative hidden xl:flex 2xl:flex 3xl:flex">
          <input
            type="text"
            id="search"
            className="absolute transition-all duration-300 rounded-lg bg-theme-gray text-theme-blue text-sm font-roboto font-semibold tracking-widest px-0 py-0  group-hover:pl-2 focus:pl-2 group-hover:py-3 focus:py-3  pr-10 opacity-0 focus:opacity-100 group-hover:opacity-100 border-2 border-theme-white -right-0 group-hover:-right-2 focus:-right-2 z-10 w-[0px] group-hover:w-[277px] focus:w-[277px] h-[44px] pr-5 focus:outline-none"
          />
          <label className="z-20 cursor-pointer" htmlFor="search">
            <Image src="/icon/search.svg" alt="search" height={24} width={24} />
          </label>
        </div>
        <div className="relative flex  border-[1px] rounded-full border-theme-white ">
          <div
            onClick={signinModalHandler}
            className="cursor-pointer px-5 py-4 tiny:px-3 tiny:py-2 text-sm">
            Login
          </div>

          <div
            onClick={signupModalHandler}
            className="cursor-pointer relative px-5 py-4 tiny:px-3 tiny:py-2 text-sm text-theme-blue	z-20 rounded-full ">
            Register
          </div>

          <span className="absolute bg-[#FFB606] -top-[2px] -right-[2px] -bottom-[2px] left-[45%] z-[1] rounded-full"></span>
        </div>
      </div>
    </header>
  );
};

export default Header;

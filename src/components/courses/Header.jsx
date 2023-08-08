import React from "react";
import { Icon } from "@iconify/react";

const Header = ({ element, index, className = "", openModal }) => {
  return (
    <div
      key={index}
      className={`rounded-[20px] lg:mt-0 mt-20 py-[59px] md:py-[56px] pl-[88px] xl:pl-[45px] lg:pl-[30px] md:px-[15px] bg-center bg-cover bg-blend-multiply  bg-no-repeat bg-courseBgUiUx ${className} bg-blend-multiply bg-black/40 dark:bg-black/50 text-white flex flex-col gap-8 md:gap-4 `}
    >
      <h2 className=" text-[58px] lg:text-[32px] md:text-[24px] font-semibold  ">
        {element.title}
      </h2>
      <p className="   text-[32px] lg:text-xl md:text-sm ">
        Learn from Beginner to Intermediate level
      </p>
      <div className=" flex items-center font-medium  gap-3 text-[32px] lg:text-xl md:text-sm ">
        <Icon icon="mingcute:time-line" />
        <p className=" font-poppins ">Duration: 3 months</p>
      </div>
      <div className=" flex items-center font-medium  gap-3 text-[32px] lg:text-xl md:text-sm ">
        <Icon icon="subway:book" />
        <p className=" font-poppins ">Unit: 6 units</p>
      </div>
      <button
        onClick={openModal}
        className="w-fit inline-block px-12 py-7 lg:py-[25px]  md:px-[26px] md:py-[14px] rounded-[10px] bg-lexPrimary text-white font-medium md:text-sm lg:text-base  text-[21px] border  hover:bg-white hover:text-lexPrimary  mt-8 md:mt-4 border-white hover:border-lexPrimary hover:border-6  "
      >
        Register now
      </button>
    </div>
  );
};

export default Header;

import { WHATWEOFFER } from "@/constants";
import React from "react";

const Section1 = () => {
  return (
    <div className=" flex flex-col gap-9 w-full ">
      <h2 className=" text-[45px] lg:text-[32px] md:text-[24px] font-semibold ">What we offer</h2>
      <div className=" max-w-[1311px] w-full flex flex-wrap justify-between self-center items-center gap-y-10 gap-x-[32px] cs1:gap-x-0 lg:gap-x-0 ">
        {WHATWEOFFER.map((element, index) => (
          <div
            key={index}
            className="  rounded-[15px] border border-[#BCB7B7] w-[635px] cs1:w-[48%] lg:w-full py-[45px] px-[30px] xl:px-[20px] flex flex-col gap-6 "
          >
            <div className=" flex gap-4 items-center ">
              <div className="  xl:w-[40px] w-[57px] h-[6px] bg-lexAccent  " />
              <h3 className=" text-[32px] cs1:text-2xl md:text-[20px] font-semibold  ">{element.title}</h3>
            </div>
            <p className=" text-lg csl:text-base lg:text-sm leading-10 ">{element.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Section1;

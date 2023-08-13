import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Button1 from "../buttons/Button1";

const Section2 = ({ element, index, openModal }) => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      delay: 200, // Delay between animations in milliseconds
      once: false, // Whether to animate elements only once
    });
    AOS.refresh();
  }, []);
  return (
    <div className=" flex flex-col gap-10 lg:gap-6 md:gap-4 w-full ">
      <h2 className=" font-semibold text-center text-[42px]  xl:text-[32px] lg:text-[28px] md:text-[20px]">
        Course content
      </h2>
      <div className=" grid grid-cols-3 2xl:grid-cols-2 justify-items-stretch   items-center md:grid-cols-1 gap-4  gap-y-10 lg:gap-y-6 w-full  ">
        {element.courseContent.map((item, index) => (
          <div className="h-full px-[4%] xl:px-[3%] rounded-[20px] w-full justify-self-center border border-[#BCB7B7] max-w-[639px] md:w-full py-[55px] lg:py-[30px] flex flex-col  gap-9 lg:gap-6 ">
            <div className=" py-[22px] lg:py-[18px] xs:px-4 xs:text-center flex justify-center rounded-xl bg-lexPrimary text-white text-[24px] cs1:text-[22px] xl:text-lg lg:text-base md:text-base font-medium  ">
              {item.title}
            </div>
            {item.data.map((single, index) => (
              <div className="  flex gap-3 lg:gap-1 items-center ">
                <div className="  xl:min-w-[30px] lg:min-w-[20px] md:min-w-[10px] min-w-[36px] !h-fit !min-h-[3px] bg-lexPrimary  " />
                <p className="   text-[18px] xl:text-base lg:text-sm flex gap-3 md:gap-2 items-center ">
                  {single}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>
      <Button1
        cta="Register now"
        href={element.link}
        primary={true}
        isHyperLink={true}
        target={true}
        data-aos="fade-up"
        className=" bg-lexPrimary max-w-[628px] xl:max-w-[500px] md:max-w-[65%] w-full py-7 xl:py-6 lg:py-4 rounded-xl flex justify-center self-center text-[32px] font-semibold text-white xl:text-[24px] lg:text-2xl md:text-lg border cursor-default   "
      />
    </div>
  );
};

export default Section2;

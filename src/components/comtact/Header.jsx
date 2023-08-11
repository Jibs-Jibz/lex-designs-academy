import { Icon } from "@iconify/react";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      delay: 200, // Delay between animations in milliseconds
      once: false, // Whether to animate elements only once
    });
    AOS.refresh();
  }, []);
  return (
    <div className=" flex flex-col gap-20 xl:gap-16 lg:gap-14 md:gap-8 ">
      <div className="bg-center bg-cover bg-blend-multiply  bg-no-repeat bg-contactHeader  text-white flex items-center justify-center  py-[200px] lg:py-[130px] px-2 md:py-[150px] xs:py-[90px] ">
        <p
          data-aos="fade-up"
          className=" max-w-[802px] w-full text-center font-semibold text-[45px] lg:text-[30px]  md:text-[20px] "
        >
          Don&lsquo;t hesitate to get in touch with us. We&lsquo;re here to
          assist you.
        </p>
      </div>

      <div className=" flex flex-col gap-12 md:gap-6 w-full items-center justify-center ">
        <h2 className="font-semibold text-[45px] lg:text-[30px]  md:text-[20px]">
          Contact Details
        </h2>
        <div className="  xxs:flex-wrap xxs:gap-x-3  xxxs:justify-center w-full h-full max-w-[874px] md:max-w-[550px] flex  justify-between   ">
          <div className=" flex gap-[15px] xs:gap-2 w-fit 3xs:w-full py-5  ">
            <div className="md:hidden text-[44px] lg:text-[33px] md:text-2xl xs:text-xl flex items-center   ">
              <Icon icon="mdi:call" />
            </div>
            <div className=" flex flex-col items-end 3xs:items-center 3xs:w-full gap-5 sm:gap-3  ">
              <h3 className="flex gap-1 text-[28px] lg:text-[20px] md:text-base xs:text-sm font-medium ">
                <div className="md:flex hidden md:text-2xl xs:text-xl items-center" >
                  <Icon icon="mdi:call" />
                </div>
                Phone Number
              </h3>
              <a
                className=" text-[26px] lg:text-[18px] md:text-sm xs:text-xs"
                href="tel:+2349061872075"
              >
                +2349061872075
              </a>
            </div>
          </div>
          <div className=" w-[4px] xxs:w-[2px] bg-[#EBEBEB] py-5 3xs:hidden xxxs:hidden " />
          <div className="flex gap-[15px] xs:gap-2 w-fit 3xs:w-full py-5">
            <div className=" md:hidden text-[44px] lg:text-[33px] md:text-2xl xs:text-xl flex items-center  ">
              <Icon icon="mdi:email" />
            </div>
            <div className=" flex flex-col items-end 3xs:items-center 3xs:w-full gap-5 sm:gap-3  ">
              <h3 className="flex gap-1 text-[28px] lg:text-[20px] md:text-base xs:text-sm font-medium ">
              <div className="md:flex hidden md:text-2xl xs:text-xl items-center" >
                  <Icon icon="mdi:email" />
                </div>
                Email Address
              </h3>
              <a
                className=" text-[26px] lg:text-[18px] md:text-sm xs:text-xs "
                href="mailto:Lexdesignacademy@gmail.com"
              >
                Lexdesignacademy@gmail.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

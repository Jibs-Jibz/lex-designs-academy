import Image from "next/image";
import React from "react";
import img from "../../public/images/newsletter.png";
import { Icon } from "@iconify/react";

const Newsletter = () => {
  return (
    <div className=" w-full self-center lg:shadow-none lg:text-center shadow-2xl lg:pr-0 pr-[51px] rounded-2xl gap-12 xl:gap-6 max-w-[1312px] flex lg:flex-col items-center justify-center ">
      <div className=" w-1/2 lg:rounded-[15px] md:w-full ">
        <Image
          src={img}
          alt="MERP-designs"
          className=" w-full object-cover h-auto lg:rounded-[15px] md:w-full "
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
        />
      </div>
      <div className=" flex flex-col gap-8 px-[2%] w-1/2 lg:w-full lg:items-center ">
        <h3 className=" text-[50px] xl:text-[32px] md:text-2xl md:text-center font-semibold  ">
          Subscribe to our newsletter
        </h3>
        <p className=" text-lg xl:text-base md:text-sm leading-10 xl:leading-7 md:leading-5 text-[#343434] dark:text-[#CBCBCB]  ">
          By subscribing up to our newsletter, you can keep up with all of the
          latest and most recent information from our tech school. Be the first
          to get updates about new program offerings, insight into the company,
          events, and other vital information.
        </p>
        <form className="flex gap-0 xs:w-full items-center  bg-lexSecondary px-[13px] py-[10px] md:py-[7px] md:px-3 w-fit  md:flex-wrap  rounded-md justify-between ">
          <div className=" flex items-center w-fit xs:w-full gap-2 bg-transparent text-black  ">
            <Icon
              className=" text-[30px] xl:text-[26px]  "
              icon="fluent:mail-28-regular"
            />
            <input
              placeholder="Enter email"
              className="xs:w-full py-3 pl-2 text-xl xl:text-lg placeholder-black focus:outline-lexPrimary bg-transparent "
              type="email"
              name=""
              id=""
            />
          </div>
          <button
            className="xs:w-full px-10 xl:px-6 py-5 xl:py-4 rounded-lg bg-lexPrimary text-white border border-lexPrimary hover:bg-transparent hover:text-black text-xl xl:text-base md:text-sm font-medium "
            type="submit"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;

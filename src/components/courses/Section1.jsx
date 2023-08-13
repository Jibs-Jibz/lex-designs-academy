import Image from "next/image";
import React from "react";
import { Icon } from "@iconify/react";

const Section1 = ({ element, index, openModal }) => {
  return (
    <div
      key={index}
      className="w-full md:items-center justify-between gap-[2%] lg:gap-y-8 md:gap-y-6 flex md:flex-col flex-wrap md:flex-nowrap "
    >
      <div className="w-[60%] md:w-full lg:w-[45%] flex flex-col lg:self-center  justify-between ">
        <div className=" flex flex-col  gap-7 lg:gap-3 md:gap-3  ">
          <h3 className=" font-semibold text-[42px]  xl:text-[32px] lg:text-[28px] md:text-[20px] ">
            Why take this course?
          </h3>
          {element.whyCourse.map((data, index) => (
            <p
              key={index}
              className="   text-[28px] xl:text-xl lg:text-base md:text-sm flex gap-3 md:gap-2 items-center "
            >
              <Icon className=" text-lexPrimary font-bold " icon="charm:tick" />
              {data}
            </p>
          ))}
        </div>
        <div className=" flex flex-col gap-6 md:gap-4 lg:hidden ">
          <h3 className=" font-semibold text-[42px]  xl:text-[32px] lg:text-[28px] md:text-[20px]">
            Course overview
          </h3>
          <p className=" leading-[47px] lg:leading-6 md:leading-relaxed  text-[24px] xl:text-xl lg:text-base md:text-sm flex gap-3 md:gap-2 items-center ">
            {element.courseOverview}
          </p>
        </div>
      </div>
      <div className="flex flex-col lg:items-center items-end w-[38%] lg:w-[45%] md:w-full ">
        <div className="border rounded-[15px] border-[#B9B9B9] flex flex-col  max-w-[465px] md:max-w-full w-full ">
          <div className=" w-full h-auto  ">
            <Image
              src={element.benefitsImg}
              alt={`title`}
              className="rounded-[15px] w-full object-cover h-auto  md:w-full "
              priority
              sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
              width="100"
              height="100"
            />
          </div>{" "}
          <div className=" px-[42px]  lg:px-[25px] py-[28px]  lg:py-[20px] flex flex-col gap-8 md:gap-4 lg:gap-6 ">
            <div className=" flex flex-col md:items-center gap-6 lg:gap-3 ">
              {element.benefits.map((benefit, index) => (
                <p
                  key={index}
                  className=" flex items-center text-[24px] lg:text-base xl:text-lg md:text-sm font-semibold gap-1  "
                >
                  <Icon
                    className=" text-lexPrimary font-bold "
                    icon="charm:tick"
                  />
                  {benefit}
                </p>
              ))}
            </div>
            <button
              // onClick={openModal}
              className=" cursor-default text-[36px] xl:text-2xl lg:text-lg md:text-base md:w-full md:self-center md:max-w-[319px] flex w-full justify-center  items-center py-[15px] text-white bg-lexPrimary rounded-[6px]  border  "
            >
              &#8358;{element.coursePrice}.00
            </button>
          </div>
        </div>
      </div>
      <div className=" hidden lg:flex flex-col md:order-last w-[60%] lg:w-full md:w-full ">
        <h3 className=" font-semibold text-[42px]  xl:text-[32px] lg:text-[28px] md:text-[20px]">
          Course overview
        </h3>
        <p className="   text-[24px] lg:text-xl md:text-sm flex gap-3 md:gap-2 items-center ">
          {element.courseOverview}
        </p>
      </div>
    </div>
  );
};

export default Section1;

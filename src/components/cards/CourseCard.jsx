import React from "react";
import { Dot } from "../Icons";
import Image from "next/image";
import Button1 from "../buttons/Button1";

const CourseCard = ({ element, index }) => {
  return (
    <div
      key={index}
      className="  max-w-[414px] w-full h-full flex flex-col rounded-[17px] border-[2px] border-[#E5E5E5] shadow-lex-course-card "
    >
      <div className=" w-full h-auto ">
        <Image
          src={element.img}
          alt={element.title}
          className=" w-full object-cover h-auto  md:w-full "
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
          width="100"
          height="100"
        />
      </div>
      <div className=" w-full !h-full flex flex-col gap-y-4 px-5 md:px-3 py-[30px] ">
        <div className=" w-full flex !h-full flex-col gap-4 ">
          <h4 className=" text-[28px] font-medium ">{element.title}</h4>
          <p className=" text-base leading-[26px] !h-full "> {element.text}</p>
        </div>
        <div className=" flex flex-wrap items-center gap-y-4 w-full justify-between ">
          <div className=" text-sm font-medium w-fit rounded-[25px] flex items-center md:text-xs px-[17px] py-[8px] dark:text-black bg-[#F0E7F1] h-fit ">
            3 months <Dot /> Online
          </div>
          <Button1
            isHyperLink={true}
            primary={true}
            cta="View more"
            href={element.path}
            className=" !py-[12px] md:px-[25px] md:text-sm px-[30px] "
          />
        </div>
      </div>
    </div>
  );
};

export default CourseCard;

import React from "react";
import { COURSES } from "@/constants";
import CourseCard from "../cards/CourseCard";

const Section2 = ({ props, ref, id }) => {
  return (
    <div ref={ref} id={id}>
      <div className=" pt-20 " id="reff">
        <div className=" flex flex-col gap-20 w-full items-center justify-center ">
          <div className=" flex flex-col gap-8 md:gap-4 items-center text-center w-full max-w-[696px] ">
            <h2 className=" font-semibold text-[40px] lg:text-[32px] md:text-[24px] w-full max-w-[567px] ">
              Learn our courses to help scale up your skills
            </h2>
            <p className=" text-lg lg:text-sm ">
              Our courses gives you the knowledge and skills to help you
              accomplish your goals all the way from beginners to intermediate
              level
            </p>
          </div>
          <div className="flex items-center justify-center gap-8 flex-wrap w-full md:gap-y-14 ">
            {COURSES.map((element, index) => (
              <CourseCard key={index} element={element} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

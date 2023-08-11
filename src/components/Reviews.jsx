import { REVIEWS } from "@/constants";
import React from "react";
import ReviewCard from "./cards/ReviewCard";

const Reviews = () => {
  return (
    <div className=" flex flex-col items-center text-center gap-40 lg:gap-14 ">
      <h2 className=" text-[45px] font-semibold max-w-[551px]  lg:text-[32px] md:text-[24px] ">
        Top reviews of what our students are saying
      </h2>
      <div className="max-w-[1179px] w-full flex flex-wrap cs1:gap-x-[2%]   gap-y-10 gap-10 justify-between " >
        {REVIEWS.map((element, index) => (
          <ReviewCard key={index} element={element} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;

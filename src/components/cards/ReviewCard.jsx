import Image from "next/image";
import React from "react";

const ReviewCard = ({ element, index }) => {
  return (
    <div
      key={index}
      className=" border  border-[#B9B9B9] flex flex-col items-center justify-center w-[563px] cs1:w-[48%] md:w-full px-9 lg:px-[30px] py-10 lg:py-[30px] gap-[42px] rounded-[15px]  "
    >
      <div className=" w-[108px] h-auto ">
        <Image
          src={element.img}
          alt={element.name}
          className=" w-full object-cover h-auto  md:w-full "
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
          width="100"
          height="100"
        />
      </div>
      <div className=" flex flex-col gap-6 " >
        <h4 className=" text-[28px] font-semibold lg:text-[24px] md:text-base " >{element.name}</h4>
        <p className=" text-lg leading-9 lg:text-sm md:leading-relaxed  " >{element.text}</p>
      </div>
    </div>
  );
};

export default ReviewCard;

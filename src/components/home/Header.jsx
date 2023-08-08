import Link from "next/link";
import React from "react";
import homeHeader from "../../../public/images/home-header-1.png";
import homeHeader2 from "../../../public/images/home-header-2.png";
import Image from "next/image";
import Button1 from "../buttons/Button1";

const Header = () => {
  return (
    <main className=" flex flex-col md:gap-20 gap-40 ">
      <div className=" flex lg:flex-col gap-y-12 md:gap-y-10 gap-x-12 items-center justify-between w-full  ">
        <div className="w-1/2  flex flex-col justify-around  gap-11 md:gap-6 lg:w-full">
          <h1 className=" text-6xl lg:text-[42px]  md:text-[36px] font-semibold ">
            Elevate your learning with our Tech courses
          </h1>
          <p className=" text-lg md:text-sm font-inter leading-7 font-normal ">
            Joining LEX Design academy is the perfect way to learn any skill.
            With our state-of-the-art learning tools and resources, you can
            master any skill at your own pace.
          </p>
          <div>
            <Button1 cta="Start learning now" href="/" primary={true} />
          </div>
        </div>
        <div className="w-1/2 lg:w-full ">
          <Image
            src={homeHeader}
            alt="Lex-Designs"
            className=" w-full h-auto  md:w-full "
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
          />
        </div>
      </div>

      <div className=" flex lg:flex-col-reverse gap-y-12 md:gap-y-6 gap-x-12 items-center justify-between w-full  ">
        <div className="w-1/2 lg:w-full ">
          <Image
            src={homeHeader2}
            alt="Lex-Designs"
            className="rounded-2xl w-full h-auto  md:w-full "
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
          />
        </div>
        <div className="w-1/2  flex flex-col justify-around  gap-11 md:gap-6 lg:w-full">
          <h2 className=" text-[45px] lg:text-[32px] md:text-[24px] font-semibold ">
            Discover who we are as a design academy{" "}
          </h2>
          <p className=" text-lg lg:text-sm font-inter font-normal ">
            We are a leading online platform dedicated to empowering individuals
            with the skills and knowledge needed to succeed and are passionate
            about making a positive impact through your learnings.
          </p>
          <div>
            <Button1 cta="Read more" href="/" primary={false} />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;

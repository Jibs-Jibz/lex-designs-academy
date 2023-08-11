import Image from "next/image";
import React from "react";
import logo from "../../public/images/logo-white.png";
import { Icon } from "@iconify/react";
import { CustomLink } from "./Navbar";

const Footer = () => {
  return (
    <div className={`max-w-full bg-lexPrimary mt-40 lg:mt-20   w-full text-white dark:text-white flex flex-col justify-between`} >
      <div className="max-w-[2550px] items-start self-center py-[76px] xl:px-4 md:px-3 px-6 w-full flex flex-wrap gap-8  justify-between  ">
        <div className=" max-w-[411px] w-full flex flex-col  gap-10 ">
          <div className="flex flex-col gap-[22px] ">
            <div className=" max-w-[210px]  ">
              <Image
                className=" h-auto w-full "
                src={logo}
                alt="Jibs"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <p className=" text-lg lg:text-base md:text-sm font-medium leading-8 ">
              Joining LEX Design academy is the perfect way to learn any skill,
              anywhere. With our state-of-the-art learning tools and resources,
              you can master any skill at your own pace.
            </p>
          </div>
          <div className="flex items-center gap-[25px] text-[30px] ">
            <div className="  xl:w-[40px] w-[30px] h-[6px] bg-lexAccent  " />
            <Icon icon="mdi:twitter" />
            <Icon icon="mdi:linkedin" />
            <Icon icon="ri:instagram-fill" />
            <Icon icon="ri:facebook-fill" />
          </div>
        </div>
        <div className=" flex flex-col gap-4  ">
          <h3 className=" text-[26px] lg:text-lg font-medium uppercase ">
            QUICK LINKS
          </h3>
          <div className="   w-[65%] h-[6px] bg-lexAccent  " />
          <CustomLink
            asPathStyle="border-b border-b-white"
            className="text-white hover:text-white w-fit text-lg lg:text-sm "
            href="/"
            title=" Home "
          />
          <CustomLink
            asPathStyle="border-b border-b-white"
            className="text-white hover:text-white w-fit text-lg lg:text-sm "
            href="/about"
            title=" About "
          />
          <CustomLink
            asPathStyle="border-b border-b-white"
            className="text-white hover:text-white w-fit text-lg lg:text-sm "
            href="/contact"
            title=" Contact Us "
          />
           <CustomLink
            asPathStyle="border-b border-b-white"
            className="text-white hover:text-white w-fit text-lg lg:text-sm "
            href="/privacy"
            title=" Privacy Policy "
          />
        </div>
        <div className=" flex flex-col gap-4  ">
          <h3 className=" text-[26px] lg:text-lg font-medium uppercase ">
            Courses
          </h3>
          <div className="   w-[65%] h-[6px] bg-lexAccent  " />
          <CustomLink
            asPathStyle="border-b !font-medium border-b-white"
            className="text-white hover:text-white w-fit text-lg lg:text-sm "
            href="/courses/ui-ux-design"
            title="UIUX design "
          />
          <CustomLink
            asPathStyle="border-b !font-medium border-b-white"
            className="text-white hover:text-white w-fit text-lg lg:text-sm "
            href="/courses/graphics-design"
            title=" Graphics design "
          />
          <CustomLink
            asPathStyle="border-b !font-medium border-b-white"
            className="text-white hover:text-white w-fit text-lg lg:text-sm "
            href="/courses/digital-art"
            title="Digital art"
          />
        </div>
        <div className=" flex flex-col gap-4  ">
          <h3 className=" text-[26px] lg:text-lg font-medium uppercase ">
            contact
          </h3>
          <div className="   w-[65%] h-[6px] bg-lexAccent  " />
          <a
            className="text-white hover:text-white w-fit text-lg lg:text-sm "
            href="mailto:Lexdesignacademy@gmail.com"
          >
            Lexdesignacademy@gmail.com
          </a>
          <a
            className="text-white hover:text-white w-fit text-lg lg:text-sm "
            href="tel:+2349061872075"
          >
            +2349061872075
          </a>
          <a
            className="text-white hover:text-white w-fit text-lg lg:text-sm "
            href="tel:+2349047805030"
          >
            +2349047805030
          </a>
        </div>
      </div>
      <div className="  xl:min-h-full w-full py-[47px] flex items-start justify-center border-t border-t-[#B9B9B9] ">
        {/* min-h-[95vh] */}
        <span className="text-white hover:text-white w-fit text-xl xl:text-lg md:text-sm sm:text-[12px] ">
          @Lex design academy,2023. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;

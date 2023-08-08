import React, { useEffect } from "react";
import img from "../../../public/images/paul.png";
import Image from "next/image";
import Button1 from "../buttons/Button1";
import AOS from "aos";
import "aos/dist/aos.css";

const Section1 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      delay: 200, // Delay between animations in milliseconds
      once: false, // Whether to animate elements only once
    });
    AOS.refresh();
  }, []);
  return (
    <div className="flex mb-20 flex-col w-full justify-center items-center gap-60 xl:gap-40 lg:gap-32 md:gap-20">
      <main className=" flex lg:flex-col  gap-y-12 md:gap-y-10 gap-x-12 items-center justify-center w-full  ">
        <div className="w-1/2 max-w-[590px] lg:w-full flex flex-col gap-10 md:gap-6 justify-between h-full ">
          <div className=" flex flex-col gap-6 md:gap-3 ">
            {" "}
            <h2 className="text-lexPrimary text-[45px] lg:text-[32px] md:text-[24px] font-semibold ">
              Who We Are For? Choose Lex Design Academy
            </h2>
            <p className=" text-lg lg:text-sm font-inter font-normal ">
              Lex Design Academy is tailored for individuals with a drive for
              excellence and an unwavering commitment to success. Whether you
              are an aspiring designer seeking to refine your craft or a career
              transitioner aiming to immerse yourself in the realm of design,
              Lex Design Academy stands as your dedicated ally on this journey.
            </p>
          </div>
          <div className=" flex flex-col gap-6 md:gap-3 ">
            <h2 className="text-lexPrimary text-[45px] lg:text-[32px] md:text-[24px] font-semibold ">
              Our Mission
            </h2>
            <p className=" text-lg lg:text-sm font-inter font-normal ">
              We are on a mission to establish the largest hub of technical
              expertise in Africa. Our goal is to empower and guide young minds
              in acquiring the essential skills needed to thrive in the
              ever-evolving landscape of the tech industry and to pave their way
              towards promising careers.
            </p>
          </div>
        </div>
        <div className="w-1/2 max-w-[589px] lg:w-full ">
          <Image
            src={img}
            alt="Lex-Designs"
            className=" w-full h-auto  md:w-full "
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
          />
        </div>{" "}
      </main>
      <div
        data-aos="fade-up"
        className=" flex flex-col items-center gap-10 md:gap-6 max-w-[665px] w-full "
      >
        <h2 className="text-lexPrimary text-[45px] lg:text-[32px] md:text-[24px] text-center font-bold ">
          Are you Ready To Take that First Step?{" "}
        </h2>
        <Button1 cta="Start learning now" href="#" primary={true} />
      </div>
    </div>
  );
};

export default Section1;

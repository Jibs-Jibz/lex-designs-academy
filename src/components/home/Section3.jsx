import React, { useEffect, useRef } from "react";
import img from "../../../public/images/section3.png";
import Image from "next/image";
import { useInView, useMotionValue, useSpring } from "framer-motion";

import AOS from "aos";
import "aos/dist/aos.css";

const AnimatedNumbers = ({ value }) => {
  const ref = useRef(null);

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { duration: 3000 });
  const isInView = useInView(ref, { once: true });
  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    springValue.on("change", (latest) => {
      if (ref.current && latest.toFixed(0 <= value)) {
        ref.current.textContent = latest.toFixed(0);
      }
    });
  }, [springValue, value]);

  return <span ref={ref}></span>;
};

const Section3 = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration in milliseconds
      delay: 200, // Delay between animations in milliseconds
      once: false, // Whether to animate elements only once
    });
    AOS.refresh();
  }, []);
  return (
    <div className="relative">
      <div className=" absolute left-0 top-1/2 bottom-1/2 -translate-x-[100%] -translate-y-1/2 z-0 bg-lexPrimary w-[90px] lg:w-[50px] h-[377px] lg:h-[277px] " />
      <div className=" overflow-hidden max-w-[1440px] mx-auto relative w-full flex  ">
        <div className="  z-10 shadow-lex-section3 py-[56px] md:px-[20px]  px-[49px] w-full flex flex-col gap-[30px] max-w-[951px] ">
          <h2 className=" max-w-[587px] lg:max-w-full text-[45px] xl:text-[32px] md:text-xl font-semibold ">
            With the best and experienced mentors
          </h2>
          <p className=" max-w-[601px] lg:max-w-full xl:max-w-[480px]  text-lg xl:text-base  pb-[40px] leading-[42px] ">
            We pride ourselves on having the best and most experienced mentors
            in the industry. Each mentor at Lex academy is carefully selected
            based on their extensive industry experience and their dedication to
            guiding and inspiring students making their learning journey truly
            exceptional
          </p>
          <div
              data-aos="fade-up"
           className=" dark:text-black shadow-xl flex flex-wrap gap-y-[32px]  gap-x-[70px] xl:gap-x-[50px] lg:gap-x-[43px] md:gap-x-[32px] justify-between  px-[50px] xl:px-[34px] py-[30px] xl:py-[23px] : w-fit bg-lexAccent rounded-[10px] shadow-lex-num-count ">
            <div className=" flex flex-col w-fit xs:mx-auto ">
              <span className=" text-[45px] xl:text-[32px] md:text-[21px] font-semibold  ">
                <AnimatedNumbers value={50} />+{" "}
              </span>
              <span className=" text-xl xl:text-base md:text-xs font-medium ">
                {" "}
                Members{" "}
              </span>
            </div>
            <div className=" flex flex-col w-fit xs:mx-auto ">
              <span className=" text-[45px] xl:text-[32px] md:text-[21px] font-semibold  ">
                <AnimatedNumbers value={30} /> +{" "}
              </span>
              <span className=" text-xl xl:text-base md:text-xs font-medium ">
                {" "}
                Trained{" "}
              </span>
            </div>
            <div className=" flex flex-col w-fit xs:mx-auto ">
              <span className=" text-[45px] xl:text-[32px] md:text-[21px] font-semibold  ">
                <AnimatedNumbers value={100} />{" "}
              </span>
              <span className=" text-xl xl:text-base md:text-xs font-medium ">
                {" "}
                Reviews{" "}
              </span>
            </div>
          </div>
          <div className=" lg:hidden absolute right-0 bottom-0 z-20 w-full lg:max-w-[425px] xl:max-w-[494px]  max-w-[594px] cs1:-mr-20 lg:-mr-40 ">
            <Image
              src={img}
              data-aos="fade-up"
              alt="lex-designs"
              className=" w-full object-cover h-auto  md:hidden "
              priority
              sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;

import React, { useEffect } from "react";
import homeHeader from "../../../public/images/home-header-1.png";
import homeHeader2 from "../../../public/images/home-header-2.png";
import Image from "next/image";
import Button1 from "../buttons/Button1";

import AOS from "aos";
import "aos/dist/aos.css";

const Header = ({ id }) => {
  const handleClick = () => {
    const targetPosition = document.getElementById(id).offsetTop;
    smoothScrollTo(targetPosition, 1500); // Faster scroll speed (1000ms)
  };

  const smoothScrollTo = (targetPosition, duration) => {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    const scrollStep = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const progress = timestamp - startTime;
      const easeInOutCubic = progress / duration;

      window.scrollTo(0, startPosition + distance * easeInOutCubic);

      if (progress < duration) {
        requestAnimationFrame(scrollStep);
      }
    };

    requestAnimationFrame(scrollStep);
  };
  useEffect(() => {
    AOS.init({
      duration: 2000, // Animation duration in milliseconds
      delay: 200, // Delay between animations in milliseconds
      once: false, // Whether to animate elements only once
    });
    AOS.refresh();
  }, []);
  return (
    <main className=" flex flex-col md:gap-20 gap-40 ">
      <div className=" flex lg:flex-col gap-y-12 md:gap-y-10 gap-x-12 items-center justify-between w-full  ">
        <div
          data-aos="fade-up"
          className="w-1/2  flex flex-col justify-around  gap-11 md:gap-6 lg:w-full"
        >
          <h1 className=" text-6xl lg:text-[42px] md:leading-10 md:text-[36px] font-semibold ">
            Elevate your <span className=" py-20"> learning with our </span>{" "}
            Tech courses
          </h1>
          <p className=" text-lg md:text-sm md:leading-relaxed font-inter leading-7 font-normal ">
            Joining MERP academy is the perfect way to learn any skill. With our
            state-of-the-art learning tools and resources, you can master any
            skill at your own pace.
          </p>
          <div>
            <Button1
              onClick={handleClick}
              isButton={true}
              cta="Start learning now"
              primary={true}
            />
            {/* <button onClick={handleClick}>Click</button> */}
          </div>
        </div>
        <div className="w-1/2 lg:w-full ">
          <Image
            data-aos="fade-down"
            src={homeHeader}
            alt="MERP-Designs"
            className=" w-full h-auto  md:w-full "
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
          />
        </div>
      </div>

      <div className=" flex lg:flex-col-reverse gap-y-12 md:gap-y-6 gap-x-12 items-center justify-between w-full  ">
        <div className="w-1/2 lg:w-full ">
          <Image
            data-aos="fade-down"
            src={homeHeader2}
            alt="MERP-Designs"
            className="rounded-2xl w-full h-auto  md:w-full "
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
          />
        </div>
        <div
          data-aos="fade-up"
          className="w-1/2  flex flex-col justify-around  gap-11 md:gap-6 lg:w-full"
        >
          <h2 className=" text-[45px]  lg:text-[32px] md:text-[24px] font-semibold ">
            Discover who we are as a  academy{" "}
          </h2>
          <p className=" text-lg lg:text-sm font-inter font-normal md:leading-relaxed ">
            We are a leading online platform dedicated to empowering individuals
            with the skills and knowledge needed to succeed and are passionate
            about making a positive impact through your learnings.
          </p>
          <div>
            <Button1
              isHyperLink={true}
              cta="Read more"
              href="/about"
              primary={false}
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Header;

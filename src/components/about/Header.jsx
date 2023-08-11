import React, { useEffect } from "react";
import img from "../../../public/images/about-header-bg.png";
import bgDesign from "../../../public/images/about-section5.png";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500, // Animation duration in milliseconds
      delay: 200, // Delay between animations in milliseconds
      once: false, // Whether to animate elements only once
    });
    AOS.refresh();
  }, []);
  return (
    <header className=" flex flex-col  w-full gap-32 lg:gap-24 ">
      <div className=" flex flex-col gap-14 ">
        <div className=" max-w-full w-full h-auto ">
          <Image
            src={img}
            alt="about-img-Lex-Designs"
            className=" w-full h-auto  "
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
          />
        </div>
        <div
          data-aos="fade-up"
          className="  w-full flex flex-col gap-8 items-center justify-center text-center "
        >
          <h1 className="text-lexPrimary text-6xl lg:text-[42px]  md:text-[36px] font-semibold ">
            About Us
          </h1>
          <p className="md:leading-relaxed max-w-[1027px] w-full text-lg md:text-sm">
            We are a leading online platform dedicated to empowering individuals
            with the skills and knowledge needed to succeed and are passionate
            about making a positive impact through your learnings. Through our
            online platform, we aim to create a vibrant and inclusive learning
            community where individuals from all walks of life can access
            high-quality educational resources, connect with experts, and engage
            with a network of like-minded learners.
          </p>
        </div>
      </div>
      <div className="  w-full">
        <div className=" w-full h-auto ">
          <Image
            src={bgDesign}
            alt="about-img-Lex-Designs"
            className=" w-full h-auto  "
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
          />
        </div>
      </div>
    </header>
  );
};

export default Header;

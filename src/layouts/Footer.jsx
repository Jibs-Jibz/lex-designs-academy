import Image from "next/image";
import React from "react";
import logoMerp from "../../public/icons/logo-footer-new.svg";
import { Icon } from "@iconify/react";
import { CustomLink } from "./Navbar";

// Extract courses to a shared constant (ideally in a separate constants file)
const courses = [
  { title: "UI/UX Design", href: "/courses/ui-ux-design" },
  { title: "Graphics Design", href: "/courses/graphics-design" },
  { title: "Video Editing", href: "/courses/video-editing" },
  {
    title: "Social Media Management",
    href: "/courses/social-media-management",
  },
  { title: "Content Writing", href: "/courses/content-writing" },
  { title: "Digital Marketing", href: "/courses/digital-marketing" },
  { title: "Virtual Assistant", href: "/courses/virtual-assistant" },
  { title: "Web Design (WordPress)", href: "/courses/web-design" },
  {
    title: "Frontend Web Development",
    href: "/courses/frontend-web-development",
  },
  {
    title: "Backend Web Development",
    href: "/courses/backend-web-development",
  },
  { title: "Mobile App Development", href: "/courses/mobile-app-development" },
];

const Footer = () => {
  // Show only the first 6 courses in footer for better layout
  const footerCourses = courses.slice(0, 6);

  return (
    <div
      className={`max-w-full bg-lexPrimary mt-40 lg:mt-20 w-full text-white dark:text-white flex flex-col justify-between`}
    >
      <div className="max-w-[2550px] items-start self-center py-[76px] xl:px-4 md:px-3 px-20 w-full flex md:flex-col flex-wrap gap-8 justify-between">
        <div className="max-w-[411px] w-full flex flex-col gap-10">
          <div className="flex flex-col gap-[22px]">
            <div className="max-w-[210px]">
              <Image
                className="h-auto w-full"
                src={logoMerp}
                alt="Jibs"
                priority
                sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
              />
            </div>
            <p className="text-lg lg:text-base md:text-sm font-medium leading-8">
              Joining LEX Design academy is the perfect way to learn any skill,
              anywhere. With our state-of-the-art learning tools and resources,
              you can master any skill at your own pace.
            </p>
          </div>
          <div className="flex items-center gap-[25px] text-[30px]">
            <div className="xl:w-[40px] w-[30px] h-[6px] bg-lexAccent" />
            {/* Twitter */}
            <a
              href="https://x.com/Merpdesignacad"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Twitter"
            >
              <Icon
                icon="mdi:twitter"
                className="transition-colors duration-300 hover:text-[#1DA1F2] cursor-pointer"
              />
            </a>
            {/* LINKEDIN */}
            <a
              href="https://www.linkedin.com/in/merp-design-academy-i-b3a1702b9/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Icon
                icon="mdi:linkedin"
                className="transition-colors duration-300 hover:text-[#0077b5] cursor-pointer"
              />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/merp_academy/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <Icon
                icon="ri:instagram-fill"
                className="transition-colors duration-300 hover:text-[#E1306C] cursor-pointer"
              />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100083164000653"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
            >
              <Icon
                icon="ri:facebook-fill"
                className="transition-colors duration-300 hover:text-[#1877F3] cursor-pointer"
              />
            </a>
            {/* YouTube */}
            <a
              href="https://www.youtube.com/channel/UCQRnG21ehoaCo9_XNFC8QGQ"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
            >
              <Icon
                icon="ri:youtube-fill"
                className="transition-colors duration-300 hover:text-[#FF0000] cursor-pointer"
              />
            </a>
            {/* Tiktok */}
            <a
              href="https://www.tiktok.com/@merpdesignacademy"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Tiktok"
            >
              <Icon
                icon="ri:tiktok-fill"
                className="transition-colors duration-300 hover:text-[#69C9D0] cursor-pointer"
              />
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[26px] lg:text-lg font-medium uppercase">
            QUICK LINKS
          </h3>
          <div className="w-[65%] h-[6px] bg-lexAccent" />
          <CustomLink
            footer
            asPathStyle="border-b border-b-white dark:!text-lexAccent"
            className="text-white hover:text-white w-fit text-lg lg:text-sm"
            href="/"
            title="Home"
          />
          <CustomLink
            footer
            asPathStyle="border-b border-b-white dark:!text-lexAccent"
            className="text-white hover:text-white w-fit text-lg lg:text-sm"
            href="/about"
            title="About"
          />
          <CustomLink
            footer
            asPathStyle="border-b border-b-white dark:!text-lexAccent"
            className="text-white hover:text-white w-fit text-lg lg:text-sm"
            href="/contact"
            title="Contact Us"
          />
          <CustomLink
            footer
            asPathStyle="border-b border-b-white dark:!text-lexAccent"
            className="text-white hover:text-white w-fit text-lg lg:text-sm"
            href="/privacy"
            title="Privacy Policy"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[26px] lg:text-lg font-medium uppercase">
            Courses
          </h3>
          <div className="w-[65%] h-[6px] bg-lexAccent" />
          {footerCourses.map((course) => (
            <CustomLink
              key={course.href}
              footer
              asPathStyle="border-b !font-medium border-b-white"
              className="text-white hover:text-white w-fit text-lg lg:text-sm"
              href={course.href}
              title={course.title}
            />
          ))}
          {/* Link to all courses if you have a courses listing page */}
          <CustomLink
            footer
            asPathStyle="border-b !font-mediu</h3>m border-b-white"
            className="text-white hover:text-white w-fit text-lg lg:text-sm font-bold"
            href="/courses"
            title="View All Courses →"
          />
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="text-[26px] lg:text-lg font-medium uppercase">
            contact
          </h3>
          <div className="w-[65%] h-[6px] bg-lexAccent" />
          <a
            className="text-white hover:text-white w-fit text-lg lg:text-sm"
            href="mailto:Merpdesignacademy@gmail.com"
          >
            Merpdesignacademy@gmail.com
          </a>
          <a
            className="text-white hover:text-white w-fit text-lg lg:text-sm"
            href="tel:+2349061872075"
          >
            +2349061872075
          </a>
          <a
            className="text-white hover:text-white w-fit text-lg lg:text-sm"
            href="tel:+2349047805030"
          >
            +2349047805030
          </a>
        </div>
      </div>

      <div className="xl:min-h-full w-full py-[47px] flex items-start justify-center border-t border-t-[#B9B9B9]">
        <span className="text-white hover:text-white w-fit text-xl xl:text-lg md:text-sm sm:text-[12px]">
          @LEX design academy,2025. All Rights Reserved.
        </span>
      </div>
    </div>
  );
};

export default Footer;

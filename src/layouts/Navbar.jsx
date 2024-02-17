import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logoMerp from "../../public/images/logo-merp.png";
import { useRouter } from "next/router";
import Link from "next/link";
import { HamburgerClose, HamburgerOpen } from "@/components/Icons";
import useThemeSwitcher from "@/hooks/useThemeSwitcher";
import { Icon } from "@iconify/react";
import { motion } from "framer-motion";

// Nav Link COmponent for desktop
export const CustomLink = ({ href, title, className = "", asPathStyle }) => {
  const router = useRouter();
  return (
    <motion.div
      whileHover={{
        y: 2,
      }}
    >
      <Link
        href={href}
        className={` ${className}  ${
          router.asPath === href
            ? `text-lexPrimary dark:!text-lexPrimary  hover:text-lexPrimary font-bold ${asPathStyle} `
            : "font-medium dark:text-white "
        }   group`}
      >
        {title}
      </Link>
    </motion.div>
  );
};

// Navs Link Component for Mobile

const CustomMobileLink = ({ href, title, toggle, className = "" }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(href);
    toggle();
  };
  return (
    <button
      href={href}
      onClick={handleClick}
      className={` ${className}  ${
        router.asPath === href
          ? " text-lexAccent dark:text-lexPrimary font-bold"
          : "dark:text-black text-white/75"
      } hover:text-lexPrimary dark:hover:text-lexAccent  font-medium group`}
    >
      {title}
    </button>
  );
};

const CourseLink = ({ href, text, onClick, className = "" }) => {
  return (
    <Link href={href}>
      <motion.li
        onClick={onClick}
        whileHover={{
          x: 2,
        }}
        className={`cursor-pointer font-medium hover:dark:text-lexAccent text-black dark:text-white hover:text-lexPrimary p-1 ${className} `}
      >
        {text}
      </motion.li>
    </Link>
  );
};
const CourseMobileLink = ({ href, text, onClick, className = "" }) => {
  const handleClick = () => {
    onClick(); // Call the provided onClick function to handle link behavior
    // toggle(); // Close the mobile menu
  };

  return (
    <Link href={href}>
      <motion.li
        onClick={handleClick} // Use the new handleClick function
        whileTap={{
          x: 2,
        }}
        className={`cursor-pointer  hover:!text-lexAccent dark:hover:!text-lexPrimary  text-black dark:text-white p-1 ${className}`}
      >
        {text}
      </motion.li>
    </Link>
  );
};

const Navbar = () => {
  const [mode, setMode] = useThemeSwitcher();
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const [shown, setShown] = useState(false);
  const toggleDropdown = () => {
    setShown(!shown);
  };

  const showMenu = {
    enter: {
      opacity: 1,
      y: 0,
      display: "block",
    },
    exit: {
      y: -5,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };
  const handleClick = () => {
    setIsOpen(!isOpen);
    // best practice
    // setIsOpen(prev => !prev);
  };
  // Function to close the mobile menu
  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Add event listener when the component mounts
    document.addEventListener("mousedown", handleOutsideClick);

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  // Function to handle clicks outside the mobile menu
  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  return (
    <header className=" dark:shadow-sm dark:shadow-white/50 shadow-[0px_6px_15px_0px_rgba(0,0,0,0.15)] relative ">
      <nav className="w-full flex flex-row items-center  justify-between xl:px-4 md:px-3 px-6 pb-4 pt-7">
        <div className=" max-w-[110px] md:max-w-[117px]  ">
          <Image
            className=" dark:hidden h-auto w-full "
            src={logoMerp}
            // src={`/images/logo-merp.png`}
            alt="lex-designs"
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
          />
          <Image
            className=" hidden dark:flex h-auto w-full "
            src={logoMerp}
            // src={`/images/logo-merp.png`}
            alt="lex-designs"
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
          />
        </div>
        <div className=" lg:hidden flex gap-8  ">
          <CustomLink
            className="hover:text-lexPrimary dark:hover:text-lexAccent hover:!font-bold "
            href="/"
            title=" Home "
          />
          <CustomLink
            className="hover:text-lexPrimary dark:hover:text-lexAccent hover:!font-bold "
            href="/about"
            title=" About "
          />
          <motion.div
            className="hover:text-lexPrimary  hover:font-bold dark:hover:text-lexAccent font-medium group"
            onHoverStart={() => setShown(true)}
            onHoverEnd={() => setShown(false)}
          >
            <span className=" hover:font-bold dark:text-white dark:hover:text-lexAccent  cursor-pointer">
              Courses
            </span>
            <motion.ul
              variants={showMenu}
              initial="exit"
              animate={shown ? "enter" : "exit"}
              className="absolute bg-white border  dark:bg-black dark:hover:text-lexAccent dark:border-lexAccent border-lexPrimary border-opacity-50 rounded-lg p-2"
            >
              <CourseLink
                href="/courses/ui-ux-design"
                text="UIUX design"
                onClick={toggleDropdown}
              />
              <CourseLink
                href="/courses/graphics-design"
                text="Graphics design"
                onClick={toggleDropdown}
              />
              <CourseLink
                href="/courses/digital-art"
                text="Digital art"
                onClick={toggleDropdown}
              />
            </motion.ul>
          </motion.div>
          <CustomLink
            className="hover:text-lexPrimary dark:hover:text-lexAccent hover:!font-bold "
            href="/contact"
            title=" Contact Us"
          />
        </div>
        <motion.div
          whileHover={{
            y: 2,
          }}
        >
          <button
            className={` ml-3 flex items-center justify-center rounded-full p-1 lg:hidden  
          ${mode === "light" ? "bg-black text-white" : " bg-white text-black"}
         `}
            onClick={() => setMode(mode === "light" ? "dark" : "light")}
          >
            {mode === "dark" ? (
              <Icon
                width="25"
                className="w-[25px] h-[25px] fill-black"
                icon="line-md:moon-filled-alt-loop"
              />
            ) : (
              <Icon
                width="25"
                className="w-[25px] h-[25px] fill-black"
                icon="line-md:sun-rising-loop"
              />
            )}
          </button>
        </motion.div>
        {/* Hamburger Icons */}
        <button
          className={`lg:flex hidden dark:text-white flex-col justify-center items-center ${
            isOpen ? "rotate-90" : ""
          } transition-all duration-300`}
          onClick={handleClick}
        >
          {isOpen ? <HamburgerClose /> : <HamburgerOpen />}
        </button>
      </nav>
      {isOpen ? (
        <motion.div
          ref={menuRef}
          initial={{ scale: 0, opacity: 0, x: "-50%", y: "-50%" }}
          animate={{ scale: 1, opacity: 1 }}
          className="z-30 min-w-[85vw] hidden lg:flex gap-8 flex-col justify-between items-center fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-black/80  dark:bg-white/75 rounded-lg backdrop-blur-md py-32  "
        >
          <nav className="flex flex-col items-center text-center justify-center gap-10 ">
            <CustomMobileLink toggle={handleClick} href="/" title=" Home " />
            <CustomMobileLink
              toggle={handleClick}
              href="/about"
              title=" About "
            />
            <motion.div
              className="hover:text-lexPrimary font-medium group cursor-pointer" // Added cursor-pointer here
              onClick={() => {
                setShown(!shown);
              }}
            >
              <span className="flex gap-1 items-center  dark:text-black text-white/75">
                Courses <Icon icon="basil:caret-down-outline" />
              </span>
              <motion.ul
                variants={showMenu}
                initial="exit"
                animate={shown ? "enter" : "exit"}
                className="absolute flex justify-center items-center flex-col dark:bg-black border bg-white  dark:hover:text-lexAccent dark:border-lexPrimary border-lexAccent border-opacity-50 rounded-lg p-2"
              >
                <CourseMobileLink
                  href="/courses/ui-ux-design"
                  text="UIUX design"
                  onClick={handleClick}
                />
                <CourseMobileLink
                  href="/courses/graphics-design"
                  text="Graphics design"
                  onClick={handleClick}
                />
                <CourseMobileLink
                  href="/courses/digital-art"
                  text="Digital art"
                  onClick={handleClick}
                />
              </motion.ul>
            </motion.div>

            <CustomMobileLink
              toggle={handleClick}
              href="/contact"
              title=" Contact Us"
            />
          </nav>
          <motion.div
            whileHover={{
              y: 2,
            }}
          >
            <button
              className={`  flex items-center justify-center rounded-full p-1 
            ${mode === "light" ? "bg-black text-white" : " bg-white text-black"}
            `}
              onClick={() => setMode(mode === "light" ? "dark" : "light")}
            >
              {mode === "dark" ? (
                <Icon
                  width="30"
                  className="w-[30px] h-[30px] fill-black"
                  icon="line-md:moon-filled-alt-loop"
                />
              ) : (
                <Icon
                  width="30"
                  className="w-[30px] h-[30px] fill-black"
                  icon="line-md:sun-rising-loop"
                />
              )}
            </button>
          </motion.div>
        </motion.div>
      ) : null}
    </header>
  );
};

export default Navbar;

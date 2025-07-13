"use client";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import logoMerp from "../../public/icons/logo-new.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import { HamburgerClose, HamburgerOpen } from "@/components/Icons";
import { ModeToggle } from "@/components/mode-toggle";
import { motion } from "framer-motion";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";
import { ChevronDown } from "lucide-react";
// import { Icon } from "@/components/Icons"; // Import Icon component

// Nav Link Component for desktop
export const CustomLink = ({
  href,
  title,
  className = "",
  asPathStyle,
  footer,
}) => {
  const router = useRouter();
  const pathName = router.pathname;
  return (
    <motion.div
      whileHover={{
        y: 2,
      }}
    >
      <Link
        href={href}
        className={cn(
          " group",
          className,
          router.asPath === href
            ? `text-lexPrimary dark:!text-lexAccent  hover:text-lexPrimary font-bold ${asPathStyle} `
            : "font-medium dark:text-white ",
          footer &&
            router.asPath === href &&
            " text-lexAccent  text-lg lg:text-sm"
        )}
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

const CourseMobileLink = ({ href, text, onClick, className = "" }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  const handleClick = () => {
    onClick();
  };

  return (
    <Link href={href}>
      <motion.li
        onClick={handleClick}
        whileTap={{
          x: 2,
        }}
        className={cn(
          "cursor-pointer hover:!text-lexAccent dark:hover:!text-lexPrimary p-1",
          isActive
            ? "text-lexAccent dark:text-lexPrimary font-bold"
            : "text-black dark:text-white",
          className
        )}
      >
        {text}
      </motion.li>
    </Link>
  );
};

// Courses array - 9 courses for 3x3 grid
const courses = [
  { title: "UI/UX Design", href: "/courses/ui-ux-design" },
  { title: "Graphics Design", href: "/courses/graphics-design" },
  { title: "Digital Arts", href: "/courses/digital-arts" },
  { title: "Video Editing", href: "/courses/video-editing" },
  {
    title: "Social Media Management",
    href: "/courses/social-media-management",
  },
  { title: "Content Writing", href: "/courses/content-writing" },
  { title: "Content Creation", href: "/courses/content-creation" },
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

const CourseItem = ({ title, href, className }) => {
  const router = useRouter();
  const isActive = router.asPath === href;

  return (
    <NavigationMenuLink asChild>
      <Link
        href={href}
        className={cn(
          "select-none rounded-md p-4 leading-none no-underline outline-none transition-colors hover:bg-lexPrimary/10 dark:hover:bg-lexAccent/10 hover:text-lexPrimary dark:hover:text-lexAccent min-h-[60px] flex items-center justify-start",
          isActive
            ? "bg-lexPrimary/20 dark:bg-lexAccent/20 text-lexPrimary dark:text-lexAccent font-bold"
            : "",
          className
        )}
      >
        <div className="text-base text-left font-medium leading-none">
          {title}
        </div>
      </Link>
    </NavigationMenuLink>
  );
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const [shown, setShown] = useState(false);
  const router = useRouter();

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
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleOutsideClick);
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const handleOutsideClick = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      closeMenu();
    }
  };

  useEffect(() => {
    if (isOpen) {
      // Disable scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      // Re-enable scroll when menu is closed
      document.body.style.overflow = "unset";
    }

    // Cleanup function to ensure scroll is re-enabled when component unmounts
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  return (
    <div className=" relative ">
      <header className="sticky top-0 z-50 bg-white px-12 dark:bg-black dark:shadow-sm dark:shadow-white/50 shadow-[0px_6px_15px_0px_rgba(0,0,0,0.15)] backdrop-blur-md">
        <nav className="w-full flex flex-row items-center  justify-between xl:px-4 md:px-3 px-6 pb-4 pt-7">
          <div className=" max-w-[110px] md:max-w-[117px]  ">
            <Image
              className=" dark:hidden h-auto w-60 "
              src={logoMerp || "/placeholder.svg"}
              alt="lex-designs"
              priority
              sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
            />
            <Image
              className=" hidden dark:flex h-auto w-full "
              src={logoMerp || "/placeholder.svg"}
              alt="lex-designs"
              priority
              sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
            />
          </div>

          <div className=" lg:hidden flex gap-20 items-center ">
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
            {/* Shadcn Navigation Menu for Courses - 3x3 Grid */}
            <NavigationMenu className="[&>div]:left-1/2 [&>div]:-translate-x-1/2">
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger
                    className={cn(
                      "hover:text-lexPrimary dark:hover:text-lexAccent hover:!font-bold font-medium dark:text-white bg-transparent",
                      router.asPath === "/courses" ||
                        router.asPath.startsWith("/courses/")
                        ? "text-lexPrimary dark:!text-lexAccent font-bold"
                        : ""
                    )}
                  >
                    Courses
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="grid grid-cols-3 text-right gap-4 p-6 w-[1000px] min-h-[300px] ">
                      {courses.map((course) => (
                        <CourseItem
                          key={course.title}
                          title={course.title}
                          href={course.href}
                        />
                      ))}
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <CustomLink
              className="hover:text-lexPrimary dark:hover:text-lexAccent hover:!font-bold "
              href="/contact"
              title=" Contact Us"
            />
          </div>

          {/* Replace custom theme switcher with shadcn ModeToggle */}
          <div className="lg:hidden">
            <ModeToggle />
          </div>

          <button
            className={`lg:flex hidden dark:text-white flex-col justify-center items-center ${
              isOpen ? "rotate-90" : ""
            } transition-all duration-300`}
            onClick={handleClick}
          >
            {isOpen ? <HamburgerClose /> : <HamburgerOpen />}
          </button>
        </nav>
      </header>
      {isOpen ? (
        <motion.div
          ref={menuRef}
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-30 flex w-[80%] mx-auto h-fit my-auto py-16 rounded-xl items-center justify-center bg-black/80 dark:bg-white/75 backdrop-blur-md"
        >
          <div className="flex flex-col items-center justify-center gap-10 text-center w-full max-w-md px-6">
            <nav className="flex flex-col items-center justify-center gap-8 w-full">
              <CustomMobileLink toggle={handleClick} href="/" title="Home" />
              <CustomMobileLink
                toggle={handleClick}
                href="/about"
                title="About"
              />

              {/* Mobile Courses Menu */}
              <div className="relative w-full flex flex-col items-center">
                <motion.div
                  className={cn(
                    "hover:text-lexPrimary font-medium group cursor-pointer",
                    router.asPath === "/courses" ||
                      router.asPath.startsWith("/courses/")
                      ? "text-lexAccent dark:text-lexPrimary font-bold"
                      : "dark:text-black text-white/75"
                  )}
                  onClick={() => {
                    setShown(!shown);
                  }}
                >
                  <span className="flex gap-1 items-center">
                    Courses <ChevronDown className="h-4 w-4" />
                  </span>
                </motion.div>

                <motion.ul
                  variants={showMenu}
                  initial="exit"
                  animate={shown ? "enter" : "exit"}
                  className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 flex justify-center items-center flex-col dark:bg-black border bg-white dark:hover:text-lexAccent dark:border-lexPrimary border-lexAccent border-opacity-50 rounded-lg p-2 min-w-[200px] max-h-[300px] overflow-y-auto"
                >
                  {courses.map((course) => (
                    <CourseMobileLink
                      key={course.title}
                      href={course.href}
                      text={course.title}
                      onClick={handleClick}
                    />
                  ))}
                </motion.ul>
              </div>

              <CustomMobileLink
                toggle={handleClick}
                href="/contact"
                title="Contact Us"
              />
            </nav>

            {/* Mode Toggle */}
            <div className="mt-4">
              <ModeToggle />
            </div>
          </div>
        </motion.div>
      ) : null}
    </div>
  );
};

export default Navbar;

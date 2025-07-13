import React from "react";
import { COURSES } from "@/constants";
import { ALL_COURSES, CourseCard } from "@/pages/courses";
import { motion } from "framer-motion";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

// Show More Card Component
const ShowMoreCard = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-br from-lexPrimary to-lexPrimary/80 dark:from-gray-900 dark:via-lexAccent/30 dark:to-black rounded-xl shadow-lex-course-card dark:shadow-white/10 overflow-hidden group hover:shadow-lex-section3 dark:hover:shadow-white/20 transition-all duration-300 min-h-[400px] flex flex-col items-center justify-center text-center p-6"
    >
      <div className="text-white dark:text-white mb-6">
        <div className="w-16 h-16 bg-white/20 dark:bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4">
          <ArrowRight className="w-8 h-8" />
        </div>
        <h3 className="text-2xl font-bold mb-3">Explore More Courses</h3>
        <p className="text-white/90 dark:text-white/80 mb-6">
          Discover our full catalog of {ALL_COURSES.length} professional courses
          designed to advance your career
        </p>
      </div>

      <Link href="/courses">
        <motion.button
          whileHover={{ y: -2, scale: 1.05 }}
          whileTap={{ y: 0, scale: 0.95 }}
          className="bg-white text-lexPrimary hover:bg-gray-100 dark:bg-lexAccent dark:text-black dark:hover:bg-lexAccent/90 font-medium py-3 px-6 rounded-lg transition-all duration-300 flex items-center gap-2"
        >
          View All Courses
          <ArrowRight className="w-4 h-4" />
        </motion.button>
      </Link>
    </motion.div>
  );
};

const Section2 = ({ props, ref, id }) => {
  // Get first 6 courses for the carousel
  const featuredCourses = ALL_COURSES.slice(0, 6);

  return (
    <div ref={ref} id={id}>
      <div className="pt-20 bg-white dark:bg-black" id="reff">
        <div className="flex flex-col gap-20 w-full items-center justify-center max-w-7xl mx-auto px-6 md:px-4">
          {/* Header Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-8 md:gap-4 items-center text-center w-full max-w-[696px]"
          >
            <h2 className="font-semibold text-[40px] lg:text-[32px] md:text-[24px] w-full max-w-[567px] text-gray-900 dark:text-white">
              Learn our courses to help scale up your skills
            </h2>
            <p className="text-lg lg:text-sm text-gray-600 dark:text-gray-300">
              Our courses gives you the knowledge and skills to help you
              accomplish your goals all the way from beginners to intermediate
              level
            </p>
          </motion.div>

          {/* Carousel Section */}
          <div className="w-full relative ">
            <Carousel
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              {/* Carousel Navigation */}
              <div className="absolute -bottom-8 left-0 right-0 flex items-center justify-end w-fit mx-auto gap-6">
                <CarouselPrevious className="hidden md:flex -left-12 lg:-left-8 bg-white mr-4 dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700" />
                <CarouselNext className="hidden md:flex -right-12 lg:-right-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-700" />
              </div>

              <CarouselContent className="-ml-2 md:-ml-4">
                {/* Featured Courses */}
                {featuredCourses.map((course, index) => (
                  <CarouselItem
                    key={course.id}
                    className="pl-2 md:pl-4 basis-1/3 lg:basis-1/2 md:basis-full"
                  >
                    <CourseCard course={course} index={index} />
                  </CarouselItem>
                ))}

                {/* Show More Card */}
                <CarouselItem className="pl-2 md:pl-4 basis-1/3 lg:basis-1/2 md:basis-full">
                  <ShowMoreCard />
                </CarouselItem>
              </CarouselContent>
            </Carousel>
          </div>

          {/* View All Courses Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center"
          >
            <Link href="/courses">
              <motion.button
                whileHover={{ y: -2 }}
                whileTap={{ y: 0 }}
                className="bg-lexPrimary hover:bg-lexPrimary/90 dark:bg-lexAccent dark:hover:bg-lexAccent/90 text-white dark:text-black font-medium py-3 px-8 rounded-lg transition-all duration-300 flex items-center gap-2"
              >
                View All Courses
                <ArrowRight className="w-4 h-4" />
              </motion.button>
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Section2;

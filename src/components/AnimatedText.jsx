import { motion } from "framer-motion";
import React from "react";

const quote = {
  initial: {
    opacity: 1,
  },
  animate: {
    opacity: 1,
    transition: {
      delay: 0.5,
      staggerChildren: 0.08,
    },
  },
};

const singleWord = {
  initial: {
    opacity: 0,
    y: 50,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1,
    },
  },
};

const AnimatedText = ({ text, className = "" }) => {
  return (
    <div className=" w-full flex items-center justify-center text-center overflow-hidden   ">
      <motion.div
        variants={quote}
        initial="initial"
        animate="animate"
        className={`${className} inline-block w-full dark:text-white text-black font-semibold text-[45px] `}
      >
        {text.split(" ").map((word, index) => (
          <motion.span
            variants={singleWord}
            key={word + "-" + index}
            className=" inline-block "
          >
            {word}&nbsp;
          </motion.span>
        ))}
      </motion.div>
    </div>
  );
};

export default AnimatedText;

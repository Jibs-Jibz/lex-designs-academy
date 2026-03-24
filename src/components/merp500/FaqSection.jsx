import { useState } from "react";
import { FAQ_DATA } from "./data";
import { motion, AnimatePresence } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1, y: 0,
    transition: { type: "tween", duration: 0.4 },
  },
};

const FaqItem = ({ q, a, isOpen, onToggle }) => {
  return (
    <motion.div variants={itemVariants} className="bg-white flex flex-col p-[19px] gap-[16px] w-full transition-all duration-300">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between gap-[24px] text-left focus:outline-none"
      >
        <span className="font-archivo text-[16px] font-semibold text-[#000000] tracking-[0.01em]">
          {q}
        </span>
        <div
          className={`shrink-0 w-[24px] h-[24px] flex items-center justify-center transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          <svg width="14" height="8" viewBox="0 0 14 8" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 1L7 7L13 1" stroke="#09244B" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="font-archivo text-[16px] font-bold text-[#000000] opacity-40 leading-[1.25] tracking-[0.01em]">
              {a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="bg-[#FCF7FB] py-[100px] md:py-[60px] px-[131px] xl:px-12 md:px-5">
      <div className="max-w-[1240px] mx-auto flex flex-row items-start justify-between gap-[57px] lg:flex-col lg:gap-[40px]">
        {/* Left heading frame */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="shrink-0 w-[492px] lg:w-full flex flex-col gap-[8px]"
        >
          <p className="font-archivo text-[14px] font-medium text-[#0E0D0D]/70 tracking-[0.01em] leading-[26px] uppercase">
            FAQs
          </p>
          <h2 className="font-archivo text-[36px] md:text-[28px] font-semibold text-[#010101] leading-[46px] md:leading-[1.2] tracking-[-0.03em] capitalize">
            Common questions we answered for you
          </h2>
        </motion.div>

        {/* Right — accordion frame */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1 w-[686px] lg:w-[100%] max-w-[686px] lg:max-w-full flex flex-col gap-[8px] pt-[100px] lg:pt-0"
        >
          {FAQ_DATA.map((item, i) => (
            <FaqItem 
              key={i} 
              q={item.q} 
              a={item.a} 
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FaqSection;

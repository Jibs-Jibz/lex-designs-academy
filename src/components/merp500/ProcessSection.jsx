import Link from "next/link";
import { PROCESS_STEPS } from "./data";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40, x: -20 },
  visible: {
    opacity: 1,
    y: 0,
    x: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const ProcessSection = () => {
  return (
    <section className="bg-white dark:bg-[#0A0A0A] md:bg-[#F7F4F7] dark:md:bg-[#0A0A0A] px-16 xl:px-8 md:px-[16px] py-24 md:py-[40px]">
      <div className="max-w-[1178px] mx-auto flex flex-col items-center justify-center gap-[48px] md:gap-[32px]">
        
        {/* Heading frame */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="flex flex-col w-full md:gap-[5px]"
        >
          <p className="font-archivo text-[14px] font-medium text-[#0E0D0D]/70 dark:text-white/50 tracking-[0.01em] capitalize leading-[26px]">
            OUR PROCESS
          </p>
          <h2 className="font-archivo text-[48px] md:text-[32px] font-semibold text-[#010101] dark:text-white leading-[56px] md:leading-[28px] tracking-[-0.03em] capitalize">
            How mERP <span className="text-lexAccent">500</span> Works.
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="w-full relative">
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            className="grid grid-cols-4 md:grid-cols-1 md:gap-[32px] divide-x md:divide-x-0 md:divide-y divide-[#671355]/40"
          >
            {PROCESS_STEPS.map((step, index) => (
              <motion.div
                variants={itemVariants}
                key={step.num}
            className={`flex flex-col gap-[32px] px-[24px] xl:px-4 md:px-0 md:py-[24px] divide-[#671355]/40 ${
                  index === 0 ? "pl-0 md:pl-0 md:pt-0" : ""
                } ${index === 3 ? "pr-0 md:pr-0 md:pb-0" : ""}`}
              >
                {/* Large step number */}
                <span className="font-archivo text-[80px] font-bold text-[#1F1B1E] dark:text-white opacity-[0.08] leading-[79px] md:leading-[59px] tracking-[-0.03em] capitalize">
                  {step.num}
                </span>

                <div className="flex flex-col gap-[8px]">
                  {/* Step title */}
                  <h3 className="font-inter text-[16px] font-bold text-[#290822] dark:text-white leading-[16px] tracking-[-0.04em] uppercase">
                    {step.title}
                  </h3>
                  {/* Step description */}
                  <p className="font-geist text-[16px] font-normal text-black/60 dark:text-white/40 leading-[24px] tracking-[0.01em]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Footer row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          className="w-full flex items-center justify-between md:flex-col md:items-start md:gap-[24px] mt-0 md:mt-2"
        >
          <p className="font-archivo text-[16px] font-bold md:font-medium text-black/60 dark:text-white/50 leading-[24px] tracking-[0.01em] uppercase">
            New cohorts is open every month from April to November.
          </p>
          <Link
            href="#courses"
            className="font-archivo text-[16px] font-bold text-[#671355] dark:text-[#FBD11B] leading-[17px] uppercase underline hover:text-opacity-80 transition-opacity"
          >
            secure your slot
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessSection;

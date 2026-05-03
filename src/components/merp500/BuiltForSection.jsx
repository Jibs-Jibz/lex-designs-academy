import { motion } from "framer-motion";
import { AUDIENCE_CARDS } from "./data";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, x: 20 },
  visible: {
    opacity: 1, y: 0, x: 0,
    transition: { type: "tween", duration: 0.5, ease: "easeOut" },
  },
};

const BuiltForSection = () => {
  return (
    <section className="bg-[#FCF7FB] dark:bg-[#0A0A0A] py-[50px] pl-[131px] pr-[105px] xl:px-12 md:py-[40px] md:px-[16px]">
      <div className="max-w-[1240px] mx-auto flex flex-row items-start justify-between gap-[57px] lg:flex-col lg:gap-[40px]">
        {/* Left heading frame */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="shrink-0 w-[518px] lg:w-full flex flex-col gap-[14px]"
        >
          <p className="font-archivo text-[14px] font-medium text-[#0E0D0D]/70 dark:text-white/50 tracking-[0.01em] leading-[26px] capitalize">
            WHO IS MERP 500 FOR
          </p>
          <h2 className="font-archivo text-[40px] md:text-[32px] font-semibold text-[#010101] dark:text-white leading-[56px] md:leading-[1.05] tracking-[-0.03em] capitalize">
            Built for people who are ready.
          </h2>
          <p className="font-geist text-[16px] font-bold text-[#010101] dark:text-white opacity-40 leading-[16px] tracking-[0.01em] lowercase mt-[8px]">
            if you are willing to commit 4 weeks, this is for you
          </p>
        </motion.div>

        {/* Right — Card list */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="flex-1 w-[686px] lg:w-[100%] max-w-[686px] lg:max-w-full flex flex-col gap-[4px] pt-[100px] lg:pt-0"
        >
          {AUDIENCE_CARDS.map((card) => (
            <motion.div 
              variants={itemVariants}
              key={card.num} 
              className="flex items-start gap-[72px] xl:gap-[40px] md:gap-[16px] bg-white dark:bg-[#1a1a1a] p-[19px]"
            >
              <span className="font-archivo text-[22px] font-semibold text-[#000000] dark:text-white opacity-40 leading-[16px] tracking-[0.01em] shrink-0 mt-0.5 lowercase">
                {card.num}
              </span>
              <div className="flex flex-col gap-[8px]">
                <h3 className="font-archivo text-[16px] font-semibold text-[#000000] dark:text-white leading-[16px] tracking-[0.01em]">
                  {card.title}
                </h3>
                <p className="font-geist text-[16px] font-normal text-[#000000] dark:text-white opacity-40 leading-[20px] md:leading-[1.25] tracking-[0.01em]">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default BuiltForSection;

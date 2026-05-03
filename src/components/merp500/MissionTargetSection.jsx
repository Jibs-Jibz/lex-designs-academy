import { STATS } from "./data";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5 },
  visible: {
    opacity: 1, scale: 1,
    transition: { type: "spring", stiffness: 120, damping: 14 },
  },
};

// Figma node 2028:3 — bg:#671355
// "THE mission target" 14px w=700 #ffffff
// "Every chohort moves us closer to the 500 mark" 36px w=600 #ffffff
// Stat numbers (500,8,16,40): 108px w=700 #ffffff
// Stat labels: 13px w=700 #ffffff
// Footer "When you join…": 14px w=700 #ffffff
// Footer "You're becoming…": 14px w=600 #ffffff

const MissionTargetSection = () => {
  return (
    <section className="bg-lexPrimary px-16 xl:px-8 md:px-5 py-24 md:py-16">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-14">

        {/* Heading frame w=436 */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {/* 14px bold */}
          <p className="font-poppins text-[14px] font-bold text-white tracking-widest uppercase mb-4">
            THE MISSION TARGET
          </p>
          {/* 36px semibold */}
          <h2 className="font-poppins text-[36px] xl:text-[28px] md:text-[24px] font-semibold text-white leading-snug max-w-[436px]">
            Every cohort moves us closer to the 500 mark
          </h2>
        </motion.div>

        {/* Stats — Frame container w=936 */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.4 }}
          className="flex divide-x divide-white/30 md:flex-wrap md:divide-x-0 md:gap-10"
        >
          {STATS.map((s) => (
            <motion.div
              variants={itemVariants}
              key={s.label}
              className="flex flex-col gap-2 px-14 xl:px-10 md:px-0 first:pl-0"
            >
              {/* 108px bold */}
              <span className="font-poppins text-[108px] xl:text-[80px] lg:text-[60px] md:text-[52px] font-bold text-white leading-none">
                {s.number}
              </span>
              {/* 13px bold */}
              <span className="font-poppins text-[13px] font-bold text-white">
                {s.label}
              </span>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer text */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col gap-1"
        >
          {/* 14px bold */}
          <p className="font-poppins text-[14px] font-bold text-white">
            When you join, you&apos;re not just enrolling.
          </p>
          {/* 14px semibold */}
          <p className="font-poppins text-[14px] font-semibold text-white">
            You&apos;re becoming part of the MERP 500 milestone.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionTargetSection;

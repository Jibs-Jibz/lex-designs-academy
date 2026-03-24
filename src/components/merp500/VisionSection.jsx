import { motion } from "framer-motion";

const VisionSection = () => {
  return (
    <section className="bg-[#060505] px-16 xl:px-8 md:px-5 py-24 md:py-16">
      <div className="max-w-[1240px] mx-auto flex gap-12 xl:gap-8 lg:flex-col lg:items-start items-center justify-between">
        
        {/* Left / Heading wrapper */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="shrink-0 flex flex-col gap-2 w-full lg:max-w-full max-w-[420px]"
        >
          <p className="font-inter text-[14px] font-bold text-white tracking-widest uppercase">
            THE VISION
          </p>
          <h2 className="font-archivo text-[48px] xl:text-[40px] md:text-[36px] font-bold text-white leading-tight capitalize">
            why merp 500 exists
          </h2>
        </motion.div>

        {/* Right / Body copy */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
        >
          <p className="font-geist text-[18px] md:text-[16px] font-semibold text-white leading-[1.6] max-w-[605px]">
            Nigeria doesn&apos;t lack talent. It lacks structured, practical
            training that leads to real output. Too many people watch tutorials.
            Too few build real projects. MERP 500 is our answer. Between April and
            November, we are intentionally training 600 students in high-demand
            digital skills — focusing on hands-on projects, industry workflows,
            and portfolio-ready outcomes. This is not casual learning. This is
            structured acceleration.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default VisionSection;

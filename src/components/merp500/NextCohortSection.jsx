import Link from "next/link";
import { motion } from "framer-motion";

const NextCohortSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-center w-full min-h-[656px] md:min-h-[496px] py-[150px] px-[105px] md:py-[40px] md:px-[16px] gap-[48px] overflow-hidden bg-[#520F43]">
      {/* Background Gradient overlay */}
      <div className="absolute inset-0 bg-[#121212]/40 z-0 pointer-events-none" />

      {/* Decorative Background Text (Figma Absolute positions) */}
      <div className="absolute inset-0 flex items-center justify-center overflow-hidden z-0 pointer-events-none select-none">
        {/* TOP */}
        <div className="absolute top-[-70px] md:top-[-20px] left-1/2 -translate-x-1/2 flex gap-[40px] whitespace-nowrap  z-10">
          {[...Array(8)].map((_, i) => (
            <span key={`top-${i}`} className="font-archivo font-bold text-[176px] md:text-[62px] text-white opacity-[0.04] tracking-[-0.06em]">
              April 2026
            </span>
          ))}
        </div>

        {/* BOTTOM */}
        <div className="absolute bottom-[-70px] md:bottom-[-20px] left-1/2 -translate-x-1/2 flex gap-[40px] whitespace-nowrap  z-10">
          {[...Array(8)].map((_, i) => (
            <span key={`bottom-${i}`} className="font-archivo font-bold text-[176px] md:text-[62px] text-white opacity-[0.04] tracking-[-0.06em]">
              April 2026
            </span>
          ))}
        </div>

        {/* LEFT */}
        <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-90 flex gap-[40px] whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span key={`left-${i}`} className="font-archivo font-bold text-[117px] md:text-[62px] text-white opacity-[0.04] tracking-[-0.06em]">
              April 2026
            </span>
          ))}
        </div>

        {/* RIGHT */}
        <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 rotate-90 flex gap-[40px] whitespace-nowrap">
          {[...Array(8)].map((_, i) => (
            <span key={`right-${i}`} className="font-archivo font-bold text-[117px] md:text-[62px] text-white opacity-[0.04] tracking-[-0.06em]">
              April 2026
            </span>
          ))}
        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 flex flex-col items-center w-full gap-[48px]"
      >
        {/* Main Heading — slides in from top */}
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="font-inter font-bold text-[96px] md:text-[43px] text-white/[0.31] leading-[1.1] tracking-[-0.08em] text-center max-w-[756px] md:max-w-[361px]"
        >
          Next Cohort starts{" "}
          <span
            className="text-[#FBD11B] block"
            style={{ animation: "cohortGlow 2.5s ease-in-out infinite" }}
          >
            April 2026
          </span>
        </motion.h2>

        {/* Action area */}
        <div className="flex flex-col md:flex-col-reverse items-center justify-center gap-[48px] md:gap-[8px] w-full">
          
          {/* Limited text block */}
          <div className="flex items-center justify-center p-[12px_24px] md:p-0 md:border-none border border-white/40 rounded-[5px] md:mt-[4px]">
            <p className="font-geist font-bold md:font-normal text-[18px] md:text-[10px] text-white/40 md:text-white/95 tracking-[0.01em] uppercase text-center">
              Limited to <span className="text-[#FBD11B]">40 students</span> per course
            </p>
          </div>

          {/* Button */}
          <Link
            href="/courses"
            className="flex items-center justify-center w-[261px] md:w-[236px] h-[58px] bg-[#FBD11B] border border-[#671355] rounded-[32px] hover:opacity-90 transition-opacity"
          >
            <span className="font-archivo font-bold text-[17px] md:text-[15px] text-white md:text-[#38112F] uppercase tracking-[-0.02em]">
              Secure your slot now
            </span>
          </Link>
          
        </div>
      </motion.div>
    </section>
  );
};

export default NextCohortSection;

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { TextRoll } from "./TextRoll";

// Figma: Frame 9 button container w=473 h=49
// Title: 64px w=600 #ffffff
// Subtitle: 16px w=400 #ffffff
// "Limited…": 16px w=400 #ffffff

const courses = [
  { label: "Graphic Design", active: false },
  { label: "UI/UX Design", active: true },
  { label: "Digital Marketing", active: false },
  { label: "Content Creation", active: false },
];

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
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const HeroSection = () => {
  return (
    <section className="relative bg-[#0F0E0F] min-h-[797px] flex items-center overflow-hidden xl:px-8 py-[120px] px-[102px] pb-[80px] md:px-[16px] md:pb-[60px] md:pt-[120px]">
      
      {/* bBG gradient color */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.15 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        aria-hidden
        className="absolute w-[1764px] h-[841px] top-[-840px] left-[calc(50%-882px)] pointer-events-none z-[3]"
        style={{ background: "#671355", filter: "blur(300px)" }}
      />

      {/* Ellipse 1 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 0.2, scale: 1 }}
        viewport={{ once: true, amount: 0.1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        aria-hidden
        className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[890px] h-[890px] rounded-full pointer-events-none"
        style={{ background: "#671355", filter: "blur(250px)" }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex items-center justify-center  gap-[101px] lg:flex-col lg:gap-[40px]">

        {/* Left — Hero container */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="flex flex-col gap-8 md:gap-10 w-[541px] xl:w-[480px] lg:w-full md:w-full md:max-w-full shrink-0 relative z-20"
        >
          
          {/* Hero text frame */}
          <div className="flex flex-col gap-[16px]">
            <motion.div variants={itemVariants} className="relative inline-block w-full mt-4 md:mt-0">
              {/* Figma: "You" icon placed above 500 Future text */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, type: "spring", stiffness: 200, damping: 12 }}
                className="absolute left-[280px] top-[45px] md:left-auto md:right-[53px] md:top-[190px] md:-rotate-[7.5deg] pointer-events-none z-10 w-[72px] h-[58px]"
              >
                <Image
                  src="/icons/you-icon.png"
                  alt="You pointer icon"
                  fill
                  className="object-contain"
                />
              </motion.div>
              <h1 className="font-archivo text-[64px] xl:text-[54px] md:text-[48px] font-semibold text-white leading-[1.2] tracking-[-0.04em] capitalize relative z-0">
                <TextRoll className="w-full">
                  Training 500 Future Tech Professionals In 8 Months
                </TextRoll>
              </h1>
            </motion.div>
            
            <motion.p variants={itemVariants} className="font-geist text-[16px] font-normal text-white/40 max-w-[455px] md:w-full md:max-w-full leading-[24px] tracking-[0.01em]">
              MERP Academy is on a mission to train, equip, and launch 500
              students into high-demand tech careers through practical,
              industry-focused intensives.
            </motion.p>
          </div>

          {/* Button + text frame */}
          <motion.div variants={itemVariants} className="flex flex-col gap-4 md:gap-[32px] w-[473px] md:w-full md:max-w-full">
            <div className="flex gap-[23px] flex-row items-center w-full">
              <Link
                href="#courses"
                className="flex-1 h-[48px] shrink-0 bg-[#FBD11B] hover:bg-[#DCC921] text-[#201D1D] font-archivo font-medium text-[16px] md:text-[14px] leading-[15px] uppercase rounded-[32px] transition-colors flex items-center justify-center px-[20px] py-[16px] text-center"
              >
                JOIN THE COHORT
              </Link>
              <Link
                href="#courses"
                className="flex-1 h-[48px] shrink-0 border border-[rgba(226,226,226,0.35)] text-[rgba(237,237,237,0.53)] hover:bg-white/5 font-archivo font-medium text-[16px] md:text-[14px] leading-[15px] uppercase rounded-[32px] transition-colors flex items-center justify-center px-[20px] py-[16px] text-center"
              >
                BROWSE COURSES
              </Link>
            </div>
            <p className="font-geist text-[16px] font-normal text-white/40 leading-none w-full md:mt-2">
              Limited to 40 students per course per month
            </p>
          </motion.div>
        </motion.div>

        {/* Right — Image frame */}
        <motion.div 
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="relative shrink-0 w-full max-w-[641px] aspect-[541/597] xl:max-w-[440px] lg:max-w-full lg:aspect-video md:aspect-square md:hidden"
        >
          <Image
            src="/images/merp500-header.png"
            alt="MERP 500 student"
            fill
            className="object-contain object-center"
            priority
          />   
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;

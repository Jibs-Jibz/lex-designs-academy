import Link from "next/link";
import { motion } from "framer-motion";

// Figma node 2029:215 — bg:#0f020c
// "join the MERP 500 Mission" 60.5px w=700 #ffffff  w=537 h=152
// "This is your opportunity…" 14px w=400 #ffffff  w=537
// Frame 33 bg:#141414 — "register now" 17px w=700 #f2f2f2  w=250 h=66
// Frame 34 — "talk to an advisor" 17px w=600 #ffffff  w=255 h=66

const CtaSection = () => {
  return (
    <section className="relative bg-[#0f020c] overflow-hidden px-16 xl:px-8 md:px-5 py-24">
      {/* Background glow blobs matching Figma rectangles */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.3 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        aria-hidden
        className="absolute left-0 top-0 w-[612px] h-[567px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, #91194b 0%, transparent 70%)",
        }}
      />
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.2 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "easeOut", delay: 0.5 }}
        aria-hidden
        className="absolute right-0 bottom-0 w-[612px] h-[567px] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at center, #671355 0%, transparent 70%)",
        }}
      />

      {/* Content frame w=537 */}
      <div className="relative z-10 max-w-[1200px] mx-auto">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={{
            hidden: { opacity: 0 },
            visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
          }}
          className="max-w-[537px] flex flex-col gap-8"
        >

          {/* Heading + subtext */}
          <motion.div variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="flex flex-col gap-4">
            {/* 60.5px bold — rounded to 60px */}
            <h2 className="font-poppins text-[60px] xl:text-[48px] lg:text-[40px] md:text-[32px] font-bold text-white leading-tight">
              join the MERP 500 Mission
            </h2>
            {/* 14px regular */}
            <p className="font-inter text-[14px] font-normal text-white/60">
              This is your opportunity to move from interest to capability.
            </p>
          </motion.div>

          {/* Buttons — both h=66 */}
          <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } } }} className="flex gap-4 flex-wrap">
            {/* Frame 33 bg:#141414 w=250 h=66 */}
            <Link
              href="/courses"
              className="inline-flex items-center justify-center h-[66px] px-8 font-poppins text-[17px] font-bold text-[#f2f2f2] rounded-full transition-colors border border-white/10"
              style={{ background: "#141414", minWidth: "250px" }}
            >
              register now
            </Link>
            {/* Frame 34 border w=255 h=66 */}
            <Link
              href="/contact"
              className="inline-flex items-center justify-center h-[66px] px-8 font-poppins text-[17px] font-semibold text-white rounded-full border border-white/30 hover:bg-white/10 transition-colors"
              style={{ minWidth: "255px" }}
            >
              talk to an advisor
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default CtaSection;

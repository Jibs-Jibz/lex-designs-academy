import Link from "next/link";
import { PROCESS_STEPS } from "./data";

// Figma node 2018:78 — bg:#f6f4f7
// "OUR PROCESS" 14px w=500 #0d0d0d
// "How mERP 500 Works." 48px w=700 #010101
// Footer note: 16px w=700 #000000
// "secure your slot" 16px w=700 #671355
// Step frames: h≈208–211 (number ~large, title ~16-18px, desc ~14px)

const ProcessSection = () => {
  return (
    <section className="bg-[#f6f4f7] px-16 xl:px-8 md:px-5 py-20">
      <div className="max-w-[1178px] mx-auto flex flex-col gap-12">

        {/* Heading frame w=1178 h=82 */}
        <div>
          {/* 14px medium */}
          <p className="font-poppins text-[14px] font-medium text-[#0d0d0d] tracking-widest uppercase mb-3">
            OUR PROCESS
          </p>
          {/* 48px bold */}
          <h2 className="font-poppins text-[48px] xl:text-[38px] lg:text-[32px] md:text-[28px] font-bold text-[#010101] leading-tight">
            How mERP 500 Works.
          </h2>
        </div>

        {/* Steps — divided columns matching Figma Frame 24 */}
        <div className="border-t border-[#0d0d0d]/10">
          <div className="grid grid-cols-4 lg:grid-cols-2 md:grid-cols-1 divide-x lg:divide-x-0 divide-[#0d0d0d]/10">
            {PROCESS_STEPS.map((step) => (
              <div
                key={step.num}
                className="flex flex-col gap-4 pt-8 pb-6 px-8 xl:px-5 md:px-0 md:py-6 lg:border-b border-[#0d0d0d]/10"
              >
                {/* Large step number — matching Figma proportions */}
                <span className="font-poppins text-[40px] font-bold text-lexPrimary leading-none">
                  {step.num}
                </span>
                {/* Step title */}
                <h3 className="font-poppins text-[16px] font-bold text-[#010101] leading-snug capitalize">
                  {step.title}
                </h3>
                {/* Step description */}
                <p className="font-inter text-[14px] font-normal text-[#010101]/60 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Footer row w=1178 — Frame 25 */}
        <div className="border-t border-[#0d0d0d]/10 pt-6 flex items-center justify-between md:flex-col md:gap-3 md:items-start">
          {/* 16px bold */}
          <p className="font-poppins text-[16px] font-bold text-black">
            New cohorts is open every month from April to November.
          </p>
          {/* 16px bold #671355 */}
          <Link
            href="/courses"
            className="font-poppins text-[16px] font-bold text-lexPrimary hover:underline"
          >
            secure your slot
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;

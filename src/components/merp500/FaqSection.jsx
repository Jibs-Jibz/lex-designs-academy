import { useState } from "react";
import { FAQ_DATA } from "./data";

// Figma node 2029:177 — bg:#fcf7fb
// "FAQs" 14px w=500 #0d0d0d
// "Common questions we answered for you" 36px w=600 #010101
// Card instances: num + title + desc (from component)

const FaqItem = ({ q, a, index }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="border-b border-[#D1D1D1]">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-5 px-2 text-left gap-4"
      >
        <span className="flex items-center gap-3">
          <span className="font-poppins text-[14px] font-bold text-lexPrimary w-7 shrink-0">
            {String(index + 1).padStart(2, "0")}
          </span>
          <span className="font-poppins text-[16px] font-semibold text-[#010101] dark:text-white md:text-[14px]">
            {q}
          </span>
        </span>
        <span className="text-lexPrimary text-2xl shrink-0 font-light select-none">
          {open ? "−" : "+"}
        </span>
      </button>
      {open && (
        <p className="pl-10 pr-2 pb-5 font-inter text-[14px] font-normal text-[#010101]/70 dark:text-white/70 leading-relaxed">
          {a}
        </p>
      )}
    </div>
  );
};

const FaqSection = () => {
  return (
    <section className="bg-[#fcf7fb] border-t border-[#010101]/10 px-16 xl:px-8 md:px-5 py-20">
      <div className="max-w-[1200px] mx-auto flex gap-16 lg:flex-col">

        {/* Left heading — frame w=492 */}
        <div className="shrink-0 w-[492px] xl:w-[360px] lg:w-full">
          {/* 14px medium */}
          <p className="font-poppins text-[14px] font-medium text-[#0d0d0d] tracking-widest uppercase mb-4">
            FAQs
          </p>
          {/* 36px semibold */}
          <h2 className="font-poppins text-[36px] xl:text-[28px] md:text-[24px] font-semibold text-[#010101] leading-tight max-w-[427px]">
            Common questions we answered for you
          </h2>
        </div>

        {/* Right — accordion frame w=686 */}
        <div className="flex-1 flex flex-col">
          {FAQ_DATA.map((item, i) => (
            <FaqItem key={i} q={item.q} a={item.a} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;

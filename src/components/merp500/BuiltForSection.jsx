import { AUDIENCE_CARDS } from "./data";

// Figma node 2029:39 — bg:#fcf7fb
// "WHO IS MERP 500 FOR" 14px w=500 #0d0d0d
// "Built for people who are ready." 40px w=600 #010101
// "if you are willing to commit 4 weeks…" 16px w=700 #010101
// Card number: component text (from data)
// Card title + desc: component instance (from data)

const BuiltForSection = () => {
  return (
    <section className="bg-[#fcf7fb] px-16 xl:px-8 md:px-5 py-20">
      <div className="max-w-[1200px] mx-auto flex gap-16 lg:flex-col">

        {/* Left heading — frame w=518 */}
        <div className="shrink-0 w-[518px] xl:w-[380px] lg:w-full flex flex-col gap-4">
          {/* 14px medium */}
          <p className="font-poppins text-[14px] font-medium text-[#0d0d0d] tracking-widest uppercase">
            WHO IS MERP 500 FOR
          </p>
          {/* 40px semibold */}
          <h2 className="font-poppins text-[40px] xl:text-[32px] md:text-[26px] font-semibold text-[#010101] leading-tight max-w-[427px]">
            Built for people who are ready.
          </h2>
          {/* 16px bold */}
          <p className="font-inter text-[16px] font-bold text-[#010101]">
            if you are willing to commit 4 weeks, this is for you
          </p>
        </div>

        {/* Right — Card list frame w=686 */}
        <div className="flex-1 flex flex-col divide-y divide-[#010101]/10">
          {AUDIENCE_CARDS.map((card) => (
            <div key={card.num} className="flex items-start gap-5 py-5">
              <span className="font-poppins text-[14px] font-bold text-lexPrimary w-8 shrink-0 mt-0.5">
                {card.num}
              </span>
              <div className="flex flex-col gap-1">
                <h3 className="font-poppins text-[16px] font-semibold text-[#010101]">
                  {card.title}
                </h3>
                <p className="font-inter text-[14px] font-normal text-[#010101]/60 leading-relaxed">
                  {card.desc}
                </p>
              </div>
              <span className="ml-auto text-[#010101]/20 text-xl shrink-0">+</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BuiltForSection;

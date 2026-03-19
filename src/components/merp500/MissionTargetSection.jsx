import { STATS } from "./data";

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
        <div>
          {/* 14px bold */}
          <p className="font-poppins text-[14px] font-bold text-white tracking-widest uppercase mb-4">
            THE MISSION TARGET
          </p>
          {/* 36px semibold */}
          <h2 className="font-poppins text-[36px] xl:text-[28px] md:text-[24px] font-semibold text-white leading-snug max-w-[436px]">
            Every cohort moves us closer to the 500 mark
          </h2>
        </div>

        {/* Stats — Frame container w=936 */}
        <div className="flex divide-x divide-white/30 md:flex-wrap md:divide-x-0 md:gap-10">
          {STATS.map((s) => (
            <div
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
            </div>
          ))}
        </div>

        {/* Footer text */}
        <div className="flex flex-col gap-1">
          {/* 14px bold */}
          <p className="font-poppins text-[14px] font-bold text-white">
            When you join, you&apos;re not just enrolling.
          </p>
          {/* 14px semibold */}
          <p className="font-poppins text-[14px] font-semibold text-white">
            You&apos;re becoming part of the MERP 500 milestone.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionTargetSection;

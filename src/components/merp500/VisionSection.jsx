// Figma node 2017:58 — bg:#060505
// "THE VISION" 14px w=700 #ffffff
// "why merp 500 exists" 48px w=700 #ffffff
// body text 18px w=600 #ffffff  w=605

const VisionSection = () => {
  return (
    <section className="bg-[#060505] px-16 xl:px-8 md:px-5 py-20">
      <div className="max-w-[1200px] mx-auto flex gap-16 lg:flex-col">
        <div className="shrink-0">
          {/* 14px bold */}
          <p className="font-poppins text-[14px] font-bold text-white tracking-widest uppercase mb-4">
            THE VISION
          </p>
          {/* 48px bold */}
          <h2 className="font-poppins text-[48px] xl:text-[38px] lg:text-[32px] md:text-[28px] font-bold text-white leading-tight max-w-[332px] lg:max-w-full">
            why merp 500 exists
          </h2>
        </div>

        {/* 18px semibold w=605 */}
        <p className="font-inter text-[18px] font-semibold text-white leading-relaxed max-w-[605px] self-end lg:self-auto">
          Nigeria doesn&apos;t lack talent. It lacks structured, practical
          training that leads to real output. Too many people watch tutorials.
          Too few build real projects. MERP 500 is our answer. Between April and
          November, we are intentionally training 600 students in high-demand
          digital skills — focusing on hands-on projects, industry workflows,
          and portfolio-ready outcomes. This is not casual learning. This is
          structured acceleration.
        </p>
      </div>
    </section>
  );
};

export default VisionSection;

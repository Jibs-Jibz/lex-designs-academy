import Link from "next/link";
import Image from "next/image";

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

const HeroSection = () => {
  return (
    <section className="relative bg-[#0e0e0e] min-h-[797px] flex items-center overflow-hidden px-16 xl:px-8 md:px-5 py-20 md:py-14">
      {/* Figma: Ellipse 1 #671355 + Ellipse 2 #d5c320 blurred glows */}
      <div
        aria-hidden
        className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[890px] h-[890px] rounded-full opacity-25 blur-[160px] pointer-events-none"
        style={{ background: "#671355" }}
      />
      <div
        aria-hidden
        className="absolute right-[10%] top-0 w-[890px] h-[890px] rounded-full opacity-10 blur-[160px] pointer-events-none"
        style={{ background: "#d5c320" }}
      />

      <div className="relative z-10 max-w-[1200px] mx-auto w-full flex items-center justify-between gap-12 lg:flex-col">

        {/* Left — Hero container w=541 */}
        <div className="flex flex-col gap-8 w-[541px] xl:w-[480px] lg:w-full">
          {/* Hero text frame w=541 h=287 */}
          <div className="flex flex-col gap-5">
            {/* Figma: 64px semibold #ffffff */}
            <h1 className="font-poppins text-[64px] xl:text-5xl lg:text-4xl md:text-[34px] font-semibold text-white leading-[1.1]">
              training 500 future tech professionals in 8 months
            </h1>
            {/* Figma: 16px regular #ffffff */}
            <p className="font-inter text-[16px] font-normal text-white/80 max-w-[455px] leading-relaxed">
              MERP Academy is on a mission to train, equip, and launch 500
              students into high-demand tech careers through practical,
              industry-focused intensives.
            </p>
          </div>

          {/* Button + text frame w=473 h=81 */}
          <div className="flex flex-col gap-4">
            {/* Frame 9 buttons h=49 */}
            <div className="flex gap-4 flex-wrap items-center">
              <Link
                href="/courses"
                className="h-[49px] px-8 bg-lexAccent hover:bg-lexAccent/90 text-black font-bold font-poppins text-sm tracking-wide rounded-full transition-colors flex items-center justify-center"
              >
                JOIN THE COHORT
              </Link>
              <Link
                href="/courses"
                className="h-[49px] px-8 border border-white/40 text-white hover:bg-white/10 font-semibold font-poppins text-sm tracking-wide rounded-full transition-colors flex items-center justify-center"
              >
                BROWSE COURSES
              </Link>
            </div>
            {/* Figma: 16px regular #ffffff */}
            <p className="font-inter text-[16px] font-normal text-white/50">
              Limited to 40 students per course per month
            </p>
          </div>
        </div>

        {/* Right — Image frame w=541 h=597 */}
        <div className="relative shrink-0 w-[541px] h-[540px] xl:w-[440px] xl:h-[440px] lg:w-full lg:h-[380px] md:h-[300px]">
          <Image
            src="/images/merp500-header.png"
            alt="MERP 500 student"
            fill
            className="object-contain object-bottom"
            priority
          />

          {/* Floating: Ai icon (top-left) */}
          <div className="absolute top-6 left-0 bg-[#1a1a2e] border border-white/10 rounded-2xl p-3 shadow-xl">
            <div
              className="w-11 h-11 rounded-xl flex items-center justify-center font-black text-base"
              style={{ background: "#FF7C00", color: "#1a1a2e" }}
            >
              Ai
            </div>
          </div>

          {/* Floating: code icon (top-right) */}
          <div className="absolute top-8 right-0 bg-[#1a1a2e] border border-white/10 rounded-2xl p-3.5 shadow-xl">
            <span className="text-lexAccent font-black text-lg font-mono">&lt;/&gt;</span>
          </div>

          {/* Figma: "You" bubble — Main icon bg=#9886fe */}
          <div className="absolute top-[22%] left-[30%] bg-[#9886FE] text-white text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            You
          </div>

          {/* Floating: Courses checklist card */}
          <div className="absolute bottom-20 left-0 bg-[#1c1c1c]/95 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-3.5 shadow-xl flex flex-col gap-2.5 min-w-[195px]">
            {courses.map((c) => (
              <div key={c.label} className="flex items-center gap-2.5">
                <span
                  className={`w-4 h-4 rounded-full border flex items-center justify-center text-[9px] shrink-0 ${
                    c.active
                      ? "border-lexAccent bg-lexAccent/10 text-lexAccent"
                      : "border-white/30 text-white/40"
                  }`}
                >
                  {c.active ? "●" : "✓"}
                </span>
                <span
                  className={`text-[13px] font-semibold font-poppins ${
                    c.active
                      ? "bg-lexAccent text-black px-2 py-0.5 rounded-md"
                      : "text-white/70"
                  }`}
                >
                  {c.label}
                </span>
              </div>
            ))}
          </div>

          {/* Floating: Training 500 Students card (bottom-right) */}
          <div className="absolute bottom-20 right-0 bg-[#1c1c1c]/95 backdrop-blur-sm border border-white/10 rounded-2xl px-4 py-3.5 shadow-xl min-w-[185px]">
            <p className="text-white font-bold font-poppins text-[14px] leading-snug mb-2">
              Training 500 Students
            </p>
            <p className="text-white/50 text-[12px] font-inter mb-3 flex items-center gap-1.5">
              <span className="text-lexAccent text-[10px]">▶</span> Online Courses
            </p>
            <div className="flex gap-1.5 flex-wrap">
              <span className="bg-lexAccent text-black text-[11px] font-bold font-poppins px-2.5 py-1 rounded-full">
                ✓ Beginner
              </span>
              <span className="bg-lexAccent text-black text-[11px] font-bold font-poppins px-2.5 py-1 rounded-full">
                ✓ Advanced
              </span>
            </div>
          </div>

          {/* Figma: "Sarah" bubble — Main icon bg=#2d1c2d */}
          <div className="absolute bottom-6 right-1/3 bg-[#2D1C2D] text-white text-[13px] font-semibold font-poppins px-3 py-1.5 rounded-full shadow-md">
            Sarah
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

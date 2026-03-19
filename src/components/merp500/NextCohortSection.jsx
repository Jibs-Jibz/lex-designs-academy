import Link from "next/link";

// Figma node 2029:148 — bg:#510f43
// "Next Cohort starts April 2026" 96px w=700 #ffffff  w=756 h=212
// "Limited to 40 students per course" 18px w=400 #ffffff
// "Spots fill monthly…" 14px w=700 #ffffff
// "Cohorts run from April to November 2026" 14px w=700 #ffffff
// Button bg:#fbd11b, "Secure your slot now" 17px w=700 #ffffff  w=261 h=58

const NextCohortSection = () => {
  return (
    <section className="relative bg-[#510f43] overflow-hidden px-16 xl:px-8 md:px-5 py-24 md:py-16">
      {/* Figma: repeating "April 2026" decorative text layers */}
      <div
        aria-hidden
        className="absolute inset-0 flex items-center justify-center overflow-hidden select-none pointer-events-none opacity-5"
      >
        <span
          className="font-poppins font-bold text-white whitespace-nowrap"
          style={{ fontSize: "clamp(100px, 18vw, 176px)" }}
        >
          April 2026
        </span>
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto flex flex-col gap-10">
        {/* 96px bold — frame w=676 */}
        <h2
          className="font-poppins font-bold text-white leading-tight"
          style={{ fontSize: "clamp(42px, 8vw, 96px)" }}
        >
          Next Cohort starts April 2026
        </h2>

        {/* Frame 47 + fine print */}
        <div className="flex flex-col gap-2">
          {/* 18px regular */}
          <p className="font-inter text-[18px] font-normal text-white">
            Limited to 40 students per course
          </p>
          {/* 14px bold */}
          <p className="font-poppins text-[14px] font-bold text-white">
            Spots fill monthly. Once they&apos;re gone, you wait for the next month.
          </p>
          {/* 14px bold */}
          <p className="font-poppins text-[14px] font-bold text-white">
            Cohorts run from April to November 2026
          </p>
        </div>

        {/* CTA button — Frame 33 w=261 h=58 bg:#fbd11b */}
        <Link
          href="/courses"
          className="inline-flex items-center justify-center w-[261px] h-[58px] font-poppins text-[17px] font-bold text-white rounded-full transition-colors"
          style={{ background: "#fbd11b" }}
        >
          Secure your slot now
        </Link>
      </div>
    </section>
  );
};

export default NextCohortSection;

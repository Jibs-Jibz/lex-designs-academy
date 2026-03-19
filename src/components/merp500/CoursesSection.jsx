import Link from "next/link";
import { COURSES_DATA } from "./data";

// Figma node 2018:5 — bg:#fcf7fb
// "COURSES" 14px w=700 #0d0d0d
// "Two industry focused 4-week intensives" 36px w=600 #010101

const CourseCard = ({ name, duration, price, highlights, href }) => (
  <div className="bg-white rounded-2xl border border-[#010101]/8 p-8 flex flex-col gap-6">
    <div className="flex items-start justify-between gap-4">
      <h3 className="font-poppins text-[20px] font-bold text-[#010101]">{name}</h3>
      <span className="bg-lexSecondary text-lexPrimary font-poppins text-[12px] font-bold px-3 py-1 rounded-full shrink-0">
        {duration}
      </span>
    </div>

    <ul className="flex flex-col gap-2.5">
      {highlights.map((h) => (
        <li key={h} className="flex items-center gap-2 font-inter text-[14px] text-[#010101]/70">
          <span className="w-1.5 h-1.5 rounded-full bg-lexPrimary shrink-0" />
          {h}
        </li>
      ))}
    </ul>

    <div className="flex items-center justify-between mt-auto pt-4 border-t border-[#010101]/8">
      <span className="font-poppins text-[18px] font-bold text-[#010101]">{price}</span>
      <Link
        href={href}
        className="bg-lexPrimary hover:bg-lexPrimary/80 text-white font-poppins font-bold text-[14px] px-6 py-3 rounded-full transition-colors"
      >
        View course
      </Link>
    </div>
  </div>
);

const CoursesSection = () => {
  return (
    <section className="bg-[#fcf7fb] border-t border-[#010101]/10 px-16 xl:px-8 md:px-5 py-20">
      <div className="max-w-[1200px] mx-auto flex flex-col gap-12">

        {/* Heading frame w=550 */}
        <div>
          {/* 14px bold */}
          <p className="font-poppins text-[14px] font-bold text-[#0d0d0d] tracking-widest uppercase mb-3">
            COURSES
          </p>
          {/* 36px semibold */}
          <h2 className="font-poppins text-[36px] xl:text-[28px] md:text-[24px] font-semibold text-[#010101] max-w-[356px] leading-tight">
            Two industry focused 4-week intensives
          </h2>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-1 gap-6">
          {COURSES_DATA.map((course) => (
            <CourseCard key={course.name} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

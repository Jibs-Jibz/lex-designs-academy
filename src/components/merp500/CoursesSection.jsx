const NEW_COURSES = [
  {
    title: "Figma Masterclass To Pro",
    target: "Beginner/ Mid- Level",
    duration: "5 Weeks",
    price: "₦55,000",
    willLearn: [
      "Live Sessions + Recordings",
      "Learn Figma",
      "1-On-1 Check-Ins",
      "Access To MERP Exclusive Community",
      "Post-Program Support"
    ],
    graduateWith: [
      "Mastery Of Figma",
      "Understanding UX Design",
      "How To Be Job Ready For Portfolio"
    ]
  },
  {
    title: "Front-End Web Development",
    target: "Beginner/ Mid- Level",
    duration: "4 Weeks",
    price: "₦75,000",
    willLearn: [
      "Live Sessions + Recordings",
      "Learn HTML , CSS And Javascript",
      "1-On-1 Check-Ins",
      "Access To MERP Exclusive Community",
      "Post-Program Support"
    ],
    graduateWith: [
      "Mastery Of Developing Your First Website",
      "Understanding How Coding Works",
      "How To Be Job Ready For Portfolio"
    ]
  }
];

const CourseCard = ({ title, target, duration, price, willLearn, graduateWith }) => (
  <div className="bg-gradient-to-b from-[#FFFFFF] to-[#F7E3F3] border border-black/10 rounded-[16px] p-[24px_16px] mx-auto w-full max-w-[408px] flex flex-col gap-[36px] h-full shadow-sm">
    {/* Top title */}
    <div className="flex flex-col gap-3 w-full">
      {/* One-Time Payment Chip */}
      <div className="flex items-center gap-[8px] bg-[#FFFEFA] border border-black/5 rounded-[16px] px-[8px] py-[6px] w-max">
         <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
           <path d="M6 0L7.618 4.382L12 6L7.618 7.618L6 12L4.382 7.618L0 6L4.382 4.382L6 0Z" fill="#671355"/>
         </svg>
         <span className="font-archivo font-bold text-[10px] text-[#0F030C] tracking-[0.01em] capitalize leading-none pt-0.5">
           One- Time Payment
         </span>
      </div>
      
      {/* Title only */}
      <div className="flex flex-col gap-[6px] w-full">
        <h3 className="font-geist font-semibold text-[24px] text-[#010101] tracking-[-0.05em] capitalize leading-none">
          {title}
        </h3>
        {/* Level / Duration row */}
        <div className="flex items-center justify-between w-full pt-[4px]">
          <span className="font-geist font-normal text-[14px] text-[#090808]/50 tracking-[-0.03em] capitalize">
            {target}
          </span>
          <span className="font-geist font-normal text-[14px] text-[#010101]/55 tracking-[0.01em] capitalize">
            {duration}
          </span>
        </div>
        {/* Price */}
        <span className="font-inter font-bold text-[36px] text-[#671355] tracking-[-0.08em] capitalize mt-[6px]">
          {price}
        </span>
      </div>
    </div>

    {/* Description frame */}
    <div className="flex flex-col gap-[36px] w-full flex-1">
      <div className="flex flex-col gap-[36px] w-full">
        {/* YOU WILL LEARN */}
        <div className="flex flex-col gap-[8px] w-full">
          <p className="font-archivo font-bold text-[10px] text-black/40 tracking-[0.01em] uppercase mb-[2px]">
            YOU WILL LEARN
          </p>
          <ul className="flex flex-col gap-[8px] w-full">
            {willLearn.map((item, idx) => (
              <li key={`learn-${idx}`} className="flex items-start gap-[6px]">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-0.5">
                  <path d="M13.3333 4L5.99992 11.3333L2.66658 8" stroke="#FBD11B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-archivo font-medium text-[14px] text-[#010101] tracking-[0.01em] leading-tight">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* YOU GRADUATE WITH */}
        <div className="flex flex-col gap-[8px] w-full">
          <p className="font-archivo font-semibold text-[10px] text-black/40 tracking-[0.01em] uppercase mb-[2px]">
            YOU GRADUATE WITH
          </p>
          <ul className="flex flex-col gap-[8px] w-full">
            {graduateWith.map((item, idx) => (
              <li key={`grad-${idx}`} className="flex items-start gap-[6px]">
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0 mt-0.5">
                  <path d="M13.3333 4L5.99992 11.3333L2.66658 8" stroke="#FBD11B" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <span className="font-archivo font-medium text-[14px] text-[#010101] tracking-[0.01em] leading-tight">
                  {item}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <button className="mt-auto w-full flex items-center justify-center p-[16px_20px] bg-[#0D0D0D] hover:bg-[#1A1A1A] transition-colors rounded-[15px]">
        <span className="font-archivo font-bold text-[16px] text-white uppercase leading-[17px]">
          REGISTER NOW
        </span>
      </button>
    </div>
  </div>
);

const CoursesSection = () => {
  return (
    <section className="bg-[#FCF7FB] py-[72px] px-[105px] xl:px-12 md:py-[40px] md:px-[16px]">
      <div className="max-w-[1440px] mx-auto flex flex-col items-center gap-[40px]">
        
        {/* Heading frame */}
        <div className="flex flex-col items-center gap-[14px] w-full max-w-[550px]">
          <p className="font-archivo text-[14px] font-bold text-[#0E0D0D]/70 tracking-[0.01em] uppercase text-center leading-[26px]">
            COURSES
          </p>
          <h2 className="font-archivo text-[36px] font-semibold text-[#010101] leading-[50px] md:leading-[40px] tracking-[-0.03em] capitalize text-center">
            Two Industry Focused<br className="md:hidden" /> 4-Week Intensives
          </h2>
        </div>

        {/* Pricing frame */}
        <div className="flex flex-row md:flex-col justify-center gap-[32px] w-full max-w-[848px]">
          {NEW_COURSES.map((course, idx) => (
            <CourseCard key={idx} {...course} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoursesSection;

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
    <section className="relative bg-[#0F0E0F] min-h-[797px] flex items-center overflow-hidden xl:px-8 md:px-5 py-[120px] px-[102px] pb-[80px]">
      
      {/* bBG gradient color */}
      <div
        aria-hidden
        className="absolute w-[1764px] h-[841px] top-[-840px] left-[calc(50%-882px)] pointer-events-none z-[3]"
        style={{ background: "#671355", filter: "blur(300px)", opacity: 0.15 }}
      />

      {/* Ellipse 1 */}
      <div
        aria-hidden
        className="absolute left-[20%] top-1/2 -translate-y-1/2 w-[890px] h-[890px] rounded-full pointer-events-none"
        style={{ background: "#671355", filter: "blur(250px)", opacity: 0.2 }}
      />

      <div className="relative z-10 max-w-[1440px] mx-auto w-full flex items-center justify-center gap-[101px] lg:flex-col lg:gap-[40px]">

        {/* Left — Hero container */}
        <div className="flex flex-col gap-8 md:gap-10 w-[541px] xl:w-[480px] lg:w-full md:w-[361px] md:max-w-full shrink-0 relative z-20">
          
          {/* Hero text frame */}
          <div className="flex flex-col gap-[16px]">
            <div className="relative inline-block w-full mt-4 md:mt-6">
              {/* Figma: "You" icon placed above 500 Future text */}
              <div className="absolute left-[280px] md:left-[140px] top-[45px] pointer-events-none z-10 w-[72px] h-[58px]">
                <Image
                  src="/icons/you-icon.png"
                  alt="You pointer icon"
                  fill
                  className="object-contain"
                />
              </div>
              <h1 className="font-archivo text-[64px] xl:text-[54px] md:text-[48px] font-semibold text-white leading-[1.2] tracking-[-0.04em] capitalize relative z-0">
                training 500 future tech professionals in 8 months
              </h1>
            </div>
            
            <p className="font-geist text-[16px] font-normal text-white/40 max-w-[455px] md:w-[361px] md:max-w-full leading-[24px] tracking-[0.01em]">
              MERP Academy is on a mission to train, equip, and launch 500
              students into high-demand tech careers through practical,
              industry-focused intensives.
            </p>
          </div>

          {/* Button + text frame */}
          <div className="flex flex-col gap-4 md:gap-[32px] w-[473px] md:w-[361px] md:max-w-full">
            <div className="flex gap-[23px] flex-row items-center w-full">
              <Link
                href="/courses"
                className="flex-1 w-full h-[49px] md:h-[48px] shrink-0 bg-[#FBD11B] hover:bg-[#DCC921] text-[#201D1D] font-archivo font-medium text-[16px] md:text-[14px] leading-[17px] md:leading-[15px] uppercase rounded-[32px] transition-colors flex items-center justify-center px-4 md:px-5"
              >
                JOIN THE COHORT
              </Link>
              <Link
                href="/courses"
                className="flex-1 w-full h-[49px] md:h-[48px] shrink-0 border border-[rgba(226,226,226,0.35)] text-[rgba(237,237,237,0.53)] hover:bg-white/5 font-archivo font-medium text-[16px] md:text-[14px] leading-[17px] md:leading-[15px] uppercase rounded-[32px] transition-colors flex items-center justify-center px-4 md:px-5"
              >
                BROWSE COURSES
              </Link>
            </div>
            <p className="font-geist text-[16px] font-normal text-white/40 leading-none w-full">
              Limited to 40 students per course per month
            </p>
          </div>
        </div>

        {/* Right — Image frame */}
        <div className="relative shrink-0 w-[541px] h-[540px] xl:w-[440px] xl:h-[440px] lg:w-full lg:h-[380px] md:h-[300px]">
          <Image
            src="/images/merp500-header.png"
            alt="MERP 500 student"
            fill
            className="object-contain object-bottom"
            priority
          />   
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

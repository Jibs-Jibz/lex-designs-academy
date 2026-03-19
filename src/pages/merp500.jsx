import Head from "next/head";
import TransitionEffect from "@/components/TransitionEffect";
import Navbar from "@/layouts/Navbar";
import Footer from "@/layouts/Footer";
import HeroSection from "@/components/merp500/HeroSection";
import VisionSection from "@/components/merp500/VisionSection";
import ProcessSection from "@/components/merp500/ProcessSection";
import MissionTargetSection from "@/components/merp500/MissionTargetSection";
import BuiltForSection from "@/components/merp500/BuiltForSection";
import CoursesSection from "@/components/merp500/CoursesSection";
import FaqSection from "@/components/merp500/FaqSection";
import NextCohortSection from "@/components/merp500/NextCohortSection";
import CtaSection from "@/components/merp500/CtaSection";

export default function Merp500() {
  return (
    <>
      <Head>
        <title>MERP 500 | MERP Design Academy</title>
        <meta
          name="description"
          content="MERP 500 — Training 500 future tech professionals in 8 months through intensive, structured 4-week cohorts."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="MERP 500 | MERP Design Academy" />
        <meta
          property="og:description"
          content="Training 500 future tech professionals in 8 months through intensive, structured 4-week cohorts."
        />
        <meta
          property="og:image"
          content="https://www.merpdesignacademy.com/logo.png"
        />
      </Head>

      <TransitionEffect />

      <main className="flex flex-col w-full overflow-x-hidden">
        <HeroSection />
        <VisionSection />
        <ProcessSection />
        <MissionTargetSection />
        <BuiltForSection />
        <CoursesSection />
        <FaqSection />
        <NextCohortSection />
        <CtaSection />
      </main>

    </>
  );
}

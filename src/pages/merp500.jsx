import Head from "next/head";
import Script from "next/script";
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

      {/* Meta Pixel Code */}
      <Script id="meta-pixel" strategy="afterInteractive">
        {`
          !function(f,b,e,v,n,t,s)
          {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
          n.callMethod.apply(n,arguments):n.queue.push(arguments)};
          if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
          n.queue=[];t=b.createElement(e);t.async=!0;
          t.src=v;s=b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t,s)}(window,document,'script',
          'https://connect.facebook.net/en_US/fbevents.js');
          fbq('init', '899904913140289');
          fbq('track', 'PageView');
        `}
      </Script>
      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: "none" }}
          src="https://www.facebook.com/tr?id=899904913140289&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
      {/* End Meta Pixel Code */}

      <TransitionEffect />

      <main className="flex flex-col w-full overflow-x-hidden">
        <HeroSection />
        <ProcessSection />
        <BuiltForSection />
        <CoursesSection />
        <FaqSection />
        <NextCohortSection />
      </main>

    </>
  );
}
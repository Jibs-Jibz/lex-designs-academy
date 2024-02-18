import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Reviews from "@/components/Reviews";
import TransitionEffect from "@/components/TransitionEffect";
import Header from "@/components/home/Header";
import Section1 from "@/components/home/Section1";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import Layout from "@/layouts/Layout";
import Head from "next/head";
import { useRef } from "react";

export default function Home() {
  const id = "my-section";

  const childRef = useRef(null);

  const scrollDown = () => {
    if (childRef.current) {
      childRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <Head>
        <title>MERP Design Academy</title>
        <meta
          name="description"
          content="An online platform dedicated to empowering individuals with the skills and knowledge needed to succeed and are passionate about making a positive impact through your learnings. || MERP Design Academy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />

        <meta
          property="og:image"
          content="https://www.merpdesignacademy.com/logo.png"
        />
        <meta property="og:title" content="MERP Design Academy" />
        <meta
          property="og:description"
          content="An online platform dedicated to empowering individuals with the skills and knowledge needed to succeed and are passionate about making a positive impact through your learnings. || MERP Design Academy"
        />
        <meta property="og:url" content="https://www.merpdesignacademy.com/" />
        <meta property="og:type" content="website" />
      </Head>
      <TransitionEffect />
      <Layout>
        <main className=" flex flex-col gap-32 xl:gap-24 lg:gap-28  ">
          <Header id={id} scrollDown={scrollDown} />
          <Section1 />
          <Section2 id={id} ref={childRef} />
          <Section3 />
          <FAQ />
          <Newsletter />
          <Reviews />
        </main>
      </Layout>
    </>
  );
}

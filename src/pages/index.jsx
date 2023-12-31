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
        <title>Lex Design Academy</title>
        <meta
          name="description"
          content="An online platform dedicated to empowering individuals with the skills and knowledge needed to succeed and are passionate about making a positive impact through your learnings. || Lex Design Academy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta
          property="og:image"
          content="https://lex-designs-academy.vercel.app//logo.png"
        />
        <meta property="og:title" content="Lex Design Academy" />
        <meta
          property="og:description"
          content="An online platform dedicated to empowering individuals with the skills and knowledge needed to succeed and are passionate about making a positive impact through your learnings. || Lex Design Academy"
        />
        <meta
          property="og:url"
          content="https://lex-designs-academy.vercel.app"
        />
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

import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Reviews from "@/components/Reviews";
import Header from "@/components/home/Header";
import Section1 from "@/components/home/Section1";
import Section2 from "@/components/home/Section2";
import Section3 from "@/components/home/Section3";
import Layout from "@/layouts/Layout";
import Head from "next/head";

export default function Home() {
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
      </Head>
      <Layout>
        <main className=" flex flex-col gap-32 xl:gap-24 lg:gap-20  ">
          <Header />
          <Section1 />
          <Section2 />
          <Section3 />
          <FAQ />
          <Newsletter />
          <Reviews />
        </main>
      </Layout>
    </>
  );
}

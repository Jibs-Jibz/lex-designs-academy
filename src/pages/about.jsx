import TransitionEffect from "@/components/TransitionEffect";
import Header from "@/components/about/Header";
import Section1 from "@/components/about/Section1";
import Layout from "@/layouts/Layout";
import Head from "next/head";
import React from "react";

const about = () => {
  return (
    <>
      <Head>
        <title>About || Lex Design Academy</title>
        <meta
          name="description"
          content="An online platform dedicated to empowering individuals with the skills and knowledge needed to succeed and are passionate about making a positive impact through your learnings || Lex Design Academy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect />
      <Layout>
        <main className=" flex flex-col gap-32 xl:gap-24 lg:gap-20 ">
          <Header />
          <Section1 />
        </main>
      </Layout>
    </>
  );
};

export default about;

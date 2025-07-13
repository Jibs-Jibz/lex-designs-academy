import TransitionEffect from "@/components/TransitionEffect";
import Header from "@/components/comtact/Header";
import Section1 from "@/components/comtact/Section1";
import Layout from "@/layouts/Layout";
import Head from "next/head";
import React from "react";

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Us || MERP Academy</title>
        <meta
          name="description"
          content="Don't hesitate to get in touch with us. We're here to assist you. || MERP Academy"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TransitionEffect />
      <Layout>
        <main className=" flex flex-col gap-32 xl:gap-24 lg:gap-14 md:gap-8 ">
          <Header />
          <Section1 />
        </main>
      </Layout>
    </>
  );
};

export default contact;

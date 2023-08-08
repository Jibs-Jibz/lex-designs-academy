import React, { useEffect, useState } from "react";
import ScrollspyNav from "react-scrollspy-nav";

const privacy = () => {
  return (
    <>
      <div className="dark:text-white flex flex-col gap-16 pt-[140px] px-4 sm:px-8 md:px-6 lg:px-20 text-mBillerDarkPurple relative overflow-">
        <h1
          className="text-[30px] text-lexPrimary uppercase font-bold text-center"
          data-aos="zoom-out"
        >
          LEX DESIGN ACADEMY <br /> Privacy Policy{" "}
        </h1>
        <div className="flex gap-16 leading-[40px] justify-center  opacity-90 relative">
          <div className="flex flex-col opacity-90 max-w-[800px]">
            <div className="flex flex-col gap-4">
              <h2
                data-aos="fade-up"
                className="text-[24px] text-lexPrimary font-bold"
              >
                Introduction
              </h2>
              <p
                className="opacity-80 text-[18px] md:text-sm md:text-left text-justify lg:tracking-[0.3px]"
                data-aos="fade-up"
              >
                Lex Design Academy conducts business responsibly and
                sustainably, ensuring that Students information is securely
                collected, processed, and stored in accordance with business
                requirements. Lex Design Academy has provided appropriate
                documentation, including a privacy policy, to support this and
                ensure compliance with industry regulations. Lex Design Academy,
                as a result, provides notice of this policy and any applicable
                procedures. It specifies why personal information is collected,
                used, processed, disclosed, retained, and disposed of. We use
                the term "personal information or data" to describe information
                that can be associated with a specific person and used to
                identify that person throughout this Privacy Policy. We do not
                consider anonymous information to be personal information
                because it does not identify a specific user.
              </p>
            </div>
            <div className="flex flex-col gap-4 pt-24">
              <h2
                data-aos="fade-up"
                className="text-[24px] text-lexPrimary font-bold"
              >
                Scope and Consent
              </h2>
              <p
                className="opacity-80 text-[18px] md:text-sm md:text-left text-justify lg:tracking-[0.3px]"
                data-aos="fade-up"
              >
                When you sign up for, access, or use our products, services,
                content, features, technologies, or functions offered on our
                website and all related sites, applications, and services , you
                accept this Privacy Policy as a Client. Unless otherwise agreed
                through contract, this Privacy Policy is intended to govern the
                use of Mbiller Services by users (including, without limitation,
                those who use these Interswitch Services in the daily course of
                their trade, practice, or business). Users may exercise their
                data protection rights as outlined in the Customer Data
                Protection Rights. Collection of Personal Information We collect
                Personally Identifiable Information (PII), also known as
                Personal Data or Personal Information. Name, email address,
                phone number, contact address, limited financial information,
                location data, device data, and so on are examples.
              </p>
            </div>
            <div className="flex flex-col gap-4 pt-24">
              <h2
                data-aos="fade-up"
                className="text-[24px] text-lexPrimary font-bold"
              >
                How we collect personal information
              </h2>
              <p
                className="opacity-80 text-[18px] md:text-sm md:text-left text-justify lg:tracking-[0.3px]"
                data-aos="fade-up"
              >
                Customers' data is collected electronically when they register
                for courses. This is collected electronically through exchanges
                between your mobile phone and our system. We collect information
                from or about customers from other sources, such as your contact
                with us, which includes our Customer Support interfaces - email,
                portal, phone calls, social media, and other communication
                channels; Customer support teams, Customer response to surveys,
                Training programs, Corporate Social Responsibility events,
                Promotional events, and interactions with Mbiller or other
                companies' members (subject to their privacy policies and
                applicable law). Third-party sources, such as credit bureaus and
                identity verification services, may also provide us with
                information about you.
              </p>
            </div>
            <div className="flex flex-col gap-4 pt-24 pb-[260px]">
              <h2
                data-aos="fade-up"
                className="text-[24px] text-lexPrimary font-bold"
              >
                How we use your personal data
              </h2>
              <p
                className="opacity-80 text-[18px] md:text-sm md:text-left text-justify lg:tracking-[0.3px]"
                data-aos="fade-up"
              >
                We use your personal information to operate, provide, develop,
                and improve the products and services we provide, which include
                the following: I'm registering you as a new Student. You will be
                registered as a student. Managing your interaction with us. You
                will be able to participate in courses, promotions,
                competitions, and surveys. We are working to improve our
                website, applications, courses, and services.
                Recommending/advertising products or services that you may be
                interested in. Meeting our legal obligations, including
                verifying your identity as needed. Detecting and preventing
                fraud.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default privacy;

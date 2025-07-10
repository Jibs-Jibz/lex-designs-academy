import Header from "@/components/courses/Header";
import Section1 from "@/components/courses/Section1";
import Section2 from "@/components/courses/Section2";
import Modal from "@/components/modals/Modal";
import PaymentModal from "@/components/modals/PaymentModal";
import { MOBILEAPPDATA } from "@/constants";
import Layout from "@/layouts/Layout";
import React, { useState } from "react";
import Section3 from "@/components/home/Section3";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Reviews from "@/components/Reviews";

import TransitionEffect from "@/components/TransitionEffect";
import PaymentForm from "@/components/modals/PaymentForm";

const MobileAppDevelopment = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => prevIndex + 1);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <TransitionEffect />
      <Layout>
        <div className=" flex flex-col gap-32 xl:gap-24 lg:gap-14 md:gap-8 ">
          {MOBILEAPPDATA.map((element, index) => (
            <>
              <Header
                className="!bg-courseBgGraphics"
                openModal={openModal}
                element={element}
                index={index}
              />
              <Section1 openModal={openModal} element={element} index={index} />
              <Section2 openModal={openModal} element={element} index={index} />
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                {currentIndex === index ? (
                  <PaymentForm
                    onNext={handleNext}
                    element={element}
                    index={index}
                  />
                ) : (
                  <PaymentModal element={element} index={index} />
                )}
              </Modal>
            </>
          ))}
          <Section3 />
          <FAQ />
          <Newsletter />
          <Reviews />
        </div>
      </Layout>
    </>
  );
};

export default MobileAppDevelopment;

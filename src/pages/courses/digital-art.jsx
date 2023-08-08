import Modal from "@/components/modals/Modal";
import Header from "@/components/courses/Header";
import Section1 from "@/components/courses/Section1";
import Section2 from "@/components/courses/Section2";
import { DIGITALARTSDATA } from "@/constants";
import Layout from "@/layouts/Layout";
import { Icon } from "@iconify/react";
import React, { useState } from "react";
import PaymentModal from "@/components/modals/PaymentModal";
import Section3 from "@/components/home/Section3";
import FAQ from "@/components/FAQ";
import Newsletter from "@/components/Newsletter";
import Reviews from "@/components/Reviews";
import TransitionEffect from "@/components/TransitionEffect";

const DigitalArt = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
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
          {DIGITALARTSDATA.map((element, index) => (
            <>
              <Header
                className="!bg-courseBgDigital"
                element={element}
                index={index}
                openModal={openModal}
              />
              <Section1 openModal={openModal} element={element} index={index} />
              <Section2 openModal={openModal} element={element} index={index} />
              <Modal isOpen={isModalOpen} onClose={closeModal}>
                <PaymentModal element={element} index={index} />
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

export default DigitalArt;

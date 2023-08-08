import { motion } from "framer-motion";
import React, { useEffect, useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  const closeModal = () => {
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === modalRef.current) {
      closeModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <motion.div
          initial={{
            scale: 0,
            opacity: 0,
            x: "-50%",
            y: "-50%",
          }}
          animate={{ scale: 1, opacity: 1 }}
          className="fixed  overflow-auto inset-0 h-full  w-full flex justify-center top-1/2 left-1/2   items-center bg-black bg-opacity-50"
          ref={modalRef}
          onClick={handleOverlayClick}
        >
          <div className=" !font-inter font-medium flex flex-col w-full  lg:py-10 md:py-6  py-20  lg:px-4 md:px-2 max-w-[800px] rounded-2xl bg-white/10 text-white   backdrop-blur-3xl shadow-md">
            {children}
            <div className=" flex w-full justify-center mx-auto ">
              <button
                className="  mt-4 px-4 py-2 bg-lexPrimary text-white rounded  hover:bg-transparent hover:border-white border border-lexPrimary "
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Modal;

import { Icon } from "@iconify/react";
import React, { useState } from "react";

const PaymentModal = ({ openModal, element, index }) => {
  const [copiedAccount, setCopiedAccount] = useState(null);

  const handleCopyToClipboard = (text, accountNumber) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        console.log("Text copied to clipboard:", text);
        setCopiedAccount(accountNumber); // Set the copied account number
        setTimeout(() => setCopiedAccount(null), 3000); // Reset after 2 seconds
      })
      .catch((error) => {
        console.error("Error copying to clipboard:", error);
      });
  };

  return (
    <div className="overflow-auto w-full  flex flex-col justify-center items-center text-center">
      <h2 className="text-xl md:text-base font-semibold mb-4">
        One Final Step to begin your journey to a world-class{" "}
        <span className="capitalize text-lexAccent ">{element.name}</span>{" "}
        designer
      </h2>
      <div className=" flex flex-col items-center text-base lg:text-sm">
        <div>
          Send the sum of <span className=" text-lexAccent " > {element.coursePrice} </span> to any of the
          following account numbers and send a proof of payment on WhatsApp by
          clicking this icon:
        </div>
        <div className=" inline-block w-fit justify-center text-center mt-4">
          <a
            className="text-lg  gap-2 "
            href="https://wa.me/message/KHI6L5KMLHPQL1"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Icon
              className="text-3xl hover:text-lexPrimary "
              icon="logos:whatsapp-icon"
            />{" "}
          </a>
        </div>
      </div>
      <p className="mt-4 font-semibold text-base ">ACCOUNTS</p>
      <p
        onClick={() => handleCopyToClipboard("2136383824", "2136383824")}
        className={copiedAccount === "2136383824" ? "text-lexAccent mt-2" : "mt-2"}
      >
        {copiedAccount === "2136383824" ? "Copied!" : "2136383824 - UBA"}
      </p>
      <p
        onClick={() => handleCopyToClipboard("9061872075", "9061872075")}
        className={copiedAccount === "9061872075" ? "text-lexAccent mt-2" : "mt-2"}
      >
        {copiedAccount === "9061872075" ? "Copied!" : "9061872075 - Opay"}
      </p>
      <p className=" text-xs ">Click to copy</p>
      <p className=" font-bold 9061872075 ">Meroyi Paul Oluwatobiloba</p>
      <p className="mt-4">Welcome onboard</p>
    </div>
  );
};

export default PaymentModal;

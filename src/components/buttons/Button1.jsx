import Link from "next/link";
import React from "react";

const Button1 = ({ href, primary, cta, className = "" }) => {
  const stylePrimary =
    "w-fit inline-block px-12 py-[25px] md:px-[36px] md:px-[26px] md:py-[14px] rounded-[10px] bg-lexPrimary text-white font-medium md:text-sm lg:text-base  text-[21px] border border-lexPrimary hover:bg-white hover:text-lexPrimary ";
  const styleSecondary =
    "w-fit inline-block px-12 py-[25px] md:px-[36px] md:px-[26px] md:py-[14px] rounded-[10px] border border-lexPrimary bg-white text-lexPrimary font-medium md:text-sm lg:text-base  text-[21px] hover:bg-lexPrimary hover:text-white ";

  return (
    <>
      <Link
        href={href}
        className={`${className} ${primary ? stylePrimary : styleSecondary} `}
      >
        {cta}
      </Link>
    </>
  );
};

export default Button1;

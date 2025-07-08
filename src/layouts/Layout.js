import React from "react";

const Layout = ({ children, className = "" }) => {
  return (
    <div
      className={`${className} dark:text-white w-full h-full inline-block  z-0 xl:px-4 md:px-3 px-16 py-10 xl:py-6 md:py-16 `}
    >
      {children}
    </div>
  );
};

export default Layout;

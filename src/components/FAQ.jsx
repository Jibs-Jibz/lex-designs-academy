import React, { useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Icon } from "@iconify/react";
import { FAQDATA } from "../constants";

const FAQ = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className=" bg-lexSecondary rounded-md dark:bg-lexSecondary/20 dark:text-white ">
      <div className="mx-auto px-4">
        <div className="flex flex-col gap-16 my-32 text-black dark:text-white w-full max-w-[1314px] mx-auto">
          <h3 className="font-bold  text-5xl lg:text-4xl md:text-xl text-center ">
            Frequently asked questions{" "}
          </h3>
          <div className="flex flex-col gap-10">
            {FAQDATA.map((data, index) => (
              <Disclosure key={index}>
                {({ open }) => (
                  <>
                    <div
                      className={`pb-2 border-b-2 border-[#D1D1D1] ${
                        open && "pb-2 border-b-0 "
                      } ${index === 0 && ""} ${
                        index === FAQDATA.length - 1 && ""
                      }`}
                    >
                      <Disclosure.Button
                        className={` ${
                          open && "border-b-2 border-[#D1D1D1]"
                        }  rounded-2xl flex items-center  justify-between w-full px-4 py-6 text-left`}
                      >
                        <span className="flex-1 flex items-center md:items-start  gap-2 font-medium text-[32px] xl:text-[22px] md:text-sm ">
                          <Icon className="text-xl xl:text-lg lg:text-base md:text-[8px]" icon="raphael:quote" />
                          {data.title}
                        </span>
                        <span className="flex justify-center items-center">
                          {open ? (
                            <Icon
                              className="text-[56px] xl:text-[38px] md:text-[15px] "
                              icon="mingcute:up-line"
                            />
                          ) : (
                            <Icon
                              className="text-[56px] xl:text-[38px] md:text-[15px] "
                              icon="mingcute:down-line"
                            />
                          )}
                        </span>
                      </Disclosure.Button>
                      <Disclosure.Panel className="border-2 border-t-0 px-4 rounded-b-2xl flex flex-col py-8 text-lg lg:text-sm md:text-[12px] ">
                        <p>{data.desc} </p>
                      </Disclosure.Panel>
                    </div>
                  </>
                )}
              </Disclosure>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;

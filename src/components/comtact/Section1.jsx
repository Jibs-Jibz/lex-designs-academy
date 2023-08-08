import Image from "next/image";
import React, { useState } from "react";
import img from "../../../public/images/contact-section.png";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID,
  EMAILJS_USER_ID,
} from "@/emailjs.config";
import emailjs from "emailjs-com";

const initialValues = {
  name: "",
  email: "",
  phoneNumber: "",
  message: "",
};

const validationSchema = Yup.object().shape({
  name: Yup.string().trim().required("Name is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
  phoneNumber: Yup.string().trim().required("Phone number is required"),
  message: Yup.string().trim().required("Message is required"),
});

const CircleLoader = () => {
  return (
    <div className=" flex w-fit items-center self-center mx-auto ">
      <div role="status">
        <svg
          aria-hidden="true"
          class="w-6 h-6  text-gray-200 animate-spin dark:text-gray-600 fill-lexPrimary"
          viewBox="0 0 100 101"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor"
          />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill"
          />
        </svg>
        {/* <span class="sr-only">Loading...</span> */}
      </div>
    </div>
  );
};

const Section1 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    // console.log("Form values:", values);
    setIsSubmitting(true);

    try {
      // Send the form data to your email using EmailJS
      const emailParams = {
        name: values.name,
        email: values.email,
        phoneNumber: values.phoneNumber,
        message: values.message,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        emailParams,
        EMAILJS_USER_ID
      );

      console.log("Email sent successfully");

      // Show a success alert
      alert("Form submitted successfully!");
      resetForm();
    } catch (error) {
      console.error("Email sending failed:", error);
    } finally {
      setIsSubmitting(false); // Set isLoading to false after submission
    }
  };
  return (
    <div className=" pb-40 md:pb-20 max-w-[1550px] flex flex-col gap-8 self-center w-full ">
      <div className=" text-[45px] lg:text-[30px]  md:text-[20px] ">
        Message Us
      </div>
      <div className=" flex md:flex-col  gap-y-12 md:gap-y-10 gap-x-12 justify-between w-full  ">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="flex flex-col justify-around gap-8 lg:gap-4 w-1/2 md:w-full ">
            <div className="w-full flex flex-col justify-between gap-8 lg:gap-4 ">
              <div className=" w-full">
                <Field
                  className=" focus:outline-lexPrimary  rounded-md  active w-full py-5 lg:py-3 md:py-4 px-5 md:px-3 border border-[#B9B9B9] text-xl lg:text-base md:text-sm placeholder-[#5A5A5A]  "
                  type="text"
                  placeholder="Name"
                  id="name"
                  name="name"
                />
                <ErrorMessage name="name" component="div" className="error" />
              </div>

              <div className=" w-full">
                <Field
                  className=" w-full focus:outline-lexPrimary  rounded-md  py-5 lg:py-3 md:py-4 px-5 md:px-3 border border-[#B9B9B9] text-xl lg:text-base md:text-sm placeholder-[#5A5A5A]  "
                  type="email"
                  id="email"
                  placeholder="Email Address"
                  name="email"
                />
                <ErrorMessage name="email" component="div" className="error" />
              </div>

              <div className=" w-full">
                <Field
                  className=" w-full focus:outline-lexPrimary  rounded-md  py-5 lg:py-3 md:py-4 px-5 md:px-3 border border-[#B9B9B9] text-xl lg:text-base md:text-sm placeholder-[#5A5A5A]  "
                  type="text"
                  id="phoneNumber"
                  placeholder="PhoneNumber"
                  name="phoneNumber"
                />
                <ErrorMessage
                  name="phoneNumber"
                  component="div"
                  className="error"
                />
              </div>

              <div className=" w-full">
                <Field
                  className=" w-full focus:outline-lexPrimary  rounded-md  py-5 lg:py-3 min-h-[143px] lg:min-h-[80px] md:py-4 px-5 md:px-3 border border-[#B9B9B9] text-xl lg:text-base md:text-sm placeholder-[#5A5A5A]  "
                  as="textarea"
                  placeholder="Send a message"
                  id="message"
                  name="message"
                />
                <ErrorMessage
                  name="message"
                  component="div"
                  className="error"
                />
              </div>
            </div>

            <button
              className={`rounded-lg w-full text-white bg-lexPrimary py-5 lg:py-3 ${
                isSubmitting ? "cursor-not-allowed" : ""
              }`}
              type="submit"
              disabled={isSubmitting}
            >
              {isSubmitting ? <CircleLoader /> : "Submit"}
            </button>
          </Form>
        </Formik>
        <div className="w-1/2 md:hidden max-w-[589px] flex self-center  md:w-full ">
          <Image
            src={img}
            alt="Lex-Designs"
            className=" w-full rounded-md h-auto  md:w-full "
            priority
            sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
          />
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default Section1;

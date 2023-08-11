import Image from "next/image";
import React, { useState } from "react";
import logo from "../../../public/images/logo-white.png";
import emailjs from "emailjs-com";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  EMAILJS_SERVICE_ID,
  EMAILJS_TEMPLATE_ID2,
  EMAILJS_USER_ID,
} from "@/emailjs.config";
import { CircleLoader } from "../comtact/Section1";

const initialValues = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
};

const validationSchema = Yup.object().shape({
  firstName: Yup.string().trim().required("First name is required"),
  lastName: Yup.string().trim().required("Last name is required"),
  phoneNumber: Yup.string().trim().required("Phone number is required"),
  email: Yup.string()
    .trim()
    .email("Invalid email")
    .required("Email is required"),
});

const PaymentForm = ({ element, index, onNext }) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleSubmit = async (values, { resetForm }) => {
    setIsSubmitting(true);

    try {
      // Send the form data to your email using EmailJS
      const emailParams = {
        name: values.firstName + " " + values.lastName,
        phoneNumber: values.phoneNumber,
        email: values.email,
      };

      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID2,
        emailParams,
        EMAILJS_USER_ID
      );

      // Show a success alert
      alert("Form submitted successfully!");
      resetForm();

      console.log(values);

      // Call onNext function to proceed to the next step
      onNext();
    } catch (error) {
      console.error("Email sending failed:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className=" w-full  flex flex-col gap-8 md:gap-3 justify-center items-center text-center">
      <div className=" max-w-[210px] md:max-w-[117px]  ">
        <Image
          className="  h-auto w-full "
          src={logo}
          alt="lex-designs"
          priority
          sizes="(max-width: 768px) 100vw,(max-width: 1200px) 50vw, 50vw"
        />
      </div>
      <div className=" flex gap-2 text-[26px] lg:text-lg ">
        <h3>{element.title}</h3>
        <h3 className="text-lexAccent">{element.coursePrice}</h3>
      </div>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col justify-around gap-8 lg:gap-4 w-full max-w-[906px] py-20 md:py-4 px-12 md:px-2 border border-[white] rounded-xl ">
          <h3 className=" text-[26px] w-full text-left lg:text-lg ">
            Input Information
          </h3>
          <div className="3xs:flex-wrap  w-full flex gap-6 md:gap-3  ">
            <div className=" w-1/2 3xs:w-full  ">
              <Field
                className=" focus:outline-lexPrimary  rounded-md  active w-full py-3 md:py-4 px-5 md:px-3 border border-[#B9B9B9] text-xl lg:text-base md:text-sm placeholder-[#5A5A5A]  "
                type="text"
                placeholder="First Name"
                id="firstName"
                name="firstName"
              />
              <ErrorMessage
                name="firstName"
                component="div"
                className="text-left pl-2 md:text-[12px] error"
              />
            </div>
            <div className=" w-1/2 3xs:w-full ">
              <Field
                className=" focus:outline-lexPrimary  rounded-md  active w-full py-3 md:py-4 px-5 md:px-3 border border-[#B9B9B9] text-xl lg:text-base md:text-sm placeholder-[#5A5A5A]  "
                type="text"
                placeholder="Last Name"
                id="lastName"
                name="lastName"
              />
              <ErrorMessage
                name="lastName"
                component="div"
                className="md:text-[12px] text-left pl-2 error "
              />
            </div>
          </div>
          <div className=" w-full">
            <Field
              className=" w-full focus:outline-lexPrimary  rounded-md  py-3 md:py-4 px-5 md:px-3 border border-[#B9B9B9] text-xl lg:text-base md:text-sm placeholder-[#5A5A5A]  "
              type="email"
              id="email"
              placeholder="Email Address"
              name="email"
            />
            <ErrorMessage
              name="email"
              component="div"
              className="md:text-[12px] text-left pl-2 error "
            />
          </div>
          <div className=" w-full">
            <Field
              className=" w-full focus:outline-lexPrimary  rounded-md  py-3 md:py-4 px-5 md:px-3 border border-[#B9B9B9] text-xl lg:text-base md:text-sm placeholder-[#5A5A5A]  "
              type="text"
              id="phoneNumber"
              placeholder="Phone Number"
              name="phoneNumber"
            />
            <ErrorMessage
              name="phoneNumber"
              component="div"
              className="md:text-[12px] text-left pl-2 error "
            />
          </div>
          <button
            className={`rounded-lg w-full text-white bg-lexPrimary py-5 lg:py-3 ${
              isSubmitting ? "cursor-not-allowed" : ""
            }`}
            type="submit"
            disabled={isSubmitting}
          >
            {isSubmitting ? <CircleLoader /> : "Pay Now"}
          </button>{" "}
        </Form>
      </Formik>
    </div>
  );
};

export default PaymentForm;

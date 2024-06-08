"use client";
import axios from "axios";
import React, { useState, useEffect, useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import RoundedButton from "../components/custom/RoundedButton/RoundedButton";
import Lenis from "@studio-freight/lenis";
import Faq from "../components/faq";
import ContactForm from "../components/ContactForm";
import Works from "../components/Works";
import {toast} from 'sonner'
const texts = [
  {
    id: 1,
    title: "Customer Support",
    description:
      "For assistance with your account, course enrollment, or technical issues, our customer support team is here to help. Reach out to us for prompt and effective solutions to your concerns.",
  },
  {
    id: 2,
    title: "Feedback and Suggestions",
    description:
      "We value your input! Share your feedback and suggestions to help us improve our platform and provide a better learning experience for everyone. Your insights are important to us.",
  },
  {
    id: 3,
    title: "Inquiries",
    description:
      "For inquiries, please contact our team using this form. We are more than happy to provide the information you need.",
  },
];
const Page = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSuccessful, setIsSuccessful] = useState(false);
  const [error, setError] = useState(false)
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
  const position = useTransform(scrollYProgress, (pos) =>
    pos >= 1 ? "relative" : "fixed"
  );

  useEffect(() => {
    const updateMousePosition = (ev: MouseEvent) => {
      if (!targetRef.current) return;
      const { clientX, clientY } = ev;
      targetRef.current.style.setProperty("--x", `${clientX}px`);
      targetRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);


const sendDataToApi = async (data: any) => {
  const url = "http://localhost:5000/api/proxy";

  const postData = new URLSearchParams({
    method: "worksheet.records.add",
    worksheet_name: "Sheet1",
    header_row: "1",
    json_data: JSON.stringify([data])
  });

  try {
    const response = await axios.post(url, postData.toString(), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      }
    });

    if (response.status === 200) {
      setLoading(false)
      console.log("Data sent successfully", response.data);
    } else {
      console.error("Failed to send data", response.status, response.statusText);
    }
  } catch (error) {
    console.error("Error sending data", error);
  }
};



  const handleSubmit = (e: any) => {
    e.preventDefault();
    setLoading(true);
    console.log("working");

    if (!firstName || !lastName || !email || !message) {
      toast.error('Fill neecessary fields', {
  style: {
    background: 'red',
    color: 'white'
  },
  className: 'class',
})

return;
    }
    const data = {
      "First Name": firstName,
      "Last Name": lastName,
      "Email": email,
      "Phone": phoneNumber,
      "Message Enquiry": message
    };
    sendDataToApi(data);
  };

  return (
    <motion.section
      // style={{ opacity }}
      // ref={targetRef}
      className="relative max-w-[100vw] bg-slate-800 py-20 lg:py-12 overflow-x-hidden flex flex-col h-fit bg- space text-white "
    >
      <div className="absolute top-0 w-[100vw] left-0 bg-white h-[72px]"></div>
      <div className="z-0 flex px-[1rem] lg:px-[3rem]  lg:py-24 pb-12 w-[100%] flex-col-reverse lg:flex-row max-w-[90rem] lg:h-fit mx-auto justify-between items-center lg:items-start">
        <div className="text-black w-[100%] mt-16 lg:mt-0 lg:w-5/12">
          <h1 className="text-5xl lg:text-8xl text-greenPrimary">Contact Us</h1>
          <p className="mt-3 text-white">
            Email, call or complete the form to learn how Digitaley Drive can
            take your tech skills to the next level.
          </p>
          <p>
            <a
              className="inline-flex gap-x-2 text-white hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
              href="mailto:contact@digitaleydrive.com"
            >
              contact@digitaleydrive.com
            </a>
          </p>
          <p>
            <a
              className="inline-flex gap-x-2 text-white hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
              href="tel:+2349034718259"
            >
              +234 903 471 8259
            </a>
          </p>
          <p>
            <a
              className="inline-flex gap-x-2 text-white hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
              href="tel:+2349161568320"
            >
              +234 916 156 8320
            </a>
          </p>
          {/* <p className='mt-3 text-white'>+298 3498 0985</p> */}

          {/* <p className='underline font-[500] text-greenPrimary mt-3'>Customer Support</p> */}

          <div className="flex flex-col lg:flex-row flex-wrap gap-6 mt-8">
            {texts.map((item, i) => (
              <div key={i}>
                <h1 className="text-[17px] text-greenPrimary">{item.title}</h1>
                <p className="text-white">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        <form
          onSubmit={handleSubmit}
          className="border text-greenPrimary py-6 shadow-md w-[100%] lg:w-[50%] bg-white z-0 p-3 px-5 rounded-xl"
        >
          <h1 className="text-5xl">Get in Touch</h1>
          <p>You can reach us anytime</p>

          <div className="mt-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <input
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="border outline-none w-[100%] lg:w-6/12 py-2 lg:py-3 p-3 pl-5  rounded-xl"
                placeholder="Firstname"
                type="text"
              />
              <input
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="border outline-none w-[100%] lg:w-6/12 py-2 lg:py-3 p-3 pl-5pl-5  rounded-x"
                placeholder="Lastname"
                type="text"
              />
            </div>
            <div className="w-full mt-5">
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border outline-none w-full p-3 py-2 lg:py-3 pl-5 rounded-xl"
                placeholder="Your Email"
                type="email"
              />
            </div>
            <div className="w-full mt-5">
              <input
                value={phoneNumber}
                onChange={(e) => setPhoneumber(e.target.value)}
                className="border outline-none w-full p-3 pl-5 py-2 lg:py-3 rounded-xl"
                placeholder="Phone number"
                type="tel"
              />
            </div>

            <div className="relative border rounded-2xl overflow-hidden mt-5">
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full outline-none min-h-[15rem] p-3 pl-5"
                placeholder="Type something... (Max 150 characters)"
              />

              <p className="absolute z-10 bottom-1 text-gray-400 text-[12px] right-3">
                {message.length} / 150
              </p>
            </div>
          </div>
          <button
            type="submit"
            className=" py-2 cursor-pointer rounded-full w-full "
          >
            <RoundedButton className="mt-6 py-2 w-full rounded-xl">
              {loading ? "Loading..." : "Submit"}
            </RoundedButton>
          </button>
          <p className="mt-5 text-center w-[100%] lg:w-8/12 mx-auto text-gray-400 text-[13px]">
            By contacting us, you agree to our{" "}
            <span className="text-greenPrimary text-[15px] font-[600]">
              Terms of Service
            </span>
            and{" "}
            <span className="text-greenPrimary text-[15px] font-[600]">
              Privacy Policy
            </span>
          </p>
        </form>
      </div>

      <div className="z-0 bg-white">
        <Faq />
        <Works />
      </div>
    </motion.section>
  );
};

export default Page;

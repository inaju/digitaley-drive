'use client'
import React, { useState, useEffect, useRef } from 'react'
import { useScroll, useTransform, motion } from "framer-motion";
import { MdOutlineEmail } from "react-icons/md";
import RoundedButton from '../components/custom/RoundedButton/RoundedButton';
import Lenis from "@studio-freight/lenis";
import Faq from '../components/faq';
import ContactForm from '../components/ContactForm';
import Works from '../components/Works';
const texts = [
  {
    id: 1,
    title: 'Customer Support',
    description: 'For assistance with your account, course enrollment, or technical issues, our customer support team is here to help. Reach out to us for prompt and effective solutions to your concerns.'
  },
  {
    id: 2,
    title: 'Feedback and Suggestions',
    description: 'We value your input! Share your feedback and suggestions to help us improve our platform and provide a better learning experience for everyone. Your insights are important to us.'
  },
  {
    id: 3,
    title: 'Inquiries',
    description: 'For inquiries, please contact our team using this form. We are more than happy to provide the information you need.'
  },
];
const Page = () => {
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


  const [text, setText] = useState('');

  const handleChange = (event: any) => {
    const inputText = event.target.value;
    if (inputText.length <= 150) {
      setText(inputText);
    }
  };



  return (
    <motion.section
      // style={{ opacity }}
      // ref={targetRef}
      className="relative max-w-[100vw] bg-slate-800 pt-20 lg:pt-12 overflow-x-hidden flex flex-col h-fit bg- space text-white "
    >
      <div className='absolute top-0 w-[100vw] left-0 bg-white h-[72px]'></div>
      <div className='z-0 flex px-[1rem]  lg:pt-24 w-[100%] pb-12 lg:pb-0 flex-col-reverse lg:flex-row max-w-[90rem] lg:h-[100vh] mx-auto justify-between items-center lg:items-start'>
        <div className='text-black w-[100%] mt-16 lg:mt-0 lg:w-5/12'>
          <h1 className='text-5xl lg:text-8xl text-greenPrimary'>Contact Us</h1>
          <p className='mt-3 text-white'>Email, call or complete the form to learn how Digitaley Drive can take your tech skills to the next level.</p>
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

          <div className='flex flex-col lg:flex-row flex-wrap gap-6 mt-8'>
            {
              texts.map((item, i) => (
                <div key={i}>
                  <h1 className='text-[17px] text-greenPrimary'>{item.title}</h1>
                  <p className='text-white'>{item.description}</p>
                </div>
              ))
            }
          </div>
        </div>
        <div className='border text-greenPrimary py-6 shadow-md w-[100%] lg:w-[55%] bg-white z-0 p-3 px-5 rounded-xl'>
          <h1>Get in Touch</h1>
          <p>You can reach us anytime</p>

          <div className='mt-8'>
            <div className='flex flex-col lg:flex-row gap-4'>
              <input className='border outline-none w-[100%] lg:w-6/12 py-2 lg:py-3 p-3 pl-5  rounded-full' placeholder='Firstname' type='text' />
              <input className='border outline-none w-[100%] lg:w-6/12 py-2 lg:py-3 p-3 pl-5pl-5  rounded-full' placeholder='Lastname' type='text' />
            </div>
            <div className='w-full mt-5'>
              <input className='border outline-none w-full p-3 py-2 lg:py-3 pl-5 rounded-full' placeholder='Your Email' type='email' />
            </div>
            <div className='w-full mt-5'>
              <input className='border outline-none w-full p-3 pl-5 py-2 lg:py-3 rounded-full' placeholder='Phone number' type='tel' />
            </div>

            <div className='relative border rounded-2xl overflow-hidden mt-5'>
              <textarea
                value={text}
                onChange={handleChange}
                className='w-full outline-none min-h-[15rem] p-3 pl-5'
                placeholder="Type something... (Max 150 characters)"
              />

              <p className='absolute z-10 bottom-1 text-gray-400 text-[12px] right-3'>
                {text.length} / 150
              </p>
            </div>
          </div>
          <RoundedButton className='px-8 py-2 cursor-pointer rounded-full mt-6 w-full '>
            Submit
          </RoundedButton>

          <p className='mt-5 text-center w-[100%] lg:w-8/12 mx-auto text-gray-400 text-[13px]'>By contacting us, you agree to our <span className='text-greenPrimary text-[15px] font-[600]'>Terms of Service</span>
            and <span className='text-greenPrimary text-[15px] font-[600]'>Privacy Policy</span>
          </p>
        </div>
      </div>

      <div className='z-0 bg-white'>
      <Faq />
      <Works />
      </div>

    </motion.section>
  )
}

export default Page;
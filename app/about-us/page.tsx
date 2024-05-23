'use client'
import React, { useState } from 'react'
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FollowingPointerDemo } from '../components/card/CustomCard'
import Faq from '../components/faq';
import ContactForm from '../components/ContactForm';
import Works from '../components/Works';
import Lenis from "@studio-freight/lenis";
import { VisionCard } from '../components/VisionCard';
const blogContent = {
  slug: "amazing-tailwindcss-grid-layouts",
  author: "Manu Arora",
  date: "28th March, 2023",
  title: "Amazing Tailwindcss Grid Layout Examples",
  description:
    "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
  image: "/data1.png",
  authorAvatar: "/user.png",
};
const Page = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
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


  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <motion.div
      // style={{ opacity }}
      // ref={targetRef}
      // className="relative max-w-[100vw] overflow-x-hidden flex flex-col h-fit pb-20 bg-green-50 space text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"



      className="relative max-w-[100vw] overflow-x-hidden flex flex-col h-fit pb-20 bg-white text-white "
    >
      {/* <div className='h-16/ bg-white w-[100vw]'></div> */}
      {/* <div className='gradientBg z- absolute top-0 left-0 w-[100vw] h-[60vh]'></div> */}
      <div className='bg-white lg:parallelogram   relative flex items-center justify-center z- top-0 left-0 w-[100vw] h-[60vh]'>
        <h1 className='text-white text-center z-20 relative'>Get To know Us</h1>
        {/* <video
          className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
          autoPlay
          muted
          loop
        >
          <source src="/bg5.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <div className='bg-white h-16 absolute top-0 left-0 w-full z-20'></div>

        <img src='https://www.cambridgespark.com/hubfs/data%20analyst%20header.jpg' className='w-[100%] border border-red-500 h-[100%] absolute' />

        <div className='absolute top-0 left-0 w-full h-full bg-black/60 z-10'></div>
      </div>


      <div className='container px-[1rem] lg:mx-auto relative h-fit mt-16 lg:mt-24'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 items-start'>
          <div className='w-[100%] lg:w-5/12'>
            <h1 className='text-greenPrimary text-2xl'>OUR MISSION</h1>
            <p className='text-gray-600 text-4xl lg:text-6xl font-[500]'>Listen to people <br /> and help them</p>
          </div>
          <div className='w-[100%] lg:w-8/12  text-[18px] font-[400]'>
            <p className='mt-2 text-gray-700 '>At Digitaley Drive, our mission is to empower individuals through education and technology. We are dedicated to providing accessible, high-quality learning opportunities that enable our users to acquire new skills and achieve their professional goals. By listening to our community and understanding their needs, we continuously strive to enhance our platform and deliver exceptional support.
<br />
<br />
We believe in the transformative power of education and are committed to fostering a supportive and inclusive environment where everyone can thrive. Join us on our journey to make learning more effective and enjoyable for people around the world.






</p>
          </div>
          <div>

          </div>
        </div>
        <hr className='my-16' />
        <div className='w-[100%]'>
          <h1 className='text-greenPrimary text-2xl text-center'>VALUE PROPOSITION</h1>
          <p className='text-black mt-8 text-5xl font-[600] text-center mb-20'>How we can help</p>
          {/* // <PopularCourses /> */}

          <div className='flex flex-col gap-8 lg:flex-row justify-evenly items-center'>
            <VisionCard fontSize="text-3xl  lg:text-5xl" style='w-[100%] lg:w-[27.5rem] h-[30.5rem]' img='https://cdn-icons-png.flaticon.com/128/2120/2120488.png' title='Vision' description='To Build Talents through an ever-consistent technological model and a transforming learning experience.' />
            <VisionCard fontSize="text-3xl  lg:text-5xl" style='w-[100%] lg:w-[27.5rem] h-[30.5rem]' img='https://cdn-icons-png.flaticon.com/128/694/694900.png' title='Mission' description='To stand as an ever-growing platform for building and equipping learners to become global talents in demand.' />
          </div>
          <div className=' mt-40 mb-32'>
            <h1 className='text-black mt-8 text-5xl font-[600] text-center'>Our Visions</h1>
            <div className='flex flex-col lg:flex-row gap-6 justify-evenly items-center mt-12'>

              <VisionCard fontSize="text-3xl" style='w-[22.5rem] h-[30.5rem]' img='https://cdn-icons-png.flaticon.com/128/14535/14535805.png' title='Excellence' description='We uphold the highest quality standards in our services, offering a platform for technology focused individuals to learn, evolve, build and scale.' />
              <VisionCard fontSize="text-3xl" style='w-[22.5rem] h-[30.5rem]' img='https://cdn-icons-png.flaticon.com/128/10228/10228926.png' title='Innovation' description='We foster a culture of innovation by encouraging creativity, experimentation, and embracing calculated risks. As we believe innovation is the essence of growth and transformation ' />
              <VisionCard fontSize="text-3xl" style='w-[22.5rem] h-[30.5rem]' img='https://cdn-icons-png.flaticon.com/128/3386/3386864.png' title='Communication' description='We champion open, transparent, and collaborative communication to empower our teams, break down silos, and achieve excellence.' />
            </div>
          </div>



        </div>
      </div>

      <div>

      </div>
      <Faq />
      <ContactForm />
      <Works />
    </motion.div>
  )
}

export default Page

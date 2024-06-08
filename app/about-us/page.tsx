"use client";
import React, { useState } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import { useEffect, useRef } from "react";
import { MdOutlineEmail } from "react-icons/md";
import { FollowingPointerDemo } from "../components/card/CustomCard";
import Faq from "../components/faq";
import ContactForm from "../components/ContactForm";
import Works from "../components/Works";
import Lenis from "@studio-freight/lenis";
import { VisionCard } from "../components/VisionCard";
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
    <motion.div className="relative max-w-[100vw] overflow-x-hidden flex flex-col h-fit pb-20 bg-white text-white ">
      <div className="bg-white lg:parallelogram   relative flex items-center justify-center z- top-0 left-0 w-[100vw] h-[60vh]">
        <h1 className="text-white text-center z-20 text-4xl relative">
          Get To know Us
        </h1>
        <div className="bg-white h-16 absolute top-0 left-0 w-full z-20"></div>

        <img
          src="/assets/digitaley.jpg"
          className="w-[100%] border border-red-500 h-[100%] absolute object-cover"
        />

        <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10"></div>
      </div>

      <div className="container px-[1rem] lg:mx-auto relative h-fit mt-16 lg:mt-24">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-16 items-start">
          <div className="w-[100%] lg:w-5/12">
            <p className="text-gray-600 text-4xl lg:text-6xl font-[500]">
              Learn Evolve Build, Innovate
            </p>
          </div>
          <div className="w-[100%] lg:w-8/12  text-[18px] font-[400]">
            <p className="mt-2 text-gray-700 ">
              At Digitaley Drive, we are dedicated to fostering Quality
              Education by Promoting Technology focused/AI powered learning
              across Africa. We are committed to providing accessible, high
              quality learning opportunities that enable users to acquire new
              skills, become innovative & contribute to Africa&lsquo;s digital
              transformation.
              <br />
              <br />
              We believe in the transformative power of Education and are
              committed to fostering a supportive & inclusive learning ecosystem
              where everyone can thrive by riding on the waves of Technology.
              Join us on our journey to make learning more effective & enjoyable
              for people around the world.
            </p>
          </div>
          <div></div>
        </div>
        <hr className="my-16" />
        <div className="w-[100%]">
          <h1 className="text-greenPrimary text-[16px]  text-center">
            About us
          </h1>
          <p className="text-slate-700 mt-1 text-xl max-w-[60rem] mx-auto font-[400] text-center ">
            An Edtech that equips learners to become global talents in demand by
            leveraging technology to provide the best learning experience on
            tech skills.
          </p>

          <div className="flex flex-col gap-8 lg:flex-row justify-evenly items-center mt-20">
            <VisionCard
              fontSize="text-3xl  lg:text-5xl"
              style="w-[100%] lg:w-[27.5rem] h-[30.5rem]"
              img="https://cdn-icons-png.flaticon.com/128/2120/2120488.png"
              title="Vision"
              description="To ignite global innovation engine and digital transformation"
            />
            <VisionCard
              fontSize="text-3xl  lg:text-5xl"
              style="w-[100%] lg:w-[27.5rem] h-[30.5rem]"
              img="https://cdn-icons-png.flaticon.com/128/694/694900.png"
              title="Mission"
              description="To Build Talents through an ever-consistent technological model and a transforming learning experience."
            />
          </div>
          <div className=" mt-40 mb-32">
            <h1 className="text-slate-700 mt-8 text-4xl font-[600] text-center">
              Our{" "}
              <span className="border-b-4 border-greenPrimary text-greenPrimary">
                Values
              </span>
            </h1>
            <div className="flex flex-col lg:flex-row gap-6 justify-evenly items-center mt-12">
              <VisionCard
                fontSize="text-3xl"
                style="w-[22.5rem] h-[30.5rem]"
                img="https://cdn-icons-png.flaticon.com/128/14535/14535805.png"
                title="Excellence"
                description="We uphold the highest quality standards in our services, offering a platform for technology focused individuals to learn, evolve, build and scale."
              />
              <VisionCard
                fontSize="text-3xl"
                style="w-[22.5rem] h-[30.5rem]"
                img="https://cdn-icons-png.flaticon.com/128/10228/10228926.png"
                title="Innovation"
                description="We foster a culture of innovation by encouraging creativity, experimentation, and embracing calculated risks. As we believe innovation is the essence of growth and transformation "
              />
              <VisionCard
                fontSize="text-3xl"
                style="w-[22.5rem] h-[30.5rem]"
                img="https://cdn-icons-png.flaticon.com/128/3386/3386864.png"
                title="Communication"
                description="We champion open, transparent, and collaborative communication to empower our teams, break down silos, and achieve excellence."
              />
            </div>
          </div>
        </div>
      </div>

      <div></div>
      <Faq />
      <Works />
    </motion.div>
  );
};

export default Page;

"use client";

import React from "react";
import { Animate } from "react-simple-animate";

const Hero = () => {
  return (
    <div className="max-w-[85rem] mx-auto pt-12 px-4 sm:px-6 lg:px-8">
      {/* Grid */}
      <div className="grid md:grid-cols-2 gap-4 md:gap-8 xl:gap-20 md:items-center">
        <Animate
          duration={1}
          delay={0.3}
          play={true} // Toggle when animation should start
          start={{
            transform: "translateX(-100px)",
            opacity: 0,
          }}
          end={{
            opacity: 1,
            transform: "translateX(0px)",
          }}
        >
          <div>
            <h1 className="block text-3xl font-bold text-gray-800 sm:text-4xl lg:text-6xl lg:leading-tight dark:text-white">
              Empowering Growth through Quality{" "}
              <span className="text-greenPrimary">Education</span>
            </h1>
            <p className="mt-3 text-lg text-gray-800 dark:text-gray-400">
            Explore a Range of flexible courses designed to equip and empower you for innovation.{" "}
            </p>
            {/* Buttons */}
            <div className="md:mt-24 mt-7 md:mb-12 grid gap-3 w-full  sm:inline-flex">
              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary hover:text-white border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                href="#courses"
              >
                Individual
                <svg
                  className="w-2.5 h-2.5"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </a>

              <a
                className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary hover:text-white border border-transparent text-sm lg:text-base text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
                href="https://docs.google.com/forms/d/e/1FAIpQLScjDdtgFMuQu5-7EjFCvtaPIQG22nRlinEXLMgPUlsgBpxG9Q/viewform" target="_blank"
              >
                Business
                <svg
                  className="w-2.5 h-2.5"
                  width={16}
                  height={16}
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                  />
                </svg>
              </a>
              {/* <a
              className="inline-flex justify-center items-center gap-x-3.5 text-sm lg:text-base text-center border hover:border-gray-300 shadow-sm font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:border-gray-800 dark:hover:border-gray-600 dark:shadow-slate-700/[.7] dark:text-white dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800"
              href="#"
            >
              Contact sales team
            </a> */}
            </div>
            
            {/* End Buttons */}
            {/* Review */}
            
              {/* End Review */}
            {/* </div> */}
            {/* End Review */}
          </div>
        </Animate>
        {/* End Col */}
        <Animate
          duration={1}
          delay={0.3}
          play={true} // Toggle when animation should start
          start={{
            transform: "translateX(100px)",
            opacity: 0,
          }}
          end={{
            opacity: 1,
            transform: "translateX(0px)",
          }}
        >
          <div className="relative ml-4 ">
            <img
              className="block sm:hidden w-full rounded-md h-screen object-cover "
              src={
                "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                // "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Image Description"
            />
            <img
              className="hidden sm:block w-full rounded-md h-screen object-cover "
              src={
                // "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              alt="Image Description"
            />
            <div className="absolute inset-0 -z-[1] bg-gradient-to-tr from-gray-200 via-white/0 to-white/0 w-full h-full rounded-md mt-4 -mb-4 mr-4 -ml-4 lg:mt-6 lg:-mb-6 lg:mr-6 lg:-ml-6 dark:from-slate-800 dark:via-slate-900/0 dark:to-slate-900/0" />
            {/* SVG*/}
         
            {/* End SVG*/}
          </div>
        </Animate>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Hero;

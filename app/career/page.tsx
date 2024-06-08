"use client";
import React, { useEffect } from "react";
import { jobOpenings } from "../data";
import MagneticButton from "../components/custom/Magnetic";
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import Faq from "../components/faq";
import ContactForm from "../components/ContactForm";
import Works from "../components/Works";
import Lenis from "@studio-freight/lenis";
const Page = () => {
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);
  return (
    <div className=" overflow-x-hidden pt-24 mx-auto max-w-[100vw] lato h-fit">
      <div className="h-[30rem] lg:mx-[4rem] bg-slate-800 overflow-hidden lg:rounded-3xl relative flex flex-col items-center justify-center">
        <h1 className="px-[1rem] lg:text-center text-greenPrimary leading-[3rem] lg:leading-[5rem] xl:leading-[5rem] text-[3rem] lg:text-[6rem]">
          Join our world-class team <br className="hiidden lg:flex" />{" "}
          Innovators & Excellence
        </h1>
        <p className="px-[1rem] mt-12 text-xl text-white lg:text-center">
          our philosophy is simple _____ we strive for excellence and we believe
          in a giving <br />
          exceptional / transformational learning experience
        </p>
      </div>

      <div className="px-[1rem] max-w-[70rem] flex flex-col gap-16 mx-auto my-20 lg:my-40">
        {jobOpenings.map((job, i) => (
          <div
            key={i}
            className="p-4 lg:p-8 border-dashed border-greenPrimary items-start border w-[100%] flex justify-between flex-col lg:flex-row  gap-8"
          >
            <div>
              <h1 className="text-3xl text-greenPrimary">{job.role}</h1>
              <p className="mt-4 text-[17px]">{job.description}</p>

              <div className="flex flex-col lg:flex-row lg:items-center gap-6 mt-8">
                <MagneticButton>
                  <div className="flex items-center gap-2 border border-greenPrimary w-fit px-7 py-2 rounded-full">
                    <CiLocationOn className="text-black text-xl" />
                    <p className="text-black">100% remote</p>
                  </div>
                </MagneticButton>
                <MagneticButton>
                  <div className="flex items-center gap-2 border border-greenPrimary px-7 w-fit py-2 rounded-full">
                    <IoMdTime className="text-black text-xl" />
                    <p className="text-black">Full-time</p>
                  </div>
                </MagneticButton>
              </div>
            </div>
            <></>
          </div>
        ))}
      </div>
      <div className="z-0 bg-white">
        <Faq />
        <Works />
      </div>
    </div>
  );
};

export default Page;

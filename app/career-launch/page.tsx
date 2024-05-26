'use client'
import React, {useEffect} from 'react'
import { stagger, useAnimate } from "framer-motion";
import Faq from '../components/faq';
import ContactForm from '../components/ContactForm';
import Works from '../components/Works';
import { careerPaths } from '../data';
import { FeatureTitle } from '../components/features/title';
import { useFeatureStore } from "../components/features/store";
// import { useEffect } from "react";
import { useHidePageOverflow } from "../utils/toggle-page-overflow";
import { useEscapePress } from "../utils/use-escape-press";
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

  const [scope, animate] = useAnimate();
  const fullscreenFeature = useFeatureStore((state) => state.fullscreenFeature);
  const lastFullscreenFeature = useFeatureStore(
    (state) => state.lastFullscreenFeature
  );
  const setFullscreenFeature = useFeatureStore(
    (state) => state.setFullscreenFeature
  );

  const onEscapePress = () => {
    if (fullscreenFeature) setFullscreenFeature(null);
  };

  useEscapePress(onEscapePress);
  useHidePageOverflow(!!fullscreenFeature);

  useEffect(() => {
    if (fullscreenFeature) {
      animate([
        [
          ".feature-title",
          { opacity: 0, x: "-200px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 1, scale: 1, pointerEvents: "auto" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 0, scale: 0 }, { at: "<" }],
        [".active-card .show-me-btn", { opacity: 0 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 1, y: "0px" },
          { at: "<", duration: 0.3 },
        ],
      ]);
    } else {
      animate([
        [
          ".feature-title",
          { opacity: 1, x: "0px" },
          { duration: 0.3, delay: stagger(0.05) },
        ],
        [
          `.visual-${lastFullscreenFeature}`,
          { opacity: 0, scale: 0.75, pointerEvents: "none" },
          { at: "<" },
        ],
        [".active-card .gradient", { opacity: 1, scale: 1 }, { at: "<" }],
        [
          ".back-to-site-btn",
          { opacity: 0, y: "300px" },
          { at: "<", duration: 0.3 },
        ],
        [".active-card .show-me-btn", { opacity: 1 }],
      ]);
    }
  }, [animate, fullscreenFeature, lastFullscreenFeature]);
  return (
    <div className="mx-auto pt-24 lg:pt-40 max-w-[82.5rem] px-[1rem] lg:px-0 lato">
      <h1 className='text-[2.5rem] lg:text-[3rem] text-greenPrimary'>Hello Digitaley Drive Learner!</h1>
      <p className='mt-6 text-[18px]'>If you are confused about what to learn or what career path to take, then grap a hot tea cause i am about to spill some tea.</p>
      <div ref={scope}>
        {careerPaths.map((feature) => (
          <feature.visual id={feature.id} key={feature.id} />
        ))}
        <button
          onClick={() => setFullscreenFeature(null)}
          className="back-to-site-btn fixed bottom-6 left-1/2 z-10 -translate-x-1/2 translate-y-[300%] rounded-full bg-black px-4 py-2 text-white opacity-0 shadow-lg"
        >
          Back to site
        </button>
        <div className="flex flex-col-reverse lg:flex-row  w-full items-start gap-16 lg:gap-20">
          <div className="w-full py-[4rem] lg:py-[40vh]">
            <ul>
        
              {careerPaths.map((path, index) => (
                <li key={path.id}>
                  <FeatureTitle id={path.id} item={path} index={index} />
                </li>
              ))}
            </ul>
          </div>
          <div className="sticky mt-[1.5rem] b top-0 flex h-[20rem] lg:h-screen w-full lg:items-center">
            <div className="relative aspect-square w-full rounded-2xl bg-gray-100 [&:has(>_.active-card)]:bg-transparent">
              {careerPaths.map((feature) => (
                <feature.card id={feature.id} key={feature.id} img={feature.url} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page

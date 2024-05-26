import React from "react";
import Accordion from "./Accordion";
import RoundedButton from "./custom/RoundedButton/RoundedButton";
import Link from "next/link";
const Faq = () => {
  return (
    <div className="bg-[#005DE80C] px-[1rem] w-[100vw] lato py-24 flex flex-col justify-center lg:items-center">
      <p className="text-black border-b text-lg pb-1 -gray-700">We&apos;ve got answers</p>
      <h1 className="text-black text-3xl lg:text-5xl mt-6 lg:mt-0">Frequently Asked Questions</h1>
      <div className="p-4 mt-16 max-w-[70rem] px-[1rem] rounded-lg grid grid-cols-1 lg:grid-cols-2 gap-12 gap-">
        <Accordion
          title="Will there be any project at the completion of the program?"
          answer="Yes, you will be given about 5 projects to build after the
        completion of your training."
        />
        <Accordion
          title="  Are there any assignments given?"
          answer=" Assessment will be given at the end of every course. You will also
        have quizzes in-between to test your knowledge and prepare you."
        />
        <Accordion title=" Will there be mentorship sessions?" answer="Yes, there will be mentorship session for everyone so you can get
              the career help you need." />
        <Accordion
          title="Will I be shown how to build a portfolio?"
          answer="Yes, we will walk you through ever step of the process."
        />
      </div>
      <div className="bg-white flex flex-col gap-6 lg:flex-row p-[2rem] lg:px-[4rem] max-w-[70rem] lg:items-center justify-between w-[100%] lg:h-[20rem] rounded-xl mt-6">
        <div className="lg:w-9/12 h-fit">
          <h1 className="text-3xl lg:text-4xl text-black">Unlock new opportunities with <span className="border-b-4 border-greenPrimary">Digitaley Drive</span></h1>
          <p className="mt-3 lg:mt-6  text-gray-600 text-[18px]">The premier EdTech platform for aspiring data analysts, Python programmers and many more worldwide. Join a global community of learners and elevate your skills to new heights</p>
        </div>
        <Link href="/courses">
          <RoundedButton className="px-8 cursor-pointer py-2 w-fit rounded-xl h-fit">
            Get Started
          </RoundedButton>
        </Link>
      </div>
    </div>
  );
};

export default Faq;
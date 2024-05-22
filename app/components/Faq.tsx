import React from "react";
import Accordion from "./Accordion";
import RoundedButton from "./custom/RoundedButton/RoundedButton";

const FAQ = () => {
  return (
    <div className="bg-greenPrimary px-[1rem] w-[100vw] lato py-24 flex flex-col justify-center lg:items-center">
      <p className="text-white border-b text-lg pb-1 border-dashed border-white">We've got answers</p>
      <h1 className="text-white text-3xl lg:text-5xl mt-6 lg:mt-0">Frequently Asked Questions</h1>
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
      <h1 className="text-3xl lg:text-4xl text-black">Writers worldwide are using <span className="border-b-4 border-greenPrimary">Digitaley Drive</span> to unlock better opportunities</h1>
      <p className="mt-3 lg:mt-6  text-gray-600">Be a part of the success story. Kickstart or advance your tech writing today using Digitaley Drive</p>
      </div>
      <RoundedButton className="px-8 cursor-pointer py-2 w-fit rounded-xl h-fit">
        Get Started
      </RoundedButton>
    </div>


    {/* <div className='lato flex mt-16 flex-col border items-center justify-center'>
            <p className='text-white'>Get Discovered</p>
            <h1 className='text-white'>Our <span className='border-b-4 border-gray-500'>Writers Work</span> Here</h1>
            <div className='flex items-center gap-12 mt-12'>
                <img src='https://superfm.online/superfmsmall.png' className='h-[6rem] w-auto' />
                <img src='https://guardian.ng/wp-content/themes/guardian2021/img/guardian-conscience.png' className='h-[3rem] w-auto' />
            </div>
        </div> */}
    </div>
  );
};

export default FAQ;
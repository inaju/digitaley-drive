// import React from "react";

// type Props = {};

// const Faq = (props: Props) => {
//   return (
//     <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
//       {/* Title */}
//       <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
//         <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
//           Frequently Asked Questions
//         </h2>
//       </div>
//       {/* End Title */}
//       <div className="max-w-5xl mx-auto ">
//         {/* Grid */}
//         <div className="grid sm:grid-row-2 gap-6 md:gap-12">
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
//               Will there be any project at the completion of the program?
//             </h3>
//             <p className="mt-2 text-gray-600 dark:text-gray-400">
//               Yes, you will be given about 5 projects to build after the
//               completion of your training.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
//               Are there any assignments given?
//             </h3>
//             <p className="mt-2 text-gray-600 dark:text-gray-400">
//               Assessment will be given at the end of every course. You will also
//               have quizzes in-between to test your knowledge and prepare you.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
//               Will there be mentorship sessions?
//             </h3>
//             <p className="mt-2 text-gray-600 dark:text-gray-400">
//               Yes, there will be mentorship session for everyone so you can get
//               the career help you need.
//             </p>
//           </div>
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
//               Will there by any project at the completion of the program?{" "}
//             </h3>
//             <p className="mt-2 text-gray-600 dark:text-gray-400">
//               Yes, 5 projects would be given{" "}
//             </p>
//           </div>
//           {/* End Col */}
//           <div>
//             <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
//               Will I be shown how to build a portfolio?{" "}
//             </h3>
//             <p className="mt-2 text-gray-600 dark:text-gray-400">
//               Yes, we will walk you through ever step of the process
//             </p>
//           </div>
//         </div>
//         {/* End Grid */}
//       </div>
//     </div>
//   );
// };

// export default Faq;

























import React from "react";
import Accordion from "./Accordion";
import RoundedButton from "./custom/RoundedButton/RoundedButton";

const Faq = () => {
  return (
    <div className="bg-greenPrimary px-[1rem] w-[100vw] lato py-24 flex flex-col justify-center lg:items-center">
      <p className="text-white border-b text-lg pb-1 border-dashed border-white">We&apos;ve got answers</p>
      <h1 className="text-white text-3xl lg:text-5xl mt-6 lg:mt-0">Frequently Asked Questions</h1>
      <div className="p-4 mt-16 max-w-[70rem] px-[1rem] rounded-lg grid grid-cols-1 lg:grid-cols-3 gap-12 gap-">
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

export default Faq;
import React, { useState } from "react";

interface CourseAccordionProps {
  title?: string;
  week?: number;
  topics?: any;
  index?: number;
}

const CourseAccordion = ({
  title,
  week,
  topics,
  index,
}: {
  title: string;
  week: number;
  topics: any;
  index: number;
}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div
      className={`py-3 shadow-md px-[1rem] border overflow-y-hidden ${
        !accordionOpen && "h-14"
      } my-2 lato lg:px-[2rem] z-[${index}]`}
    >
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full h-8 items-center bg-transparent"
      >
        <span className="text-greenPrimary text-start text-lg">
          Week {week}: {title}
        </span>
        <svg
          className="fill-greenPrimary shrink-0 ml-8"
          width="16"
          height="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
          <rect
            y="7"
            width="16"
            height="2"
            rx="1"
            className={`transform origin-center rotate-90 transition duration-200 ease-out ${
              accordionOpen && "!rotate-180"
            }`}
          />
        </svg>
      </button>
      <div
        className={`${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 grid overflow-hidden mt-4 transition-all bg-white p-4 px-8 duration-300 ease-in-out text-slate-600 text-sm"
            : "grid-rows-[0fr] opacity-0 h-0 transition-all duration-300 ease-in-out"
        }`}
      >
        <div className="overflow-hidden flex flex-col gap-8">
          {topics &&
            topics.map((topic: any, i: number) => (
              <div key={i} className="flex flex-col items- gap-3">
                <h1 className="text-[18px] font-[400]">Day {topic.day}:</h1>
                <div className="flex flex-col gap-4">
                  {topic.topics &&
                    topic.topics.map((top: string, i: number) => (
                      <p key={i} className="flex items-center gap-6">
                        <img
                          src="/assets/svg/arrow-right-green.svg"
                          alt=""
                          className="w-5 h-5"
                        />
                        {top}
                      </p>
                    ))}
                </div>
                <p className="text-xl font-[400]"></p>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CourseAccordion;

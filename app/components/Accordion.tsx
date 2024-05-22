import React, { useState } from "react";

const Accordion = ({ title, answer }: {title: string, answer: string}) => {
  const [accordionOpen, setAccordionOpen] = useState(false);

  return (
    <div className={`py-0 lg:px-[2rem]`}>
      <button
        onClick={() => setAccordionOpen(!accordionOpen)}
        className="flex justify-between w-full items-start  bg-transparent"
      >
        <span className="text-white text-start text-md space">{title}</span>
        {/* {accordionOpen ? <span>-</span> : <span>+</span>} */}
        <svg
          className="fill-white shrink-0 ml-8"
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
      {/* {
        accordionOpen &&  */}
        <div
        className={` ${
          accordionOpen
            ? "grid-rows-[1fr] opacity-100 grid overflow-hidden mt-4 transition-all bg-white p-4 duration-300 ease-in-out text-slate-600 text-sm"
            : "grid-rows-[0fr] opacity-0 h-0 transition-all duration-300 ease-in-out"
        }`}
      >
        <div className="overflow-hidden">{answer}</div>
      </div>
      {/* } */}
    </div>
  );
};

export default Accordion;
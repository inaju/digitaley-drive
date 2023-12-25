"use client";
import Image from "next/image";
import React, { useState, forwardRef } from "react";
import logo from "../../public/digitaley-logo.png";
import { Popover, Whisper, Button, ButtonToolbar } from "rsuite";

type Props = {};

const speakerMission = (
  <Popover title="Mission">
    <p>Unlocking Data Potential that drive growth and innovation</p>
  </Popover>
);
const speakerVision = (
  <Popover title="Vision">
    <p>To empower growth and innovation that redefines possibilities</p>
  </Popover>
);

const NavBar = (props: Props) => {
  const [showNavBar, setShowNavBar] = useState(false);

  const handleNavbar = () => {
    setShowNavBar(!showNavBar);
  };

  return (
    <header className="relative flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white shadow-md  text-sm py-3 sm:py-0">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <a
            className="flex  w-[15rem] items-center gap-3 font-semibold text-grey-800"
            href="#"
            aria-label="Brand"
          >
            <Image src={logo} alt="logo" height={40} width={40} />
            <p className="text-xl">Digitaley Drive</p>
          </a>
          <div className="sm:hidden">
            <button
              onClick={handleNavbar}
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-black/[.5] font-medium text-grey-800/[.5] shadow-sm align-middle hover:bg-black/[.1] hover:text-grey-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-greenPrimary transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width={16}
                height={16}
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        {/* desktop view */}
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="text-grey-800/[.8] cursor-pointer flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
            <a
              className="font-medium text-grey-800 sm:py-6"
              href="#"
              aria-current="page"
            >
              Home
            </a>
            <Whisper
              placement="bottom"
              trigger="hover"
              controlId="control-id-hover-enterable"
              speaker={speakerMission}
              enterable
            >
              <p className="cursor-pointer font-medium  hover:text-grey-800 sm:py-6">
                Mission
              </p>
            </Whisper>
            <Whisper
              placement="bottom"
              trigger="hover"
              controlId="control-id-hover-enterable"
              speaker={speakerVision}
              enterable
            >
              <p className="font-medium mb-2 text-grey-800/[.8] hover:text-grey-800 sm:py-6">
                Vision
              </p>
            </Whisper>
            {/* <a
              className="font-medium text-grey-800/[.8] hover:text-grey-800 sm:py-6"
              href="#vision"
            >
              What we do{" "}
            </a> */}
            <a
              className="
              cursor-pointer
              font-medium text-grey-800/[.8] hover:text-grey-800 sm:py-6"
              href="#courses"
            >
              Courses
            </a>
            <a
              className="font-medium text-grey-800/[.8] hover:text-grey-800 sm:py-6"
              href="#why-digitaley"
            >
              Why Digitaley?
            </a>
          </div>
        </div>
        {/* mobile view */}
        {showNavBar && (
          <div
            onClick={handleNavbar}
            id="navbar-collapse-with-animation"
            className="hs-collapse  absolute top-12 left-0 right-0 h-screen shadow-xl bg-green-200 overflow-hidden transition-all duration-300 basis-full grow sm:hidden"
          >
            <div className="flex flex-col gap-y-8 pl-10 gap-x-0 mt-6 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
              <a
                className="font-medium text-grey-800 sm:py-6"
                href="#"
                aria-current="page"
              >
                Home
              </a>
              <a
                className="font-medium text-grey-800/[.8] hover:text-grey-800 sm:py-6"
                href="#vision"
              >
                What we do
              </a>
              <a
                className="font-medium text-grey-800/[.8] hover:text-grey-800 sm:py-6"
                href="#courses"
              >
                Courses
              </a>
              <a
                className="font-medium text-grey-800/[.8] hover:text-grey-800 sm:py-6"
                href="#why-digitaley"
              >
                Why Digitaley?
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default NavBar;

"use client";
import Image from "next/image";
import React, { useState, forwardRef } from "react";
import logo from "../../public/digitaley-logo.png";
import { Popover, Whisper, Button, ButtonToolbar } from "rsuite";
import Link from "next/link";
import MobileNavbar from "./mobileNav";
type Props = {};


const companyLinks = (
  <Popover className="bg-lightPrimary">
    <div className="flex flex-col gap-2 w-32 px-2 ">
      <Link
        className="relative flex text-[15px] flex-col gap-1 hover:no-underline text-gray-700 hover:text-greenPrimary"
        href="#"
        aria-current="page"
      >
        Contact
      </Link>

      <Link
        className="font- flex text-[15px] flex-col gap-1 hover:no-underline text-gray-700 hover:text-greenPrimary"
        href="#"
        aria-current="page"
      >
        About us
      </Link>

      <Link
        className="font- flex text-[15px] flex-col gap-1 hover:no-underline text-gray-700 hover:text-greenPrimary"
        href="#"
        aria-current="page"
      >
        Careers
      </Link>
    </div>

  </Popover>
);


const NavBar = (props: Props) => {
  const [showNavBar, setShowNavBar] = useState(false);
  const [open, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prevOpen: any) => !prevOpen);
  };

  const handleNavbar = () => {
    setShowNavBar(!showNavBar);
  };


  const currentPath = window.location.pathname;

  return (
    <header className="relative lato flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full shadow-  text-sm py-3 sm:py-0">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex hover:no-underline  w-[15rem] items-center gap-3 font-semibold text-grey-800"
            href="/"
          >
            <Image src={logo} alt="logo" height={40} width={40} className="w-10"/>
            <p className="text-xl text-gray-700">Digitaley Drive</p>
          </Link>
          <div className="sm:hidden">
            {!showNavBar ? (
              <button
                onClick={toggleMenu}
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
            ) : (
              <button
                onClick={toggleMenu}
                type="button"
                className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border border-black/[.5] font-medium text-grey-800/[.5] shadow-sm align-middle hover:bg-black/[.1] hover:text-grey-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black focus:ring-greenPrimary transition-all text-sm"
                data-hs-collapse="#navbar-collapse-with-animation"
                aria-controls="navbar-collapse-with-animation"
                aria-label="Toggle navigation"
              >
                <svg
                  width="10px"
                  height="10px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M20.7457 3.32851C20.3552 2.93798 19.722 2.93798 19.3315 3.32851L12.0371 10.6229L4.74275 3.32851C4.35223 2.93798 3.71906 2.93798 3.32854 3.32851C2.93801 3.71903 2.93801 4.3522 3.32854 4.74272L10.6229 12.0371L3.32856 19.3314C2.93803 19.722 2.93803 20.3551 3.32856 20.7457C3.71908 21.1362 4.35225 21.1362 4.74277 20.7457L12.0371 13.4513L19.3315 20.7457C19.722 21.1362 20.3552 21.1362 20.7457 20.7457C21.1362 20.3551 21.1362 19.722 20.7457 19.3315L13.4513 12.0371L20.7457 4.74272C21.1362 4.3522 21.1362 3.71903 20.7457 3.32851Z"
                    fill="#0F0F0F"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
        {/* desktop view */}
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden py-4 overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="text-grey-800/[.8] cursor-pointer flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
            <Link
              className="relative flex text-[16px] flex-col gap-1 hover:no-underline text-gray-700 hover:text-greenPrimary"
              href="#"
              aria-current="page"
            >
              Home

              {
                currentPath == "/" &&

                <div className="bg-greenPrimary -bottom-2 absolute h-[2px] w-[100%]"></div>
              }
            </Link>

            <Link
              className="font- flex text-[16px] flex-col gap-1 hover:no-underline text-gray-700 hover:text-greenPrimary"
              href="#"
              aria-current="page"
            >
              Not sure
              {
                currentPath == "/not sure" &&

                <div className="bg-greenPrimary  h-[2px] w-[100%]"></div>
              }
            </Link>

            <Link
              className="font- flex text-[16px] flex-col gap-1 hover:no-underline text-gray-700 hover:text-greenPrimary"
              href="#"
              aria-current="page"
            >
              Courses

              {
                currentPath == "/courses" &&

                <div className="bg-greenPrimary  h-[2px] w-[100%]"></div>
              }
            </Link>

            <Whisper
              placement="bottom"
              trigger="hover"
              controlId="control-id-hover-enterable"
              speaker={companyLinks}
              enterable
            >
              <p className="font- flex text-[16px] flex-col gap-1 hover:no-underline text-gray-700 hover:text-greenPrimary">
                Company
              </p>
            </Whisper>

            <Link
              className="font- flex text-[16px] flex-col gap-1 hover:no-underline text-gray-700 hover:text-greenPrimary"
              href="#"
              aria-current="page"
            >
              Why digitaley drive

              {
                currentPath == "/why-digitaley-ddrive" &&

                <div className="bg-greenPrimary  h-[2px] w-[100%]"></div>
              }
            </Link>

            <Link
              className="border border-greenPrimary px-8 py-2 rounded-full text-[16px] gap-1 hover:no-underline text-greenPrimary hover:text-greenPrimary"
              href="#"
              aria-current="page"
            >
              Hire talents

              {
                currentPath == "/hire-talents" &&

                <div className="bg-greenPrimary  h-[2px] w-[100%]"></div>
              }
            </Link>

            <Link
              className="border border-greenPrimary px-8 py-2 rounded-full text-[16px] gap-1 hover:no-underline text-white bg-greenPrimary hover:text-greenPrimary"
              href="/login"
              aria-current="page"
            >
              Login
            </Link>
          </div>
        </div>

        <MobileNavbar toggleMenu={toggleMenu} open={open}/>
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

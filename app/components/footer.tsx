'use client'
import React from "react";
import { IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoFacebook } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import RoundedButton from "./custom/RoundedButton/RoundedButton";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="bg-green-800 lato">
      <footer className="w-full  max-w-[85rem] py-16 px-4 sm:px-6 lg:px-8 mx-auto">
        {/* Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
          {/* <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            Digitaley Drive
          </a>
          <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-300">
            © 2023 Digitaley Drive.
          </p>
        </div> */}

          {/* End Col */}
          <div>
            <h4 className="text-[17px] font-semibold text-white uppercase dark:text-gray-100">
              Courses
            </h4>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="/courses/data-analytics" 
                >
                  Data Analytics
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="/courses/data-engineering" 
                >
                 Data Engineering
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="/courses/business-analysis" 
                >
                 Business Analysis
                </a>
              </p>

              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  
                  href="/courses/data-science" 
                >
                  Data Science
                </a>
              </p>

              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="/courses/business-intelligence" 
                >
                Business Intelligence Analytics
                </a>
              </p>

              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="#courses"
                >
                Python Programming
                </a>
              </p>


            </div>
          </div>
          {/* End Col */}
          <div>
            <h4 className="text-[17px] font-semibold text-white uppercase dark:text-gray-100">
              Company
            </h4>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="/about-us"
                >
                  About us
                </a>
              </p>
            </div>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="/about-us" 
                >
                  Mission{" "}
                </a>
              </p>
            </div>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="/about-us" 
                >
                  Vision{" "}
                </a>
              </p>
            </div>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="https://docs.google.com/forms/d/1bb65VvC8DIBQrQAD6v1-j7j0hDamNgT8ktjTwUMBoJc/edit"
                >
                  Become a Trainer{" "}
                </a>
              </p>
            </div>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="https://www.instagram.com/reel/C1oZo8hIJDB/?igsh=YzkzNGp2ZGE4M3Bk"
                >
                  Student stories
                </a>
              </p>
            </div>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="https://drive.google.com/file/d/1Fyw8rvJMelMdQ4IpknbBXOkYiH7euCyU/view?usp=drive_link"
                >
                  Digitaldrive for women
                </a>
              </p>
            </div>
           
          </div>
          {/* End Col */}
          <div>
            <h4 className="text-[17px] font-semibold text-white uppercase dark:text-gray-100">
              Practices
            </h4>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  // href="https://docs.google.com/forms/d/1Ugtzv2qa9NaoYreU6U5PxNj0c5XHW5wPHjtIPRlQaJY/edit"
                  href="/courses" 
               >
                  Indiviuals{" "}
                </a>
              </p>
            </div>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  // href="https://docs.google.com/forms/d/1O19dUFHDm0TlCATCNXd91ogVVDp7SCNlddPLh8zFUPk/edit
// "
href="/contact-us" 
                >
                  Business{" "}
                </a>
              </p>
            </div>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="https://docs.google.com/forms/d/11gnpmFWETCJcjBWsR4yNv3Q8gPDXuYzbkqySIGru5Oo/edit"
                >
                  Kids{" "}
                </a>
              </p>
            </div>
            
          </div>
          {/* End Col */}

          <div>
            <h4 className="text-17px font-semibold text-white uppercase dark:text-gray-100">
              Resources
            </h4>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="https://drive.google.com/drive/folders/1ZYYb4kPNX_FwNjkMES5oBYfaHIqnlxlb?usp=sharing" target="_blank"
                >
                  Free Resources
                </a>
              </p>
            </div>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="https://substack.com/@digitaleydrive?utm_source=user-menu" target="_blank"
                >
                  Blog{" "}
                </a>
              </p>
            </div>

            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="/career-launch"
                >
                  Career Launch{" "}
                </a>
              </p>
            </div>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="https://www.instagram.com/p/C4XdTV6ICIZ/?igsh=bnlkM3Bwb2owaTVq"  target="_blank"
                >
                  Hackathon{" "}
                </a>
              </p>
            </div>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="https://www.instagram.com/digitaleydrive?igsh=MW80N3VpZm91b2Jjdg==" target="_blank"
                >
                  Community{" "}
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}

          <div>
            <h4 className="text-[17px] font-semibold text-white uppercase dark:text-gray-100">
              Contact
            </h4>
            <div className="mt-3 grid space-y-3 text-sm">
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="mailto:hello@digitaleydrive.com"
                >
                  hello@digitaleydrive.com
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="tel:+2349034718259"
                >
                  +234 903 471 8259
                </a>
              </p>
              <p>
                <a
                  className="inline-flex gap-x-2 text-gray-300 hover:text-green-500 dark:text-gray-300 dark:hover:text-gray-200"
                  href="tel:+2349161568320"
                >
                  +234 916 156 8320
                </a>
              </p>
            </div>
          </div>
          {/* End Col */}

        </div>


        <div className="flex flex-col px-[1rem] lg:flex-row justify-between items-center">
          <div className="w-[100%] lg:w-fit relative flex flex-row gap-4">

          <a href="https://www.instagram.com/digitaleydrive/" target="_blank" className="md:mt-[4rem] mt-[2rem] cursor-pointer relative flex flex-row gap-4">
            <div className="text-white text-2xl p-1 rounded-md bg-greenPrimary shadow-md">
              <IoLogoInstagram />
            </div>
            </a>
            <a href="https://ne.linkedin.com/company/digitaley-drive.ng" target="_blank" className="md:mt-[4rem] mt-[2rem] cursor-pointer relative flex flex-row gap-4">
            <div className="text-white text-2xl p-1 rounded-md bg-greenPrimary shadow-md">
              <IoLogoLinkedin />
            </div>
            </a>
            <a href="https://twitter.com/Digitaleydrive" target="_blank" className="md:mt-[4rem] mt-[2rem] cursor-pointer relative flex flex-row gap-4">
            <div className="text-white text-2xl p-1 rounded-md bg-greenPrimary shadow-md">
              <IoLogoTwitter />
            </div>
            </a>
            <a href="https://www.facebook.com/p/Digitaley-Drive-100085373543996/" target="_blank" className="md:mt-[4rem] mt-[2rem] cursor-pointer relative flex flex-row gap-4">
            <div className="text-white text-2xl p-1 rounded-md bg-greenPrimary shadow-md">
              <IoLogoFacebook />
            </div>
            </a>



          </div>

          <div></div>
        </div>

      </footer>
    </div>
  );
};

export default Footer;

import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 mb-10">
        <div className="col-span-full hidden lg:col-span-1 lg:block">
          <a
            className="flex-none text-xl font-semibold dark:text-white"
            href="#"
            aria-label="Brand"
          >
            Digitaley Drive
          </a>
          <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            © 2023 Digitaley Drive.
          </p>
        </div>
        {/* End Col */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Courses
          </h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="#courses"
              >
                Data Analytics
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="#courses"
              >
                Data Science
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="#courses"
              >
                Business Data Analytics
              </a>
            </p>
          </div>
        </div>
        {/* End Col */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Company
          </h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="#vision"
              >
                About us
              </a>
            </p>
          </div>
        </div>
        {/* End Col */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Resources
          </h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="#why-digitaley"
              >
                Why Digitaley?
              </a>
            </p>
           
          </div>
        </div>
        {/* End Col */}
       
      </div>
      
    </footer>
  );
};

export default Footer;

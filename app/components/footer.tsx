import React from "react";

type Props = {};

const Footer = (props: Props) => {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto">
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
          <p className="mt-3 text-xs sm:text-sm text-gray-600 dark:text-gray-400">
            © 2023 Digitaley Drive.
          </p>
        </div> */}

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
                Business Intelligence
              </a>
            </p>

            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="#courses"
              >
                Data Analytics with Python
              </a>
            </p>

            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="#courses"
              >
                Business Analysis
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
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="#vision"
              >
                Mission{" "}
              </a>
            </p>
          </div>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="#vision"
              >
                Vision{" "}
              </a>
            </p>
          </div>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="https://docs.google.com/forms/d/1bb65VvC8DIBQrQAD6v1-j7j0hDamNgT8ktjTwUMBoJc/edit"
              >
                Become a Trainer{" "}
              </a>
            </p>
          </div>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="https://docs.google.com/presentation/d/1Lj-70DfcSdKqqdXZkJAjwa5N6QU5g6RKDPdbiRm7X1o/edit#slide=id.p1"
              >
                Digitaldrive for women
              </a>
            </p>
          </div>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="https://www.instagram.com/reel/C1oZo8hIJDB/?igsh=YzkzNGp2ZGE4M3Bk"
              >
                Student stories
              </a>
            </p>
          </div>
        </div>
        {/* End Col */}
        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Practices
          </h4>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="https://docs.google.com/forms/d/1O19dUFHDm0TlCATCNXd91ogVVDp7SCNlddPLh8zFUPk/edit
"
              >
                Business{" "}
              </a>
            </p>
          </div>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="https://docs.google.com/forms/d/11gnpmFWETCJcjBWsR4yNv3Q8gPDXuYzbkqySIGru5Oo/edit"
              >
                Kids{" "}
              </a>
            </p>
          </div>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="https://docs.google.com/forms/d/1Ugtzv2qa9NaoYreU6U5PxNj0c5XHW5wPHjtIPRlQaJY/edit"
              >
                Consulting{" "}
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
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="https://digitaleydrive.substack.com/?utm_source=navbar&utm_medium=web&r=1nuq0h"
              >
                Newsletter{" "}
              </a>
            </p>
          </div>

          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="https://substack.com/@digitaleydrive"
              >
                Blog{" "}
              </a>
            </p>
          </div>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="/"
              >
                Hackathon{" "}
              </a>
            </p>
          </div>
        </div>
        {/* End Col */}

        <div>
          <h4 className="text-xs font-semibold text-gray-900 uppercase dark:text-gray-100">
            Contact
          </h4>
          <div className="mt-3 grid space-y-3 text-sm">
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="mailto:hello@digitaleydrive.com"
              >
                hello@digitaleydrive.com
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="tel:+2349034718259"
              >
                +234 903 471 8259
              </a>
            </p>
            <p>
              <a
                className="inline-flex gap-x-2 text-gray-600 hover:text-gray-800 dark:text-gray-400 dark:hover:text-gray-200"
                href="tel:+2349161568320"
              >
                +234 916 156 8320
              </a>
            </p>
          </div>
        </div>
        {/* End Col */}

      </div>


      <div className="md:mt-[4rem] mt-[2rem] relative flex flex-row gap-4">
              <a href="https://instagram.com/digitaleydrive?igshid=YmMyMTA2M2Y=">
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384031.png" className="w-5 h-5"/>
              </a>
              

              <a href="https://www.linkedin.com/company/digitaley-drive.ng/">
                <img src="https://cdn-icons-png.flaticon.com/128/3536/3536569.png" className="w-5 h-5"/>
              </a>
              


              <a href="https://www.facebook.com/profile.php?id=100085373543996">
                <img src="https://cdn-icons-png.flaticon.com/128/1051/1051309.png" className="w-5 h-5"/>
              </a>
              


              <a href="https://mobile.twitter.com/Digitaleydrive">
                <img src="https://cdn-icons-png.flaticon.com/128/1384/1384017.png" className="w-5 h-5"/>
              </a>
              
            </div>

    </footer>
  );
};

export default Footer;

'use client'
import React from "react";
import { Animate } from "react-simple-animate";


type Props = {};

const ImageTextTwoColumn = (props: Props) => {
  return (
    <div
      id="vision"
      className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto"
    >
      {/* Grid */}
      <div className="md:grid md:grid-cols-2 md:items-center md:gap-12 xl:gap-32">
        <Animate
          duration={1}
          delay={0.3}
          play={true} // Toggle when animation should start
          start={{
            transform: "translateX(-100px)",
            opacity: 0,
          }}
          end={{
            opacity: 1,
            transform: "translateX(0px)",
          }}
        >
          <div>
            <img
              className="rounded-xl h-screen max-h-[45rem] object-cover"
              src={
                "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              }
              // src="https://images.unsplash.com/photo-1648737963503-1a26da876aca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=900&q=80"
              alt="Image Description"
            />
          </div>
        </Animate>
        {/* End Col */}
        <Animate
          duration={1}
          delay={0.3}
          play={true} // Toggle when animation should start
          start={{
            transform: "translateX(100px)",
            opacity: 0,
          }}
          end={{
            opacity: 1,
            transform: "translateX(0px)",
          }}
        >
          <div className="mt-5 sm:mt-10 lg:mt-0">
            <div className="space-y-6 sm:space-y-8">
              {/* Title */}
              <div className="space-y-2 md:space-y-4">
                <h2 className="font-bold text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
                  We tech you to the next level
                </h2>
                <p className="text-gray-500">
                  It doesn’t matter whether you’re a graduate, dropout or career
                  changer – with us you can start a digital job after just 12
                  weeks of training. Do it like over 2,000 other graduates and
                  start your career with a future now
                </p>
              </div>
              {/* End Title */}
              {/* List */}
              <ul role="list" className="space-y-2 sm:space-y-4">
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-greenPrimary dark:text-blue-500"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-500">
                    <span className="font-bold">
                      {" "}
                      92%* entry rate &amp; fast
                    </span>{" "}
                    into a tech job
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-greenPrimary dark:text-blue-500"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-500">
                    Expert coaches{" "}
                    <span className="font-bold">with practical relevance</span>
                  </span>
                </li>
                <li className="flex space-x-3">
                  {/* Solid Check */}
                  <svg
                    className="flex-shrink-0 h-6 w-6 text-greenPrimary dark:text-blue-500"
                    width={16}
                    height={16}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15.1965 7.85999C15.1965 3.71785 11.8387 0.359985 7.69653 0.359985C3.5544 0.359985 0.196533 3.71785 0.196533 7.85999C0.196533 12.0021 3.5544 15.36 7.69653 15.36C11.8387 15.36 15.1965 12.0021 15.1965 7.85999Z"
                      fill="currentColor"
                      fillOpacity="0.1"
                    />
                    <path
                      d="M10.9295 4.88618C11.1083 4.67577 11.4238 4.65019 11.6343 4.82904C11.8446 5.00788 11.8702 5.32343 11.6914 5.53383L7.44139 10.5338C7.25974 10.7475 6.93787 10.77 6.72825 10.5837L4.47825 8.5837C4.27186 8.40024 4.25327 8.0842 4.43673 7.87781C4.62019 7.67142 4.93622 7.65283 5.14261 7.83629L7.01053 9.49669L10.9295 4.88618Z"
                      fill="currentColor"
                    />
                  </svg>
                  {/* End Solid Check */}
                  <span className="text-sm sm:text-base text-gray-500">
                    Build Innovators
                  </span>
                </li>
              </ul>
              {/* End List */}
            </div>
          </div>
        </Animate>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default ImageTextTwoColumn;

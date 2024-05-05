import React from "react";

type Props = {};

const Courses = (props: Props) => {
  return (
    <div
      id="courses"
      className="max-w-[85rem] px-4 py-8 sm:px-6 lg:px-8 lg:py-10 mx-auto"
    >
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          The Courses
        </h2>
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          See how much you can take your learning experience to the fullest with
          Digitaley Drive.
        </p>
      </div>
      {/* End Title */}
      {/* Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card */}
        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
          href="#application-form"
        >
          <div className="group flex flex-col mb-10">
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src="https://plus.unsplash.com/premium_photo-1661778915982-d104c9a41fee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                // src="https://images.unsplash.com/photo-1633114128174-2f8aa49759b0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                Data Analytics
              </h3>
              <p className="mt-5 text-gray-600 dark:text-gray-400">
                Become a Data Analyst with our 3 months intensive training
                covering 40+ topics, 4 modules, and 5 projects that will take
                you from beginner to advanced.{" "}
              </p>
            </div>
            {/* start chips */}
            <div className="flex flex-wrap gap-2 mb-0">
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
                Excel
              </span>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
                SQL
              </span>

              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">
                Power BI
              </span>

              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
                Github
              </span>

              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                Job/Freelance Preparation
              </span>
            </div>
          </div>
          <div className="mt-0 flex items-center gap-5">
            <img src="https://cdn-icons-png.flaticon.com/128/833/833602.png" className="w-6 h-6"/>
            <p className="text-[16px] text-black">3 months</p>
          </div>
          <div className="mt-7 grid gap-3 w-full sm:inline-flex flex-wrap">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="https://paystack.com/pay/h6go2uvwlc"
              target="_blank"
            >
              Enroll
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="https://paystack.com/pay/djw1nmq8yo"
              target="_blank"
            >
              Installments
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="#application-form"
            >
              See Brochure
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>

          {/* end chips */}
        </a>
        {/* End Card */}
        {/* Card */}
        <a
          className="group border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
          href="#application-form"
        >
          <div className="group flex flex-col mb-10">
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                // src="https://images.unsplash.com/photo-1562851529-c370841f6536?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3540&q=80"
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                Data Science
              </h3>
              <p className="mt-5 text-gray-600 dark:text-gray-400">
                Become a Data Scientist with our 4 months intensive training
                covering 30+ topics and hands on practical project.
              </p>
            </div>
            {/* start chips */}
            <div className="flex flex-wrap gap-2 mb-0">
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
                Machine Learning
              </span>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:yellow-red-500">
                Mathematics
              </span>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-gray-800/30 dark:gray-red-500">
                Python
              </span>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                Statistics
              </span>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-purple-100 text-purple-800 dark:bg-purple-800/30 dark:sky-purple-500">
                Sklearn
              </span>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-800 text-white dark:bg-white dark:text-gray-800">
                Github
              </span>
            </div>
          </div>
          <div className="mt-6 flex items-center gap-5">
            <img
              src="https://cdn-icons-png.flaticon.com/128/833/833602.png"
              className="w-6 h-6"
            />
            <p className="text-[16px] text-black">4 months</p>
          </div>
          <div className="mt-7 grid gap-3 w-full sm:inline-flex flex-wrap">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="https://paystack.com/pay/krrhzqdgdl"
              target="_blank"
            >
              Enroll
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="https://paystack.com/pay/hvezkrazux"
              target="_blank"
            >
              Installments
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="#application-form"
            >
              See Brochure
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>

          {/* end chips */}
        </a>
        {/* End Card */}
        {/* Card */}
        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
          href="#application-form"
        >
          <div className="group flex flex-col mb-10">
            <div className="aspect-w-16 aspect-h-11">
              <img
                className="w-full object-cover rounded-xl"
                // src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80"
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?q=80&w=1551&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Image Description"
              />
            </div>
            <div className="my-6">
              <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
                Business Intelligence
              </h3>
              <p className="mt-5 text-gray-600 dark:text-gray-400">
                This program is designed to equip you with the right skills as a
                Business Intelligence Analyst and prepare you for jobs. Join our
                3 months intensive trainning covering over 40+ topics, 5
                projects.{" "}
              </p>
            </div>
            {/* start chips */}
            <div className="flex flex-wrap gap-2 mb-0">
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">
                Power BI
              </span>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
                SQL
              </span>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
                Problem Solving Techiniques
              </span>
              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
                Excel
              </span>

              <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-gray-800 text-white dark:bg-white dark:text-gray-800">
                Presentation, Communication & Storytelling
              </span>
            </div>
            {/* end chips */}
          </div>

          <div className="mt-0 flex items-center gap-5">
            <img
              src="https://cdn-icons-png.flaticon.com/128/833/833602.png"
              className="w-6 h-6"
            />
            <p className="text-[16px] text-black">3 months</p>
          </div>

          <div className="mt-7 grid gap-3 w-full sm:inline-flex flex-wrap">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="https://paystack.com/pay/il6uz88ryc"
              target="_blank"
            >
              Enroll
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="https://paystack.com/pay/9x3pfjhsqa"
              target="_blank"
            >
              Installments
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="#application-form"
            >
              See Brochure
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </a>
        {/* End Card */}

        <a
          className="group flex flex-col h-full border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
          href="#application-form"
        >
          <div className="group flex flex-col mb-10">
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-xl"
              src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*KnV1cBSw-kWyh7Y6XEEzrA.jpeg"
              alt="Image Description"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
              Data Analytics with Python
            </h3>
            <p className="mt-5 text-gray-600 dark:text-gray-400">
              Become very proficient with Python in 3 months (12 weeks) with our
              detailed Python module taking you from introductory topic to
              machine learning for data analysis.
            </p>
          </div>
          {/* start chips */}
          <div className="flex flex-wrap gap-2 mb-0">
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">
              Python
            </span>
            <span className="inline-flex items-center gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
              Google colab
            </span>

          </div>
          </div>
          <div className="mt-0 flex items-center gap-5">
            <img
              src="https://cdn-icons-png.flaticon.com/128/833/833602.png"
              className="w-6 h-6"
            />
            <p className="text-[16px] text-black">3 months</p>
          </div>
          {/* end chips */}
          <div className="mt-7 grid gap-3 w-full sm:inline-flex flex-wrap">
            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="https://paystack.com/pay/-yjzyvx9cd"
              target="_blank"
            >
              Enroll
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>

            <a
              className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="#application-form"
            >
              See Brochure
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </a>
        {/* End Card */}

        <a
          className="group flex flex-col border border-gray-200 hover:border-transparent hover:shadow-lg transition-all duration-300 rounded-xl p-5 dark:border-gray-700 dark:hover:border-transparent dark:hover:shadow-black/[.4]"
          href="#application-form"
        >
          <div className="group flex flex-col mb-10">
          <div className="aspect-w-16 aspect-h-11">
            <img
              className="w-full object-cover rounded-xl h-[16rem]"
              // src="https://images.unsplash.com/photo-1521321205814-9d673c65c167?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3548&q=80"
              src="https://media.istockphoto.com/id/1321462048/photo/digital-transformation-concept-system-engineering-binary-code-programming.webp?b=1&s=170667a&w=0&k=20&c=8HOUiG9_M3Nm2TKS-EiGI8XdZctk7502R7s8NbCTm88="
              alt="Image Description"
            />
          </div>
          <div className="my-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-300 dark:group-hover:text-white">
              Business Analysis
            </h3>
            <p className="mt-5 text-gray-600 dark:text-gray-400">
              Are you an entry level business analyst with (0-2 years
              experience) (2-4 years experience) or (5 years experience) and you
              are looking to take the CBAP or other exams, contact us.
            </p>
          </div>
          </div>
          {/* start chips */}
              
          {/* end chips */}

          <div className="mt-0 flex items-center gap-5">
            <img
              src="https://cdn-icons-png.flaticon.com/128/833/833602.png"
              className="w-6 h-6"
            />
            <p className="text-[16px] text-black">4 months</p>
          </div>

          <div className="mt-7  gap-3 w-full sm:inline-flex flex-1 flex items-end">
            <a
              className="inline-flex justify-center items-center h-fit gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
              href="https://docs.google.com/forms/d/e/1FAIpQLSfRSrRrbbm1ufhsaaKW1mdmdgVceoSPbPnNXH7Bb9pNr27nVg/viewform"
              target="_blank"
            >
              Enroll
              <svg
                className="w-2.5 h-2.5"
                width={16}
                height={16}
                viewBox="0 0 16 16"
                fill="none"
              >
                <path
                  d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                />
              </svg>
            </a>
          </div>
        </a>
        {/* End Card */}
      </div>
      {/* End Grid */}
      {/* Card */}

      {/* End Card */}
    </div>
  );
};

export default Courses;

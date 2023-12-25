import React from "react";

type Props = {};

const Faq = (props: Props) => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-3xl md:leading-tight text-gray-800 dark:text-gray-200">
          Frequently Asked Questions
        </h2>
      </div>
      {/* End Title */}
      <div className="max-w-5xl mx-auto ">
        {/* Grid */}
        <div className="grid sm:grid-row-2 gap-6 md:gap-12">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Will there be any project at the completion of the program?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Yes, you will be given about 5 projects to build after the
              completion of your training.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Are there any assignments given?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Assessment will be given at the end of every course. You will also
              have quizzes in-between to test your knowledge and prepare you.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Will there be mentorship sessions?
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Yes, there will be mentorship session for everyone so you can get
              the career help you need.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Will there by any project at the completion of the program?{" "}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Yes, 5 projects would be given{" "}
            </p>
          </div>
          {/* End Col */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Will I be shown how to build a portfolio?{" "}
            </h3>
            <p className="mt-2 text-gray-600 dark:text-gray-400">
              Yes, we will walk you through ever step of the process
            </p>
          </div>
        </div>
        {/* End Grid */}
      </div>
    </div>
  );
};

export default Faq;

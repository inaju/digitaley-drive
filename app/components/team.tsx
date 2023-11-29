import React from "react";

type Props = {};

const Team = (props: Props) => {
  return (
    <div className="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <div className="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
        <h2 className="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">
          Meet your Tutors
        </h2>
      </div>
      {/* End Title */}
      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-12">
        <div className="text-center">
          <img
            className="rounded-xl object-cover sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
            src="./assets/ruby.jpg"
            // src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=900&h=900&q=80"
            alt="Ruby's Image"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
              Ruby Ihekweme
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
              Programs Lead
            </p>
          </div>
        </div>
        {/* End Col */}
        <div className="text-center">
          <img
            className="rounded-xl object-cover sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
            src="./assets/cassie.jpg"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
              Cassie Bassey
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
              Tutor
            </p>
          </div>
        </div>
        {/* End Col */}
        <div className="text-center">
          <img
            className="rounded-xl object-cover sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
            src="./assets/modupe.jpg"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
              Modupe Afolabi
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
              Tutor
            </p>
          </div>
        </div>
        {/* End Col */}
        <div className="text-center">
          <img
            className="rounded-xl object-cover sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
            src="./assets/oyin.jpg"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
              Oyindamola Olawoyin
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
              Tutor
            </p>
          </div>
        </div>
        {/* End Col */}
        <div className="text-center">
          <img
            className="rounded-xl object-cover sm:w-48 sm:h-48 lg:w-60 lg:h-60 mx-auto"
            src="./assets/wole.jpg"
            alt="Image Description"
          />
          <div className="mt-2 sm:mt-4">
            <h3 className="text-sm font-medium text-gray-800 sm:text-base lg:text-lg dark:text-gray-200">
              Oluwole Fadipe
            </h3>
            <p className="text-xs text-gray-600 sm:text-sm lg:text-base dark:text-gray-400">
              Tutor
            </p>
          </div>
        </div>
        {/* End Col */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Team;

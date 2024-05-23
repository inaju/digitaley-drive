import React from "react";

type Props = {};

const Stats = (props: Props) => {
  return (
    <div className="max-w-[80rem] mt-24 lg:mt-0 w-[100%] py-10 border-dashed sm:mt-20 lato px-4 sm:px-6 lg:px-0 mx-auto">
      {/* Grid */}

      <div className=" grid md:flex flex-row justify-evenly gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-20">
        {/* Stats */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
            Job Readiness
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-greenPrimary">
            99.95%
          </p>
          <p className="mt-1 text-gray-500">in getting employed</p>
        </div>
        {/* End Stats */}

        {/* Stats */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
            Students
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-greenPrimary">
            18,000+
          </p>
          <p className="mt-1 text-gray-500">graduated</p>
        </div>
        {/* End Stats */}

{/* Stats */}
<div className="flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
            Countries
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-greenPrimary">
            26+
          </p>
          <p className="mt-1 text-gray-500">Impacted</p>
        </div>
        {/* End Stats */}

        
        {/* Stats */}
        <div className="flex flex-col items-center">
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
            Courses
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-greenPrimary">
            6
          </p>
          <p className="mt-1 text-gray-500">This year alone</p>
        </div>
        {/* End Stats */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Stats;

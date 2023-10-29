import React from "react";

type Props = {};

const Stats = (props: Props) => {
  return (
    <div className="max-w-full px-4 sm:px-6 lg:px-8 mx-auto">
      {/* Grid */}

      <div className="mt-20 grid gap-6 grid-cols-2 sm:gap-12 lg:grid-cols-3 lg:gap-8">
        {/* Stats */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
            Job Readiness
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
            99.95%
          </p>
          <p className="mt-1 text-gray-500">in getting employed</p>
        </div>
        {/* End Stats */}
        {/* Stats */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
            Students
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
            3,000+
          </p>
          <p className="mt-1 text-gray-500">graduated</p>
        </div>
        {/* End Stats */}
        {/* Stats */}
        <div>
          <h4 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-gray-200">
            Courses
          </h4>
          <p className="mt-2 sm:mt-3 text-4xl sm:text-6xl font-bold text-blue-500">
            3
          </p>
          <p className="mt-1 text-gray-500">this year alone</p>
        </div>
        {/* End Stats */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default Stats;

import Image from "next/image";
import React from "react";
import excel from "../../public/assets/svg/excel.svg";
import powerBI from "../../public/assets/svg/powerBI.svg";
import github from "../../public/assets/svg/github.svg";
import python from "../../public/assets/svg/python.svg";
import sql from "../../public/assets/svg/sql.svg";
import statistics from "../../public/assets/svg/statistics.svg";
import postgreSQL from "../../public/assets/svg/postgreSQL.svg";

type Props = {};

const ToolsToLearn = (props: Props) => {
  return (
    <div className="w-full  px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
      {/* Title */}
      <h2 className="font-bold  text-3xl lg:text-4xl text-gray-800 dark:text-gray-200">
        What will you learn?
      </h2>
      <div className="sm:w-1/2 xl:w-full mb-6 md:mb-12 mt-2">
        <p className="mt-1 text-gray-600 dark:text-gray-400">
          Here are tools and applications you&#39;ll be introduced to during the
          6 weeks program
        </p>
      </div>
      {/* End Title */}
      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-6">
        <div className="flex items-center px-[5%] justify-between md:justify-around p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
          <Image src={excel} alt="logo" height={40} width={40} />
          <p className="text-grey-700 font-semibold text-xl">Excel</p>
        </div>
        <div className="flex items-center px-[5%] justify-between md:justify-around p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
          <Image src={powerBI} alt="logo" height={40} width={40} />
          <p className="text-grey-700 font-semibold text-xl">Power BI</p>
        </div>
        <div className="flex items-center px-[5%] justify-between md:justify-around p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
          <Image src={python} alt="logo" height={40} width={40} />
          <p className="text-grey-700 font-semibold text-xl">Python</p>
        </div>
        <div className="flex items-center px-[5%] justify-between md:justify-around p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
          <Image src={github} alt="logo" height={40} width={40} />
          <p className="text-grey-700 font-semibold text-xl">Github</p>
        </div>
        <div className="flex items-center px-[5%] justify-between md:justify-around p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
          <Image src={statistics} alt="logo" height={40} width={40} />
          <p className="text-grey-700 font-semibold text-xl">Statistics</p>
        </div>
        <div className="flex items-center px-[5%] justify-between md:justify-around p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
          <Image src={postgreSQL} alt="logo" height={40} width={40} />
          <p className="text-grey-700 font-semibold text-xl">PostgreSQL</p>
        </div>
        <div className="flex items-center justify-around p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
          <Image src={sql} alt="logo" height={40} width={40} />
          <p className="text-grey-700 font-semibold text-xl">MS SQL</p>
        </div>
        <div className="flex items-center px-[5%] justify-between md:justify-around p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
          <img src="https://scikit-learn.org/stable/_static/scikit-learn-logo-small.png" className="w-16 h-8"/>
          <p className="text-grey-700 font-semibold text-xl">Sklearn</p>
        </div>

        <div className="flex items-center px-[5%] justify-between md:justify-around p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
          <img src="https://cdn-icons-png.flaticon.com/128/3299/3299912.png" className="w-11 h-9"/>
          <p className="text-grey-700 font-semibold text-xl">Mathematics</p>
        </div>

        <div className="flex items-center px-[5%] justify-between md:justify-around p-4 md:p-7 bg-gray-100 gap-3 rounded-lg dark:bg-slate-800 min-w-64">
          <img src="https://cdn-icons-png.flaticon.com/128/4325/4325613.png" className="w-11 h-9"/>
          <p className="text-grey-700 font-semibold text-xl">Problem Solving</p>
        </div>

        <div className="flex items-center px-[5%] justify-between md:justify-around p-4 md:p-7 bg-gray-100  gap-3 rounded-lg dark:bg-slate-800 min-w-64">
          <img src="https://cdn-icons-png.flaticon.com/128/4616/4616734.png" className="w-10 h-8"/>
          <p className="text-grey-700 font-semibold text-xl">Machine Learning</p>
        </div>

        <div className="flex items-center px-[5%] justify-between md:justify-around p-4 md:p-7 bg-gray-100 gap-3 rounded-lg dark:bg-slate-800 min-w-64">
          <img src="https://cdn-icons-png.flaticon.com/128/1064/1064587.png" className="w-11 h-8"/>
          <p className="text-grey-700 font-semibold text-xl text-center">Presentation & Storytelling</p>
        </div>

        <div className="flex items-center px-[5%] justify-between md:justify-around gap-3 p-4 md:p-7 bg-gray-100 rounded-lg dark:bg-slate-800">
          <img src="https://cdn-icons-png.flaticon.com/128/2702/2702602.png" className="w-8 h-8"/>
          <p className="text-grey-700 font-semibold text-xl">Google Colab</p>
        </div>

        {/*  */}
      </div>
      {/* End Grid */}
    </div>
  );
};

export default ToolsToLearn;

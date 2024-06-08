"use client";
import React, { useState, useEffect } from "react";
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import MagneticButton from "../components/custom/Magnetic";
import Lenis from "@studio-freight/lenis";

const values = [
  {
    title: "Expert Vetted",
    description:
      "We have a pool of talents that have undergone a rigorous training process, ensuring they are skilled professionals capable of delivering high-quality, innovative solutions that fit into your business needs.",
  },
  {
    title: "Domain specialization",
    description:
      "Through the high value content of our educational materials, our talents have expertise in specific technologies ensuring your business gets the right solutions.",
  },
  {
    title: "Timely Delivery",
    description:
      "Our talents are efficient and fast in delivery, while ensuring that the successful business that your company has is not compromised.",
  },
  {
    title: "Skilled Mastery",
    description:
      "Our talents are highly skilled in efficient data mastery that has revolutionized business operations. From the science of building scalable codes, to the art in data visualization and the process of transforming business operations",
  },
];
const Page = () => {
    const [checkedBoxes, setCheckedBoxes] = useState<{ [key: string]: boolean }>({
      "Full-time": false,
      "Part-time": false,
      "On demand": false,
      "Negotiable": false,
    });

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  // Step 2: Define function to handle checkbox changes
  const handleCheckboxChange = (event: any) => {
    const { name, checked } = event.target;
    setCheckedBoxes((prevState) => ({
      ...prevState,
      [name]: checked,
    }));
  };

  // Step 3: Define function to handle div click events
  const handleDivClick = (type: any) => {
    setCheckedBoxes((prevState) => ({
      ...prevState,
      [type]: !prevState[type],
    }));
  };
  return (
    <div className="h-fit py-28 px-[1rem] lg:px-0 lg:py-32 max-w-[80rem] mx-auto lato flex gap-12 flex-col justify-between lg:flex-row">
      <div className="lg:w-5/12">
        <p className="text-5xl font-bold mt-2 text-greenPrimary">
          Hire Talents
        </p>
        <h1 className="text-lg mt-3">
          Get connected to our top{" "}
          <span className="text-greenPrimary">talents</span>
        </h1>

        <div className="flex flex-col mt-8 gap-8">
          {values.map((item, i) => (
            <div
              key={i}
              className="flex flex-col p-3 gap-2 items-start text-start"
            >
              <div className="flex items-center gap-8">
                <IoCheckmarkDoneSharp className="text-xl text-white rounded-full p-1 bg-greenPrimary" />
                <h1 className="text-lg text-black font-[500]">{item.title}</h1>
              </div>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="lg:w-6/12">
        <h1 className="mt-6 lg:mt-0 text-[18px] text-black">
          Fill in the form
        </h1>
        <div className="mt-3 flex flex-col gap-6 items-center w-[100%] mx-auto">
          <div className="text-start w-[100%]">
            <label className="text-slate-600 font-bold text-lg">
              Job title *
            </label>
            <p className="text-md my-2 text-slate-500 font-[500]">
              A job title must describe one position only
            </p>
            <input
              placeholder='e.g. "Data Analyst"'
              className="border px-4 outline-none border-slate-300 rounded-md mt-3 h-3 py-5 w-[100%] "
            />
          </div>
          <hr className="w-[100%]" />
          <div className="text-start w-[100%]">
            <label className="text-slate-600 font-bold text-lg">
              Job Description *
            </label>
            <p className="text-md my-2 text-slate-500 font-[500]">
              Provide a short description about the job. Keep it short and to
              the point.
            </p>
            <textarea className="border h-[15rem] outline-none border-slate-300 rounded-md mt-1 py-4 w-[100%] px-4" />
          </div>
          <hr className="w-[100%]" />
          <div className="text-start w-[100%]">
            <label className="text-slate-600 font-[500] text-lg">
              Job Type *
            </label>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-y-5 gap-x-5 mt-4">
             

              {["Full-time", "Part-time", "On demand", "Negotiable"].map(
                (type, i) => (
                  <div
                    key={i}
                    // Step 1: Add onClick event handler to the div
                    onClick={() => handleDivClick(type)}
                    // Step 3: Update div styling based on checkbox state
                    className={`flex items-center gap-4 px-4 py-2 border rounded-md ${
                      checkedBoxes[type] && "border-blue-500"
                    }`}
                  >
                  
                    <input
                      className="w-4 h-4"
                      type="checkbox"
                      name={type} // Use the checkbox value as the name
                      checked={checkedBoxes[type]} // Set checked state based on state variable
                      onChange={handleCheckboxChange} // Handle checkbox changes
                    />
                    <p className="text-md">{type}</p>
                  </div>
                )
              )}

            
            </div>
          </div>
          {/* <hr className="w-[100%]" /> */}
{/* 
          <div className="text-start w-[100%]">
            <label className="text-slate-600 font-bold text-lg">
              Working Schedule *
            </label>
            <p className="text-md my-2 text-slate-500 font-[500]">
              You can pick multiple work schedules
            </p>
            <div className="mt-4 flex flex-row gap-4 flex-wrap">
              {["Day shift", "Night shift", "Weekend avaiability"].map(
                (schedule, i) => (
                  <div
                    key={i}
                    className="border py-2 px-6 bg-green-50 rounded-full font-[500]  text-[14px]"
                  >
                    {schedule}
                  </div>
                )
              )}
            </div>
          </div> */}
          {/* <hr className="w-[100%]" /> */}

          {/* <div className="text-start w-[100%]">
            <label className="text-slate-600 font-bold text-lg">
              Salary
            </label>
            <p className="text-md my-2 text-slate-500 font-[500]">
              Choose how you prefer to pay for this job.
            </p>
            <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 w-[100%] gap-8">
              {[{
                icon: <CiClock2 className="text-xl lg:text-2xl"/>,
                title: 'Hourly'
              }, {
                icon: <CiMoneyBill className="text-2xl lg:text-3xl text-greenPrimary"/>,
                title: 'Custom'
              },].map(
                (pay, i) => (
                  <div
                    key={i}
                    className={`border-2 rounded-md relative h-24 flex flex-col justify-center items-center gap-1 ${i == 1 ? 'border-greenPrimary ' : ''}`}
                  >
                    <FaRegCircle className={`absolute top-3 left-3 text-[18px] ${i == 1 ? 'text-greenPrimary ' : ''}`}/>
                    {pay.icon}
                    <p className={`text-md lg:text-lg font-[600] ${i == 1 ? 'text-greenPrimary ' : ''}`}>{pay.title}</p>
                  </div>
                )
              )}
            </div>

            <div className="text-start w-[50%] mt-6">
            <label className="text-black font-bold text-md">Amount you want to pay</label>
            <input
              placeholder=''
              className="border px-4 outline-none border-slate-300 rounded-md mt-3 h-3 py-5 w-[100%] "
            />
          </div>
          </div> */}
          <hr className="w-[100%]" />
          <div className="text-start w-[100%]">
            <label className="text-slate-600 font-bold text-lg">
              Hiring multiple candidates?
            </label>
            <p className="text-md my-2 text-slate-500 font-[500]">
              This will be displayed on job page for candidates to see.
            </p>

            <div
                    className={`flex items-center gap-4 px-4 py-2 border rounded-md `}
                  >
                   
                    <input
                      className="w-4 h-4"
                      type="checkbox"
                    />
                    <p className="text-md font-[500]">Yes I am hiring multiple candidates</p>
                  </div>
          </div>

          <div className="text-start w-[100%]">
            <label className="text-slate-600 font-bold text-lg">
              Additional Note *
            </label>
            <p className="text-md my-2 text-slate-500 font-[500]">
              Anything you want us to know?
            </p>
            <input
              placeholder=''
              className="border px-4 outline-none border-slate-300 rounded-md mt-3 h-3 py-5 w-[100%] "
            />
          </div>

          <div className="w-[100%] flex justify-start items-start col-span-2">
            <MagneticButton>
              <button className="bg-greenPrimary px-8 py-2 text-[18px] rounded-md text-white w-[100%]">
                Submit
              </button>
            </MagneticButton>
          </div>
        </div>
      </div>

      {/* <div className="lg:w-6/12">
        <h1 className="mt-20 lg:mt-0 text-[18px] text-black">Fill in the form</h1>
        <div className="mt-3 flex flex-col lg:grid grid-cols-1 lg:grid-cols-2 gap-6 items-center w-[100%] mx-auto">
          <div className="text-start w-[100%]">
            <label className="text-black font-[500] text-md">First name *</label>
            <input className="border px-4 outline-none border-slate-300 rounded-md mt-1 h-3 py-4 w-[100%] " />
          </div>

          <div className="text-start w-[100%]">
            <label className="text-black font-[500] text-md">Last name *</label>
            <input className="border px-4 outline-none border-slate-300 rounded-md mt-1 h-3 py-4 w-[100%] " />
          </div>

          <div className="text-start w-[100%] col-span-2">
            <label className="text-black font-[500] text-md">
              Your email *
            </label>
            <input className="border border-slate-300 outline-none rounded-md mt-1 h-3 py-4 w-[100%] px-4" />
          </div>

          <div className="text-start w-[100%]">
            <label className="text-black font-[500] text-md">Industry</label>
            <input className="border border-slate-300 outline-none rounded-md mt-1 h-3 py-4 w-[100%] px-4" />
          </div>

          <div className="text-start w-[100%]">
            <label className="text-black font-[500] text-md">Website</label>
            <input className="border border-slate-300 outline-none rounded-md mt-1 h-3 py-4 w-[100%] px-4" />
          </div>

          <div className="text-start w-[100%] col-span-2">
            <label className="text-black font-[500] text-md">Subject</label>
            <input className="border border-slate-300 outline-none rounded-md mt-1 h-3 py-4 w-[100%] px-4" />
          </div>

          <div className="text-start w-[100%] col-span-2">
            <label className="text-black font-[500] text-md">
              What role are you looking to fill *
            </label>
            <textarea className="border h-[15rem] outline-none border-slate-300 rounded-md mt-1 py-4 w-[100%] px-4" />
          </div>
          <div className="w-[100%] flex justify-start items-start col-span-2">
            <MagneticButton >
              <button className="bg-greenPrimary px-8 py-2 text-[18px] rounded-md text-white w-[100%]">
                Submit
              </button>
            </MagneticButton>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Page;

// 'use client'
// import { forwardRef } from "react";
// import { RiStarFill } from "react-icons/ri";
// import { useState } from "react";
// import Link from "next/link";
// const DifficultyLevel = ({ difficulty }) => {
//     let spans = [],
//         index = 0;
//     index = difficulty.toLowerCase() === "beginner" ? 1 : difficulty.toLowerCase() === "intermediate" ? 2 : 3;

//     for (let i = 0; i < 3; i++) {
//         spans.push(
//             <span
//                 key={i}
//                 className={`${i < index ? "active" : ""
//                     } block w-1 h-2 rounded-[1px] bg-white [&:is(.active)]:bg-[var(--bg)] [&:nth-child(1)]:h-[6px] [&:nth-child(2)]:h-[10px] [&:nth-child(3)]:h-[14px]`}
//             ></span>
//         );
//     }
//     return <>{spans}</>;
// };

// const Course = forwardRef(({ id, title, category, difficulty, duration, description, tools, thumbnail, instructor: { name, pic }, rating }, ref) => {
//     const [isActive, setIsActive] = useState(false)
//     console.log(tools)
//     return (
//         <div
//             className="group lato relative h-[550px] rounded-2xl border-[1.5px] border-solid border-transparent rounded-4xl overflow-hidden transition-colors duration-300"
//             ref={ref}
//             data-id={id}
//             data-category={category.toLowerCase()}
//             data-difficulty={difficulty.toLowerCase()}
//             onMouseEnter={() => setIsActive(true)}
//             onMouseLeave={() => setIsActive(false)}
//         >
//             <div className="w-full h-full">
//                 <img
//                     src={thumbnail}
//                     alt={title}
//                     className=" w-[100%] h-[100%]"
//                 />
//             </div>
//             <div className={`absolute bottom-0 inset-x-0 ${isActive ? 'h-80' : 'h-32'} p-2 m-2 bg-white border-[1.5px] border-solid border-transparent rounded-2xl transition-colors duration-300 group-hover:border-gray-10`}>
//                 <div
//                     className="flex flex-col justify-between h-full"
//                     title={title}
//                 >
//                     <div className="flex justify- gap-4">
//                         <p className="text-xl font-medium text-gray-10 whitespace-nowrap text-ellipsis overflow-hidden text-greenPrimary">{title}</p>
//                     </div>
//                     <p className="mt-2 h-16 text-gray-700 dark:text-gray-400">
//                         {description}
//                     </p>
//                     {/* ========= Course Instructor ========= */}
//                     {/* <div className="flex justify-between items-center">
//                         <div className="flex items-center gap-x-4">
//                             <div className="w-9 h-9 rounded-full overflow-hidden">
//                                 <img
//                                     src={pic}
//                                     alt={name}
//                                 />
//                             </div>
//                             <p className="text-base font-medium">{name}</p>
//                         </div>
//                         <div className="flex items-center gap-x-2">
//                             <RiStarFill
//                                 className="text-primary-50"
//                                 size={20}
//                             />
//                             <p className="text-base font-semibold">{rating}</p>
//                         </div>
//                     </div> */}
//                     <div className={`${isActive ? '' : 'hidden'}`}>
//                         <div className="flex flex-wrap gap-2 mb-0 h-[70px]">
//                             {

//                                tools && tools.map((tool) => <span  className={`inline-flex items-center h-7 gap-x-1.5 py-1.5 px-3 rounded-full text-xs font-medium ${tool.color} dark:bg-white/10 dark:text-white`}>
                                    
//                                     {
//                                         tool.tool
//                                     }
//                                 </span>)
//                             }
                            
//                         </div>

//                         <div className="mt-2 flex items-center gap-5">
//                             <img
//                                 src="https://cdn-icons-png.flaticon.com/128/833/833602.png"
//                                 className="w-6 h-6"
//                             />
//                             <p className="text-[16px] text-black">{duration} months</p>
//                         </div>

//                         <div className="mt-7 grid gap-3 w-full sm:inline-flex flex-wrap">
//                             <a
//                                 className="inline-flex justify-center items-center gap-x-3 text-center hover:bg-greenPrimary border border-greenPrimary text-sm lg:text-base hover:text-white text-greenPrimary font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-2 px-4 dark:focus:ring-offset-gray-800"
//                                 href="https://paystack.com/pay/il6uz88ryc"
//                                 target="_blank"
//                             >
//                                 Enroll
//                                 <img src="/assets/svg/arrow-right-up-green.svg" alt="" className="w-4 h-4" />
//                             </a>
//                             <a
//                                 className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-2 px-4 dark:focus:ring-offset-gray-800"
//                                 href="https://paystack.com/pay/9x3pfjhsqa"
//                                 target="_blank"
//                             >
//                                 Installments
//                                 <img src="/assets/svg/arrow-right-up-white.svg" alt="" className="w-4 h-4" />
//                             </a>
//                             <a
//                                 className="inline-flex justify-center items-center gap-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-2 px-4 dark:focus:ring-offset-gray-800"
//                                 href="#application-form"
//                             >
//                                 See Brochure
//                                 <img src="/assets/svg/arrow-right-up-white.svg" alt="" className="w-4 h-4" />
//                             </a>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// });

// export default Course;

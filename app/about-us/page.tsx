// 'use client'
// import React, { useState } from 'react'
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { MdOutlineEmail } from "react-icons/md";
// import { FollowingPointerDemo } from '../components/card/CustomCard'
// const blogContent = {
//   slug: "amazing-tailwindcss-grid-layouts",
//   author: "Manu Arora",
//   date: "28th March, 2023",
//   title: "Amazing Tailwindcss Grid Layout Examples",
//   description:
//     "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
//   image: "/data1.png",
//   authorAvatar: "/user.png",
// };
// const page = () => {
//   const targetRef = useRef<HTMLDivElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["end end", "end start"],
//   });
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
//   const position = useTransform(scrollYProgress, (pos) =>
//     pos >= 1 ? "relative" : "fixed"
//   );

//   useEffect(() => {
//     const updateMousePosition = (ev: MouseEvent) => {
//       if (!targetRef.current) return;
//       const { clientX, clientY } = ev;
//       targetRef.current.style.setProperty("--x", `${clientX}px`);
//       targetRef.current.style.setProperty("--y", `${clientY}px`);
//     };

//     window.addEventListener("mousemove", updateMousePosition);

//     return () => {
//       window.removeEventListener("mousemove", updateMousePosition);
//     };
//   }, []);
//   return (
//     <motion.div
//       // style={{ opacity }}
//       // ref={targetRef}
//       // className="relative max-w-[100vw] overflow-x-hidden flex flex-col h-fit pb-20 bg-green-50 space text-white before:pointer-events-none before:fixed before:inset-0 before:z-0 before:bg-[radial-gradient(circle_farthest-side_at_var(--x,_100px)_var(--y,_100px),_var(--color-secondary)_0%,_transparent_100%)] before:opacity-40"



//       className="relative max-w-[100vw] overflow-x-hidden flex flex-col h-fit pb-20 bg-green-50 space text-white "
//     >
//       {/* <div className='gradientBg z- absolute top-0 left-0 w-[100vw] h-[60vh]'></div> */}
//       <div className='bg-white parallelogram  relative flex items-center justify-center z- top-0 left-0 w-[100vw] h-[60vh]'>
//         <h1 className='text-greenPrimary text-center z-20 relative'>Get To know Us</h1>
//         <video
//           className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
//           autoPlay
//           muted
//           loop
//         >
//           <source src="/bg5.mp4" type="video/mp4" />
//           Your browser does not support the video tag.
//         </video>

//         <div className='absolute top-0 left-0 w-full h-full bg-black/50 z-10'></div>
//       </div>

//       <div className='container mx-auto relative h-fit mt-28'>
//         <div className='flex gap-12'>
//           <div className='w-4/12'>
//             <h1 className='text-greenPrimary text-2xl'>OUR MISSION</h1>
//             <p className='text-gray-600 text-5xl font-[500]'>Listen to people <br /> and help them</p>
//           </div>
//           <div className='w-7/12 text-gray-500 text-[18px] font-[400]'>
//           <p className=''>We listen and act on what our people need</p>
//           <p className='mt-2'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
//           </div>
//           <div>

//           </div>
//         </div>
//     <hr className='my-32'/>
//         <div>
//           <h1 className='text-greenPrimary text-2xl text-center'>VALUE PROPOSITION</h1>
//           <p className='text-black mt-8 text-5xl font-[600] text-center'>How we can help</p>
//         </div>
//       </div>
//       {/* <div className='flex mt-[30vh] h-[70vh] w-[100vw] border justify-evenly items-center relative z-10'>

//         <div>
//         <FollowingPointerDemo blogContent={blogContent} />
//         </div>
//         <div>
//         <FollowingPointerDemo blogContent={blogContent} />
//         </div>
//         <div>
//         <FollowingPointerDemo blogContent={blogContent} />
//         </div>
//       </div> */}
//     </motion.div>
//   )
// }

// export default page 










































// 'use client'
// import React, { useState } from 'react'
// import { useScroll, useTransform, motion } from "framer-motion";
// import { useEffect, useRef } from "react";
// import { MdOutlineEmail } from "react-icons/md";
// import { FollowingPointerDemo } from '../components/card/CustomCard'
// const blogContent = {
//   slug: "amazing-tailwindcss-grid-layouts",
//   author: "Manu Arora",
//   date: "28th March, 2023",
//   title: "Amazing Tailwindcss Grid Layout Examples",
//   description:
//     "Grids are cool, but Tailwindcss grids are cooler. In this article, we will learn how to create amazing Grid layouts with Tailwindcs grid and React.",
//   image: "/data1.png",
//   authorAvatar: "/user.png",
// };
// const page = () => {
//   const targetRef = useRef<HTMLDivElement | null>(null);
//   const { scrollYProgress } = useScroll({
//     target: targetRef,
//     offset: ["end end", "end start"],
//   });
//   const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
//   const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);
//   const position = useTransform(scrollYProgress, (pos) =>
//     pos >= 1 ? "relative" : "fixed"
//   );

//   useEffect(() => {
//     const updateMousePosition = (ev: MouseEvent) => {
//       if (!targetRef.current) return;
//       const { clientX, clientY } = ev;
//       targetRef.current.style.setProperty("--x", `${clientX}px`);
//       targetRef.current.style.setProperty("--y", `${clientY}px`);
//     };

//     window.addEventListener("mousemove", updateMousePosition);

//     return () => {
//       window.removeEventListener("mousemove", updateMousePosition);
//     };
//   }, []);
//   return (
//     <div className='max-w-[100vw] space overflow-x-hidden h-[100vh]'>
//       <div className='h-[37.5rem]  rounded-bl-[10rem] bg-white shadow-md'>
//         <div className='ml-[17.5%] h-[100%] flex items-center justify-between'>
//           <div className='max-w-[40rem] text-white'>
//             <h1 className='text-8xl text-greenPrimary'>About Digitaley</h1>
//             <p className='text-lg mt-4 text-black'> I really loved that the learning process was beginner
//               friendly, there was no serious rush and it gave me time to
//               carefully assimilate what i was learning.</p>
//           </div>
//           <div className='flex flex-col relative left-24 top-44 gap-6'>
//             <div className='flex flex-row gap-4'>
//               <img
//                 className="w-[22.5rem] h-64 shadow-sm shadow-black rounded-tl-[3rem] rounded-tr-md rounded-bl-[3rem] rounded-br-[3rem]"
//                 src={
//                   "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 }
//                 alt="Image Description"
//               />

//               <img
//                 className="w-72 h-72 rounded-tl-[3rem] shadow-sm shadow-black rounded-br-[3rem] rounded-tr-[3rem] rounded-bl-md"
//                 src={
//                   "https://business.laverne.edu/masters-in-data-analytics/wp-content/uploads/sites/14/2021/01/MS-Data-Analytics.jpg"
//                 }
//                 alt="Image Description"
//               />
//             </div>
//             <div className='flex flex-row gap-6 justify-evenly'>
//               <img
//                 className="w-56 rounded-tr-md h-64 shadow-sm shadow-black rounded-tl-[3rem] rounded-bl-md rounded-br-md"
//                 src={
//                   "https://bloghart.com/wp-content/uploads/2024/02/Harmonizing-Productivity-and-Well-being-in-Data-Analysis-jpg.webp"
//                 }
//                 alt="Image Description"
//               />

//               <img
//                 className="w-[30rem] shadow-sm shadow-black h-96 rounded-tl-[6rem] rounded-bl-xl rounded-br-[3rem]"
//                 src={
//                   "https://www.simplilearn.com/ice9/free_resources_article_thumb/Data_Analyst_Job_Description.jpg"
//                 }
//                 alt="Image Description"
//               />
//             </div>
//           </div>
//         </div>
//       </div>

//       <div className='container mx-auto relative h-fit mt-72'>
//         <div className='flex gap-16 items-center'>
//           <div className='w-5/12'>
//             <h1 className='text-greenPrimary text-2xl'>OUR MISSION</h1>
//             <p className='text-gray-600 text-6xl font-[500]'>Listen to people <br /> and help them</p>
//           </div>
//           <div className='w-8/12  text-[18px] font-[400]'>
//           {/* <p className=''>We listen and act on what our people need</p> */}
//           <p className='mt-2 text-gray-700 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea</p>
//           </div>
//           <div>

//           </div>
//         </div>
//     <hr className='my-24'/>
//         <div>
//           <h1 className='text-greenPrimary text-2xl text-center'>VALUE PROPOSITION</h1>
//           <p className='text-black mt-8 text-5xl font-[600] text-center'>How we can help</p>

//                    <div className='flex justify-evenly py-12'>
//                    {/* <div> */}
//          <FollowingPointerDemo blogContent={blogContent} />
//          {/* </div> */}

//          {/* <div> */}
//          <FollowingPointerDemo blogContent={blogContent} />
//          {/* </div> */}

//          <div className='relative'>
//          <FollowingPointerDemo blogContent={blogContent} />
//          </div>
//                    </div>

//         </div>
//       </div>

//     </div>
//   )
// }

// export default page 




























import React from 'react'

const page = () => {
  return (
    <div className='h-fit max-w-[100vw] pt-[50vh] lato overflow-x-hidden bg-white'>
      {/* <div className='gradientBg h-[60vh] w-[100vw] flex items-center justify-center text-white'>
        <h1>Get to know us</h1>
      </div>

      <div className='bg-white max-w-[80rem] h-fit border relative mx-auto bottom-40 flex flex-col py-20 items-center'>
        <p className='text-greenPrimary border font-[500] px-4 py-1'>What we do</p>
        <h1 className='text-gray-700 text-4xl mt-6'>All in one platform for <span className='text-greenPrimary'>techies</span></h1>
        <p className='text-center mt-4 space text-[18px]'>Digitaley Drive covers all your needs as a tech <br /> lover</p>

        <div className='flex justify-evenly pb-10 mt-16 h-[30rem] w-full'>
          <div className='max-w-[27.5rem] w-[100%] flex p-5 py-10 items-center flex-col gap-7 h-[25rem] border shadow-md rounded-xl bg-green-50'>
            <div className='border w-16 h-16'>

            </div>
            <h1 className='text-black'>Vision</h1>
            <p className='text-xl text-center'>Our vision is to simplify technology with content for everyday users all over the world</p>
          </div>
          <div className='max-w-[27.5rem] w-[100%] flex p-5 py-10 items-center flex-col gap-7 h-[25rem] border shadow-md rounded-xl bg-green-50'>
            <div className='border w-16 h-16'>

            </div>
            <h1 className='text-black'>Mission</h1>
            <p className='text-xl text-center'>Our vision is to simplify technology with content for everyday users all over the world</p>
          </div>
        </div>


        <div className='flex justify-between gap-12 pb-10 mt-16 h-[25rem] w-full'>
          <div className='max-w-[30rem] w-[100%] h-[25rem] border shadow-md rounded-xl bg-green-50'></div>
          <div className='max-w-[30rem] w-[100%] h-[25rem] border shadow-md rounded-xl bg-green-50'></div>
          <div className='max-w-[30rem] w-[100%] h-[25rem] border shadow-md rounded-xl bg-green-50'></div>
          <div className='max-w-[30rem] w-[100%] h-[25rem] border shadow-md rounded-xl bg-green-50'></div>
        </div>
      </div> */}
    </div>
  )
}

export default page
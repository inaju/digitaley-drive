// 'use client'
// import { useParams } from 'next/navigation'
// import React from 'react'

// const page = () => {
//     const { name } = useParams()
//     const courseTitle = Array.isArray(name) ? name.join(' ') : name.split('-').join(' ');
//     return (
//         <div className=' lato pt-16 max-w-[100vw] overflow-x-hidden'>
//             {/* <div className='h-[25rem] overflow-hidden relative flex flex-col items-center justify-center'>
//                 <h1 className='text-white text-6xl z-20 relative text-center uppercase'>
//                     {courseTitle}
//                 </h1>
//                 <div className='bg-black/80 z-10 absolute top-0 left-0 w-full h-full'></div>
//                 <img src='https://cdn.careerfoundry.com/en/wp-content/uploads/2019/12/data-analyst-colleagues-in-office.webp'
//                     className='w-full absolute max-h-[25rem]' />
//             </div> */}

//             <div className='max-w-[110rem] h-fit mt-[5rem] max-h-[40rem] overflow-hidden rounded-xl mx-auto relative'>
//                 <div className='bg-black/40 absolute top-0 left-0 w-[100%] h-[100%]'></div>
//                 <img src='https://plus.unsplash.com/premium_photo-1661778915982-d104c9a41fee?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
//                     className='w-full h-full' />

//                 {/* <h1 className='text-white text-6xl absolute inset-0 flex items-center justify-center uppercase z-10'>
//                     {courseTitle}
//                 </h1> */}
//             </div>
//             <div className='max-w-[110rem] mx-auto my-16'>
//                 <div className='flex items-end'>
//                     <div className='w-[20rem] h-[1rem] left-6 relative top-[1.18rem] bg-greenPrimary'></div>
//                     <h1 className='text-greenPrimary space text-[9rem] text-end uppercase z-10'>
//                         {courseTitle}
//                     </h1>
//                     <div className='w-[20rem] h-[1rem] relative bottom-[3rem] right-6 bg-greenPrimary'></div>
//                 </div>
//                 <p className='text-xl text-greenPrimary space text-end mt-8'>Become a Data Analyst with our 3 months intensive training
//                     covering 40+ topics, 4 modules, and 5 projects that will take
//                     you from beginner to advanced.{" "}</p>


//                 <div className='mt-32 flex justify-between'>
//                     <div className='w-7/12 '>
//                         <div className='flex gap-1 space text-white text-[16px]'>
//                             <button className='flex-1 py-3 bg-greenPrimary rounded-md'>Overview</button>
//                             <button className='flex-1 py-3 bg-slate-100 text-gray-600 rounded-md'>Curriculum</button>
//                             <button className='flex-1 py-3 bg-slate-100 text-gray-600 rounded-md'>Instrutor</button>
//                             <button className='flex-1 py-3 bg-slate-100 text-gray-600 rounded-md'>FAQs</button>
//                             <button className='flex-1 py-3 bg-slate-100 text-gray-600 rounded-md'>Reviews</button>
//                         </div>

//                         <div className='mt-8 space'>
//                             <h1 className='text-3xl text-greenPrimary'>Course Description</h1>
//                             <p className='text-[15px] text-slate-700'>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                             </p>
//                             <p className='text-[15px] text-slate-700'>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                             </p>


//                             <h1 className='text-3xl text-greenPrimary mt-8'>Tools You Will Learn</h1>
//                             <div className="flex flex-wrap gap-2 pt-6 mb-">
//                             <span className="inline-flex items-center gap-x-1.5 py-2 px-8 rounded-md text-md font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
//                                 Excel
//                             </span>
//                             <span className="inline-flex items-center gap-x-1.5 py-2 px-8 rounded-md text-md font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
//                                 SQL
//                             </span>

//                             <span className="inline-flex items-center gap-x-1.5 py-2 px-8 rounded-md text-md font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">
//                                 Power BI
//                             </span>

//                             <span className="inline-flex items-center gap-x-1.5 py-2 px-8 rounded-md text-md font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
//                                 Github
//                             </span>

//                             <span className="inline-flex items-center gap-x-1.5 py-2 px-8 rounded-md text-md font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
//                                 Job/Freelance Preparation
//                             </span>
//                         </div>
//                             <h1 className='text-3xl text-greenPrimary mt-8'>What will I Learn From This Course?</h1>
//                             <p className='text-[15px] text-slate-700'>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                             </p>
//                             <p className='text-[15px] text-slate-700'>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                             </p>
//                             {/* <p className='text-[15px] text-slate-700'>
//                                 Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
//                             </p> */}
//                         </div>

//                     </div>
//                     <div className='w-4/12 h-[35rem] border'>
//                         <div className="flex px-2 flex-wrap gap-2 mb-">
//                             <span className="inline-flex items-center gap-x-1.5 py-2 px-8 rounded-md text-md font-medium bg-teal-100 text-teal-800 dark:bg-teal-800/30 dark:text-teal-500">
//                                 Excel
//                             </span>
//                             <span className="inline-flex items-center gap-x-1.5 py-2 px-8 rounded-md text-md font-medium bg-gray-100 text-gray-800 dark:bg-white/10 dark:text-white">
//                                 SQL
//                             </span>

//                             <span className="inline-flex items-center gap-x-1.5 py-2 px-8 rounded-md text-md font-medium bg-yellow-100 text-yellow-800 dark:bg-yellow-800/30 dark:text-yellow-500">
//                                 Power BI
//                             </span>

//                             <span className="inline-flex items-center gap-x-1.5 py-2 px-8 rounded-md text-md font-medium bg-red-100 text-red-800 dark:bg-red-800/30 dark:text-red-500">
//                                 Github
//                             </span>

//                             <span className="inline-flex items-center gap-x-1.5 py-2 px-8 rounded-md text-md font-medium bg-blue-100 text-blue-800 dark:bg-blue-800/30 dark:text-blue-500">
//                                 Job/Freelance Preparation
//                             </span>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             {/* <div className='relative bottom-[5rem]'>
//             <div className='bg-white flex justify-center flex-col px-[3rem] z-10 mx-auto max-w-[80rem] shadow-sm rounded-xl shadow-black h-[10rem] '>
//                 <h1 className='text-4xl text-greenPrimary'>The Complete Data Analytics Bootcamp For Beginners</h1>
//                 <p>Become a Data Analyst with our 3 months intensive training
//                 covering 40+ topics, 4 modules, and 5 projects that will take
//                 you from beginner to advanced.{" "}</p>
//             </div>
//             </div> */}
//         </div>
//     )
// }

// export default page




'use client'
import React from 'react'
import RoundedButton from '@/app/components/custom/RoundedButton/RoundedButton'
import MagneticButton from '@/app/components/custom/Magnetic'
import { usePathname } from 'next/navigation'
import { courses } from '@/app/data'
import CourseAccordion from '@/app/components/CourseAccordion'
const Page = () => {
  const pathname = usePathname();
  const courseSlug = pathname.split('/')[2];

  console.log('Extracted slug:', courseSlug);

  const foundObjectById = courses.find(obj => obj.reference === courseSlug);

  console.log('Found object:', foundObjectById);
  return (
    <div className='lato h-fit overflow-y- pb-24 max-w-[90rem] pt-48 mx-auto'>
      <div className='flex justify-between gap-20'>
        <div className='w-6/12'>
          <h1 className='text-3xl '>{foundObjectById?.title}</h1>
          <p>14,000+ Enrolled</p>
          <div className='flex flex-col mt-6 gap-5'>
            {foundObjectById?.description.map((desc, i) => <p className='text-slate-600 text-lg' key={i}>{desc}</p>)}
          </div>
          {/* <p className='mt-6 text-slate-600 text-lg'>This comprehensive Data Analyst Track Fellowship is designed to equip               |Picture here
            you with the skills and knowledge to thrive in the field of data analytics,
            regardless of your experience level.  Master the nuances of data analysis,
            progressing from beginner to advanced through a blend of live, interactive
            sessions and hands-on project-based learning.
            <br />
            <br />
            Gain practical experience by tackling 5 real-world portfolio projects spanning
            diverse industries like healthcare, e-commerce, digital marketing, retail,
            aviation, and fintech. This program will empower you to demonstrate
            your expertise to potential employers and hit the ground running in
            your data analyst career.
          </p> */}
          <div className="flex justify- gap-6 items-center mt-8">
            <span className='text-[18px]'>
            {foundObjectById?.topics} topics
            </span>
            <div className="w-3 h-3 rounded-full bg-greenPrimary"></div>
            <span className='text-[18px]'>
            {foundObjectById?.weeks} weeks
            </span>
            <div className="w-3 h-3 rounded-full bg-greenPrimary"></div>
            <span className='text-[18px]'>
              {foundObjectById?.modules} modules
            </span>
          </div>

          {
            foundObjectById?.tools && <div className="flex mt-8 flex-wrap gap-2 mb-0">
            {
              foundObjectById?.tools?.map((tool, i) => <span key={i} className={`inline-flex items-center gap-x-1.5 py-2 px-5 rounded-full text-[16px] font-medium ${tool.color} dark:bg-teal-800/30 dark:text-teal-500`}>
                {tool.tool}
              </span>)
            }

          </div>
          }

        </div>
        <div className='w-6/12'>
          <img src={foundObjectById?.thumbnail} className='rounded-xl'/>

        </div>
      </div>
      {
            foundObjectById?.notes &&
      <div className=' mt-32 flex justify-between gap-16'>

        <div className=''>
          <h1 className='text-2xl  text-greenPrimary'>{foundObjectById?.title} Track without internship   </h1>
          <div className='mt-6'>
            {
              foundObjectById?.notes?.map((note, i) => <p key={i} className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span> {note}   </p>)
            }
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>Pricing:<span className='ml-2'>{foundObjectById?.amountWithoutInternship}</span></p>
          </div>

        </div>
        <div className=''>
          <h1 className='text-2xl  text-greenPrimary'>{foundObjectById?.title} Track with internship   </h1>
          <div className='mt-6'>
            {
              foundObjectById?.notes?.map((note, i) => <p key={i} className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span> {note}   </p>)
            }
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>3 months Internship</p>
            {/* <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>PowerBI </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>Bi weekly Mentorship   </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>SQL </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>Hackathon Development   </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>3 months Internship</p>
 */}

            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>Pricing:<span className='ml-2'>{foundObjectById?.amountWithInternship}</span></p>

            {/* <h1>Pricing: $100</h1> */}
          </div>
        </div>



      </div>     
}
      <div className="mt-7 grid gap-3 w-full sm:inline-flex flex-wrap px-4">
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

    <div className='mt-20 max-w-[60rem] mx-auto flex flex-col gap-5'>
  {
    foundObjectById?.curriculum && foundObjectById.curriculum.map((item, i) => <div key={i} className='h-fit overflow-x-hidden'>
      <CourseAccordion index={i} title={item.title} week={item.week} topics={[...item.days]}/>
    </div>)
  }
    </div>
      
      <div>

      </div>
    </div>
  )
}

export default Page;
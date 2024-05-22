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
const page = () => {
  return (
    <div className='lato max-w-[90rem] pt-48 mb-24 mx-auto'>
      <div className='flex justify-between gap-20'>
        <div className='w-6/12'>
          <h1 className='text-3xl '>Product (UI/UX) Design Bootcamp</h1>
          <p>14,000+ Enrolled</p>
          <p className='mt-6 text-slate-600 text-lg'>This comprehensive Data Analyst Track Fellowship is designed to equip               |Picture here
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
          </p>

        </div>
        <div className='w-6/12'>
          <img src='https://res.cloudinary.com/dw9gte68q/image/upload/v1708306465/AcademyImages/ProductAcademy/afr_productschPD_ybew90.svg' />

          {/* <div>
          <p></p>
        </div> */}
        </div>
      </div>
      <RoundedButton className='px-16 py-3 cursor-pointer rounded-xl w-fit '>
        Enroll Now
      </RoundedButton>
      <div className=' mt-32 flex gap-16'>

        <div className=''>
          <h1 className='text-2xl space text-greenPrimary'>Data Analytics Track without internship   </h1>
          <div className='mt-6'>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>PowerBI </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>Bi weekly Mentorship   </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>SQL </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>Hackathon Development   </p>
          </div>

          <div className='flex mt-16 gap-6'>
            <RoundedButton className='px-16 py-3 cursor-pointer rounded-xl w-fit '>
              Enroll Now
            </RoundedButton>
            <RoundedButton className='px-16 py-3 cursor-pointer rounded-xl w-fit '>
              Installments
            </RoundedButton>
            <RoundedButton className='px-16 py-3 cursor-pointer rounded-xl w-fit '>
              See Brochure
            </RoundedButton>
            {/* <MagneticButton>
        <button className='px-16 py-2 cursor-pointer text-[16px] text-white rounded-xl w-fit bg-greenPrimary flex items-center gap-5'>Installment 
        
        </button>
      </MagneticButton>
      <MagneticButton>
        <button className='px-16 py-3 cursor-pointer text-[16px] text-white rounded-xl w-fit bg-greenPrimary'>See Brochure
       
        </button>
      </MagneticButton> */}
          </div>

          {/* -                                                                      -PowerBI
-Github                                                                          -Github
-Bi weekly Mentorship                                                   -BI weekly Mentorship
-SQL                                                                              -SQL
-Hackathon Development                                              -Hackathon Development
                                                                                      -3 months Internship */}

        </div>
        <div className=''>
          <h1 className='text-2xl space text-greenPrimary'>Data Analytics Track with internship   </h1>
          <div className='mt-6'>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>PowerBI </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>Bi weekly Mentorship   </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>SQL </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>Hackathon Development   </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>3 months Internship</p>
          </div>
        </div>
      </div>
      <div>

      </div>
    </div>
  )
}

export default page
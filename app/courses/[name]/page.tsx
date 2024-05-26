'use client'
import React, {useEffect} from 'react'
import RoundedButton from '@/app/components/custom/RoundedButton/RoundedButton'
import MagneticButton from '@/app/components/custom/Magnetic'
import { usePathname } from 'next/navigation'
import { courses } from '@/app/data'
import CourseAccordion from '@/app/components/CourseAccordion'
import Faq from '@/app/components/faq'
import ContactForm from '@/app/components/ContactForm'
import Works from '@/app/components/Works'
import Lenis from "@studio-freight/lenis";
const Page = () => {

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: any) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);


  const pathname = usePathname();
  const courseSlug = pathname.split('/')[2];


  const foundObjectById = courses.find(obj => obj.reference === courseSlug);


  return (
    <div className='max-w-[100vw] overflow-x-hidden'>
      <div className='lato h-fit overflow-y- pb-24 max-w-[85rem] px-[1rem] pt-20 lg:pt-48 mx-auto'>
      <div className='flex flex-col-reverse lg:flex-row justify-between gap-20'>
        <div className='w-[100%] lg:w-7/12'>
          <h1 className='text-3xl '>{foundObjectById?.title}</h1>
          <p>{foundObjectById?.enrolled}+ Enrolled</p>
          <div className='flex flex-col mt-6 gap-5'>
            {foundObjectById?.description.map((desc, i) => <p className='text-slate-600 text-lg' key={i}>{desc}</p>)}
          </div>
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
        <div className='w-[100%] lg:w-5/12 lg:max-h-[24.5rem] overflow-hidden'>
          <img src={foundObjectById?.thumbnail} className='rounded-xl lg:h-[27.5rem]'/>

        </div>
      </div>
      {
            foundObjectById?.notes &&
      <div className=' mt-16 lg:mt-32 flex flex-col lg:flex-row justify-between gap-16'>

        <div className=''>
          <h1 className='text-2xl  text-greenPrimary'>{foundObjectById?.title} Track without internship   </h1>
          <div className='mt-6'>
            {
              foundObjectById?.notes?.map((note, i) => <p key={i} className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>.</span> {note}   </p>)
            }
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>.</span>Pricing:<span className='ml-2'>{foundObjectById?.amountWithoutInternship}</span></p>



            <div className="mt-7 grid gap-3 w-full sm:inline-flex flex-wrap">

{foundObjectById?.enroll &&  <a
  className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
  href={foundObjectById?.enroll}
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
</a>}



{foundObjectById?.installments &&
<a
  className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
  href={foundObjectById?.installments}
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
}
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
          </div>

        </div>
        <div className=''>
          <h1 className='text-2xl  text-greenPrimary'>{foundObjectById?.title} Track with internship   </h1>
          <div className='mt-6'>
            {
              foundObjectById?.notes?.map((note, i) => <p key={i} className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>.</span> {note}   </p>)
            }
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>.</span>3 months Internship</p>
            {/* <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>PowerBI </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>Bi weekly Mentorship   </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>SQL </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>Hackathon Development   </p>
            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>*</span>3 months Internship</p>
 */}

            <p className='flex  items-center gap-4 text-lg'><span className='text-greenPrimary text-2xl'>.</span>Pricing:<span className='ml-2'>{foundObjectById?.amountWithInternship}</span></p>
            <div className="mt-7 grid gap-3 w-full sm:inline-flex flex-wrap">

{foundObjectById?.enroll &&  <a
  className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
  href="#"
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
</a>}



{foundObjectById?.installments &&
<a
  className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
  href="#"
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
}
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
            {/* <h1>Pricing: $100</h1> */}
          </div>
        </div>



      </div>     
}
      {/* <div className="mt-7 grid gap-3 w-full sm:inline-flex flex-wrap px-4">

        {foundObjectById?.enroll &&  <a
          className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
          href={foundObjectById?.enroll}
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
        </a>}
       
       

        {foundObjectById?.installments &&
        <a
          className="inline-flex justify-center items-center gap-x-3 text-center bg-greenPrimary hover:bg-greenSecondary border border-transparent text-sm lg:text-base hover:text-white text-white font-medium rounded-md focus:outline-none focus:ring-2 focus:ring-greenPrimary focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800"
          href={foundObjectById?.installments}
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
}
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
      </div> */}

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

<Faq />
<Works />

    </div>
  )
}

export default Page;
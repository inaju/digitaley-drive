'use client'
import React, {useEffect} from 'react'
import { FaClock, FaQq } from "react-icons/fa";
import PopularCourses from '../components/Course';
import Faq from '../components/faq';
import ContactForm from '../components/ContactForm';
import Works from '../components/Works';
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
  return (
    <div className=' lato lg:pt-24 max-w-[100vw] overflow-x-hidden'>
      <div className='absolute w-[100vw] top-0 z-20 bg-white lg:hidden h-[78px]'></div>
      <div className='h-[30rem] overflow-hidden lg:mx-[2rem] lg:rounded-3xl relative flex flex-col items-center justify-center'>
        {/* <h1 className='text-white text-6xl z-20 relative text-center'>Courses</h1> */}
        <h1 className='text-white text-6xl lg:text-8xl z-20 relative text-center'>
        Take Control of <span className='text-greenPrimary'> <br />Your Career</span>
        </h1>
        
        <p className='text-white z-20 relative text-center mt-4'>HOME / COURSE</p>
        <div className='bg-black/70 z-10 absolute top-0 left-0 w-full h-full'></div>
        {/* <img src='https://cdn.careerfoundry.com/en/wp-content/uploads/2019/12/data-analyst-colleagues-in-office.webp' 
            className='w-full absolute max-h-[25rem]'/> */}

        <img src='https://cdn.careerfoundry.com/en/wp-content/uploads/2019/12/data-analyst-colleagues-in-office.webp'
          className='w-full absolute max-h-[30rem]' />

      </div>

      {/* <h1 className='text-center mt-6'>Take Control of <span className='text-greenPrimary'>Your Career</span></h1>
      <p className='text-center'>Leverage On A Comprehensive Training That Gives You An Edge </p> */}

      <div className='mt-16 lg:mt-32 flex px-[1rem] items-center justify-center mb-12'>
        <PopularCourses />
      </div>

      <Faq />
      {/* <ContactForm /> */}
      <Works />
    </div>
  )
}

export default Page;
'use client'
import React from 'react'
import { jobOpenings } from '../data'
import MagneticButton from '../components/custom/Magnetic'
import { CiLocationOn } from "react-icons/ci";
import { IoMdTime } from "react-icons/io";
import FAQ from '../components/Faq';
import ContactForm from '../components/ContactForm';
import Works from '../components/Works';
const page = () => {
    return (
        <div className='pt-24 lg:pt-40 overflow-x-hidden mx-auto max-w-[100vw] lato h-fit'>
            <h1 className='px-[1rem] lg:text-center text-greenPrimary leading-[3rem] lg:leading-[5rem] xl:leading-[7rem] text-[3rem] lg:text-[8rem]'>Join our world-class team <br className='hiidden lg:flex'/> creators & dreamers</h1>
            <p className='px-[1rem] mt-12 text-xl lg:text-center'>our philosophy is simple _____ hire a team of diverse, passionate people <br className='hiidden lg:flex'/>
                and foster a culture that empowers you to do your best work.</p>

            <div className='px-[1rem] max-w-[70rem] flex flex-col gap-16 mx-auto my-20 lg:my-40'>
                {jobOpenings.map((job, i) => 
                <div key={i} className='p-4 lg:p-8 border-dashed border-greenPrimary items-start border w-[100%] flex justify-between flex-col lg:flex-row  gap-8'>
                    <div>
                        <h1 className='text-3xl text-greenPrimary'>
                            {job.role}
                        </h1>
                        <p className='mt-4 text-[17px]'>{job.description}</p>

                        <div className='flex flex-col lg:flex-row lg:items-center gap-6 mt-8'>
                            <MagneticButton>
                                <div className='flex items-center gap-2 border border-greenPrimary w-fit px-7 py-2 rounded-full'>
                                    <CiLocationOn className='text-black text-xl'/>
                                    <p className='text-black'>100% remote</p>
                                </div>
                            </MagneticButton>
                            <MagneticButton>
                                <div className='flex items-center gap-2 border border-greenPrimary px-7 w-fit py-2 rounded-full'>
                                    <IoMdTime className='text-black text-xl'/>
                                    <p className='text-black'>Full-time</p>
                                </div>
                            </MagneticButton>
                        </div>
                    </div>

                    <MagneticButton >
                        <div className='flex items-center gap-4 h-fit cursor-pointer'>
                            <h1 className='text-[18px]'>Apply</h1>
                            <img src="/assets/svg/arrow-right-up-green.svg" alt="" className="w-5 h-5" />

                        </div>
                    </MagneticButton>
                </div>)}
            </div>
            <div className='z-0 bg-white'>
      <FAQ />
      <ContactForm />
      <Works />
      </div>
        </div>
    )
}

export default page
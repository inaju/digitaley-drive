'use client'
import React from 'react'
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import MagneticButton from '../components/custom/Magnetic';
const values = [
    {
        title: 'Expert Vetted',
        description: 'Our writers undergo a rigorous selection process, ensuring they are skilled professionals capable of delivering high-quality, impactful content tailored to your needs',
    },
    {
        title: 'Industry Specialization',
        description: 'Our writers have expertise in specific industries, ensuring content is well-written, highly relevant, and authoritative.',
    },
    {
        title: 'SEO Mastery',
        description: 'Skilled in the latest SEO techniques, our writers craft content that ranks well on search engines, driving organic traffic to your business.',
    },
    {
        title: 'Expert Vetted',
        description: 'We prioritize punctuality, ensuring your content is delivered on schedule to keep your marketing efforts on track.',
    },
    {
        title: 'Continuous Improvement',
        description: 'Our writers are committed to growth, regularly updating their skills to stay ahead in the ever-evolving content landscape.',
    },
]
const page = () => {
    return (
        <div className='h-fit text-center py-28 px-[1rem] lg:py-40 max-w-[80rem] mx-auto lato'>
            <p className='text-[16px] mt-2 text-greenPrimary'>creative Writers</p>
            <h1 className='text-3xl mt-3 lg:text-4xl'>Get connected to our top <span className='text-greenPrimary'>expert writers</span></h1>
            <p className='text-[17px] mt-8 lg:mt-4'>With a passion for innovation and a dedication to excellence , our <br className='hidden lg:flex' />
            writers bring diverse expertise to every project they undertake</p>


            <div className='grid mt-16 lg:mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-12'>
                {
                    values.map((item, i) => <div key={i} className='flex flex-col p-3 gap-2 items-center'>
                        <IoCheckmarkDoneSharp className='text-xl text-white rounded-full p-1 bg-greenPrimary'/>
                        <h1 className='text-lg text-black font-[500]'>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>)
                }
            </div>

            <div className='mt-20 lg:mt-40 flex flex-col gap-16 items-center lg:w-[60rem] w-[100%] mx-auto'>
                <div className='text-start w-[100%]'>
                    <label className='text-black font-[300] text-lg'>
                        Your name *
                    </label>
                    <input className='border px-4 outline-none border-greenPrimary rounded-md mt-3 h-3 py-6 w-[100%] '/>
                </div>

              

                <div className='text-start w-[100%]'>
                    <label className='text-black font-[300] text-lg'>
                        Your email *
                    </label>
                    <input className='border border-greenPrimary rounded-md mt-3 h-3 py-4 w-[100%] '/>
                </div>

                <div className='text-start w-[100%]'>
                    <label className='text-black font-[300] text-lg'>
                        Industry 
                    </label>
                    <input className='border border-greenPrimary rounded-md mt-3 h-3 py-4 w-[100%] '/>
                </div>

                <div className='text-start w-[100%]'>
                    <label className='text-black font-[300] text-lg'>
                        Website 
                    </label>
                    <input className='border border-greenPrimary rounded-md mt-3 h-3 py-4 w-[100%] '/>
                </div>

                <div className='text-start w-[100%]'>
                    <label className='text-black font-[300] text-lg'>
                        Subject
                    </label>
                    <input className='border border-greenPrimary rounded-md mt-3 h-3 py-4 w-[100%] '/>
                </div>

                <div className='text-start w-[100%]'>
                    <label className='text-black font-[300] text-lg'>
                        What role are you looking to fill *
                    </label>
                    <textarea className='border h-[15rem] border-greenPrimary rounded-md mt-3 py-4 w-[100%] '/>
                </div>
                <div className='w-[100%] flex justify-start items-start'>
                <MagneticButton>
                    <button className='bg-greenPrimary px-8 py-2 text-[18px] rounded-md text-white'>
                        Submit
                    </button>
                </MagneticButton>
                </div>
            </div>
        </div>
    )
}

export default page
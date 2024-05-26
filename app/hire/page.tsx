'use client'
import React from 'react'
import { IoCheckmarkDoneSharp } from "react-icons/io5";
import MagneticButton from '../components/custom/Magnetic';
const values = [
    {
        title: 'Expert Vetted',
        description: 'We have a pool of talents that have undergone a rigorous training process, ensuring they are skilled professionals capable of delivering high-quality, innovative solutions that fit into your business needs.',
    },
    {
        title: 'Domain specialization',
        description: 'Through the high value content of our educational materials, our talents have expertise in specific technologies ensuring your business gets the right solutions.',
    },
    {
        title: 'Timely Delivery',
        description: 'Our talents are efficient and fast in delivery, while ensuring that the successful business that your company has is not compromised.',
    },
    {
        title: 'Skilled Mastery',
        description: 'Our talents are highly skilled in efficient data mastery that has revolutionized business operations. From the science of building scalable codes, to the art in data visualization and the process of transforming business operations',
    },
    
]
const page = () => {
    return (
        <div className='h-fit text-center py-28 px-[1rem] lg:py-40 max-w-[80rem] mx-auto lato'>
            <p className='text-[16px] mt-2 text-greenPrimary'>Hire Talents</p>
            <h1 className='text-3xl mt-3 lg:text-4xl'>Get connected to our top <span className='text-greenPrimary'>talents</span></h1>
            {/* <p className='text-[17px] mt-8 lg:mt-4'>With a passion for innovation and a dedication to excellence , our <br className='hidden lg:flex' />
            writers bring diverse expertise to every project they undertake</p> */}


            <div className='grid mt-16 lg:mt-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
                {
                    values.map((item, i) => <div key={i} className='flex flex-col p-3 gap-2 items-center'>
                        <IoCheckmarkDoneSharp className='text-xl text-white rounded-full p-1 bg-greenPrimary'/>
                        <h1 className='text-lg text-black font-[500]'>{item.title}</h1>
                        <p>{item.description}</p>
                    </div>)
                }
            </div>

                <h1 className='mt-20 lg:mt-20 text-greenPrimary'>Get in touch</h1>
            <div className='mt-6 flex flex-col gap-16 items-center lg:w-[60rem] w-[100%] mx-auto'>
                <div className='text-start w-[100%]'>
                    <label className='text-black font-[300] text-lg'>
                        Your name *
                    </label>
                    <input className='border px-4 outline-none border-greenPrimary rounded-md mt-3 h-3 py-4 w-[100%] '/>
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
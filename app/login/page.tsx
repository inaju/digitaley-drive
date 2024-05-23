'use client'
import React from 'react'
import RoundedButton from '../components/custom/RoundedButton/RoundedButton'
import { IoMailOutline } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
const page = () => {
    return (

<div className='flex space bg-white'>

    <div className='w-[35vw] h-screen flex flex-col py-32 p-20'>
        <h1 className='text-4xl text-greenPrimary text-center'>Welcome to Digitaley Drive</h1>
        <div className=' mt-12 w-[100%] max-w-[30rem]'>
            <span className='text-greenPrimary'>Email</span>
            <div className='w-[100%] gap-3 flex bg-transparent items-center border border-greenPrimary px-4 rounded-xl mt-2'>
                <IoMailOutline className='text-xl text-gray-700'/>
                <input className='outline-none py-3 bg-transparent flex-1' placeholder='digitaley@drive.com'value='digitaley@drive.com'/>
            </div>
        </div>
        <div className=' mt-8 w-[100%] max-w-[30rem]'>
            <span className='text-greenPrimary'>Password</span>
            <div className='w-[100%] gap-3 flex bg-transparent items-center border border-greenPrimary px-4 rounded-xl mt-2'>
                <CiLock className='text-xl text-gray-800'/>
                <input autoComplete='false' type='password' className='outline-none bg-transparent py-3 flex-1' value='********' placeholder='********'/>
            </div>
        </div>

        <RoundedButton className='w-[100%] rounded-2xl py-6 h-12 max-w-[30rem] mt-12'>
            Login
        </RoundedButton>

        <p className='mt-5'>Don&apos;t have an account? <span className='text-greenPrimary'>Sign Up</span></p>
        <hr className='my-12 max-w-[30rem]'/>

<div className='max-w-[30rem]'>
    <h1 className='text-xl text-greenPrimary items-center flex gap-4'>
        <FaQuestionCircle className='text-xl'/>
        Can you change your plan?
    </h1>
    <p className='mt-5 text-gray-700'>Whenever you want, Digitaley Drive will also change your plan according to your need</p>
    <p className='text-greenPrimary mt-2 font-[500]'>Contact Us</p>
</div>
    </div>

    <div className="relative z-10 h-screen w-[70vw] shadow-md  rounded-tl-[15rem] overflow-hidden">
            <video
                className="absolute top-0 left-0 w-full h-full object-cover z-[-1]"
                autoPlay
                muted
                loop
            >
                <source src="/bg5.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            {/* <div className="absolute bottom-0 left-0 w-full h-full custom-gradient z-0"></div> */}
            {/* <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-black to-white to-transparent z-0"></div> */}
            {/* <div className="relative z-10 flex items-center justify-center h-full text-center text-white">
                <div>
                    <h1 className="text-4xl md:text-6xl font-bold">Your Content Here</h1>
                    <p className="mt-4 text-lg md:text-2xl">Additional text or elements go here</p>
                </div>
            </div> */}
        </div>

</div>

       
    )
}

export default page
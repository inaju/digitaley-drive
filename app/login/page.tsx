'use client'
import React from 'react'
import RoundedButton from '../components/custom/RoundedButton/RoundedButton'
import { IoMailOutline } from "react-icons/io5";
import { FaQuestionCircle } from "react-icons/fa";
import { CiLock } from "react-icons/ci";
const page = () => {
    return (
        // <div className='pt-16 pb-8 space flex justify-evenly border border-black h-[100vh] items-center'>

        //     <div className='w-5/12 h-[85vh] border border-black'>
        //         <h1>LARGEST IMAGE SOURCE</h1>
        //         <h1>POWERED BY CRERATORS AROUND THE WORLD</h1>
        //     </div>


        //     <div className='w-4/12 h-[85vh] border shadow-xl flex flex-col items-center justify-center relative rounded-2xl overflow-hidden'>
        //         {/* <h1></h1> */}
        //         <div className='max-w-[27.5rem] p-4 px-6 w-[30rem] rounded-t-2xl bg-white h-[22.5rem] z-10'>
        //             <h1 className='text-[24px]'>Login to your account</h1>

        //             <div className='w-[100%] mt-5'>
        //                 <span className='ml-3'>Username</span>
        //                 <input  className='border-b border-slaate-500 mt-1 p-1 px-3 w-[100%] bg-white outline-none' />
        //             </div>
        //             <div className='w-[100%] mt-6'>
        //                 <span className='ml-3'>Password</span>
        //                 <input type='password' className='border-b border-slaate-500 mt-1 p-1 px-3 w-[100%] bg-white outline-none' />
        //             </div>

        //             <div className='flex justify-between items-center mt-6'>
        //             <div className='flex gap-4 items-center'>
        //             <input type="checkbox" id="customCheckbox" className="custom-checkbox" />
        //                 {/* <input placeholder='Username' className='' type='checkbox' /> */}
        //                 <span className='ml-3'>Remember me</span>
        //             </div>

        //             <p className='text-black'>Forgotten Password?</p>
        //             </div>

        //             <RoundedButton className='px-8 py-2 mt-7 rounded-full w-[100%] '>
        //     Submit
        //   </RoundedButton>

        //         </div>
        //         <div className='max-w-[27.5rem] w-[30rem] rounded-b-2xl border-[1.5rem] border-white h-[12.5rem] z-10 inner-'>
        //         </div>
        //         {/* <div className='max-w-[30rem] w-[30rem] rounded-b-2xl border-[1.5rem] border-white h-[12.5rem] z-10'>

        //         </div> */}
        //         <img
        //             className="hidden absolute sm:block w-full h-[100%] rounded-md object-cover "
        //             src={
        //                 // "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        //                 "https://images.unsplash.com/photo-1583835918541-33ea5746ef05?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjR8fGdyYXlzY2FsZSUyMG9mZmljZXxlbnwwfHwwfHx8MA%3D%3D"
        //                 // "http://localhost:5173/src/assets/hero-03.png"
        //             }
        //             alt="Image Description"
        //         />
        //           {/* <div className='grayscale-overlay'></div> */}
        //         {/* <div className='absolute top-0 left-0 w-[100%] h-[100%] bg-black/50'></div> */}
        //     </div>
        // </div>


        // <div className='h-[100vh]'>
        //     <div className='w-[40%]  rounded-[2rem] overflow-hidden relative border shadow-md h-[100%]'>
        //     <img 
        //     // src="https://images.rawpixel.com/image_social_landscape/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjEwNzItMDM3LWMta3ZoaDA4bXAuanBn.jpg"
        //     // src='https://cdn.pixabay.com/photo/2022/06/12/22/48/gradient-7258997_1280.png'
        //     src='https://cdn.dribbble.com/userupload/6756940/file/original-ed72dcc3ed605333049b02ddf5a6f191.png?resize=450x338&vertical=center'
        //     // src='https://plus.unsplash.com/premium_photo-1666787743122-09953cdbdecf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Z3JhZGllbnR8ZW58MHx8MHx8fDA%3D'
        //     // src="https://images.unsplash.com/photo-1632516643720-e7f5d7d6ecc9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGdyYWRpZW50fGVufDB8fDB8fHww"
        //     className='absolute h-[100%] w-[100%] object-cover t'/>
        //     </div>
           
        // </div>

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

        <p className='mt-5'>Don't have an account? <span className='text-greenPrimary'>Sign Up</span></p>
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
     {/* <div className="relative z-10 h-screen w-[70vw] shadow-md border rounded-tl-[10rem] overflow-hidden">
        <video
            className="absolute top-0 left-0  w-full h-full object-cover z-[-1]"
            autoPlay
            muted
            loop
        >
            <source src="/bg3.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    </div> */}
</div>

       
    )
}

export default page
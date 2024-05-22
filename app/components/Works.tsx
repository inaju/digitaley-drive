import React from 'react'

const Works = () => {
    return (
        <div className='lato flex py-10 lg:py-16 px-[1rem] flex-col items-center justify-center'>
            <p className='text-greenPrimary'>Get Discovered</p>
            <h1 className='text-3xl lg:text-5xl text-black'>Our <span className='border-b-4 border-greenPrimary'>Writers Work</span> Here</h1>
            <div className='flex flex-col lg:flex-row items-center gap-6 lg:gap-12 mt-20 lg:mt-12'>
                <img src='https://superfm.online/superfmsmall.png' className='h-[6rem] w-auto' />
                <img src='https://guardian.ng/wp-content/themes/guardian2021/img/guardian-conscience.png' className='h-[3rem] w-auto' />
            </div>
        </div>
    )
}

export default Works
import React from 'react'

const WhereStudentWorks = () => {
  return (
   <div className='py-16 flex flex-col gap-12'>
    <h1 className="text-3xl text-center">Where our stuents<span className="border-b-4 text-greenPrimary border-greenPrimary pb-1"> work</span></h1>

    <div className='max-w-[80rem] mx-auto grid grid-cols-2 lg:flex items-center gap-20'>
    <img src='/assets/svg/amazon.jpeg' className='w-auto h-20'/>
    <img src='/assets/svg/mtn.jpg' className='w-auto h-20'/>
  

    <img src='/assets/svg/access.jpg' className='w-auto h-20'/>
   
      
      <img src='/assets/svg/fiverr.jpg' className='w-auto h-20'/>
      <img src='/assets/svg/nigerite.webp' className='w-auto h-20 col-span-2 mx-auto border'/>
     
      {/* <img src='/assets/svg/mtn.jpg' className='w-auto h-20'/> */}
    </div>
   </div>
  )
}

export default WhereStudentWorks
import React from 'react'

const LeaderShip = () => {
  return (
    <div className='px-5 md:px-16 lg:px-20 my-20 bg-slate-100 py-10'>
      
      <div className='flex items-center  gap-5 mb-10'>
           <hr className='h-[0.5] w-10 text-brand-navy-deep'/>
           <p className='text-brand-navy text-lg uppercase'>The people behind it</p>  
      </div>

      <div className='space-y-10'>
                <p className='text-2xl md:text-3xl '>Meet Our <span className='text-brand-navy'>Leadership</span> </p>
        <p className='sm:text-justify text-base text-gray-700/90'>A team of aviation procurement specialists and supply chain experts <br /> united by one goal — delivering reliable, compliant, and efficient solutions for your operations.</p>
      </div>
      
    </div>
  )
}

export default LeaderShip

import { coreValues } from '@/assets/assets'
import Image from 'next/image'
import React from 'react'

const WhatWeStandFor = () => {
  return (
    <div className='px-5 md:px-16 lg:px-20 my-20 bg-slate-100 py-10'>
      
      <div className='flex items-center  gap-5 mb-10'>
           <hr className='h-[0.5] w-10 text-brand-navy-deep'/>
           <p className='text-brand-navy text-lg uppercase'>What we stand for</p>  
      </div>

      <div className='flex flex-col sm:flex-row  sm:items-center justify-between mb-10'>
        <p className='text-2xl md:text-3xl sm:mb-0 mb-3'>Our Core <span className='text-brand-navy'>Values</span> </p>
        <p className='sm:text-justify text-base text-gray-700/90'>The principles that guide every decision we make and every part we supply.</p>
      </div>


      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10'>
        {coreValues.map((value, index) => (

<div
  key={index}
  className='relative rounded-xl backdrop-blur-2xl p-6 transition-transform duration-300 hover:-translate-y-2'
  style={{
    background: 'rgba(255, 255, 255, 0.55)',
    border: '1px solid rgba(255, 255, 255, 0.75)',
    boxShadow: '0 4px 24px rgba(0, 0, 0, 0.06)',
    animation: 'glowBorder 3s ease-in-out infinite',
  }}
>

  {/* Top row — icon + number */}
  <div className='flex justify-between items-start mb-6'>
    <div className='bg-indigo-50 border border-indigo-200 p-3 rounded-lg text-indigo-600'>
      {value.icon}
    </div>
    <p className='font-ovo text-5xl text-slate-300 select-none'>{value.number}</p>
  </div>

  {/* Title */}
  <p className='font-ovo text-brand-navy-deep text-lg mb-3'>{value.title}</p>

  {/* Divider */}
  <div className='h-[1.5px] w-8 bg-brand-navy rounded-full mb-4 transition-all duration-300' />

  {/* Description */}
  <p className='font-outfit text-sm text-gray leading-relaxed'>{value.description}</p>

</div>

        ))}
      </div>
      
    </div>
  )
}

export default WhatWeStandFor

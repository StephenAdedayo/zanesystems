import Link from 'next/link'
import React from 'react'

const ServiceHero = () => {
  return (
    <div className='bg-[url("/service.jpg")]  md:h-[80vh] h-[70vh] w-full bg-cover bg-center relative px-16 '>
      

      <div className='bg-black/50 absolute top-0 right-0 left-0 flex flex-col items-center justify-center bottom-0 text pt-10'>



      <div className='flex gap-3 items-center bg-glass rounded-full mb-5 px-4 py-2'>
        <p className='size-3 bg-white rounded-full animate-ping'></p>
        <h1 className='text-sm text-white'>Zane Systems Limited Services
</h1>
      </div>
         
        <h1 className='text-white text-center text-2xl sm:text-3xl md:text-5xl mb-5'>Strategic Aviation Procurement Solutions
</h1>
        <p className='text-white/80 text-center text-sm mb-5 md:text-base sm:w-150 w-full'>Our services support aircraft acquisition, parts procurement, vendor management, and seamless logistics coordination worldwide.</p>

         <Link href={"/contact/#form"}>
         <button className='text-white hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer rounded-full bg-glass px-6 py-3'>Contact Us</button>
         </Link>
        

      </div>       

    </div>
  )
}

export default ServiceHero

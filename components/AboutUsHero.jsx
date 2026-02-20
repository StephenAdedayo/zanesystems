import Link from 'next/link'
import React from 'react'

const AboutUsHero = () => {
  return (
    <div className='bg-[url("/about_image.jpg")]  md:h-[80vh] h-[60vh] w-full bg-cover bg-center relative px-16 '>
      

      <div className='bg-black/80 absolute top-0 right-0 left-0 flex flex-col items-center justify-center bottom-0 text pt-10'>
        <h1 className='text-white text-center text-3xl md:text-5xl mb-5'>The Zane Systems Standard</h1>
        <p className='text-white/80 text-center text-sm mb-5 md:text-base sm:w-150 w-full'>A trusted aviation procurement and supply chain partner delivering certified aircraft sourcing solutions through strategic global partnerships.</p>

         <Link href={"/contact/#form"}>
         <button className='text-white hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer rounded-full bg-glass px-6 py-3'>Contact Us</button>
         </Link>
        

      </div>       

    </div>
  )
}

export default AboutUsHero

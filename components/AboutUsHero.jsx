import Link from 'next/link'
import React from 'react'

const AboutUsHero = () => {
  return (
    <div className='bg-[url("/about_image.jpg")]  md:h-[80vh] h-[70vh] w-full bg-cover bg-center relative px-16 '>
      

      <div className='bg-black/80 absolute top-0 right-0 left-0 flex flex-col items-center justify-center bottom-0 text pt-10'>

      <div className='flex gap-3 items-center bg-glass rounded-full mb-5 px-4 py-2'>
        <p className='size-3 bg-white rounded-full animate-ping'></p>
        <h1 className='text-sm text-white'>About Zane Systems Limited

</h1>
      </div>
         

        <h1 className='text-white text-center sm:text-3xl text-2xl  md:text-5xl mb-5'>Strengthening Aviation Through Strategic Procurement
</h1>
        <p className='text-white/80 text-center text-sm mb-5 md:text-base sm:w-150 w-full'>Zane Systems Limited is a strategic aviation procurement and supply chain partner committed to delivering reliable, compliant, and globally connected solutions.</p>

         <Link href={"/contact/#form"}>
         <button className='text-white hover:scale-105 transition-all duration-300 active:scale-95 cursor-pointer rounded-full bg-glass px-6 py-3'>Contact Us</button>
         </Link>
        

      </div>       

    </div>
  )
}

export default AboutUsHero

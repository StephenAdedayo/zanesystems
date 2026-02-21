import React from 'react'

const ContactHero = () => {
  return (
    <div className='bg-[url("/contact_image.jpg")]  md:h-[80vh] h-[70vh] w-full bg-cover bg-center relative  px-16 '>
      
       
         


      <div className='bg-black/50 absolute top-0 right-0 left-0 flex flex-col items-center justify-center bottom-0 text'>

      <div className='flex gap-3 items-center bg-glass rounded-full mb-5 px-4 py-2'>
        <p className='size-3 bg-white rounded-full animate-ping'></p>
        <h1 className='text-sm text-white'>Contact Zane Systems Limited</h1>

      </div>

        <h1 className='text-white text-center text-2xl sm:text-3xl md:text-4xl mb-5'>Let’s Strengthen Your Aviation Operations
</h1>
        <p className='text-white/80 text-center text-sm md:text-base sm:w-150 w-full'>Connect with our team to discuss aircraft procurement, parts sourcing, and supply chain solutions tailored to your operational needs.</p>
      </div>
    </div>
  )
}

export default ContactHero

import React from 'react'

const ContactHero = () => {
  return (
    <div className='bg-[url("/contact_image.jpg")]  md:h-[80vh] h-[60vh] w-full bg-cover bg-center relative  px-16 '>
      

      <div className='bg-black/50 absolute top-0 right-0 left-0 flex flex-col items-center justify-center bottom-0 text'>
        <h1 className='text-white text-center text-2xl md:text-4xl mb-5'>Get in Touch with Zane Systems Limited</h1>
        <p className='text-white/80 text-center text-sm md:text-base sm:w-150 w-full'>Connect with our team to discuss your aircraft procurement, parts sourcing, and aviation supply chain needs. We’re here to support your operations with reliable and strategic solutions.</p>
      </div>
    </div>
  )
}

export default ContactHero

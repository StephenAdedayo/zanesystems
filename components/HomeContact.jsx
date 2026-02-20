import React from 'react'
import { MdOutlineMarkEmailRead } from 'react-icons/md'

const HomeContact = () => {
  return (
    <div className='my-20  md:px-16 lg:px-20 w-full flex flex-col items-center justify-center'>
       
          <div className='flex items-center justify-between gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 text-center w-fit mb-20'>
         <MdOutlineMarkEmailRead className='text-indigo-600'/>
          <h1 className='text-2xl text-center font-medium'>Connect with Zane Systems</h1>
          </div>
           


         <form className='bg-nav md:py-10 py-8 md:px-14 px-5 md:w-200 w-full rounded-md'>
           
              <h1 className='uppercase font-medium text-xl sm:text-3xl mb-5 text-white text-center'>Contact us</h1>
              <p className='font-medium text-base mb-10 text-white/60 text-center'>Send Us a message</p>
               

               <div className=' md:px-5 md:py-5 px-3 py-3 space-y-3 rounded-md'>
                    
                    <input type="text" placeholder='Full Name'className='outline-none bg-white border border-gray-300 px-5 py-3 w-full rounded-lg transition-colors duration-300 focus:border-indigo-600 focus:border-3'/>
                    
                    <input type="email" placeholder='Email*' className='outline-none bg-white border border-gray-300 px-5 py-3 w-full rounded-lg transition-colors duration-300 focus:border-indigo-600 focus:border-3'/>

                <textarea name="" id=""  rows={8} className='outline-none bg-white border border-gray-300 px-5 py-3 w-full rounded-lg transition-colors duration-300 focus:border-indigo-600 focus:border-3' placeholder='How may we help you*'></textarea>

                 <div className='flex items-center justify-center'>
                    <button type='Submit' className='bg-brand-navy px-6 w-fit py-3 text-white rounded-full cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ease-in'>Send Message</button>
                 </div>
                
               </div>


               <div className='flex flex-col items-center justify-center'>
                <p className='mt-10 text-white'>Or</p>
                <hr className='text-white h-[0.5] w-10'/>
                <p className='mt-10 text-white text-center'>If you prefer, send us an email</p>

               <button className='mt-5 border border-white px-6 py-3 rounded-full text-white w-fit cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ease-in'>Send Us Email</button>


               </div>
         </form>




    </div>
  )
}

export default HomeContact

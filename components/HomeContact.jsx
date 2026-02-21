import React from 'react'
import { MdOutlineMarkEmailRead } from 'react-icons/md'

const HomeContact = () => {
  return (
    <div className='my-20 px-5 md:px-16 lg:px-20 w-full flex flex-col items-center justify-center'>
       
          <div className='flex items-center justify-between gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 text-center w-fit mb-20'>
         <MdOutlineMarkEmailRead className='text-indigo-600'/>
          <h1 className='text-2xl text-center font-medium'>Connect with Zane Systems</h1>
          </div>


          <div className='flex flex-col xl:gap-20 gap-10 tablet:flex-row'>
           
             <div className='flex flex-col tablet:flex-[40%] gap-5 text-center tablet:text-left'>
                <h2 className='bg-linear-to-r from-slate-800 to-slate-500 text-transparent bg-clip-text xl:text-4xl text-3xl'>Reliable Aviation Solutions Begin Here</h2>
                <p className='text-gray text-sm  xl:text-base'>
                    Partner with a team dedicated to strategic procurement, certified sourcing, and global supply coordination built around your operational goals.
                </p>
             </div>

         <form className='bg-nav tablet:flex-[60%] md:py-10 py-8 tablet:px-14 px-5 tablet:w-150 w-full rounded-md xl:w-200'>
           
              <h1 className='uppercase font-medium text-xl sm:text-3xl mb-5 text-white text-center'>Contact us</h1>
              <p className='font-medium text-base mb-10 text-white/60 text-center'>Send Us a message</p>
               

               <div className=' md:px-5 md:py-5 px-3 py-3 space-y-3 rounded-md'>
                    
                    <input type="text" placeholder='Full Name'className='outline-none bg-white border border-gray-300 px-5 py-3 w-full rounded-lg transition-colors duration-300 focus:border-indigo-600 focus:border-3'/>
                    
                    <input type="email" placeholder='Email*' className='outline-none bg-white border border-gray-300 px-5 py-3 w-full rounded-lg transition-colors duration-300 focus:border-indigo-600 focus:border-3'/>

                <textarea name="" id=""  rows={8} className='outline-none bg-white border border-gray-300 px-5 py-3 w-full rounded-lg transition-colors duration-300 focus:border-indigo-600 focus:border-3' placeholder='How may we help you*'></textarea>

                 <div className='flex items-center justify-center'>
                    <button type='Submit' className={`inline-flex items-center gap-3 font-outfit text-sm font-semibold tracking-wide text-white px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5`}
                    style={{ background: '#14516e' }}>
                 Send Message               
                <span className='text-base'>→</span></button>
                 </div>
                
               </div>


               <div className='flex flex-col items-center justify-center'>
                <p className='mt-5 text-white'>Or</p>
                <hr className='text-white h-[0.5] w-10'/>
                <p className='mt-5 text-white text-center'>If you prefer, send us an email</p>

               <button className={`inline-flex items-center gap-3 font-outfit text-sm font-semibold tracking-wide text-white px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 mt-5 border border-white/90`}
            >
                Send Mail          
                <span className='text-base'>→</span></button>


               </div>
         </form>

</div>


    </div>
  )
}

export default HomeContact

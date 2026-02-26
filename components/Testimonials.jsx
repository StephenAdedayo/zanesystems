"use client"

import { motion } from 'motion/react'
import React from 'react'


const Testimonials = () => {
  return (
    <div className='px-5 md:px-16 lg:px-20'>

<div className='flex flex-col justify-center items-center mb-10'>
     <motion.div 
        initial={{y: -20, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.3}}
     className="flex items-center  gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1">
                    <svg width="13" height="14" viewBox="0 0 13 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z" stroke="#1E4BAF" strokeMiterlimit="5.759"
                            strokeLinecap="round" />
                    </svg>
                    <span>Testimonials</span>
             </motion.div>

                <motion.h1
                        initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.8, delay : 0.4}}
                    className="text-2xl font-medium bg-linear-to-r from-slate-800 to-slate-500 text-transparent text-center bg-clip-text mt-4">
                    Don't just take our words
                </motion.h1>
                <motion.p 
                        initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.8, delay : 0.5}}
                className="text-slate-500 text-center mt-4 max-w-2xl">
                    Hear what our users say about us. We're always looking for ways to improve. If you have a positive
                    experience with us, leave a review.
                </motion.p>
                </div>
    <div className="flex flex-wrap items-center justify-center gap-6 my-20">



<motion.div 
        initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.8, delay : 0.8}}
className="max-w-80 bg-black text-white rounded-2xl">
    <div className="relative -mt-px overflow-hidden rounded-2xl">
        <img src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=600" alt="" className="h-67.5 w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
        <div className="absolute bottom-0 z-10 h-60 w-full bg-linear-to-t pointer-events-none from-black to-transparent"></div>
    </div>
    <div className="px-4 pb-4">
        <p className="font-medium border-b border-gray-600 pb-5">“Zane Systems streamlined our aircraft parts procurement with speed, precision, and full transparency.”</p>
        <p className="mt-4">— Operations Director</p>
        <p className="text-sm font-medium bg-linear-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">Aviation Maintenance</p>
    </div>
</motion.div>

<motion.div
        initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.8, delay : 0.8}}
 className="max-w-80 bg-black text-white rounded-2xl">
    <div className="relative -mt-px overflow-hidden rounded-2xl">
        <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=600" alt="" className="h-67.5 w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
        <div className="absolute bottom-0 z-10 h-60 w-full bg-linear-to-t pointer-events-none from-black to-transparent"></div>
    </div>
    <div className="px-4 pb-4">
        <p className="font-medium border-b border-gray-600 pb-5">“Their vendor management and logistics coordination improved our turnaround time significantly.”</p>
        <p className="mt-4">— Supply Chain Manager</p>
        <p className="text-sm font-medium bg-linear-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">Airline Operations</p>
    </div>
</motion.div>

<motion.div 
        initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.8, delay : 0.8}}
className="max-w-80 bg-black text-white rounded-2xl">
    <div className="relative -mt-px overflow-hidden rounded-2xl">
        <img src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&h=600&auto=format&fit=crop" alt="" className="h-67.5 w-full rounded-2xl hover:scale-105 transition-all duration-300 object-cover object-top" />
        <div className="absolute bottom-0 z-10 h-60 w-full bg-linear-to-t pointer-events-none from-black to-transparent"></div>
    </div>
    <div className="px-4 pb-4">
        <p className="font-medium border-b border-gray-600 pb-5">“Professional, reliable, and compliant — a procurement partner we confidently depend on.”</p>
        <p className="mt-4">— Fleet Support Lead</p>
        <p className="text-sm font-medium bg-linear-to-r from-[#8B5CF6] via-[#E0724A] to-[#9938CA] text-transparent bg-clip-text">MRO Services</p>
    </div>
</motion.div>
            </div>
                </div>

  )
}

export default Testimonials

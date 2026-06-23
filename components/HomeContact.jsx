"use client"

import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Form from "./Form";
import { motion } from "motion/react";


const HomeContact = () => {
  return (
    <div className="mb-20 mt-26 px-5 md:px-16 lg:px-20 w-full  flex flex-col md:items-center items-start justify-center">
      {/* <motion.div 
        initial={{y: -20, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.3}}>
      className="flex items-center justify-between gap-2 text-brand-navy/80 bg-brand-navy/5 rounded-full xl:px-6 xl:py-3 px-3 py-1 text-center w-fit mb-10"
        <MdOutlineMarkEmailRead className="text-brand-navy" />
        <h1 className="xl:text-4xl mb-12  text-brand-navy sm:text-[32px] text-2xl font-semibold">
          Connect with Zane Systems
        </h1>
      </motion.div> */}

      <div className="flex flex-col gap-10 w-full md:flex-row ">
         <motion.div 
         initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.4}}
         className="flex flex-col w-full flex-[60%] justify-start pt-1">
                        <div className="flex items-center gap-2.5 mb-6">
                            <div className="size-2 rounded-full bg-brand-navy"></div>
                            <span className="text-zinc-500 font-medium text-sm tracking-wide">CONTACT</span>
                        </div>
                        <h1 className="text-4xl font-medium text-brand-navy-deep mb-3 sm:mb-5">Let’s Start a Conversation</h1>
                        <p className="text-base text-balance text-zinc-400 leading-relaxed max-w-105">
                            Have a question or need help? Reach out and our team will get back to you as soon as possible.
                        </p>
                    </motion.div>



      <Form className={"flex-[40%] w-full rounded-2xl md:py-10 py-8 md:px-10 sm:px-8 px-5"}/> 
      </div>
    </div>
  );
};

export default HomeContact;

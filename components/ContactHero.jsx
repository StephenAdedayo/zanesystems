"use client"

import React from "react";
import HeroButton from "./HeroButton";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { motion } from "motion/react";


const ContactHero = () => {
  return (
    <div className='min-h-[90vh] w-full relative px-16 '>

     <div className="absolute inset-0">
        <Image src={assets.contact_image} fill priority alt="contact_image" className="object-center object-cover"/>
     </div>

      <div className="bg-black/80 absolute px-5 md:px-16 lg:px-20 inset-0 flex flex-col items-center justify-center ">
        <motion.div 
           initial={{y: -20, opacity : 0}}
        animate={{y : 0, opacity : 1}}
        transition={{type : "tween", duration: 0.2, delay : 0.1}}
        className="flex gap-3 items-center bg-glass rounded-full mb-5 px-4 py-2">
          <p className="size-3 bg-white rounded-full animate-ping"></p>
          <h1 className="text-sm text-white">Contact Zane Systems Limited</h1>
        </motion.div>

        <motion.h1 
        initial={{y: 30, opacity : 0}}
        animate={{y : 0, opacity : 1}}
        transition={{type : "tween", duration: 0.3, delay : 0.2}}
        className="text-white text-center text-2xl sm:text-3xl md:text-4xl mb-5">
          Let’s Strengthen Your Aviation Operations
        </motion.h1>
        <motion.p
        initial={{y: 30, opacity : 0}}
        animate={{y : 0, opacity : 1}}
        transition={{type : "tween", duration: 0.6, delay : 0.3}}
         className="text-white/80 text-center text-sm md:text-base mb-5 sm:w-150 w-full">
          Connect with our team to discuss aircraft procurement, parts sourcing,
          and supply chain solutions tailored to your operational needs.
        </motion.p>

             <motion.div 
        initial={{y: -20, opacity : 0}}
        animate={{y : 0, opacity : 1}}
        transition={{type : "tween", duration: 0.6, delay : 0.4}}
        >
        <HeroButton href={"/services"} text={"Our Services"}/>

        </motion.div>


      </div>
    </div>
  );
};

export default ContactHero;

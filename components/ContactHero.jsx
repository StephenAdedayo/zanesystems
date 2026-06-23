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

      <div className="bg-black/50 absolute px-5 md:px-16 lg:px-20 inset-0 flex flex-col items-cente justify-center ">
        <motion.div 
           initial={{y: -20, opacity : 0}}
        animate={{y : 0, opacity : 1}}
        transition={{type : "tween", duration: 0.2, delay : 0.1}}
        className="flex gap-3 items-center w-fit bg-glass rounded-full mt-20 mb-8 px-6 py-2">
          <p className="size-3 bg-white rounded-full animate-ping"></p>
          <h1 className="text-sm text-white">Contact Us</h1>
        </motion.div>

        <motion.h1 
        initial={{y: 30, opacity : 0}}
        animate={{y : 0, opacity : 1}}
        transition={{type : "tween", duration: 0.3, delay : 0.2}}
        className="text-white font-ovo text-balance leading-relaxed sm:text-3xl text-2xl max-xs:text-lg  lg:text-5xl md:text-4xl mb-8">
          Let’s Strengthen Your <br /> Aviation Operations
        </motion.h1>
        <motion.p
        initial={{y: 30, opacity : 0}}
        animate={{y : 0, opacity : 1}}
        transition={{type : "tween", duration: 0.6, delay : 0.3}}
         className="text-white/80 text-balance leading-relaxed text-sm md:text-base mb-8 sm:w-150 w-full">
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

"use client"

import Link from "next/link";
import React from "react";
import HeroButton from "./HeroButton";
import { assets } from "@/assets/assets";
import Image from "next/image";
import { motion } from "motion/react";


const ServiceHero = () => {
  return (
    <div className=' min-h-[90vh]  w-full relative px-16 '>

      <div className="absolute inset-0">
       <Image src={assets.service} fill priority alt="about_image" className="object-center object-cover"/>
      </div>

      <div className="bg-black/80 absolute inset-0 flex flex-col items-center justify-center px-5 md:px-16 lg:px-20 pt-10">
        <motion.div
        initial={{y: -20, opacity : 0}}
animate={{ y: 0, opacity: 1 }} 
        transition={{type : "tween", duration: 0.2, delay : 0.1}}
        className="flex gap-3 items-center bg-glass rounded-full mb-5 px-4 py-2">
          <p className="size-3 bg-white rounded-full animate-ping"></p>
          <h1 className="text-sm text-white">Zane Systems Limited Services</h1>
        </motion.div>

        <motion.h1 
          initial={{y: 30, opacity : 0}}
animate={{ y: 0, opacity: 1 }} 
        transition={{type : "tween", duration: 0.3, delay : 0.2}}
        className="text-white text-center text-2xl sm:text-3xl md:text-5xl mb-5">
          Strategic Aviation Procurement Solutions
        </motion.h1>

        <motion.p 
         initial={{y: 30, opacity : 0}}
animate={{ y: 0, opacity: 1 }} 
        transition={{type : "tween", duration: 0.6, delay : 0.3}}
        className="text-white/80 text-center text-sm mb-5 md:text-base sm:w-150 w-full">
          Our services support aircraft acquisition, parts procurement, vendor
          management, and seamless logistics coordination worldwide.
        </motion.p>

        <motion.div 
        initial={{y: -20, opacity : 0}}
animate={{ y: 0, opacity: 1 }} 
        transition={{type : "tween", duration: 0.6, delay : 0.4}}
        >
        <HeroButton href={"/contact/#form"} text={"Contact us"}/>

        </motion.div>

      </div>
    </div>
  );
};

export default ServiceHero;

"use client"

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import HeroButton from "./HeroButton";
import { motion } from "motion/react";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        src={"https://res.cloudinary.com/dfuse3jtq/video/upload/airplane_qmrrxh"}
        className="object-cover absolute inset-0 h-screen w-full"
      ></video>

      <div className="absolute inset-0 bg-black/80 " />


      <div className="absolute inset-0 space-y-8 px-5 md:px-16 lg:px-20 bottom-0 z-0 w-full flex flex-col justify-center items-center">
        <motion.div 
        initial={{y: -20, opacity : 0}}
animate={{ y: 0, opacity: 1 }} 
        transition={{type : "tween", duration: 0.2, delay : 0.1}}
        className="flex gap-3 items-center bg-glass rounded-full mb-5 px-4 py-2">
          <p className="size-3 bg-white rounded-full animate-ping"></p>
          <h1 className="text-sm text-white">Zane Systems Limited</h1>
        </motion.div>

        <motion.h1 
        initial={{y: 30, opacity : 0}}
        animate={{ y: 0, opacity: 1 }} 
        transition={{type : "tween", duration: 0.3, delay : 0.2}}
        className="text-white text-center sm:text-3xl text-2xl max-xs:text-lg  md:text-5xl mb-5">
          Your Global Partner in Aircraft Parts Supply
        </motion.h1>
        <motion.p 
        initial={{y: 30, opacity : 0}}
animate={{ y: 0, opacity: 1 }} 
        transition={{type : "tween", duration: 0.6, delay : 0.3}}
        className="text-white/80 text-center text-sm md:text-base sm:w-150 w-full">
          We deliver aircraft acquisition, certified parts sourcing, and
          seamless supply chain coordination for aviation stakeholders
          worldwide.
        </motion.p>

        <motion.div 
        initial={{y: -20, opacity : 0}}
animate={{ y: 0, opacity: 1 }} 
        transition={{type : "tween", duration: 0.6, delay : 0.4}}
        >
        <HeroButton href={"/services"} text={"Explore more"}/>

        </motion.div>
      </div>
      
    </div>
  );
};

export default Hero;

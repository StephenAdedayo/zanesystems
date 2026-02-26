"use client"

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Button from "./Button";
import { motion } from "motion/react";


const Whychoose = () => {
  return (
    <div className="my-20 flex flex-col w-full md:flex-row">
      <motion.div 
      initial={{ opacity : 0}}
        whileInView={{opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.2}}
      className="flex-[50%] ">
        <Image
          src={assets.choose}
          alt="Why_choose"
          className="h-full object-cover aspect-auto"
        />
      </motion.div>

      <motion.div 
      initial={{ opacity : 0}}
        whileInView={{ opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.2}}
      className="bg-nav flex-[50%] md:px-16 lg:px-20  px-5 py-10 space-y-8 flex flex-col justify-center">
        <motion.h1 
        initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.8, delay : 0.4}}
        className="text-white">WHY ZANE SYSTEMS LIMITED?</motion.h1>
        <motion.p 
        initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.8, delay : 0.6}}
        className="text-white/60 text-sm">
          Zane Systems Limited operates as an independent aviation procurement
          and supply chain partner, delivering certified aircraft sourcing
          solutions through a trusted global supplier network. Our goal is to
          provide strategic, compliant, and efficient procurement services
          tailored to the operational needs of aviation stakeholders worldwide.
        </motion.p>
        {/* <button className='border w-fit border-white text-white py-3 px-6 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 ease-in'>Discover More</button> */}
        <motion.div 
        initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.8, delay : 0.8}}
        >
        <Button href={"/about"} text={"Discover More"} className={"w-fit"} />

        </motion.div>
      </motion.div>
    </div>
  );
};

export default Whychoose;

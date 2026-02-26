"use client"

import React from "react";
import Button from "./Button";
import { motion } from "motion/react";


const Cta = () => {
  return (
    <div className="bg-[url(/cta.jpg)] h-[30vh] md:h-[50vh] relative flex flex-col justify-center items-center bg-no-repeat bg-center bg-cover px-5">
      <motion.h1
              initial={{y: -30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.3}}
       className="text-white/80 z-1 text-center sm:text-2xl text-xl md:text-3xl mb-10">
        Ready to Strengthen Your Aviation Supply Chain?
      </motion.h1>
      {/* <button className='bg-brand-navy z-1  hover:bg-brand-navy/90 duration-300 ease-in w-fit px-6 py-3 text-white rounded-full hover:scale-105 active:scale-95 transition-transform transform'>Get in Touch</button> */}
      <motion.div
      className="z-1"
         initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.5}}
      >
      <Button href={"/contact/#form"} text={"Get in Touch"} className={"z-1"}/>

      </motion.div>
      <div className="absolute top-0 right-0 bottom-0  left-0 bg-black/80" />
    </div>
  );
};
export default Cta;

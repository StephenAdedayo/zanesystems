"use client"

import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";
import Form from "./Form";
import { motion } from "motion/react";


const HomeContact = () => {
  return (
    <div className="my-20 px-5 md:px-16 lg:px-20 w-full flex flex-col items-center justify-center">
      <motion.div 
        initial={{y: -20, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.3}}
      className="flex items-center justify-between gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 text-center w-fit mb-10">
        <MdOutlineMarkEmailRead className="text-indigo-600" />
        <h1 className="text-[15px] text-center font-medium">
          Connect with Zane Systems
        </h1>
      </motion.div>

      <div className="flex flex-col xl:gap-20 gap-10 tablet:flex-row">
        <motion.div 
        initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.4}}
        className="flex flex-col tablet:flex-[40%] gap-5 text-center tablet:text-left">
          <h2 className="bg-linear-to-r from-slate-800 to-slate-500 text-transparent bg-clip-text text-lg">
            Reliable Aviation Solutions Begin Here
          </h2>
          <p className="text-gray text-sm md:text-[15px]">
            Partner with a team dedicated to strategic procurement, certified
            sourcing, and global supply coordination built around your
            operational goals.
          </p>
        </motion.div>



      <Form className={"tablet:flex-[60%] w-full tablet:w-150 xl:w-200 rounded-2xl md:py-10 py-8 tablet:px-14 px-5"}/> 

      </div>
    </div>
  );
};

export default HomeContact;

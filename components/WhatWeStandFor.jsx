"use client"

import { coreValues } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";


const WhatWeStandFor = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 my-20 bg-slate-100 py-10">
      <motion.div 
                      initial={{y:30, opacity : 0}}
        whileInView={{y:0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.2, delay : 0.1}}
      className="flex items-center  gap-5 mb-10">
        <hr className="h-[0.5] w-10 text-brand-navy-deep" />
        <p className="text-brand-navy text-[0.65rem] font-semibold tracking-[0.2em] uppercase">What we stand for</p>
      </motion.div>

      <div className="flex flex-col sm:flex-row  sm:items-center justify-between mb-10">
        <motion.h2
                        initial={{y:-20, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.4, delay : 0.2}} 
        className="font-ovo text-4xl text-brand-navy-deep sm:mb-0 mb-3 leading-tight">
            Our Core <span className="text-brand-navy italic">Values</span>
          </motion.h2>
        <motion.p 
                        initial={{y:-20, opacity : 0}}
        whileInView={{y: 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.4, delay : 0.2}}
        className="sm:text-justify text-base text-gray-700/90">
          The principles that guide every decision we make and every part we
          supply.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10">
        {coreValues.map((value, index) => (
          <motion.div
        initial={{y:30, opacity : 0}}
        whileInView={{y:0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.3}}
            key={index}
            className="relative rounded-xl backdrop-blur-2xl p-6 transition-transform duration-300 hover:-translate-y-2"
            style={{
              background: "rgba(255, 255, 255, 0.55)",
              border: "1px solid rgba(255, 255, 255, 0.75)",
              boxShadow: "0 4px 24px rgba(0, 0, 0, 0.06)",
              animation: "glowBorder 3s ease-in-out infinite",
            }}
          >
            {/* Top row — icon + number */}
            <div className="flex justify-between items-start mb-6">
              <div className="bg-indigo-50 border border-indigo-200 p-3 rounded-lg text-indigo-600">
                {value.icon}
              </div>
              <p className="font-ovo text-5xl text-slate-300 select-none">
                {value.number}
              </p>
            </div>

            {/* Title */}
            <p className="font-ovo text-brand-navy-deep text-lg mb-3">
              {value.title}
            </p>

            {/* Divider */}
            <div className="h-[1.5px] w-8 bg-brand-navy rounded-full mb-4 transition-all duration-300" />

            {/* Description */}
            <p className="font-outfit text-sm text-gray leading-relaxed">
              {value.description}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default WhatWeStandFor;

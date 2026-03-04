"use client"

import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";


const OurMission = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 my-20">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1 mb-16 text-sm text-gray">
        <Link href="/" className="hover:text-[#14516e] transition-colors">Home</Link>
        <MdKeyboardArrowRight />
        <Link href="/about" className="text-brand-navy font-semibold">About Us</Link>
      </div>
      <motion.div 
            initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.2, delay : 0.1}}
            className="flex items-center gap-3 mb-4">
              <div className="h-[1.5px] w-7 bg-brand-navy" />
              <p className="font-outfit text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-brand-navy">
                our mission
              </p>
            </motion.div>

      <div className="flex flex-col-reverse tablet:flex-row gap-20">
        <div className="mb-8 flex-[50%]">
          <motion.h2 
           initial={{ opacity : 0}}
        whileInView={{opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.4, delay : 0.2}}
          className="font-ovo text-4xl text-brand-navy-deep mb-5 leading-tight">
            Built on Trust. <span className="text-brand-navy italic">Driven by Precision</span>
          </motion.h2>
          

          <motion.p 
        initial={{ y:30 , opacity : 0}}
        whileInView={{y:0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.3}}
          className="mb-5 text-gray-700/90">
            Zane Systems was founded on a single conviction: the
            aviation industry deserves a procurement partner that prioritizes
            precision, transparency, and operational excellence.
          </motion.p>
          <motion.p
          initial={{y:30, opacity : 0}}
        whileInView={{y:0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.4}}
           className="text-gray-700/90">
            We deliver comprehensive aircraft procurement, certified parts
            sourcing, vendor management, and supply chain coordination tailored
            to the evolving needs of aviation stakeholders worldwide. From
            strategic sourcing to logistics oversight and procurement
            consulting, we provide not just components and services — but
            confidence, continuity, and control.
          </motion.p>

          <motion.div 
          initial={{y:-30, opacity : 0}}
        whileInView={{y:0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.4, delay : 0.2}}
          className="border-l-2  border-indigo-600 bg-indigo-50 px-4 py-4 mt-5">
            <p className="italic font-ovo">
              "We don't just supply parts. We supply the assurance that every
              aircraft we touch will fly safely."
            </p>
          </motion.div>
        </div>

        <motion.div 
         initial={{ opacity : 0}}
        whileInView={{opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.4, delay : 0.2}}
        className="flex-[50%]">
          <Image
            src={assets.mission}
            alt="mission"
            className="rounded-2xl h-full object-cover"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default OurMission;

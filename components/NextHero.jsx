"use client"

import { assets } from "@/assets/assets";
import { motion } from "motion/react";
import Image from "next/image";
import React from "react";


const NextHero = () => {
  return (
    <div className="my-20 px-5 md:px-16 lg:px-20">
      <div className="flex md:items-center flex-col justify-center gap-3 mb-10">
        <motion.div 
        initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.2, delay : 0.1}}
        className="flex items-center  gap-5 mb-5">
        <hr className="h-[0.5] w-10 text-brand-navy-deep" />
      <p 
        
        className="text-brand-navy text-[0.65rem] font-semibold md:tracking-[0.2em] uppercase tracking-widest">
          Global Aviation Procurement Experts
        </p>
      </motion.div>
                <motion.h2 
                initial={{ opacity : 0}}
        whileInView={{opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.4, delay : 0.2}}
                className="font-ovo text-4xl text-brand-navy-deep leading-tight">
            Strategic. Certified. <span className="text-brand-navy italic">Reliable.</span>
          </motion.h2>
      {/* <p className="text-lg md:text-center text-justify">
          <span className="text-brand-navy"></span>{" "}
        </p> */}

                <motion.p 
                initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.5, delay : 0.3}}
                className="md:text-center text-justify  text-sm text-gray-700/90">
          Zane Systems Limited provides expert aircraft procurement and  {" "}
          certified <br /> parts sourcing, ensuring efficient and reliable supply chain
          solutions worldwide.
        </motion.p>
        
        {/* <p className="text-sm sm:text-base text-center lg:w-3/5 w-full text-gray-600/90">
          
        </p> */}
      </div>

      <div className="flex flex-col md:flex-row justify-between gap-10 items-center">
        <motion.div 
        initial={{ y:-20, opacity : 0}}
        whileInView={{y:0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type :"tween", duration: 0.6, delay:0.3}}
        className="flex-[50%] overflow-hidden">
          <Image
            src={assets.nexthero_image}
            alt="next_hero"
            className="rounded-2xl hover:scale-105 transition-all ease-in duration-300"
          />
        </motion.div>

        <motion.div 
        initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.3}}
        className="flex flex-col md:gap-8 gap-6 flex-[50%]">
          <div className="flex items-center justify-between gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 text-center w-fit">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
                stroke="#1E4BAF"
                strokeMiterlimit="5.759"
                strokeLinecap="round"
              />
            </svg>
            <p className=" text-[15px] font-semibold">
              Leaders in Aviation Procurement
            </p>
          </div>
          <hr className="text-brand-navy-deep h-0.5 w-10" />
          <p className="text-sm text-gray-700/90">
            Partner with Zane Systems Limited for aircraft acquisition,
            certified parts sourcing, and seamless supply chain coordination. We
            deliver trusted aviation solutions backed by a global supplier
            network.
          </p>
        </motion.div>
      </div>

      {/* next image */}
      <div className="flex flex-col-reverse md:flex-row justify-between gap-10 mt-10 items-center">
        <motion.div 
        initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.8, delay : 0.3}}
        className="flex flex-col md:gap-8 gap-6 flex-[50%]">
          <div className="flex items-center justify-between gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 text-center w-fit">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
                stroke="#1E4BAF"
                strokeMiterlimit="5.759"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-[15px] font-semibold">
              Certified Aircraft Parts at Competitive Value
            </p>
          </div>

          <hr className="text-brand-navy-deep h-0.5 w-10" />

          <p className="text-sm text-gray-700/90">
            Best value achieved through strategic sourcing, trusted global
            supplier networks, and independent procurement expertise.
          </p>
        </motion.div>

        <motion.div
        initial={{ y:-20, opacity : 0}}
        whileInView={{y:0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type :"tween", duration: 0.6, delay:0.3}} 
        className="flex-[50%]  overflow-hidden">
          <Image
            src={assets.pricing}
            alt="next_hero"
            className="rounded-2xl hover:scale-105 transition-all ease-in duration-300 h-[70%]"
          />
          
        </motion.div>
      </div>

      {/* next image */}
      <div className="flex flex-col mt-10 md:flex-row justify-between gap-10 items-center">
        <motion.div 
        initial={{ y:-20, opacity : 0}}
        whileInView={{y:0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type :"tween", duration: 0.6, delay:0.3}}
        className="flex-[50%] overflow-hidden">
          <Image
            src={assets.trust}
            alt="next_hero"
            className="rounded-2xl hover:scale-105 transition-all ease-in duration-300"
          />
        </motion.div>

        <motion.div className="flex flex-col md:gap-8 gap-6 flex-[50%]">
          <div className="flex items-center justify-between gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 text-center w-fit">
            <svg
              width="13"
              height="14"
              viewBox="0 0 13 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.613 8.2a.62.62 0 0 1-.553-.341.59.59 0 0 1 .076-.637l6.048-6.118a.31.31 0 0 1 .375-.069c.061.033.11.084.137.147a.3.3 0 0 1 .014.197L6.537 4.991a.59.59 0 0 0 .07.552.61.61 0 0 0 .504.257h4.276a.62.62 0 0 1 .553.341.59.59 0 0 1-.076.637l-6.048 6.119a.31.31 0 0 1-.375.067.295.295 0 0 1-.15-.344l1.172-3.61a.59.59 0 0 0-.07-.553.61.61 0 0 0-.504-.257z"
                stroke="#1E4BAF"
                strokeMiterlimit="5.759"
                strokeLinecap="round"
              />
            </svg>
            <p className="text-[15px] font-semibold">
              Your Trust Powers Our Reputation
            </p>
          </div>

          <hr className="text-brand-navy-deep h-0.5 w-10" />

          <p className="text-sm text-gray-700/90">
            Serving aviation operators, MRO providers, private owners, and
            industry partners worldwide. Reliability, compliance, and integrity
            define every transaction.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default NextHero;

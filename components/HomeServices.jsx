"use client"


import { services } from "@/assets/assets";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { motion } from "motion/react";


const HomeServices = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 my-20 flex items-start flex-col justify-center">
      <motion.div 
     initial={{y: -30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.5, delay : 0.2}} 
      className="flex items-center justify-between gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 text-center  w-fit">
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
        <h1 className="text-[15px] font-semibold">Our Aviation Services</h1>
      </motion.div>
      <motion.p 
      initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.3}}
      className="text-sm text-gray-700/90 mt-5 ">
        Comprehensive procurement and supply chain solutions designed to support
        safe, efficient, and compliant aviation operations worldwide.
      </motion.p>

     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center w-full gap-10 my-10 ">
              {services.slice(0,3).map((service, index) => (
                <Link
                  key={index}
                  href={`/services/${service.slug}`}
                  className="group relative block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "rgba(255, 255, 255, 0.55)",
                    border: "1px solid rgba(255, 255, 255, 0.75)",
                    boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.borderColor = "rgba(20,81,110,0.45)";
                    e.currentTarget.style.boxShadow =
                      "0 16px 48px rgba(0,0,0,0.10), 0 0 0 1px rgba(20,81,110,0.15)";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.75)";
                    e.currentTarget.style.boxShadow = "0 4px 24px rgba(0,0,0,0.06)";
                  }}
                >
                  {/* Top shine */}
                  <div className="absolute top-0 left-[12%] right-[12%] h-px bg-linear-to-r from-transparent via-white/50 to-transparent" />
    
                  {/* Left accent bar */}
                  <div className="absolute left-0 top-3 bottom-3 w-0.75 rounded-r-full bg-brand-navy scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />
    
                  <motion.div 
                  initial={{y: 30, opacity : 0}}
        whileInView={{y : 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.3}}
                  className="items-center gap-6 p-7">
    
                    {/* Index */}
                    <div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 border transition-all duration-300 group-hover:bg-[rgba(20,81,110,0.15)] group-hover:border-[rgba(20,81,110,0.35)]"
                      style={{
                        background: "rgba(20,81,110,0.07)",
                        borderColor: "rgba(20,81,110,0.14)",
                      }}
                    >
                      <span className="font-ovo text-xl text-brand-navy opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                        {service.number}
                      </span>
                    </div>
    
                    {/* Body */}
                    <div>
                      <h3 className="font-ovo text-lg text-brand-navy-deep mb-2 group-hover:text-brand-navy transition-colors duration-300">
                        {service.name}
                      </h3>
    
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-3">
                        {service.tags.map((tag, i) => (
                          <span
                            key={i}
                            className="font-outfit text-[0.6rem] font-semibold tracking-widest uppercase text-indigo-600 bg-indigo-50 border border-indigo-200 px-2.5 py-0.5 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
    
                      <p className="font-outfit text-sm text-gray leading-relaxed opacity-75 max-w-xl">
                        {service.shortDescription}
                      </p>
                    </div>
    
                    {/* Arrow */}
                    <div className="flex flex-col gap-2 shrink-0">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:bg-brand-navy group-hover:border-brand-navy group-hover:-rotate-45"
                        style={{
                          background: "rgba(20,81,110,0.07)",
                          borderColor: "rgba(20,81,110,0.18)",
                          color: "#14516e",
                        }}
                      >
                        <span className="text-sm  transition-colors duration-300">
                          →
                        </span>
                      </div>
                      <span className="font-outfit text-[0.58rem] font-semibold tracking-widest uppercase text-gray opacity-40 group-hover:opacity-100 group-hover:text-brand-navy transition-all duration-300">
                        Read More
                      </span>
                    </div>
    
                  </motion.div>
                </Link>
              ))}
            </div>
        
        <Button href={"/services"} text={"View all"}/>
    </div>
  );
};

export default HomeServices;

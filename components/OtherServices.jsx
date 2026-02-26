"use client"

import { services } from '@/assets/assets'
import { motion } from 'motion/react'
import Link from 'next/link'
import React from 'react'


const OtherServices = ({service}) => {
  return  (
<div className="pt-14 border-t border-slate-200 px-5 md:px-16 lg:px-20 pb-20">

  {/* Header */}
  <motion.div 
                   initial={{y:-20, opacity : 0}}
        whileInView={{y: 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.2, delay : 0.1}}
  className="flex items-center gap-3 mb-3">
    <div className="h-[1.5px] w-6 bg-brand-navy rounded-full" />
    <p className="font-outfit text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-brand-navy">
      Explore More
    </p>
  </motion.div>

  <motion.h2 
                  initial={{y:30, opacity : 0}}
        whileInView={{y: 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.4, delay : 0.2}}
  className="font-ovo text-2xl text-brand-navy-deep mb-8">
    Other <span className="text-brand-navy italic">Services</span>
  </motion.h2>

  {/* Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
    {services.filter((si) => si.slug !== service.slug).map((s, i) => (
      <motion.div
        key={i}
         initial={{y:30, opacity : 0}}
        whileInView={{y: 0, opacity : 1}}
        viewport={{ once: true, amount: 0.2 }}
        transition={{type : "tween", duration: 0.6, delay : 0.3}}
      >
      <Link
        href={`/services/${s.slug}`}
        className="group relative block p-6 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
        style={{
          background: "rgba(255,255,255,0.55)",
          border: "1px solid rgba(255,255,255,0.75)",
          boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.borderColor = "rgba(20,81,110,0.35)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.borderColor = "rgba(255,255,255,0.75)")
        }
      >
        {/* Top shine */}
        <div className="absolute top-0 left-[10%] right-[10%] h-px bg-linear-to-r from-transparent via-white/50 to-transparent" />

        {/* Left accent bar */}
        <div className="absolute left-0 top-4 bottom-4 w-0.75 rounded-r-full bg-brand-navy scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-center" />

        {/* Number */}
        <p className="font-ovo text-[0.7rem] text-brand-navy opacity-45 mb-2 tracking-widest">
          {s.number}
        </p>

        {/* Name */}
        <p className="font-ovo text-sm text-brand-navy-deep leading-snug mb-5 group-hover:text-brand-navy transition-colors duration-300">
          {s.name}
        </p>

        {/* Arrow */}
        <div className="flex items-center gap-2">
          <div
            className="w-7 h-7 rounded-full flex items-center justify-center text-xs transition-all duration-300 group-hover:bg-brand-navy group-hover:text-white group-hover:-rotate-45"
            style={{
              background: "rgba(20,81,110,0.08)",
              border: "1px solid rgba(20,81,110,0.18)",
              color: "#14516e",
            }}
          >
            →
          </div>
          <span className="font-outfit text-[0.6rem] font-semibold tracking-widest uppercase text-brand-navy opacity-50 group-hover:opacity-100 transition-opacity duration-300">
            View
          </span>
        </div>

      </Link>
      </motion.div>
    ))}
  </div>

</div>
  ) 
}

export default OtherServices

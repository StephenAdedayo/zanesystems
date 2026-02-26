// "use client"

import { motion } from 'motion/react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const SingleServiceHero = ({service}) => {
  return   (
<section className="relative min-h-[90vh] flex items-end overflow-hidden">

  {/* Background image */}
  <div className="absolute inset-0">
    <Image
      src={service.images[0]}
      alt={service.name}
      fill
      className="object-cover object-center"
      priority
    />
  </div>

  {/* Dark gradient overlay */}
  <div
    className="absolute inset-0"
    style={{background: "linear-gradient(to top, rgba(13,21,28,0.97) 0%, rgba(13,21,28,0.65) 40%, rgba(13,21,28,0.35) 100%)"}} />

  {/* Dot grid texture */}
  <div
    className="absolute inset-0 pointer-events-none"
    style={{
      backgroundImage: "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1px)",
      backgroundSize: "32px 32px",
      maskImage: "radial-gradient(ellipse 80% 80% at 50% 80%, black 20%, transparent 80%)",
    }}
  />

  {/* Content */}
  <div className="relative w-full px-5 lg:px-20 md:px-16 pb-20 pt-36">

    {/* Breadcrumb */}
    <motion.div 
            initial={{y: -30, opacity : 0}}
         animate={{ y: 0, opacity: 1 }} 
            transition={{type : "tween", duration: 0.2, delay : 0.1}}
    className="flex items-center gap-2 mb-8 text-xs font-outfit"
      style={{ color: "rgba(255,255,255,0.35)" }}>
      <Link href="/" className="hover:text-white/65 transition-colors">Home</Link>
      <span>/</span>
      <Link href="/services" className="hover:text-white/65 transition-colors">Services</Link>
      <span>/</span>
      <span style={{ color: "rgba(255,255,255,0.6)" }}>{service.name}</span>
    </motion.div>

    {/* Tag pill */}
    <motion.div
                initial={{y: -20, opacity : 0}}
animate={{ y: 0, opacity: 1 }} 
            transition={{type : "tween", duration: 0.3, delay : 0.2}}
      className="inline-flex items-center gap-2 mb-5 px-4 py-1.5 rounded-full border font-outfit text-[0.65rem] font-semibold tracking-[0.15em] uppercase text-indigo-400"
      style={{
        background: "rgba(20,81,110,0.25)",
        borderColor: "rgba(20,81,110,0.45)",
      }}
    >
      <span className="w-1.5 h-1.5 animate-ping rounded-full bg-indigo-400" />
      Aviation Service
    </motion.div>

    {/* Title */}
    <motion.h1 
                initial={{y: 30, opacity : 0}}
animate={{ y: 0, opacity: 1 }} 
            transition={{type : "tween", duration: 0.4, delay : 0.2}}
    className="font-ovo text-4xl md:text-5xl lg:text-6xl text-white leading-tight tracking-tight mb-5 max-w-2xl">
      {service.name}
    </motion.h1>

    {/* Short description */}
    <motion.p
                initial={{y: 30, opacity : 0}}
animate={{ y: 0, opacity: 1 }} 
            transition={{type : "tween", duration: 0.5, delay : 0.5}}
      className="font-outfit text-base leading-relaxed max-w-xl mb-10"
      style={{ color: "rgba(255,255,255,0.5)" }}
    >
      {service.shortDescription}
    </motion.p>

    {/* Tags + scroll hint */}
    <div className="flex items-center justify-between flex-wrap gap-4">

      <div className="flex flex-wrap gap-2">
        {service.tags.map((tag, i) => (
          <motion.span
            initial={{y: 30, opacity : 0}}
animate={{ y: 0, opacity: 1 }} 
            transition={{type : "tween", duration: 0.6, delay : 0.6}}
            key={i}
            className="font-outfit text-[0.65rem] font-semibold tracking-widest uppercase px-3 py-1 rounded-full"
            style={{
              color: "rgba(255,255,255,0.55)",
              border: "1px solid rgba(255,255,255,0.12)",
            }}
          >
            {tag}
          </motion.span>
        ))}
      </div>

      <motion.a
                  initial={{y: -30, opacity : 0}}
animate={{ y: 0, opacity: 1 }} 
            transition={{type : "tween", duration: 0.5, delay : 0.5}}
        href="#details"
        className="hidden md:flex items-center gap-3 font-outfit text-[0.68rem] font-semibold tracking-[0.12em] uppercase transition-colors hover:text-white/50"
        style={{ color: "rgba(255,255,255,0.3)" }}>
        <div className="w-8 h-px" style={{ background: "rgba(255,255,255,0.2)" }} />
        Scroll to learn more
      </motion.a>

    </div>
  </div>
</section>


  ) 
}

export default SingleServiceHero

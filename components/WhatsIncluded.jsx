"use client"

import React from 'react'

const WhatsIncluded = ({service}) => {
  return (
<div className="mb-20 px-5 md:px-16 lg:px-20">

  {/* Header */}
  <div className="flex items-center gap-3 mb-4">
    <div className="h-[1.5px] w-6 bg-brand-navy rounded-full" />
    <p className="font-outfit text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-brand-navy">
      What's Included
    </p>
  </div>

  <h2 className="font-ovo text-3xl text-brand-navy-deep mb-10">
    Service <span className="text-brand-navy italic">Features</span>
  </h2>

  {/* Features grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
    {service.features.map((feature, i) => (
      <div
        key={i}
        className="group relative p-7 rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
        style={{
          background: "rgba(255,255,255,0.55)",
          border: "1px solid rgba(255,255,255,0.75)",
          boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = "rgba(20,81,110,0.35)";
          e.currentTarget.style.boxShadow =
            "0 12px 36px rgba(0,0,0,0.08), 0 0 0 1px rgba(20,81,110,0.12)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = "rgba(255,255,255,0.75)";
          e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.05)";
        }}
      >
        {/* Top shine */}
        <div className="absolute top-0 left-[15%] right-[15%] h-px bg-linear-to-r from-transparent via-white/60 to-transparent" />

        {/* Number */}
        <p className="font-ovo text-[0.7rem] text-brand-navy opacity-50 mb-3 tracking-widest">
          0{i + 1}
        </p>

        {/* Check circle */}
        <div
          className="w-7 h-7 rounded-full flex items-center justify-center text-[0.65rem] text-brand-navy mb-4"
          style={{
            background: "rgba(20,81,110,0.08)",
            border: "1px solid rgba(20,81,110,0.2)",
          }}
        >
          ✓
        </div>

        {/* Feature text */}
        <p className="font-outfit text-sm text-gray leading-relaxed font-medium">
          {feature}
        </p>

      </div>
    ))}
  </div>

</div>
  )
}

export default WhatsIncluded

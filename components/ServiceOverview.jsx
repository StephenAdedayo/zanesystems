import Image from 'next/image'
import React from 'react'

const ServiceOverview = ({service}) => {
  return  (
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20 px-5 md:px-16 lg:px-20 py-20"  id="details">

  {/* Left — details text */}
  <div>
    <div className="flex items-center gap-3 mb-5">
      <div className="h-[1.5px] w-6 bg-brand-navy rounded-full" />
      <p className="font-outfit text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-brand-navy">
        Service Overview
      </p>
    </div>

    <h2 className="font-ovo text-3xl text-brand-navy-deep leading-tight mb-6">
      Built for Precision.{" "}
      <span className="text-brand-navy italic">Delivered with Expertise.</span>
    </h2>

    <p className="font-outfit text-sm text-gray leading-[1.95] opacity-85">
      {service.details}
    </p>
  </div>

  {/* Right — image[1] */}
  <div className="relative">

    {/* Image frame */}
    <div
      className="w-full aspect-4/3 rounded-2xl overflow-hidden relative"
      style={{ background: "#0d151c" }}
    >
      <Image
        src={service.images[0]}
        alt={service.name}
        fill
        className="object-cover"
      />
      {/* Bottom accent bar */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(90deg, #14516e, #818cf8)",
        }}
      />
    </div>

    {/* Floating stat card */}
    <div
      className="absolute -bottom-5 -right-5 rounded-2xl px-6 py-5"
      style={{
        background: "#0d151c",
        border: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 8px 32px rgba(0,0,0,0.2)",
      }}
    >
      <p className="font-ovo text-2xl text-white leading-none mb-1">
        15<span className="text-brand-navy">+</span>
      </p>
      <p
        className="font-outfit text-[0.6rem] font-semibold tracking-widest uppercase"
        style={{ color: "rgba(255,255,255,0.35)" }}
      >
        Years Experience
      </p>
    </div>

  </div>
</div>
  )
}

export default ServiceOverview

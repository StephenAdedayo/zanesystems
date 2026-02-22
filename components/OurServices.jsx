"use client"

import { services } from "@/assets/assets";
import Link from "next/link";

export default function OurServices() {
  return (
    <section className="py-20 md:px-16 px-5  bg-slate-100">
      <div className="w-full">

        {/* Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-[1.5px] w-7 bg-brand-navy" />
              <p className="font-outfit text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-brand-navy">
                What We Offer
              </p>
            </div>
            <h2 className="font-ovo text-4xl text-brand-navy-deep leading-tight">
              Everything Your{" "}
              <span className="text-brand-navy italic">Fleet Needs</span>
            </h2>
          </div>
          <p className="font-outfit text-sm text-gray leading-relaxed max-w-xs opacity-70 lg:text-right">
            Click any service to explore the full scope — from sourcing to final delivery.
          </p>
        </div>

        {/* Service Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center w-full gap-10 ">
          {services.map((service, index) => (
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

              <div className="items-center gap-6 p-7">

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

              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
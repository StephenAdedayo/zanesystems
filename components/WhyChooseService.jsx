"use client";

import { checklist, reasons } from "@/assets/assets";



export default function WhyChooseService() {
  return  (
    <section className="py-20 items-center justify-center px-5 md:px-16 lg:px-20 bg-slate-100">
      <div className="w-full">

        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-[1.5px] w-7 bg-brand-navy" />
            <p className="font-outfit text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-brand-navy">
              Why Choose Us
            </p>
          </div>
          <h2 className="font-ovo text-4xl text-brand-navy-deep leading-tight">
            The <span className="text-brand-navy italic">Zane Advantage</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">

          {/* Featured dark panel */}
          <div
            className="rounded-2xl p-12 relative overflow-hidden row-span-2"
            style={{ background: "#0d151c" }}
          >
            {/* Atmosphere */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 60% at 10% 90%, rgba(20,81,110,0.35) 0%, transparent 60%), radial-gradient(ellipse 50% 40% at 90% 10%, rgba(79,70,229,0.10) 0%, transparent 55%)",
              }}
            />

            <div className="relative">
              {/* Label */}
              <div className="flex items-center gap-2 mb-5">
                <div className="h-px w-6 bg-brand-navy" />
                <p className="font-outfit text-[0.65rem] font-semibold tracking-[0.18em] uppercase text-brand-navy">
                  Our Difference
                </p>
              </div>

              {/* Title */}
              <h3 className="font-ovo text-2xl text-white leading-snug mb-5">
                We don't just source parts.{" "}
                <br />
                We source{" "}
                <em className="text-indigo-400 font-ovo">confidence.</em>
              </h3>

              {/* Body */}
              <p className="font-outfit text-sm leading-relaxed mb-8"
                style={{ color: "rgba(255,255,255,0.45)" }}>
                Every order placed with Zane Systems is backed by our full
                quality management system — traceable, certified, and delivered
                with complete documentation. When safety is on the line, you
                need a partner you can trust completely.
              </p>

              {/* Checklist */}
              <ul className="flex flex-col gap-4">
                {checklist.map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <div
                      className="w-5 h-5 rounded-full flex items-center justify-center shrink-0 mt-0.5 text-[0.55rem] text-white border"
                      style={{
                        background: "rgba(20,81,110,0.3)",
                        borderColor: "rgba(20,81,110,0.5)",
                      }}
                    >
                      ✓
                    </div>
                    <span
                      className="font-outfit text-sm leading-relaxed"
                      style={{ color: "rgba(255,255,255,0.65)" }}
                    >
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Right cards */}
          {reasons.map((reason, i) => (
            <div
              key={i}
              className="rounded-2xl p-8 border transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.75)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
            >
              {/* Top shine */}
              <div className="absolute top-0 left-[12%] right-[12%] h-px bg-linear-to-r from-transparent via-white/50 to-transparent" />

              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center text-xl mb-5 border"
                style={{
                  background: "rgba(20,81,110,0.08)",
                  borderColor: "rgba(20,81,110,0.15)",
                }}
              >
                {reason.icon}
              </div>

              <h4 className="font-ovo text-lg text-brand-navy-deep mb-3">
                {reason.title}
              </h4>

              <div className="h-[1.5px] w-8 bg-brand-navy rounded-full mb-4" />

              <p className="font-outfit text-sm text-gray leading-relaxed opacity-75">
                {reason.description}
              </p>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
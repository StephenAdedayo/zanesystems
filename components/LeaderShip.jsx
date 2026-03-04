"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { assets, teamMembers } from "@/assets/assets";



const fade = (delay = 0, y = 20) => ({
  initial: { opacity: 0, y },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.2 },
  transition: { type: "tween", duration: 0.6, delay },
});

export default function Leadership() {
  return (
    <section className="px-5 md:px-16 lg:px-20 my-20 bg-slate-100">
      <div className="w-full mx-auto">

        {/* ── HEADER ── */}
        <motion.div {...fade(0.1)} className="flex items-center gap-3 mb-4">
          <div className="h-[1.5px] w-7 bg-brand-navy rounded-full" />
          <p className="font-outfit text-[0.68rem] font-semibold tracking-[0.2em] uppercase text-brand-navy">
            The People Behind It
          </p>
        </motion.div>

        <motion.h2
          {...fade(0.2)}
          className="font-ovo text-4xl text-brand-navy-deep leading-tight mb-3"
        >
          Meet Our{" "}
          <span className="text-brand-navy italic">Leadership</span>
        </motion.h2>

        <motion.p
          {...fade(0.3)}
          className="font-outfit text-sm text-gray leading-relaxed opacity-80 max-w-lg mb-14"
        >
          A team of aviation procurement specialists and supply chain experts
          united by one goal — delivering reliable, compliant, and efficient
          solutions for your operations.
        </motion.p>

        {/* ── DIRECTOR CARD ── */}
        <motion.div
          {...fade(0.2)}
          className="flex flex-col lg:flex-row rounded-2xl overflow-hidden mb-6"
          style={{
            background: "rgba(255,255,255,0.55)",
            border: "1px solid rgba(255,255,255,0.75)",
            boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
            animation: "glowBorder 3.5s ease-in-out infinite",
          }}
        >
          {/* Image side */}
          <div className="relative flex-[50%] lg:w-95 w-full min-h-95 shrink-0 overflow-hidden"
            style={{ background: "#0d151c" }}>

            {/* Swap div below for <Image> when photo is ready */}
            <div
              className="absolute inset-0 flex items-center justify-center"
              style={{
                background: "linear-gradient(160deg, #1c3f5a 0%, #0d151c 100%)",
              }}
            >
              {/* Decorative rings */}
              <div className="absolute w-65 h-65 rounded-full"
                style={{ border: "1px solid rgba(20,81,110,0.15)" }} />
              <div className="absolute w-90 h-90 rounded-full"
                style={{ border: "1px solid rgba(20,81,110,0.07)" }} />
              {/* Avatar initials */}
              <div
                className="relative z-10 w-24 h-24 rounded-full flex items-center justify-center font-ovo text-3xl"
                style={{
                  background: "rgba(20,81,110,0.2)",
                  border: "2px solid rgba(20,81,110,0.4)",
                  color: "rgba(255,255,255,0.6)",
                }}
              >
                AA
              </div>
            </div>

            {/* Real image — uncomment when ready */}
            <Image
              src={assets.service}
              alt="Adebisi Akinyemi"
              fill
              className="object-cover object-top"
              priority
            />

            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-t from-nav via-transparent to-transparent" />

            {/* Top tag */}
            <div
              className="absolute top-5 right-5 z-10 px-3 py-1.5 rounded-lg font-outfit text-[0.6rem] font-semibold tracking-widest text-white/90 uppercase bg-brand-navy/80 border border-brand-navy/15"
              
            >
              Founder & CEO
            </div>

            {/* Name tag */}
            <motion.div {...fade(0.3)} className="absolute bottom-6 left-6 z-10">
              <p className="font-ovo text-white text-xl mb-1">Adebisi Akinyemi</p>
              <p className="font-outfit text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-indigo-400">
                Founder & Chief Executive Officer
              </p>
            </motion.div>
          </div>

          {/* Content side */}
          <div className="flex flex-[50%] flex-col justify-between p-10 ">
            <div>
              {/* Quote */}
              <motion.span
                {...fade(0.4)}
                className="font-ovo text-5xl leading-none mb-3 block opacity-20 text-brand-navy"
              >
                "
              </motion.span>

              <motion.p
                {...fade(0.4)}
                className="font-ovo text-lg text-brand-navy-deep leading-relaxed mb-5"
              >
                We built Zane Systems on one belief — that the aviation industry
                deserves a parts supplier that never compromises on quality or
                trust.
              </motion.p>

              <motion.div
                {...fade(0.5)}
                className="h-[1.5px] w-9 bg-brand-navy rounded-full mb-5"
              />

              <motion.p
                {...fade(0.3)}
                className="font-outfit text-sm text-gray leading-[1.85] opacity-80"
              >
                We founded Zane Systems with a clear vision — to
                bring world-class, fully traceable aircraft components and
                procurement expertise to airlines and MRO facilities across the
                globe. Since launching, the company has rapidly built a
                reputation for reliability, compliance, and precision in every
                engagement.
              </motion.p>
            </div>

            <div className="mt-10  w-full">
              {/* Stats */}
              <motion.div
                {...fade(0.3)}
                className="flex sm:flex-row flex-col rounded-xl w-full  overflow-hidden mb-7"
                style={{
                  border: "1px solid rgba(0,0,0,0.06)",
                }}
              >
                {[
                  { num: "1", suffix: "yr", label: "In Operation" },
                  { num: "12", suffix: "+", label: "Countries Reached" },
                  { num: "100", suffix: "+", label: "Parts Supplied" },
                  // { num: "10", suffix: "+", label: "Clients Served" },
                ].map((stat, i) => (
                  <div
                    key={i}
                    className="flex-1 py-3 px-5 text-center"
                    style={{
                      borderLeft: i !== 0 ? "1px solid rgba(0,0,0,0.06)" : "none",
                    }}
                  >
                    <p className="font-ovo text-xl text-brand-navy-deep leading-none mb-1">
                      {stat.num}
                      <span className="text-brand-navy">{stat.suffix}</span>
                    </p>
                    <p className="font-outfit text-[10px] font-semibold tracking-widest uppercase text-gray-600 opacity-50">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </motion.div>

              {/* CTA */}
              <motion.div {...fade(0.3)} className="flex gap-3 flex-wrap">
                <a
                  href="#"
                  className="inline-flex items-center gap-2 font-outfit text-sm font-semibold tracking-wide text-white px-6 py-3 rounded-xl transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
                  style={{ background: "#14516e" }}
                >
                  Read Full Story →
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 font-outfit text-sm font-semibold tracking-wide text-brand-navy-deep px-6 py-3 rounded-xl transition-all duration-300 hover:border-brand-navy hover:text-brand-navy"
                  style={{ border: "1px solid rgba(0,0,0,0.1)" }}
                >
                  Get in Touch
                </a>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* ── TEAM DIVIDER ── */}
        <div className="flex items-center gap-5 my-10">
          <div className="flex-1 h-px bg-slate-200" />
          <p className="font-outfit text-[0.62rem] font-semibold tracking-[0.18em] uppercase text-gray opacity-45 whitespace-nowrap">
            Core Team Members
          </p>
          <div className="flex-1 h-px bg-slate-200" />
        </div>

        {/* ── TEAM CARDS ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          {teamMembers.map((member, i) => (
            <motion.div
              key={i}
              {...fade(0.2 + i * 0.15)}
              className="group relative rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.55)",
                border: "1px solid rgba(255,255,255,0.75)",
                boxShadow: "0 4px 24px rgba(0,0,0,0.06)",
                backdropFilter: "blur(16px)",
                WebkitBackdropFilter: "blur(16px)",
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.borderColor = "rgba(20,81,110,0.3)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.borderColor = "rgba(255,255,255,0.75)")
              }
            >
              {/* Top shine */}
              <div className="absolute top-0 left-[15%] right-[15%] h-px bg-linear-to-r from-transparent via-white/60 to-transparent z-10" />

              {/* Image strip */}
              <div
                className="relative w-full h-48 flex items-center justify-center overflow-hidden"
                style={{ background: "#0d151c" }}
              >
                <div
                  className="absolute inset-0"
                  style={{
                    background: "linear-gradient(160deg, #1c3f5a 0%, #0d151c 100%)",
                  }}
                />

                {/* Avatar — swap for <Image> when photo is ready */}
                {/* <div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center font-ovo text-xl"
                  style={{
                    background: "rgba(20,81,110,0.2)",
                    border: "2px solid rgba(20,81,110,0.35)",
                    color: "rgba(255,255,255,0.55)",
                  }}
                >
                  {member.initials}
                </div> */}

                {/* Real image — uncomment when ready */}
               { member.image && (
                  <Image src={member.image} alt={member.name} fill className="object-cover object-top opacity-85" />
                )}

                <div className="absolute inset-0 bg-linear-to-t from-[rgba(13,21,28,0.55)] to-transparent" />
              </div>

              {/* Accent bar */}
              <div
                className="h-0.75"
                style={{
                  background: "linear-gradient(90deg, #14516e, #818cf8)",
                }}
              />

              {/* Card body */}
              <div className="p-6">
                <p className="font-ovo text-lg text-brand-navy-deep mb-1 group-hover:text-brand-navy transition-colors duration-300">
                  {member.name}
                </p>
                <p className="font-outfit text-[0.62rem] font-semibold tracking-[0.14em] uppercase text-brand-navy mb-4">
                  {member.role}
                </p>
                <div className="h-[1.5px] w-7 bg-brand-navy rounded-full mb-3" />
                <p className="font-outfit text-sm text-gray-600 leading-relaxed opacity-78">
                  {member.bio}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Glow border animation */}
      <style>{`
        @keyframes glowBorder {
          0%, 100% { border-color: rgba(255,255,255,0.75); box-shadow: 0 8px 40px rgba(0,0,0,0.08); }
          50% { border-color: rgba(20,81,110,0.35); box-shadow: 0 8px 40px rgba(0,0,0,0.08), 0 0 28px rgba(20,81,110,0.10); }
        }
      `}</style>
    </section>
  );
}
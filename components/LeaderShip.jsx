import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const LeaderShip = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 my-20 bg-slate-100 py-10">
      <div className="flex items-center  gap-5 mb-5">
        <hr className="h-[0.5] w-10 text-brand-navy-deep" />
        <p className="text-brand-navy text-[0.65rem] font-semibold tracking-[0.2em] uppercase">
          The person behind it
        </p>
      </div>

      <div className="space-y-5">
        <p className="text-2xl md:text-3xl ">
          Meet Our <span className="text-brand-navy">Leadership</span>{" "}
        </p>
        <p className="sm:text-justify text-base text-gray-700/90">
          A team of aviation procurement specialists and supply chain experts{" "}
          <br /> united by one goal — delivering reliable, compliant, and
          efficient solutions for your operations.
        </p>
      </div>

      <div
        className="flex flex-col mt-10 lg:flex-row gap-0 rounded-2xl overflow-hidden w-full"
        style={{
          background: "rgba(255,255,255,0.55)",
          border: "1px solid rgba(255,255,255,0.75)",
          boxShadow: "0 8px 40px rgba(0,0,0,0.08)",
          backdropFilter: "blur(16px)",
        }}
      >
        {/* Image side */}
        <div className="relative lg:w-95 w-full min-h-90 bg-nav flex-[50%] overflow-hidden">
          {/* Replace src with actual owner image */}
          <Image
            src={assets.service}
            alt="Owner"
            className="w-full h-full object-cover object-top opacity-90"
          />

          {/* Bottom gradient overlay */}
          <div className="absolute inset-0 bg-linear-to-t from-nav via-transparent to-transparent" />

          {/* Name tag on image */}
          <div className="absolute bottom-6 left-6">
            <p className="font-ovo text-white text-2xl">Adebisi Akinyemi</p>
            <p className="font-outfit text-xs text-indigo-400 tracking-widest uppercase mt-1">
              Founder & CEO
            </p>
          </div>
        </div>

        {/* Content side */}
        <div className="flex flex-col justify-between p-10 flex-[50%]">
          {/* Quote / bio */}
          <div>
            <div className="text-brand-navy text-4xl font-ovo leading-none mb-4 opacity-40">
              "
            </div>
            <p className="font-ovo text-brand-navy-deep text-lg leading-relaxed mb-6">
              We built Zane Systems on one belief — that the aviation industry
              deserves a parts supplier that never compromises on quality or
              trust.
            </p>

            <div className="h-[1.5px] w-10 bg-brand-navy rounded-full mb-6" />

            <p className="font-outfit text-sm text-gray leading-[1.85] opacity-80">
              With over 20 years in aviation supply chain management, James
              founded Zane Systems Limited with a mission to bring world-class,
              fully traceable aircraft components to airlines and MRO facilities
              across the globe.
            </p>
          </div>

          {/* Bottom — stats + CTA */}
          <div className="mt-10">
            {/* Mini stats */}
            <div className="flex flex-col tablet:flex-row gap-8 mb-8">
              <div>
                <p className="font-ovo text-2xl text-brand-navy-deep">
                  20<span className="text-brand-navy">+</span>
                </p>
                <p className="font-outfit text-xs text-gray opacity-60 uppercase tracking-widest mt-1">
                  Years Experience
                </p>
              </div>

              <div className="w-px bg-slate-200" />

              <div>
                <p className="font-ovo text-2xl text-brand-navy-deep">
                  80<span className="text-brand-navy">+</span>
                </p>
                <p className="font-outfit text-xs text-gray opacity-60 uppercase tracking-widest mt-1">
                  Countries Served
                </p>
              </div>

              <div className="w-px bg-slate-200" />

              <div>
                <p className="font-ovo text-2xl text-brand-navy-deep">
                  50K<span className="text-brand-navy">+</span>
                </p>
                <p className="font-outfit text-xs text-gray opacity-60 uppercase tracking-widest mt-1">
                  Parts Supplied
                </p>
              </div>
            </div>

            {/* Read more CTA */}

            <a
              href="/about/leadership"
              className="inline-flex items-center gap-3 font-outfit text-sm font-semibold tracking-wide text-white px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5"
              style={{ background: "#14516e" }}
            >
              Read Full Story
              <span className="text-base">→</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeaderShip;

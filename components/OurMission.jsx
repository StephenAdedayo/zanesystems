import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { MdKeyboardArrowRight } from "react-icons/md";

const OurMission = () => {
  return (
    <div className="px-5 md:px-16 lg:px-20 my-20">
      <div className="flex items-center gap-1 mb-16">
        <Link href={"/"}>Home</Link>
        <MdKeyboardArrowRight />
        <Link href={"/about"} className="text-brand-navy">
          About Us
        </Link>
      </div>

      <div className="flex items-center  gap-5 mb-10">
        <hr className="h-[0.5] w-10 text-brand-navy-deep" />
        <p className="text-brand-navy text-[0.65rem] font-semibold tracking-[0.2em] uppercase">Our Mission</p>

      </div>

      <div className="flex flex-col-reverse tablet:flex-row gap-20">
        <div className="mb-10 flex-[50%]">
          <h1 className="text-xl md:text-3xl mb-5">
            Built on Trust. <br />
            <span className="text-brand-navy">Driven by Precision.</span>
          </h1>

          <p className="mb-5 text-gray-700/90">
            Zane Systems Limited was founded on a single conviction: the
            aviation industry deserves a procurement partner that prioritizes
            precision, transparency, and operational excellence.
          </p>
          <p className="text-gray-700/90">
            We deliver comprehensive aircraft procurement, certified parts
            sourcing, vendor management, and supply chain coordination tailored
            to the evolving needs of aviation stakeholders worldwide. From
            strategic sourcing to logistics oversight and procurement
            consulting, we provide not just components and services — but
            confidence, continuity, and control.
          </p>

          <div className="border-l-2 border-indigo-600 bg-indigo-50 px-4 py-4 mt-5">
            <p className="italic">
              "We don't just supply parts. We supply the assurance that every
              aircraft we touch will fly safely."
            </p>
          </div>
        </div>

        <div className="flex-[50%]">
          <Image
            src={assets.mission}
            alt="mission"
            className="rounded-2xl h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default OurMission;

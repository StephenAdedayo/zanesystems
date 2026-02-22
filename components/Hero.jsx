import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import HeroButton from "./HeroButton";

const Hero = () => {
  return (
    <div className="relative h-screen">
      <video
        autoPlay
        loop
        muted
        playsInline
        src={"https://res.cloudinary.com/dfuse3jtq/video/upload/airplane_qmrrxh"}
        className="object-cover absolute inset-0 h-screen w-full"
      ></video>

      <div className="absolute inset-0 bg-black/80 " />


      <div className="absolute inset-0 space-y-8 px-5 md:px-16 lg:px-20 bottom-0 z-0 w-full flex flex-col justify-center items-center">
        <div className="flex gap-3 items-center bg-glass rounded-full mb-5 px-4 py-2">
          <p className="size-3 bg-white rounded-full animate-ping"></p>
          <h1 className="text-sm text-white">Zane Systems Limited</h1>
        </div>

        <h1 className="text-white text-center text-2xl md:text-4xl mb-5">
          Your Global Partner in Aircraft Parts Supply
        </h1>
        <p className="text-white/80 text-center text-sm md:text-base sm:w-150 w-full">
          We deliver aircraft acquisition, certified parts sourcing, and
          seamless supply chain coordination for aviation stakeholders
          worldwide.
        </p>
        <HeroButton href={"/services"} text={"Explore more"}/>
      </div>
      
    </div>
  );
};

export default Hero;

import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <div className="relative min-h-screen -z-1">
      <video
        autoPlay
        loop
        muted
        playsInline
        src={assets.airplane}
        className="object-cover h-screen z-0 w-full "
      ></video>

      

        <div className='absolute  top-0 right-0 bottom-0  left-0 bg-black/80 ' />
        <div className="absolute space-y-8 px-5 md:px-16 lg:px-20 bottom-50 z-0 w-full flex flex-col justify-center items-center">

              <div className='flex gap-3 items-center bg-glass rounded-full mb-5 px-4 py-2'>
        <p className='size-3 bg-white rounded-full animate-ping'></p>
        <h1 className='text-sm text-white'>Zane Systems Limited
</h1>

      </div>


        <h1 className="text-white text-center text-2xl md:text-4xl mb-5">
          Your Global Partner in Aircraft Parts Supply
        </h1>
        <p className="text-white/80 text-center text-sm md:text-base sm:w-150 w-full">
We deliver aircraft acquisition, certified parts sourcing, and seamless supply chain coordination for aviation stakeholders worldwide.
        </p>
        <button
          style={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }}
          className=" flex items-center group text-white text-base rounded-full px-8 py-4 gap-3"
        >
          Explore more
          <Image
            src={assets.arrow_icon_dark}
            className="w-3.5 group-hover:rotate-45 transform transition-transform duration-300 "
            alt="arrow_icon"
          />
        </button>
      </div>
    </div>
  );
};

export default Hero;

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

      

        <div className='absolute  top-0 right-0 bottom-0  left-0 bg-black/50 ' />
        <div className="absolute space-y-8 px-5 md:px-16 lg:px-20 bottom-50 z-0 w-full flex flex-col justify-center items-center">
        <h1 className="md:text-4xl sm:text-3xl  text-white text-2xl text-center">
          Your Global Partner in Aircraft Parts Supply
        </h1>
        <p className="text-center text-xl text-white/80 font-ovo  sm:text-2xl">
          From sourcing to delivery, we ensure aviation-grade excellence at
          every stage.
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

import Link from "next/link";
import React from "react";
import HeroButton from "./HeroButton";
import { assets } from "@/assets/assets";
import Image from "next/image";

const ServiceHero = () => {
  return (
    <div className=' min-h-[90vh]  w-full relative px-16 '>

      <div className="absolute inset-0">
                   <Image src={assets.service} fill priority alt="about_image" className="object-center object-cover"/>
                </div>

      <div className="bg-black/80 absolute inset-0 flex flex-col items-center justify-center  pt-10">
        <div className="flex gap-3 items-center bg-glass rounded-full mb-5 px-4 py-2">
          <p className="size-3 bg-white rounded-full animate-ping"></p>
          <h1 className="text-sm text-white">Zane Systems Limited Services</h1>
        </div>

        <h1 className="text-white text-center text-2xl sm:text-3xl md:text-5xl mb-5">
          Strategic Aviation Procurement Solutions
        </h1>
        <p className="text-white/80 text-center text-sm mb-5 md:text-base sm:w-150 w-full">
          Our services support aircraft acquisition, parts procurement, vendor
          management, and seamless logistics coordination worldwide.
        </p>

                <HeroButton href={"/contact/#form"} text={"Contact us"}/>

      </div>
    </div>
  );
};

export default ServiceHero;

import Link from "next/link";
import React from "react";
import HeroButton from "./HeroButton";
import { assets } from "@/assets/assets";
import Image from "next/image";

const AboutUsHero = () => {
  return (
    <div className=' min-h-[90vh]  w-full relative px-16 '>

     <div className="absolute inset-0">
             <Image src={assets.about_image} fill priority alt="about_image" className="object-center object-cover"/>
          </div>

      <div className="bg-black/80 px-5 md:px-16 lg:px-20 absolute inset-0 flex flex-col items-center justify-center  text pt-10">
        <div className="flex gap-3 items-center bg-glass rounded-full mb-5 px-4 py-2">
          <p className="size-3 bg-white rounded-full animate-ping"></p>
          <h1 className="text-sm text-white ">About Zane Systems Limited</h1>
        </div>

        <h1 className="text-white text-center sm:text-3xl text-2xl max-xs:text-lg  md:text-5xl mb-5">
          Strengthening Aviation Through Strategic Procurement
        </h1>
        <p className="text-white/80 text-center text-sm mb-5 md:text-base sm:w-150 w-full">
          Zane Systems Limited is a strategic aviation procurement and supply
          chain partner committed to delivering reliable, compliant, and
          globally connected solutions.
        </p>

        <HeroButton href={"/contact/#form"} text={"Contact us"}/>
      </div>
    </div>
  );
};

export default AboutUsHero;

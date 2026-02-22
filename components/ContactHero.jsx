import React from "react";
import HeroButton from "./HeroButton";
import Image from "next/image";
import { assets } from "@/assets/assets";

const ContactHero = () => {
  return (
    <div className='min-h-[90vh] w-full relative px-16 '>

     <div className="absolute inset-0">
        <Image src={assets.contact_image} fill priority alt="contact_image" className="object-center object-cover"/>
     </div>

      <div className="bg-black/80 absolute inset-0 flex flex-col items-center justify-center ">
        <div className="flex gap-3 items-center bg-glass rounded-full mb-5 px-4 py-2">
          <p className="size-3 bg-white rounded-full animate-ping"></p>
          <h1 className="text-sm text-white">Contact Zane Systems Limited</h1>
        </div>

        <h1 className="text-white text-center text-2xl sm:text-3xl md:text-4xl mb-5">
          Let’s Strengthen Your Aviation Operations
        </h1>
        <p className="text-white/80 text-center text-sm md:text-base mb-5 sm:w-150 w-full">
          Connect with our team to discuss aircraft procurement, parts sourcing,
          and supply chain solutions tailored to your operational needs.
        </p>

                 <HeroButton href={"/services"} text={"Our Services"}/>

      </div>
    </div>
  );
};

export default ContactHero;

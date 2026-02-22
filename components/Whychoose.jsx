import { assets } from "@/assets/assets";
import Image from "next/image";
import React from "react";
import Button from "./Button";

const Whychoose = () => {
  return (
    <div className="my-20 flex flex-col w-full md:flex-row">
      <div className="flex-[50%] ">
        <Image
          src={assets.choose}
          alt="Why_choose"
          className="h-full object-cover aspect-auto"
        />
      </div>

      <div className="bg-nav flex-[50%] md:px-16 lg:px-20  px-5 py-10 space-y-8 flex flex-col justify-center">
        <h1 className="text-white">WHY ZANE SYSTEMS LIMITED?</h1>
        <p className="text-white/60 text-sm">
          Zane Systems Limited operates as an independent aviation procurement
          and supply chain partner, delivering certified aircraft sourcing
          solutions through a trusted global supplier network. Our goal is to
          provide strategic, compliant, and efficient procurement services
          tailored to the operational needs of aviation stakeholders worldwide.
        </p>
        {/* <button className='border w-fit border-white text-white py-3 px-6 rounded-full hover:scale-105 active:scale-95 transition-all duration-300 ease-in'>Discover More</button> */}
        <Button href={"/about"} text={"Discover More"} className={"w-fit"} />
      </div>
    </div>
  );
};

export default Whychoose;

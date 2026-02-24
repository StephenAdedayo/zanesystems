import React from "react";
import Button from "./Button";

const Cta = () => {
  return (
    <div className="bg-[url(/cta.jpg)] h-[50vh] relative flex flex-col justify-center items-center  bg-no-repeat bg-center bg-cover px-5">
      <h1 className="text-white/80 z-1 text-center sm:text-2xl text-xl md:text-3xl mb-10">
        Ready to Strengthen Your Aviation Supply Chain?
      </h1>
      {/* <button className='bg-brand-navy z-1  hover:bg-brand-navy/90 duration-300 ease-in w-fit px-6 py-3 text-white rounded-full hover:scale-105 active:scale-95 transition-transform transform'>Get in Touch</button> */}
      <Button href={"/contact"} text={"Get in Touch"} className={"z-1"} />

      <div className="absolute top-0 right-0 bottom-0  left-0 bg-black/80" />
    </div>
  );
};
export default Cta;

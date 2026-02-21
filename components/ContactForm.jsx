import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaMessage, FaXTwitter } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscMail } from "react-icons/vsc";

const ContactForm = () => {
  return (
    <div className="my-20 px-5 md:px-16 lg:px-20">
      <div className="flex items-center gap-1 mb-20">
        <Link href={"/"}>Home</Link>
        <MdKeyboardArrowRight />
        <Link href={"/contact"} className="text-brand-navy">
          Contact us
        </Link>
      </div>

      <div className="flex flex-col lg:flex-row xl:gap-20 sm:gap-10 gap-20 mb-20">
        <div className="xl:flex-[50%] flex-[30%]">
          <h1 className="uppercase font-medium mb-20 text-3xl">
            Connect with <span className="text-brand-navy">zane systems</span> 
          </h1>

          <div className="flex flex-col gap-5 border-r xl:w-120 md:w-90 w-full border-brand-navy-deep">
            <p className="flex items-center gap-5">
              <FaPhoneAlt size={24} color="black" />
              +234 8143184639
            </p>

            <p className="flex items-center gap-5">
              <VscMail />
              zanesystemslimited@gmail.com
            </p>
          </div>

          <div className="flex items-center gap-5">
            <div className="size-12 rounded-full border-2 flex items-center justify-center mt-20 border-brand-navy-deep ">
              <a href="">
                <FaXTwitter size={24} />
              </a>
            </div>

            <div className="size-12 rounded-full border-2 flex items-center justify-center mt-20 border-brand-navy-deep ">
              <a href="">
                <FaInstagram size={24} />
              </a>
            </div>

            <div className="size-12 rounded-full border-2 flex items-center justify-center mt-20 border-brand-navy-deep ">
              <a href="">
                <FaYoutube size={24} />
              </a>
            </div>

            <div className="size-12 rounded-full border-2 flex items-center justify-center mt-20 border-brand-navy-deep ">
              <a href="">
                <FaLinkedinIn size={24} />
              </a>
            </div>

            <div className="size-12 rounded-full border-2 flex items-center justify-center mt-20 border-brand-navy-deep ">
              <a href="">
                <FaFacebookF size={24} />
              </a>
            </div>
          </div>
        </div>

        <form id="form" className="bg-nav xl:flex-[50%] flex-[70%] md:py-10 py-8 md:px-14 px-5 lg:w-200 w-full rounded-md">
          <h1 className="uppercase font-medium text-xl sm:text-3xl mb-5 text-white text-center">
            Contact us
          </h1>
          <p className="font-medium text-base mb-10 text-white/60 text-center">
            Send Us a message
          </p>

          <div className="space-y-3 rounded-md">
            <input
              type="text"
              placeholder="Full Name"
              className="outline-none bg-white border border-gray-300 px-5 py-3 w-full rounded-lg transition-colors duration-300 focus:border-indigo-600 focus:border-3"
            />

            <input
              type="email"
              placeholder="Email*"
              className="outline-none bg-white border border-gray-300 px-5 py-3 w-full rounded-lg transition-colors duration-300 focus:border-indigo-600 focus:border-3"
              required
            />

            <textarea
              name=""
              id=""
              rows={8}
              className="outline-none bg-white border border-gray-300 px-5 py-3 w-full rounded-lg transition-colors duration-300 focus:border-indigo-600 focus:border-3"
              placeholder="How may we help you*"
              required
            ></textarea>

            <div className="flex items-center justify-center">
              <button type='Submit' className={`inline-flex items-center gap-3 font-outfit text-sm font-semibold tracking-wide text-white px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5`}
                    style={{ background: '#14516e' }}>
                 Send Message               
                <span className='text-base'>→</span></button>
            </div>
          </div>

          <div className="flex flex-col items-center justify-center">
            <p className="mt-5 text-white">Or</p>
            <hr className="text-white h-[0.5] w-10" />
            <p className="mt-5 text-white text-center">
              If you prefer, send us an email
            </p>

            
               <button className={`inline-flex items-center gap-3 font-outfit text-sm font-semibold tracking-wide text-white px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 mt-5 border border-white/90`}
            >
                Send Mail          
                <span className='text-base'>→</span></button>

          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;

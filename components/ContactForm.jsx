"use client"

import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdKeyboardArrowRight } from "react-icons/md";
import { VscMail } from "react-icons/vsc";
import Form from "./Form";


const socials = [
  { icon: <FaXTwitter size={18} />, href: "" },
  { icon: <FaInstagram size={18} />, href: "" },
  { icon: <FaYoutube size={18} />, href: "" },
  { icon: <FaLinkedinIn size={18} />, href: "" },
  { icon: <FaFacebookF size={18} />, href: "" },
];



const ContactForm = () => {

  return (
    <div className="my-20 px-5 md:px-16 lg:px-20">

      {/* Breadcrumb */}
      <div className="flex items-center gap-1 mb-16 text-sm text-gray">
        <Link href="/" className="hover:text-[#14516e] transition-colors">Home</Link>
        <MdKeyboardArrowRight />
        <Link href="/contact" className="text-brand-navy font-semibold">Contact Us</Link>
      </div>

      <div className="flex flex-col lg:flex-row gap-12 xl:gap-20 mb-20">

        {/* ── LEFT SIDE ── */}
        <div className="lg:flex-[45%]">
          <h1 className="font-ovo text-3xl md:text-4xl text-brand-navy-deep mb-3 leading-tight">
            Connect with{" "}
            <span className="text-brand-navy italic">Zane Systems</span>
          </h1>
          <p className="font-outfit text-sm text-gray opacity-70 mb-10 leading-relaxed">
            Reach out and our team will get back to you within 24 hours.
          </p>

          {/* Contact details */}
          <div className="flex flex-col gap-5 mb-12 border-l-2 border-brand-navy pl-6">
            <a
              href="tel:+2348132421458"
              className="flex items-center gap-4 text-gray hover:text-brand-navy transition-colors duration-200" >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(20,81,110,0.08)", border: "1px solid rgba(20,81,110,0.15)" }}
              >
                <FaPhoneAlt size={15} color="#14516e" />
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-brand-navy mb-0.5">Phone</p>
                <p className="font-outfit text-sm font-medium">+234 8132421458</p>
              </div>
            </a>

            <a
              href="mailto:info@zanesystemsgs.com"
              className="flex items-center gap-4 text-gray hover:text-brand-navy transition-colors duration-200">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(20,81,110,0.08)", border: "1px solid rgba(20,81,110,0.15)" }}
              >
                <VscMail size={17} color="#14516e" />
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-brand-navy mb-0.5">Email</p>
                <p className="font-outfit text-sm font-medium">info@zanesystemsgs.com</p>
              </div>
            </a>

                        <a
              href="mailto:a.akinyemi@zanesystemsgs.com"
              className="flex items-center gap-4 text-gray hover:text-brand-navy transition-colors duration-200">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(20,81,110,0.08)", border: "1px solid rgba(20,81,110,0.15)" }}
              >
                <VscMail size={17} color="#14516e" />
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-brand-navy mb-0.5">Email</p>
                <p className="font-outfit text-sm font-medium">a.akinyemi@zanesystemsgs.com</p>
              </div>
            </a>
          </div>

          {/* Socials */}
          <div>
            <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-gray opacity-50 mb-4">
              Follow Us
            </p>
            <div className="flex items-center gap-3">
              {socials.map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  className="w-10 h-10 rounded-full flex items-center justify-center text-gray transition-all duration-300 hover:text-white hover:-translate-y-0.5"
                  style={{
                    border: "1.5px solid rgba(50,58,64,0.25)",
                    background: "transparent",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.background = "#14516e";
                    e.currentTarget.style.borderColor = "#14516e";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.background = "transparent";
                    e.currentTarget.style.borderColor = "rgba(50,58,64,0.25)";
                  }}
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* ── RIGHT — FORM ── */}
        <Form className={"lg:flex-[55%] w-full rounded-2xl md:py-10 py-8 md:px-12 px-6"}/>
        
      </div>
    </div>
  );
};

export default ContactForm;
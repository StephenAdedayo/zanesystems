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
              href="tel:+2348143184639"
              className="flex items-center gap-4 text-gray hover:text-brand-navy transition-colors duration-200" >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(20,81,110,0.08)", border: "1px solid rgba(20,81,110,0.15)" }}
              >
                <FaPhoneAlt size={15} color="#14516e" />
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-brand-navy mb-0.5">Phone</p>
                <p className="font-outfit text-sm font-medium">+234 8143184639</p>
              </div>
            </a>

            <a
              href="mailto:zanesystemslimited@gmail.com"
              className="flex items-center gap-4 text-gray hover:text-brand-navy transition-colors duration-200">
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0"
                style={{ background: "rgba(20,81,110,0.08)", border: "1px solid rgba(20,81,110,0.15)" }}
              >
                <VscMail size={17} color="#14516e" />
              </div>
              <div>
                <p className="text-[0.65rem] font-semibold tracking-widest uppercase text-brand-navy mb-0.5">Email</p>
                <p className="font-outfit text-sm font-medium">zanesystemslimited@gmail.com</p>
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
        <form
          id="form"
          className="lg:flex-[55%] w-full rounded-2xl md:py-10 py-8 md:px-12 px-6"
          style={{ background: "#0d151c" }}
        >
          {/* Form header */}
          <div className="mb-8 text-center">
            <div className="flex items-center justify-center gap-3 mb-3">
              <div className="h-px w-6 bg-brand-navy" />
              <p className="font-outfit text-[0.65rem] font-semibold tracking-[0.2em] uppercase text-brand-navy">
                Get In Touch
              </p>
              <div className="h-px w-6 bg-brand-navy" />
            </div>
            <h2 className="font-ovo text-2xl text-white">Send Us a Message</h2>
            <p className="font-outfit text-sm mt-2" style={{ color: "rgba(255,255,255,0.4)" }}>
              We'll respond within 24 hours
            </p>
          </div>

          {/* Inputs */}
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full font-outfit text-sm px-5 py-3.5 rounded-xl outline-none transition-all duration-300 focus:border-brand-navy focus:border-2"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
              }}
              onFocus={e => e.target.style.borderColor = "#14516e"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
            <input
              type="email"
              placeholder="Email Address*"
              required
              className="w-full font-outfit text-sm px-5 py-3.5 rounded-xl outline-none transition-all duration-300"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
              }}
              onFocus={e => e.target.style.borderColor = "#14516e"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
            <textarea
              rows={6}
              required
              placeholder="How may we help you?*"
              className="w-full font-outfit text-sm px-5 py-3.5 rounded-xl outline-none transition-all duration-300 resize-none"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
              }}
              onFocus={e => e.target.style.borderColor = "#14516e"}
              onBlur={e => e.target.style.borderColor = "rgba(255,255,255,0.1)"}
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full font-outfit text-sm font-semibold tracking-wide text-white py-3.5 rounded-xl transition-all duration-300 hover:opacity-88 hover:-translate-y-0.5"
            style={{ background: "#14516e" }}
          >
            Send Message →
          </button>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
            <span className="font-outfit text-xs" style={{ color: "rgba(255,255,255,0.3)" }}>or</span>
            <div className="flex-1 h-px" style={{ background: "rgba(255,255,255,0.08)" }} />
          </div>

          {/* Email alt */}
          <button
            type="button"
            className="w-full font-outfit text-sm font-semibold tracking-wide py-3.5 rounded-xl transition-all duration-300 hover:-translate-y-0.5"
            style={{
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.12)",
              background: "transparent",
            }}
          >
            Send via Email →
          </button>
        </form>

      </div>
    </div>
  );
};

export default ContactForm;
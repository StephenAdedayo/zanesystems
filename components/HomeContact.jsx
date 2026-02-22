"use client"

import React from "react";
import { MdOutlineMarkEmailRead } from "react-icons/md";

const HomeContact = () => {
  return (
    <div className="my-20 px-5 md:px-16 lg:px-20 w-full flex flex-col items-center justify-center">
      <div className="flex items-center justify-between gap-2 text-indigo-600 bg-indigo-50 rounded-full px-3 py-1 text-center w-fit mb-10">
        <MdOutlineMarkEmailRead className="text-indigo-600" />
        <h1 className="text-[15px] text-center font-medium">
          Connect with Zane Systems
        </h1>
      </div>

      <div className="flex flex-col xl:gap-20 gap-10 tablet:flex-row">
        <div className="flex flex-col tablet:flex-[40%] gap-5 text-center tablet:text-left">
          <h2 className="bg-linear-to-r from-slate-800 to-slate-500 text-transparent bg-clip-text text-2xl">
            Reliable Aviation Solutions Begin Here
          </h2>
          <p className="text-gray text-sm  xl:text-base">
            Partner with a team dedicated to strategic procurement, certified
            sourcing, and global supply coordination built around your
            operational goals.
          </p>
        </div>



 <form
          id="form"
          className="tablet:flex-[60%] w-full tablet:w-150 xl:w-200 rounded-2xl md:py-10 py-8 tablet:px-14 px-5"
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

export default HomeContact;

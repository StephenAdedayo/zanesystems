import Link from "next/link";
import React from "react";
import Image from "next/image";
import { assets } from "@/assets/assets";
import { Mail, MailIcon, MapPin } from "lucide-react";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-nav py-12 px-4 sm:px-6 lg:px-20 md:px-16">
      <div className="w-full">
        <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
          <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
            <Link href="/">
              <Image src={assets.zane_logo_white} alt="logo" className="w-20" />
            </Link>
            <div className="w-full max-w-52 h-px mt-8 bg-linear-to-r from-black via-white/25 to-black"></div>
            <p className="text-sm text-white/60 mt-6 max-w-sm leading-relaxed">
              Zane Systems is a trusted aviation procurement and supply chain
              partner, delivering certified aircraft sourcing solutions through
              a reliable global supplier network.
            </p>
          </div>

          <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm font-ovo text-white font-semibold">
              Important Links
            </h3>
            <div className="flex flex-col gap-2 mt-6">
              <Link
                href="/"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                About
              </Link>
              <Link
                href="/services"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Services
              </Link>
              <Link
                href="/contact"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm text-white font-ovo font-semibold">
              Our Services
            </h3>
            <div className="flex flex-col gap-2 mt-6">
              <Link
                href="/services/aircraft-procurement"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Aircraft Procurement
              </Link>
              <Link
                href="/services/parts-procurement"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Parts Procurement
              </Link>
              <a
                href="/services/vendor-management"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Vendor-management{" "}
              </a>
              <a
                href="/services/logistics"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Logistics{" "}
              </a>

              <a
                href="/services/consulting"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                consulting{" "}
              </a>
            </div>
          </div>

          <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
            <div className="text-white">
              <h2 className="font-semibold  text-sm mb-5 font-ovo">
                Get in touch
              </h2>
              <div className="text-sm  space-y-2">
                <div className="flex items-center gap-1.5">
                  <MapPin size={18} className="text-white/60 " />
                  <p className="text-sm text-white/60 hover:text-white transition-colors">
                    Gbagada, Lagos, Nigeria.
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  <BsTelephone size={18} className="text-white/60" />
                  <p className="text-sm text-white/60 hover:text-white transition-colors">
                    <a href="tel:+234 8132421458">+234 8132421458</a>
                  </p>
                </div>

                <div className="flex items-center gap-1.5">
                  <MailIcon size={18} className="text-white/60  " />
                  <p>
                    <a
                      href="mailto:info@zanesystemsgs.com?subject=Inquiry%20about%20Zane%20Systems%20Services&body=Hello%20Adebisi,%20I%20would%20like%20to%20discuss..."
                      className="text-sm text-white/60 hover:text-white transition-colors"
                    >
                      info@zanesystemsgs.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="w-full h-px mt-16 mb-4 bg-linear-to-r from-black via-white/25 to-black"></div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4">
          <p className="text-xs text-white/60">© {year} Zane Systems Limited</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { FaPhoneAlt } from "react-icons/fa";
import { LiaTimesSolid } from "react-icons/lia";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [menuOpen, setIsMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact Us", href: "/contact" },
  ];

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      className={`px-5 md:px-16 lg:px-20 fixed py-5 ${isScrolled ? "text-black bg-white backdrop-blur-3xl shadow" : "text-white"} flex items-center justify-between w-full z-40 transition-all duration-300`}
    >
      {/* logo */}
      <Link href={"/"}>
        <p className="font-semibold font-ovo sm:text-3xl text-lg bg-transparent cursor-pointer">
          ZANE SYSTEMS
        </p>
      </Link>

      {/* Navlinks desktop*/}

      <div className="lg:flex justify-between space-x-8 items-center hidden">
        {links.map((link, index) => (
          <Link
            key={index}
            href={link.href}
            className="group flex flex-col gap-0.5"
          >
            {link.name}
            <div
              className={`${isScrolled ? "bg-gray-700" : "bg-brand-blue"} h-0.5 w-0 group-hover:w-full transition-all duration-200`}
            />
          </Link>
        ))}
      </div>

      {/* whatsapp link */}
      <div className="flex items-center gap-3">
        {/* whatspp link */}
        <a
          href="https://wa.me/2348132421458" // Replace with your actual phone number
          target="_blank"
          rel="noopener noreferrer"
          className="transition-all hover:scale-105 active:scale-95 duration-300 cursor-pointer"
        >
          <div
            className="rounded-full sm:size-14 size-12 flex items-center justify-center "
            style={{
              background: isScrolled ? "#25D366" : "rgba(255, 255, 255, 0.12)",
            }}
          >
            <BsWhatsapp color="white" className="text-20 sm:text-24" />
          </div>
        </a>

        {/* phone number link */}
        <a
          href="tel:+2348132421458"
          className="cursor-pointer hover:scale-105 active:scale-95 transition-all duration-300 ease-in"
        >
          <div
            className="flex items-center gap-3 z-10 bg-glass rounded-full sm:px-6 sm:py-4 px-4 py-4"
            style={{
              background: isScrolled ? "#14516e" : "rgba(255, 255, 255, 0.12)",
            }}
          >
            <FaPhoneAlt color="white" className="text-20 sm:text-24" />
            <p
              className={`${!isScrolled && "font-semibold"} sm:block hidden md:text-sm text-base text-white`}
            >
              +234 8132421458
            </p>
          </div>
        </a>

        <div onClick={() => setIsMenuOpen(true)} className="lg:hidden cursor-pointer block">
          <Menu size={24} color={`${isScrolled ? "black" : "white"}`} />
        </div>
      </div>

      {/* mobile screens */}
      <div
        className={`fixed top-0 h-screen right-0  ${menuOpen ? "w-full px-10 " : "w-0 overflow-hidden"} transition-all duration-300 bg-nav z-50 block lg:hidden`}
      >
        <h2 className="text-3xl text-white font-semibold uppercase text-center mt-20 mb-10">
          Zane Systems
        </h2>

        <div className="flex flex-col  gap-5  ">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="group  flex flex-col gap-0.5"
            >
              <p className="hover:translate-x-2 text-white transform transition-transform duration-300">
                {link.name}
              </p>
            </Link>
          ))}
        </div>

       <a href="tel:+234 8132421458">
        <div className="bg-gray flex items-center gap-5 justify-center py-4 rounded-md mt-10">
          <FaPhoneAlt size={24} color="white" />
          <p className={`text-white`}>+234 8132421458</p>
        </div>
        </a>

        <div
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-5 cursor-pointer right-10"
        >
          <LiaTimesSolid size={30} color="white" />
        </div>
      </div>
    </section>
  );
};

export default Navbar;

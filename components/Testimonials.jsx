"use client";

import React, { useState, useEffect } from "react";
import { motion } from "motion/react";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      date: "Jun 1, 2026",
      text: "“Zane Systems streamlined our entire parts procurement pipeline. Their professionalism, technical expertise, and dedication to global compliance standards are top-tier.”",
      name: "Captain Abayomi Coker",
      role: "Managing Director at Quorum Aviation",
    //   img: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=200",
    },
    
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 3 >= testimonials.length ? 0 : prev + 3));
  };

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev - 3 < 0 ? Math.max(testimonials.length - 3, 0) : prev - 3,
    );
  };

  useEffect(() => {
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) =>
        prev + 1 >= testimonials.length ? 0 : prev + 1,
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [isMobile, testimonials.length]);

  return (
    <>
      <section className="py-20 px-5 md:px-16 lg:px-20">
        <div className="w-full sm:max-w-6xl mx-auto">
          <div className="flex justify-between items-center mb-14">
            <motion.h1
              initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "tween", duration: 0.6, delay: 0.3 }}
              className="text-neutral-900 font-medium text-4xl md:text-[40px] text-center md:text-left"
            >
              What our clients appreciate most
            </motion.h1>

            <motion.div
               initial={{ y: -20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "tween", duration: 0.6, delay: 0.3 }}
            className="hidden md:flex gap-2">
              <div
                onClick={handlePrev}
                className="h-10 w-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition-all text-neutral-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-left-icon lucide-arrow-left"
                >
                  <path d="m12 19-7-7 7-7" />
                  <path d="M19 12H5" />
                </svg>
              </div>
              <div
                onClick={handleNext}
                className="h-10 w-10 rounded-lg bg-neutral-100 border border-neutral-200 flex items-center justify-center cursor-pointer hover:bg-neutral-200 transition-all text-neutral-500"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-arrow-right-icon lucide-arrow-right"
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>
            </motion.div>
          </div>

          <div className="mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 md:mt-6">
            {testimonials
              .slice(
                currentIndex,
                isMobile ? currentIndex + 1 : currentIndex + 3,
              )
              .map((item) => (
                <motion.div
                              initial={{ y: 30, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ type: "tween", duration: 0.7, delay: 0.3 }}
                  key={item.id}
                  className="bg-zinc-50 hover:-translate-y-1 transition duration-300 border border-zinc-200 rounded-2xl p-6 space-y-6"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex">
                      {Array(5)
                        .fill(0)
                        .map((_, i) => (
                          <svg
                            key={i}
                            xmlns="http://www.w3.org/2000/svg"
                            width="15"
                            height="15"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="lucide lucide-star text-transparent fill-[#FF8F20]"
                            aria-hidden="true"
                          >
                            <path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path>
                          </svg>
                        ))}
                    </div>
                    <p className="text-xs text-neutral-500">{item.date}</p>
                  </div>

                  <p className="text-sm/6 text-neutral-600">{item.text}</p>

                  <div className="flex items-center gap-4 mt-4">
                    {/* <img src={item.img} alt="User Avatar" className='w-13 h-13 rounded-full object-cover'/> */}
                    <div>
                      <p className="text-sm text-neutral-700">{item.name}</p>
                      <p className="text-xs font-medium text-neutral-500">
                        {item.role}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>
        <div className="hidden max-[768px]:flex items-center justify-center mt-5 space-x-2">
          {testimonials.map((_, index) => (
            <span
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? "bg-neutral-800" : "bg-neutral-300"
              }`}
            ></span>
          ))}
        </div>
      </section>
    </>
  );
};

export default Testimonials;

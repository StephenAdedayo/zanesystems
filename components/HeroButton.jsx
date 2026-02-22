import Link from 'next/link'
import React from 'react'

const HeroButton = ({text, href}) => {
  return (
      

         <Link
         href={href}>

    <button
              style={{ backgroundColor: "rgba(255, 255, 255, 0.12)" }}
              className=" inline-flex items-center tracking-wide font-semibold  text-white text-base rounded-full px-8 py-4 gap-3 transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 cursor-pointer"
            >
      {text}
<span className="text-base">→</span>

            </button>
            </Link>
  )
}

export default HeroButton

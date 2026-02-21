import Link from 'next/link'
import React from 'react'

const Button = ({text, className, href}) => {
  return (
                <Link href={href}
            className={`inline-flex items-center gap-3 font-outfit text-sm font-semibold tracking-wide text-white px-6 py-3 rounded-lg transition-all duration-300 hover:opacity-90 hover:-translate-y-0.5 ${className}`}
            style={{ background: '#14516e' }}>
                {text}            
                <span className='text-base'>→</span>
          </Link>

  )
}

export default Button

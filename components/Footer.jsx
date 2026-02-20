import Link from 'next/link'
import React from 'react'

const Footer = () => {

    const year = new Date().getFullYear()

  return (
        <footer className='bg-nav py-12 px-4 sm:px-6 lg:px-8'>
                <div className='w-full max-w-7xl mx-auto'>
            
                    <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
            
                        <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
                            <Link href="/">
                            <p className='uppercase text-4xl text-white'>Zane systems</p>
                            </Link>
                            <div className='w-full max-w-52 h-px mt-8 bg-linear-to-r from-black via-white/25 to-black'></div>
                            <p className='text-sm text-white/60 mt-6 max-w-sm leading-relaxed'>
Zane Systems Limited is a trusted aviation procurement and supply chain partner, delivering certified aircraft sourcing solutions through a reliable global supplier network.
                            </p>
                        </div>
            
                        <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className='text-sm text-white font-medium'>Important Links</h3>
                            <div className="flex flex-col gap-2 mt-6">
                                <Link href="/" className='text-sm text-white/60 hover:text-white transition-colors'>Home</Link>
                                <Link href="/about" className='text-sm text-white/60 hover:text-white transition-colors'>About</Link>
                                <Link href="/services" className='text-sm text-white/60 hover:text-white transition-colors'>Services</Link>
                                <Link href="/contact" className='text-sm text-white/60 hover:text-white transition-colors'>Contact</Link>
                                {/* <Link href="#" className='text-sm text-white/60 hover:text-white transition-colors'>FAQ</Link> */}
                            </div>
                        </div>
            
                        <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                            <h3 className='text-sm text-white font-medium'>Social Links</h3>
                            <div className="flex flex-col gap-2 mt-6">
                                <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Twitter</a>
                                <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Instagram</a>
                                <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Youtube</a>
                                <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Linkedin</a>
                            </div>
                        </div>
            
                        <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
                            <div className='text-white'>
                        <h2 className="font-semibold  text-sm mb-5 ">Get in touch</h2>
                        <div className="text-sm  space-y-2">
                            <p className='text-sm text-white/60 hover:text-white transition-colors'>+234 8143184639</p>
                            <p className='text-sm text-white/60 hover:text-white transition-colors'>zanesystems@gmail.com</p>
                        </div>
                    </div>
                        </div>
            
                    </div>
            
                    <div className='w-full h-px mt-16 mb-4 bg-linear-to-r from-black via-white/25 to-black'></div>
            
                    <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                        <p className='text-xs text-white/60'>© {year} Zane Systems Limited</p>
                        {/* <div className="flex items-center gap-6">
                            <a href='#' className='text-xs text-white/60 hover:text-white transition-colors'>Terms & Conditions</a>
                            <div className='w-px h-4 bg-white/20'></div>
                            <a href='#' className='text-xs text-white/60 hover:text-white transition-colors'>Privacy Policy</a>
                        </div> */}
                    </div>
                </div>
            </footer>
  )
}

export default Footer

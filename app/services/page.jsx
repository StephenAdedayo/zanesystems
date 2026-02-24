import Cta from '@/components/Cta'
import OurServices from '@/components/OurServices'
import ServiceHero from '@/components/ServiceHero'
import WhyChooseService from '@/components/WhyChooseService'
import React from 'react'


export const metadata = {
  title: "Our Services | Aviation Procurement & Logistics",
  description: "Explore our comprehensive aviation services including aircraft sourcing, parts procurement, and vendor management.",
};

const Services = () => {
  return (
    <div className='bg-slate-100'>
        <ServiceHero />
        <OurServices />
        <WhyChooseService />
        <Cta />
    </div>
  )
}

export default Services

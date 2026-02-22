import Cta from '@/components/Cta'
import OurServices from '@/components/OurServices'
import ServiceHero from '@/components/ServiceHero'
import WhyChooseService from '@/components/WhyChooseService'
import React from 'react'

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

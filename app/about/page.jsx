import AboutUsHero from '@/components/AboutUsHero'
import Cta from '@/components/Cta'
import LeaderShip from '@/components/LeaderShip'
import OurMission from '@/components/OurMission'
import WhatWeStandFor from '@/components/WhatWeStandFor'
import React from 'react'

const About = () => {
  return (
    <div className='bg-slate-100'>
        <AboutUsHero />
        <OurMission />
        <WhatWeStandFor />
        <LeaderShip />
        <Cta />
    </div>
  )
}

export default About

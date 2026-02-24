"use client"

import { services } from '@/assets/assets'
import OtherServices from '@/components/OtherServices'
import ServiceOverview from '@/components/ServiceOverview'
import SingleServiceHero from '@/components/SingleServiceHero'
import WhatsIncluded from '@/components/WhatsIncluded'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'


export async function generateMetadata({ params }) {
  const slug = params.slug;
  // This turns "aircraft-parts" into "Aircraft Parts"
  const formattedTitle = slug.charAt(0).toUpperCase() + slug.slice(1).replace(/-/g, ' ');

  return {
    title: `${formattedTitle}`,
    description: `Expert ${formattedTitle} services tailored for global aviation stakeholders.`,
  };
}

const SingleService = () => {

    const {slug} = useParams()
const [service, setService] = useState(null)

const getSingleService = () => {

    services.map((service) => {
         if(service.slug === slug){
            setService(service)
         }
    })

}


useEffect(() => {
   getSingleService()
}, [])

  return service ? (
    <div className='bg-slate-100'>
      <SingleServiceHero service={service}/>
      <ServiceOverview service={service}/>
      <WhatsIncluded service={service}/>
      <OtherServices service={service}/>
    </div>
  ) : <div>Loading.....</div>
}

export default SingleService

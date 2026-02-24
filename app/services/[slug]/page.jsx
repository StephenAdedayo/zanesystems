"use client"

import { services } from '@/assets/assets'
import OtherServices from '@/components/OtherServices'
import ServiceOverview from '@/components/ServiceOverview'
import SingleServiceHero from '@/components/SingleServiceHero'
import WhatsIncluded from '@/components/WhatsIncluded'
import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'



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
  ) : <div className='loader flex items-center justify-center'></div>
}


export default SingleService

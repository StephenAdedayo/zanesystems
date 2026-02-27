"use client"

import { services } from '@/assets/assets'
import OtherServices from '@/components/OtherServices'
import ServiceOverview from '@/components/ServiceOverview'
import SingleServiceHero from '@/components/SingleServiceHero'
import WhatsIncluded from '@/components/WhatsIncluded'
// import { useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'



const ServiceContent = ({slug}) => {

// const {slug} = useParams()
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

  ) : <div className='flex justify-center items-center h-screen w-full'>
         <div className='loader'></div>
  </div> 
}


export default ServiceContent

import ServiceContent from '@/components/ServiceContent';
import React from 'react'


export const generateMetadata =  async ({ params }) => {
  const { slug } = await params;
  // Capitalize the slug for the title (e.g., "aircraft-procurement" -> "Aircraft Procurement")
  const formattedTitle = slug.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');

  return {
    title: `${formattedTitle} | Zane Systems`,
    description: "Zane Systems provides elite aviation procurement and strategic supply chain solutions. From aircraft acquisition to global parts sourcing, we deliver certified excellence and seamless logistics for the aviation industry.",
    alternates: {
      canonical: `https://zanesystemsgs.com/services/${slug}`,
    }
  }
}

const SingleService = async ({params}) => {

  const {slug} = await params

  return (
    <div>
      <ServiceContent slug={slug}/>
    </div>
  )
}

export default SingleService

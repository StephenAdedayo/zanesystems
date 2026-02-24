import ContactHero from '@/components/ContactHero'
import Cta from '@/components/Cta'
import ContactForm from '@/components/ContactForm'
import React from 'react'

export const metadata = {
  title: "Contact Us",
  description: "Get in touch with Zane Systems for aircraft procurement inquiries and aviation supply chain support.",
};

const Contact = () => {
  return (
    <div className='bg-slate-100'>
        <ContactHero />
        <ContactForm />
        <Cta />
    </div>
  )
}

export default Contact

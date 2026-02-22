import ContactHero from '@/components/ContactHero'
import Cta from '@/components/Cta'
import ContactForm from '@/components/ContactForm'
import React from 'react'

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

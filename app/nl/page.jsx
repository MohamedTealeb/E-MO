import Hero from '@/components/Sections/Hero'
import ImageGallery from '@/components/Sections/ImageGallery'
import Footer from '@/components/shared/Footer'
import translations from '@/translations/nl.json'
import React from 'react'

function page() {
  return (
    <>
    <Hero />
    <ImageGallery t={translations} />
    <Footer t={translations} locale="nl" />
    </>
  )
}

export default page
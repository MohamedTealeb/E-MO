import Hero from '@/components/Sections/Hero'
import ImageGallery from '@/components/Sections/ImageGallery'
import ImageSlider from '@/components/Sections/ImageSlider'
import Footer from '@/components/shared/Footer'
import translations from '@/translations/nl.json'
import React from 'react'

function page() {
  return (
    <>
    <Hero />
    <ImageSlider />
    <ImageGallery t={translations} />
    <Footer t={translations} locale="nl" />
    </>
  )
}

export default page
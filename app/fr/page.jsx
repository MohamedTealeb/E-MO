import Hero from '@/components/Sections/Hero'
import ImageGallery from '@/components/Sections/ImageGallery'
import Footer from '@/components/shared/Footer'
import translations from '@/translations/fr.json'
import React from 'react'
import ImageSlider from '@/components/Sections/ImageSlider'
import About from '@/components/Sections/About'
import fr from '@/translations/fr.json';
function page() {
  return (
    <>
    <Hero />
    <About t={fr.about} />
    <ImageSlider />
    <ImageGallery t={translations} />
    <Footer t={translations} locale="fr" />
    </>
  )
}

export default page
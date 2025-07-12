import Hero from '@/components/Sections/Hero'
import ImageGallery from '@/components/Sections/ImageGallery'
import Footer from '@/components/shared/Footer'
import translations from '@/translations/fr.json'
import React from 'react'
import ImageSlider from '@/components/Sections/ImageSlider'
import About from '@/components/Sections/About'
import fr from '@/translations/fr.json';
import Slider_Hero from '@/components/Sections/Slider_Hero'
import Testmonials from './../../components/Sections/Testmonials';
import HeroPromise from '@/components/Sections/HeroPromise';
import QuoteSection from '@/components/Sections/QuoteSection'
import AboutUS from '@/components/Sections/AboutUS'

function page() {
  return (
    <>
    <Hero />
    <Slider_Hero/>
    <Testmonials t={fr} />
    <AboutUS t={fr.AboutUS} />
    <HeroPromise />
    <QuoteSection />
    <ImageSlider />

    <Footer t={translations} locale="fr" />
    </>
  )
}

export default page
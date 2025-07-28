import About from "@/components/Sections/About";
import Hero from "@/components/Sections/Hero";
import ImageGallery from "@/components/Sections/ImageGallery";
import Footer from "@/components/shared/Footer";
import translations from "@/translations/nl.json";
import React from "react";
import nl from "@/translations/nl.json";
import Slider_Hero from "@/components/Sections/Slider_Hero";
import ImageSlider from "@/components/Sections/ImageSlider";
import Testmonials from './../../components/Sections/Testmonials';
import HeroPromise from "@/components/Sections/HeroPromise";
import QuoteSection from "@/components/Sections/QuoteSection";
import AboutUS from "@/components/Sections/AboutUS";

function page() {
  return (
    <>
      <Hero />
      <Slider_Hero/>
   
      <AboutUS t={nl.AboutUS} />
      <HeroPromise />
      <QuoteSection />
      <ImageSlider />


     
      <Footer t={translations} locale="nl" />
    </>
  );
}

export default page;

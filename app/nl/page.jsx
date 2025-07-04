import About from "@/components/Sections/About";
import Hero from "@/components/Sections/Hero";
import ImageGallery from "@/components/Sections/ImageGallery";
import ImageSlider from "@/components/Sections/ImageSlider";
import Footer from "@/components/shared/Footer";
import translations from "@/translations/nl.json";
import React from "react";
import nl from "@/translations/nl.json";

function page() {
  return (
    <>
      <Hero />
      <About t={nl.about} />

      <ImageGallery t={translations} />
      <Footer t={translations} locale="nl" />
    </>
  );
}

export default page;

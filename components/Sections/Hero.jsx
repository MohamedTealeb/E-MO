"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ArrowRight } from "lucide-react";
import { ArrowLeft } from "lucide-react";

const Hero = () => {
  const [locale, setLocale] = useState("fr");
  const [t, setT] = useState(null);
  const [current, setCurrent] = useState(0);

  const imageRefs = useRef([]);
  const textRef = useRef(null);

  const carouselImages = [
    { src: "/unsplash_s95oB2n9jng.png", alt: "Kitchen Renovation", label: "Kitchen" },
  
  ];

  useEffect(() => {
    const storedLocale = localStorage.getItem("preferred-locale") || "fr";
    setLocale(storedLocale);

    const loadTranslation = async () => {
      const data = await import(`@/translations/${storedLocale}.json`);
      setT(data.default);
    };

    loadTranslation();
  }, []);

  const animateSlide = (index) => {
    const images = imageRefs.current;
    gsap.to(images, { opacity: 0, duration: 1, ease: "power2.out" });

    gsap.fromTo(
      images[index],
      { opacity: 0, scale: 1.05 },
      { opacity: 1, scale: 1, duration: 1.5, ease: "power2.out" }
    );

    gsap.fromTo(
      textRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: "power3.out" }
    );
  };

  useEffect(() => {
    animateSlide(current);
  }, [current]);

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % carouselImages.length);
  };

  const handlePrev = () => {
    setCurrent(
      (prev) => (prev - 1 + carouselImages.length) % carouselImages.length
    );
  };

  const handleScrollDown = () => {
    const nextSection = document.querySelector('section:not(.relative)') || 
                       document.querySelector('main') || 
                       document.querySelector('div[class*="section"]');
    
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  if (!t) return null;

  return (
    <section className="relative px-4 sm:px-8 md:px-16 lg:px-30 mt-20 h-screen w-full overflow-hidden bg-white transition-colors duration-500">
      {/* Background images */}
      <div className="absolute px-4 sm:px-8 md:px-16 lg:px-30 inset-0 w-full h-full z-0">
        {carouselImages.map((img, index) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            ref={(el) => (imageRefs.current[index] = el)}
            className={`absolute inset-0 px-4 sm:px-8 md:px-16 lg:px-20 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "z-10" : "z-0"
            }`}
            style={{ opacity: index === current ? 1 : 0 }}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 px-4 sm:px-8 md:px-16 lg:px-20 bg-gradient-to-b sm:bg-gradient-to-r from-[#1A3C57]/80 sm:from-[#1A3C57]/10 via-[#1A3C57]/60 to-transparent z-10" />
      </div>

      {/* Text content */}
      <div
        ref={textRef}
        className="absolute inset-0 z-20 flex items-center justify-center sm:justify-start px-4 sm:px-8 md:px-16 lg:px-30"
      >
        <div className="text-white max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl space-y-4 sm:space-y-6 lg:space-y-8 text-center sm:text-left">
          <h1 className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-bold drop-shadow-xl transition-colors duration-500 leading-tight">
            {t?.hero?.headline || "Rénovez votre maison avec style"}
          </h1>
          <p className="text-lg sm:text-lg md:text-xl lg:text-2xl opacity-90 drop-shadow-md transition-colors duration-500 leading-relaxed">
            {t?.hero?.subtext || "Des solutions de rénovation complètes et modernes"}
          </p>
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2 sm:pt-4 justify-center sm:justify-start">
            <Link href={`/${locale}/about`}>
              <button className="bg-[#1A3C57] cursor-pointer text-white px-8 sm:px-8 py-4 sm:py-4 rounded-lg font-semibold transition shadow-lg hover:bg-[#0f2a3f] text-base sm:text-base w-full sm:w-auto">
                {t?.buttons?.getStarted || "Commencer"}
              </button>
            </Link>
            <Link href={`/${locale}/contact`}>
              <button className="bg-white text-gray-800 cursor-pointer px-8 sm:px-8 py-4 sm:py-4 rounded-lg font-semibold transition border border-white hover:bg-gray-50 shadow-lg text-base sm:text-base w-full sm:w-auto">
                {t?.buttons?.contactUs || "Contactez-nous"}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div 
          className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleScrollDown}
        >
          <img 
            src="/ep_arrow-down-bold.png" 
            alt="Scroll down" 
            className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert"
          />
          <img 
            src="/ep_arrow-down-bold.png" 
            alt="Scroll down" 
            className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert -mt-1 sm:-mt-2"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

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
    { src: "/home.jpg", alt: "Kitchen Renovation", label: "Kitchen" },
    { src: "/home2.jpg", alt: "Home Renovation", label: "Home" },
    { src: "/bathroom.jpg", alt: "Bathroom Renovation", label: "Bathroom" },
    { src: "/painting.jpg", alt: "Painting Services", label: "Painting" },
    { src: "/flooring.jpg", alt: "Flooring Services", label: "Flooring" },
    { src: "/insulation.jpg", alt: "Insulation Services", label: "Insulation" },
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

  if (!t) return null;

  return (
    <section className="relative h-screen w-full overflow-hidden bg-white transition-colors duration-500">
      {/* Background images */}
      <div className="absolute inset-0 w-full h-full z-0">
        {carouselImages.map((img, index) => (
          <img
            key={img.src}
            src={img.src}
            alt={img.alt}
            ref={(el) => (imageRefs.current[index] = el)}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${
              index === current ? "z-10" : "z-0"
            }`}
            style={{ opacity: index === current ? 1 : 0 }}
          />
        ))}
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#1A3C57]/80 to-transparent z-10" />
      </div>

      {/* Text content */}
      <div
        ref={textRef}
        className="absolute inset-0 z-20 flex items-center lg:justify-start justify-center px-6 md:px-16"
      >
        <div className="text-white max-w-4xl space-y-6">
          <h1 className="text-2xl md:text-3xl font-bold drop-shadow-xl transition-colors duration-500">
            {t.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl opacity-90 drop-shadow-md transition-colors duration-500">
            {t.hero.subtext}
          </p>
          <div className="flex flex-row gap-4">
            <Link href={`/${locale}/about`}>
              <button className="bg-main cursor-pointer text-white px-4 py-4 rounded-md font-semibold  transition  shadow-md">
                {t.buttons.getStarted}
              </button>
            </Link>
            <Link href={`/${locale}/contact`}>
              <button className="bg-white/20 text-white cursor-pointer px-4 py-4 rounded-md font-semibold  transition border border-white hover:bg-white hover:text-black  shadow-md">
                {t.buttons.contactUs}
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom-right controls */}
      <div className="absolute bottom-6 right-6 z-30 flex items-center gap-3 bg-white/20 text-white px-4 py-2 rounded-lg shadow-lg backdrop-blur-sm lg:w-1/4 w-3/4">
        <div className="flex justify-between items-center gap-4">
          <div className="flex flex-col items-center gap-2">
            <button
              onClick={handlePrev}
              className="text-white hover:text-[#F9A826] transition-colors duration-300 text-lg cursor-pointer"
              aria-label="Previous"
            >
              <ArrowLeft />
            </button>
            <hr className="w-px h-8 bg-gray-300" />
            <button
              onClick={handleNext}
              className="text-white hover:text-[#F9A826] transition-colors duration-300 text-lg cursor-pointer"
              aria-label="Next"
            >
              <ArrowRight />
            </button>
          </div>
          <span className="text-sm md:text-base font-semibold  text-center">
            {carouselImages[current].label}
          </span>
        </div>
      </div>
    
    </section>
  );
};

export default Hero;

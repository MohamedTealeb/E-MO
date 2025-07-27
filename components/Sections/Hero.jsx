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

  if (!t) return null;

  return (
    <section className="relative mt-20 h-screen w-full overflow-hidden bg-white transition-colors duration-500">
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
              <button className="bg-white text-black cursor-pointer px-4 py-4 rounded-md font-semibold  transition border border-white hover:bg-white hover:text-black  shadow-md">
                {t.buttons.contactUs}
              </button>
            </Link>
          </div>
        </div>
      </div>

                  {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-30">
        <div className="flex flex-col items-center gap-1">
          <img 
            src="/ep_arrow-down-bold.png" 
            alt="Scroll down" 
            className="w-6 h-6 filter brightness-0 invert"
          />
          <img 
            src="/ep_arrow-down-bold.png" 
            alt="Scroll down" 
            className="w-6 h-6 filter brightness-0 invert -mt-1"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

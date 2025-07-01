"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Hero = () => {
  const [locale, setLocale] = useState("fr");
  const [t, setT] = useState(null);

  useEffect(() => {
    const storedLocale = localStorage.getItem("preferred-locale") || "fr";
    setLocale(storedLocale);

    const loadTranslation = async () => {
      const data = await import(`@/translations/${storedLocale}.json`);
      setT(data.default);
    };

    loadTranslation();
  }, []);

  if (!t) return null; // Optional: add a spinner/loading fallback

  const carouselImages = [
    { src: "/hero.jpg", alt: "Hero Image" },
    { src: "/kitchen.jpg", alt: "Kitchen Renovation" },
    { src: "/bathroom.jpg", alt: "Bathroom Renovation" },
    { src: "/painting.jpg", alt: "Painting Services" },
    { src: "/flooring.jpg", alt: "Flooring Services" },
    { src: "/insulation.jpg", alt: "Insulation Services" },
 
  ];

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Carousel Background */}
      <Carousel className="w-full h-full" opts={{ loop: true, autoplay: { delay: 5000 } }}>
        <CarouselContent className="h-full">
          {carouselImages.map((image, index) => (
            <CarouselItem key={index} className="h-screen">
              <div className="relative w-full h-screen">
                <img
                  src={image.src}
                  alt={image.alt}
                  loading="lazy"
                  className="object-cover"
                  priority={index === 0}
                />
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-4 cursor-pointer bg-accent z-10" />
        <CarouselNext className="right-4 cursor-pointer bg-accent z-10" />
      </Carousel>

      {/* Overlay with text content */}
      <div className="absolute inset-0 flex items-center justify-center z-5">
        <div className="text-center text-white max-w-4xl mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg">
            {t.hero.headline}
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-lg">
            {t.hero.subtext}
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <Link href={`/${locale}/about`}>
              <button className="bg-accent cursor-pointer text-white px-8 py-4 rounded-md font-semibold hover:opacity-90 transition text-lg shadow-lg">
                {t.buttons.getStarted}
              </button>
            </Link>
            <Link href={`/${locale}/contact`}>
              <button className="bg-white cursor-pointer text-main px-8 py-4 rounded-md font-semibold hover:bg-gray-100 transition border border-white text-lg shadow-lg">
                {t.buttons.contactUs}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

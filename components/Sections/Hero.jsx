"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const Hero = () => {
  const [locale, setLocale] = useState("fr");
  const [t, setT] = useState(null);
  const [current, setCurrent] = useState(0);

  const carouselImages = [
    { src: "/hero.jpg", alt: "Hero Image" },
    { src: "/kitchen.jpg", alt: "Kitchen Renovation" },
    { src: "/bathroom.jpg", alt: "Bathroom Renovation" },
    { src: "/painting.jpg", alt: "Painting Services" },
    { src: "/flooring.jpg", alt: "Flooring Services" },
    { src: "/insulation.jpg", alt: "Insulation Services" },
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

  // Auto slide every 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearTimeout(timer);
  }, [current]);

  if (!t) return null; // Optional: add a spinner/loading fallback

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Slider Images */}
      <div className="relative w-full h-[60vw] min-h-[300px] max-h-screen">
        <AnimatePresence mode="wait">
          <motion.div
            key={carouselImages[current].src}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: 0.7, ease: "easeInOut" }}
            className="absolute inset-0 w-full h-full"
          >
            <Image
              src={carouselImages[current].src}
              alt={carouselImages[current].alt}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 100vw"
            />
          </motion.div>
        </AnimatePresence>
      </div>
      {/* Manual Controls (Indicators) */}
      <div className="mt-2 flex justify-center md:absolute md:bottom-4 md:left-1/2 md:-translate-x-1/2 md:z-10">
        {carouselImages.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-3 h-3 rounded-full border-2 ${current === idx ? 'bg-accent border-accent' : 'bg-white border-gray-300'} transition mx-1`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>

      {/* Overlay with text content */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center z-5"
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div
          className="text-center text-white max-w-4xl mx-auto px-4"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold mb-6 drop-shadow-lg"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {t.hero.headline}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl mb-8 opacity-90 drop-shadow-lg"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
            {t.hero.subtext}
          </motion.p>
          <motion.div
            className="flex flex-col md:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: 'easeOut' }}
            viewport={{ once: true, amount: 0.3 }}
          >
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
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;

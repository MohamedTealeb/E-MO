"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import hero from '@/public/hero.jpg';
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

  return (
    <section className="flex lg:flex-row flex-col-reverse  text-white  text-center">
      <div className="flex flex-col lg:w-1/2 w-full justify-center items-center">
        <h1 className="text-xl md:text-3xl text-black font-bold mb-4">
          {t.hero.headline}
        </h1>
        <p className="text-lg md:text-xl text-black mb-8">{t.hero.subtext}</p>
        <div className="flex flex-col md:flex-row justify-center gap-4">
          <Link href={`/${locale}/about`}>
            <button className="bg-accent cursor-pointer text-white px-6 py-3 rounded-md font-semibold hover:opacity-90 transition">
              {t.buttons.getStarted}
            </button>
          </Link>
          <Link href={`/${locale}/contact`}>
            <button className="bg-white cursor-pointer text-main px-6 py-3 rounded-md font-semibold hover:bg-gray-100 transition border border-main">
              {t.buttons.contactUs}
            </button>
          </Link>
        </div>
      </div>
      <div className="flex lg:w-1/2 w-full p-12">
        <img src={hero.src} className="w-full h-[500px] rounded-b-full rounded-tl-full shadow-xl"/>
      </div>
    </section>
  );
};

export default Hero;

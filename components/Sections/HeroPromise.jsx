'use client';
import { useEffect, useState } from "react";
import Link from "next/link";

const HeroPromise = () => {
  const [t, setT] = useState(null);
  const [currentLocale, setCurrentLocale] = useState("fr");

  useEffect(() => {
    const locale = localStorage.getItem("preferred-locale") || "fr";
    setCurrentLocale(locale);
    import(`@/translations/${locale}.json`).then((data) => setT(data.default));
  }, []);

  if (!t) return null;

  return (
    <section
      className="relative min-h-screen w-full flex flex-col items-center justify-center px-4 sm:px-6 md:px-8"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/unsplash_U-k6XLlml1I.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="z-10 flex flex-col items-center justify-center w-full h-full text-center">
        <span className="uppercase tracking-widest text-sm sm:text-lg md:text-2xl font-bold text-white mb-3 sm:mb-4 drop-shadow-lg">
          {t.heroPromise.subtitle}
        </span>
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white text-center mb-6 sm:mb-8 drop-shadow-lg leading-tight px-4">
          {t.heroPromise.title}
        </h1>
        <Link href={`/${currentLocale}/contact`}>
          <button className="bg-white cursor-pointer text-black px-6 sm:px-8 py-3 sm:py-4 rounded-md font-semibold shadow-md hover:bg-gray-100 transition text-sm sm:text-base">
            {t.heroPromise.button}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroPromise; 
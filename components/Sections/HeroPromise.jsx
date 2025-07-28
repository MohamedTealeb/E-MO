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
      className="relative min-h-screen w-full flex flex-col items-center justify-center"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.4),rgba(0,0,0,0.4)), url(/unsplash_U-k6XLlml1I.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      <div className="z-10 flex flex-col items-center justify-center w-full h-full">
        <span className="uppercase tracking-widest text-xl md:text-2xl font-bold  text-white mb-4">{t.heroPromise.subtitle}</span>
        <h1 className="text-xl md:text-4xl font-bold text-white text-center mb-8 drop-shadow-lg">
          {t.heroPromise.title}
        </h1>
        <Link href={`/${currentLocale}/contact`}>
          <button className="bg-white cursor-pointer text-black px-8 py-4 rounded-md font-semibold shadow-md hover:bg-gray-100 transition">
            {t.heroPromise.button}
          </button>
        </Link>
      </div>
    </section>
  );
};

export default HeroPromise; 
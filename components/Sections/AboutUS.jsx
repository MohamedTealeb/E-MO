'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaAward, FaCheckCircle } from 'react-icons/fa';

const Aboutus = ({ t }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1 }
    );
    gsap.fromTo(
      [cardRef1.current, cardRef2.current],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, delay: 0.4 }
    );
  }, []);

  if (!t) return null;

  return (
    <section className="bg-gray-200 py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-xl sm:rounded-2xl lg:rounded-3xl p-4 sm:p-6 md:p-8 lg:p-12 shadow-xl overflow-hidden">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-6 sm:gap-8 lg:gap-12">
            {/* Left - Text and Cards */}
            <div
              ref={containerRef}
              className="flex-1 w-full"
            >
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-[#1A3C57] mb-3 sm:mb-4 md:mb-6 leading-tight">
                {t.title || "À propos de nous – E&MO, entreprise de construction et rénovation en Belgique"}
              </h1>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-700 leading-relaxed mb-4 sm:mb-6 md:mb-8 lg:mb-10 max-w-2xl">
                {t.text || "E&MO est votre partenaire idéal en Belgique pour tous vos travaux de construction, rénovation, finitions, menuiserie et aménagement paysager. Nous nous engageons à fournir des services de haute qualité à des prix compétitifs, utilisant des techniques modernes adaptées à tous vos besoins résidentiels et commerciaux."}
              </p>

              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6">
                <div
                  ref={cardRef1}
                  className="flex-1 bg-[#1A3C57] text-white shadow-lg rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 "
                >
                  <FaAward className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-white mb-2 sm:mb-3 " />
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-white mb-1 sm:mb-2">
                    {t.experience || "Plus de 10 ans d'expérience"}
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-200">
                    {t.experienceDesc || "Expertise spécialisée en construction et rénovation"}
                  </p>
                </div>

                <div
                  ref={cardRef2}
                  className="flex-1 bg-gray-300 text-main shadow-lg rounded-lg sm:rounded-xl md:rounded-2xl p-3 sm:p-4 md:p-6 "
                >
                  <FaCheckCircle className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-main mb-2 sm:mb-3 " />
                  <h3 className="text-sm sm:text-base md:text-lg lg:text-xl font-semibold text-main mb-1 sm:mb-2">
                    {t.quality || "Travail soigné et matériaux de qualité"}
                  </h3>
                  <p className="text-xs sm:text-sm text-main">
                    {t.qualityDesc || "Matériaux certifiés et techniques modernes"}
                  </p>
                </div>
              </div>
            </div>

            {/* Right - Image */}
            <div
              ref={imageRef}
              className="w-full sm:w-[280px] md:w-[320px] lg:w-[380px] xl:w-[400px] h-[400px] sm:h-[480px] md:h-[560px] lg:h-[640px] xl:h-[920px] rounded-xl sm:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl flex-shrink-0 mt-6 lg:mt-0"
            >
              <img
                src="/unsplash_sgIhwj4cSiU.png"
                alt="About Us"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;


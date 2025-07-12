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
    <section className="bg-[#eee] py-12 sm:py-16 md:py-20 px-4 sm:px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 lg:gap-12">
          {/* Left - Text and Cards */}
          <div
            ref={containerRef}
            className="backdrop-blur-md bg-white/20 rounded-2xl lg:rounded-3xl shadow-xl p-6 sm:p-8 md:p-12 flex-1 w-full"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-main mb-4 sm:mb-6 leading-tight">
              {t.title || "À propos de nous"}
            </h1>
            <p className="text-sm sm:text-base md:text-lg text-gray-800 leading-relaxed mb-6 sm:mb-8 md:mb-10 max-w-2xl">
              {t.text || "E&MO est votre partenaire idéal en Belgique pour tous vos travaux de construction, rénovation, finitions, menuiserie et aménagement paysager."}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
              <div
                ref={cardRef1}
                className="flex-1 bg-white bg-opacity-70 border border-gray-200 shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center"
              >
                <FaAward className="text-2xl sm:text-3xl md:text-4xl text-secondary mb-2 sm:mb-3 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold text-main mb-1 sm:mb-2">
                  {t.experience || "Plus de 10 ans d'expérience"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {t.experienceDesc || "Expertise spécialisée en construction et rénovation"}
                </p>
              </div>

              <div
                ref={cardRef2}
                className="flex-1 bg-white bg-opacity-70 border border-gray-200 shadow-lg rounded-xl sm:rounded-2xl p-4 sm:p-6 text-center"
              >
                <FaCheckCircle className="text-2xl sm:text-3xl md:text-4xl text-secondary mb-2 sm:mb-3 mx-auto" />
                <h3 className="text-lg sm:text-xl font-semibold text-main mb-1 sm:mb-2">
                  {t.quality || "Travail soigné et matériaux de qualité"}
                </h3>
                <p className="text-xs sm:text-sm text-gray-600">
                  {t.qualityDesc || "Matériaux certifiés et techniques modernes"}
                </p>
              </div>
            </div>
          </div>

          {/* Right - Image */}
          <div
            ref={imageRef}
            className="w-full sm:w-[300px] md:w-[350px] lg:w-[400px] h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl flex-shrink-0"
          >
            <img
              src="/About.jpg"
              alt="About Us"
              className="w-full h-full object-cover object-center"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutus;


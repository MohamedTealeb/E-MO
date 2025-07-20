'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import {
  FaAward,
  FaCheckCircle,
  FaTools,
  FaLeaf,
  FaClock,
  FaHandshake,
  FaStar,
  FaUsers,
  FaLightbulb,
  FaPhone,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

const About = ({ t }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const sectionsRef = useRef(null);
  const faqRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3 }
    );
    gsap.fromTo(
      sectionsRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.6 }
    );

    if (faqRef.current) {
      gsap.fromTo(
        faqRef.current.querySelector('.faq-header'),
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, delay: 0.8 }
      );

      gsap.fromTo(
        faqRef.current.querySelectorAll('.faq-item'),
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.15,
          delay: 1.0,
          ease: "power2.out"
        }
      );
    }
  }, []);

  if (!t) return null;

  const toggleFaq = (faqId) => {
    setOpenFaq(prev => prev === faqId ? null : faqId);
  };

  return (
    <section ref={containerRef} className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-6">
      <div className="relative w-full h-[320px] md:h-[700px] flex items-center justify-center mb-16 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/portfolio.jpg')" }}></div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center drop-shadow-lg">{t?.title}</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-12 mb-8 md:mb-16">
          <div ref={imageRef} className="lg:col-span-1 mb-6 md:mb-0">
            <div className="relative w-full h-[180px] xs:h-[220px] sm:h-[260px] md:h-[350px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img src="/About.jpg" alt="E&MO Construction" className="w-full h-full object-cover object-center" />
            </div>
          </div>

          <div ref={sectionsRef} className="lg:col-span-2 space-y-6 sm:space-y-8 md:space-y-12">
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/50">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-main to-secondary rounded-xl flex items-center justify-center">
                  <FaTools className="text-white text-lg sm:text-xl" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-main">{t.expertise.title}</h2>
              </div>
              <p className="text-base sm:text-lg text-dark/80 mb-4 sm:mb-6">{t.expertise.text}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                {t.expertise.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-main/5 to-secondary/5 rounded-xl">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-dark/80 font-medium text-xs sm:text-base">{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-dark/70 italic text-xs sm:text-base">{t.expertise.guarantee}</p>
            </div>
          </div>
        </div>

        <div ref={faqRef} className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/50">
          <div className="faq-header flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <FaStar className="text-white text-lg sm:text-xl" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-main">{t.faq?.title}</h2>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 - Expertise */}
            <div className="faq-item bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFaq('expertise')}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600">{t.faq?.expertise?.question}?</h3>
                </div>
                <div className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  {openFaq === 'expertise' ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
                </div>
              </div>
              {openFaq === 'expertise' && (
                <div className="mt-4 pt-4 border-t border-blue-200 text-dark/80 text-sm sm:text-base leading-relaxed whitespace-pre-line transition-all duration-300">
                  {t.faq?.expertise?.answer}
                </div>
              )}
            </div>

            {/* FAQ Item 2 - Values */}
            <div className="faq-item bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFaq('values')}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600">{t.faq?.values?.question}?</h3>
                </div>
                <div className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  {openFaq === 'values' ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
                </div>
              </div>
              {openFaq === 'values' && (
                <div className="mt-4 pt-4 border-t border-blue-200 text-dark/80 text-sm sm:text-base leading-relaxed whitespace-pre-line transition-all duration-300">
                  {t.faq?.values?.answer}
                </div>
              )}
            </div>

            {/* FAQ Item 3 - Why Choose */}
            <div className="faq-item bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFaq('whyChoose')}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600">{t.faq?.whyChoose?.question}?</h3>
                </div>
                <div className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  {openFaq === 'whyChoose' ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
                </div>
              </div>
              {openFaq === 'whyChoose' && (
                <div className="mt-4 pt-4 border-t border-blue-200 text-dark/80 text-sm sm:text-base leading-relaxed whitespace-pre-line transition-all duration-300">
                  {t.faq?.whyChoose?.answer}
                </div>
              )}
            </div>

            {/* FAQ Item 4 - Vision */}
            <div className="faq-item bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFaq('vision')}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600">{t.faq?.vision?.question}?</h3>
                </div>
                <div className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  {openFaq === 'vision' ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
                </div>
              </div>
              {openFaq === 'vision' && (
                <div className="mt-4 pt-4 border-t border-blue-200 text-dark/80 text-sm sm:text-base leading-relaxed whitespace-pre-line transition-all duration-300">
                  {t.faq?.vision?.answer}
                </div>
              )}
            </div>

            {/* FAQ Item 5 - Contact */}
            <div className="faq-item bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
              <div className="flex items-center justify-between cursor-pointer" onClick={() => toggleFaq('contact')}>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-sm font-bold">5</span>
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-blue-600">{t.faq?.contact?.question}?</h3>
                </div>
                <div className="text-blue-600 hover:text-blue-800 transition-colors duration-200">
                  {openFaq === 'contact' ? <FaChevronUp className="w-5 h-5" /> : <FaChevronDown className="w-5 h-5" />}
                </div>
              </div>
              {openFaq === 'contact' && (
                <div className="mt-4 pt-4 border-t border-blue-200 text-dark/80 text-sm sm:text-base leading-relaxed whitespace-pre-line transition-all duration-300">
                  {t.faq?.contact?.answer}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20">
          <div className="text-center mb-10">
            <span className="text-secondary font-bold uppercase tracking-wider block mb-2 text-base md:text-lg">{t?.customServiceSectionTitle}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{t?.customServiceSectionSubtitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t?.customServiceCards?.map((card, idx) => (
              <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-t-4 border-secondary">
                <span className="text-6xl mb-4">{card.icon}</span>
                <h3 className="text-xl font-bold text-secondary mb-2 text-center">{card.title}</h3>
                <p className="text-gray-700 text-center">{card.description}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

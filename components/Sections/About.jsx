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
  FaChevronUp,
  FaRegClock,
  FaTruckMoving,
  FaParking,
  FaBoxOpen
} from 'react-icons/fa';

const emojiToIconName = {
  '🚚': 'FaTruckMoving',
  '🅿️': 'FaParking',
  '📦': 'FaBoxOpen',
  '🛠️': 'FaTools',
};
const iconsMap = {
  FaTruckMoving,
  FaParking,
  FaBoxOpen,
  FaTools,
};

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

    if (window.whyImgRef) {
      gsap.fromTo(window.whyImgRef, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 0.3 });
    }
    if (window.visionImgRef) {
      gsap.fromTo(window.visionImgRef, { opacity: 0, x: -100 }, { opacity: 1, x: 0, duration: 1, delay: 0.3 });
    }
    if (window.contactImgRef) {
      gsap.fromTo(window.contactImgRef, { opacity: 0, x: 100 }, { opacity: 1, x: 0, duration: 1, delay: 0.3 });
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
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full px-4 z-10">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/30 shadow-2xl w-[800px] h-[150px] max-w-full flex flex-col items-center justify-center mx-auto">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-blue-500 mb-4 text-center drop-shadow-lg">{t?.title}</h1>
            <div className="text-gray-300  text-2xl font-bold text-center mt-2">
            {t?.Home} &nbsp; / &nbsp; {t?.title}
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 md:mb-16">
          {/* الصورة يمين */}
          <div ref={imageRef} className="order-1 lg:order-2">
            <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <img src="/About.jpg" alt="E&MO Construction" className="w-full h-full object-cover object-center" />
            </div>
          </div>
          {/* النص شمال */}
          <div ref={sectionsRef} className="order-2 lg:order-1 flex flex-col justify-center">
            <div className="   p-6 sm:p-8 md:p-10   ">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4 sm:mb-6">{t.expertise.title}</h2>
              <p className="text-base sm:text-lg text-dark/80   leading-relaxed">{t.expertise.text}</p>
              <div className="space-y-1  sm:mb-8">
                {t.expertise.services.map((service, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <span className="text-blue-500 text-lg mt-0.5">•</span>
                    <span className="text-dark/80 font-medium text-sm sm:text-base">{service}</span>
                  </div>
                ))}
              <p className="text-dark/70 italic text-sm sm:text-base">{t.expertise.guarantee}</p>
              </div>
            </div>
          </div>
        </div>
 {/* 
        <div ref={faqRef} className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/50">
          <div className="faq-header flex items-center gap-3 sm:gap-4 mb-6 sm:mb-8">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
              <FaStar className="text-white text-lg sm:text-xl" />
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-main">{t.faq?.title}</h2>
          </div>

          <div className="space-y-4">
            {/* FAQ Item 1 - Expertise */}
            {/* <div className="faq-item bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
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
            </div> */}

            {/* FAQ Item 2 - Values */}
            {/* <div className="faq-item bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
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
            </div> */}

            {/* FAQ Item 3 - Why Choose */}
            {/* <div className="faq-item bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
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
            </div> */}

            {/* FAQ Item 4 - Vision */}
            {/* <div className="faq-item bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
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
            </div> */}

            {/* FAQ Item 5 - Contact */}
            {/* <div className="faq-item bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-4 sm:p-6 border-l-4 border-blue-500 hover:shadow-lg transition-all duration-300">
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
            </div> */}
          {/* </div>
        </div> */}  

        {/* سكشن مكرر جديد يبدأ هنا */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 md:mb-16">
            <div className="order-2 lg:order-1">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/home.jpg" alt="E&MO Construction" className="w-full h-full object-cover object-center" />
              </div>
            </div>

            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="p-6 sm:p-8 md:p-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4 sm:mb-6">{t?.values?.title}</h2>
                {t?.values?.content && (
                  <div className="space-y-1 sm:mb-8">
                    {t.values.content.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 text-lg mt-0.5">•</span>
                        <span className="text-dark/80 font-medium text-sm sm:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                
              </div>
            </div>
          </div>
        </div>
        {/* سكشن مكرر جديد ينتهي هنا */}

        {/* سكشن: لماذا تختارنا */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 md:mb-16">
            {/* الصورة يمين */}
            <div className="order-1 lg:order-2" ref={el => (window.whyImgRef = el)}>
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/home2.jpg" alt="Pourquoi choisir E&MO" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            {/* النص شمال */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <div className="p-6 sm:p-8 md:p-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4 sm:mb-6">{t?.whyChoose?.title}</h2>
                <p className="text-base sm:text-lg text-dark/80 leading-relaxed mb-4">{t?.whyChoose?.text}</p>
                {t?.whyChoose?.benefits && (
                  <div className="space-y-1 sm:mb-8">
                    {t.whyChoose.benefits.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 text-lg mt-0.5">•</span>
                        <span className="text-dark/80 font-medium text-sm sm:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
                <p className="text-dark/70 italic text-sm sm:text-base">{t?.whyChoose?.conclusion}</p>
              </div>
            </div>
          </div>
        </div>

        {/* سكشن: الرؤية والرسالة */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 md:mb-16">
            {/* الصورة شمال */}
            <div className="order-2 lg:order-1" ref={el => (window.visionImgRef = el)}>
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/insulation.jpg" alt="Notre vision et mission" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            {/* النص يمين */}
            <div className="order-1 lg:order-2 flex flex-col justify-center">
              <div className="p-6 sm:p-8 md:p-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4 sm:mb-6">{t?.vision?.title}</h2>
                {Array.isArray(t?.vision?.text) ? (
                  <div className="space-y-1 sm:mb-8">
                    {t.vision.text.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 text-lg mt-0.5">•</span>
                        <span className="text-dark/80 font-medium text-sm sm:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500 text-lg mt-0.5">•</span>
                    <span className="text-dark/80 font-medium text-sm sm:text-base">{t?.vision?.text}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* سكشن: تواصل معنا */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 mb-8 md:mb-16">
            {/* الصورة يمين */}
            <div className="order-1 lg:order-2" ref={el => (window.contactImgRef = el)}>
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/portfolio.jpg" alt="Contactez-nous" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            {/* النص شمال */}
            <div className="order-2 lg:order-1 flex flex-col justify-center">
              <div className="p-6 sm:p-8 md:p-10">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-600 mb-4 sm:mb-6">{t?.contact?.title}</h2>
                {Array.isArray(t?.contact?.text) ? (
                  <div className="space-y-1 sm:mb-8">
                    {t.contact.text.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <span className="text-blue-500 text-lg mt-0.5">•</span>
                        <span className="text-dark/80 font-medium text-sm sm:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-start gap-2">
                    <span className="text-blue-500 text-lg mt-0.5">•</span>
                    <span className="text-dark/80 font-medium text-sm sm:text-base">{t?.contact?.text}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-20">
          <div className="text-center mb-10">
            <span className="text-secondary font-bold uppercase tracking-wider block mb-2 text-base md:text-lg">{t?.customServiceSectionTitle}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{t?.customServiceSectionSubtitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t?.customServiceCards?.map((card, idx) => {
              const iconName = emojiToIconName[card.icon] || 'FaTools';
              const Icon = iconsMap[iconName] || FaTools;
              return (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center">
                  <h3 className="text-xl font-bold text-secondary mb-2 text-center">
                    <Icon className="inline mr-2 text-secondary" /> {card.title}
                  </h3>
                  <p className="text-gray-700 text-center">{card.description}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};

export default About;

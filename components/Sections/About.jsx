'use client';

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
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

const About = ({ t, locale }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const sectionsRef = useRef(null);
  const faqRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(null);
  const router = useRouter();

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
    <section ref={containerRef} className="bg-gray-100 py-20 px-4">
      <div className="relative w-full h-[320px] md:h-[700px] flex items-center justify-center mb-16 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/unsplash_B0aCvAVSX8E.png')" }}></div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full px-4 z-10">
          <div className="bg-white rounded-lg p-8 shadow-xl w-[400px] max-w-full flex flex-col items-center justify-center mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              À propos de nous
            </h1>
            <div className="text-gray-600 text-lg font-medium text-center">
              Accueil / À propos de nous
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center gap-1">
            <img 
              src="/ep_arrow-down-bold.png" 
              alt="Scroll down" 
              className="w-8 h-8 filter brightness-0 invert"
            />
            <img 
              src="/ep_arrow-down-bold.png" 
              alt="Scroll down" 
              className="w-8 h-8 filter brightness-0 invert -mt-2"
            />
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Section - Image on Left, Dark Blue Text on Right */}
        <div className="relative mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div ref={imageRef} className="relative z-100000  ml-50 flex items-center justify-center">
              <div className="relative  h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/Rectangle 5.png" alt="E&MO Construction" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            
            {/* Right Side - Dark Blue Text Block */}
            <div ref={sectionsRef} className="relative z-20 bg-main rounded-3xl p-10 md:p-16 flex flex-col justify-center shadow-2xl -ml-12">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t.expertise.title}</h2>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">{t.expertise.text}</p>
                <div className="space-y-3 mb-6">
                  {t.expertise.services.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-white text-lg mt-1">•</span>
                      <span className="text-gray-200 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 italic">{t.expertise.guarantee}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Text */}
            <div className="flex flex-col justify-center">
              <div className="text-gray-800">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t?.values?.title}</h2>
                {t?.values?.content && (
                  <div className="space-y-4">
                    {t.values.content.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-gray-600 text-lg mt-1">•</span>
                        <span className="text-gray-700 font-medium text-lg leading-relaxed">{item}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative z-10">
              <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden ">
                <img src="/Rectangle 7.png" alt="E&MO Values" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-7xl mx-auto mt-20">
        <div className="relative mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div ref={imageRef} className="relative z-100000  ml-50 flex items-center justify-center">
              <div className="relative  h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/Rectangle 8.png" alt="E&MO Construction" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            
            {/* Right Side - Dark Blue Text Block */}
            <div ref={sectionsRef} className="relative z-20 bg-main rounded-3xl p-10 md:p-16 flex flex-col justify-center shadow-2xl -ml-12">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t?.whyChoose?.title}</h2>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">{t?.whyChoose?.text}</p>
                <div className="space-y-3 mb-6">
                  {t?.whyChoose?.benefits?.map((service, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <span className="text-white text-lg mt-1">•</span>
                      <span className="text-gray-200 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 italic">{t?.whyChoose?.conclusion}</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Vision Section */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Side - Text */}
            <div className="flex flex-col justify-center">
              <div className="text-gray-800">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t?.vision?.title}</h2>
                {Array.isArray(t?.vision?.text) ? (
                  <div className="space-y-3">
                    {t.vision.text.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <span className="text-gray-600 text-lg mt-1">•</span>
                        <span className="text-gray-700 font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-start gap-3">
                    <span className="text-gray-600 text-lg mt-1">•</span>
                    <span className="text-gray-700 font-medium">{t?.vision?.text}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative z-10" ref={el => (window.visionImgRef = el)}>
              <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/Rectangle 7 (1).png" alt="Notre vision et mission" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
       <div className="relative mt-20 mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div ref={imageRef} className="relative z-100000  ml-50 flex items-center justify-center">
              <div className="relative  h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/Rectangle 8 (1).png" alt="E&MO Construction" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            
            {/* Right Side - Dark Blue Text Block */}
            <div ref={sectionsRef} className="relative z-20 bg-main rounded-3xl p-10 md:p-16 flex flex-col justify-center shadow-2xl -ml-12">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">{t?.contact?.title}</h2>
                <p className="text-lg text-gray-200 mb-6 leading-relaxed">{t?.contact?.text}</p>
                <div className="space-y-3  mb-6">
                  {t?.contact?.services?.map((service, index) => (
                    <div key={index} className="flex gap-10 items-start ">
                      <span className="text-white text-lg mt-1">•</span>
                      <span className="text-gray-200 font-medium">{service}</span>
                    </div>
                  ))}
                </div>
                <div className=" mt-10  ml-80">
                  <Link 
                    href={`/${locale}/contact`}
                    className="bg-white cursor-pointer text-main font-bold py-4 px-10 rounded-xl hover:bg-gray-100 transition-colors text-lg"
                  >
                    {t?.contact?.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Cards Section */}
        <div className="max-w-7xl mx-auto mt-20">
          <div className="text-center mb-12">
            <span className="text-main font-bold uppercase tracking-wider block mb-2 text-base md:text-lg">{t?.customServiceSectionTitle}</span>
            <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{t?.customServiceSectionSubtitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {t?.customServiceCards?.map((card, idx) => {
              const iconName = emojiToIconName[card.icon] || 'FaTools';
              const Icon = iconsMap[iconName] || FaTools;
              return (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-6 flex flex-col r">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="text-main text-4xl" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{card.description}</p>
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

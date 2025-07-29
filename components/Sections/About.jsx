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
  '🚛': 'FaTruckMoving',
  '📦': 'FaBoxOpen',
  '🛠': 'FaTools',
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

  // فحص الترجمة
  if (!t) {
    return <div>Loading...</div>;
  }

  const toggleFaq = (faqId) => {
    setOpenFaq(prev => prev === faqId ? null : faqId);
  };

  const handleScrollDown = () => {
    // البحث عن أول قسم محتوى بعد Hero
    const contentSection = document.querySelector('.max-w-7xl');
    
    if (contentSection) {
      contentSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: البحث عن أي قسم آخر
      const nextSection = document.querySelector('section:not(.min-h-screen)') || 
                         document.querySelector('main') || 
                         document.querySelector('div[class*="section"]');
      
      if (nextSection) {
        nextSection.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        // Fallback: التمرير لأسفل بمقدار ارتفاع الشاشة
        window.scrollTo({
          top: window.innerHeight,
          behavior: 'smooth'
        });
      }
    }
  };

  return (
    <section ref={containerRef} className="bg-gray-100 py-8 sm:py-12 md:py-16 lg:py-20 px-4  md:px-16 lg:px-30">
       <div className="relative w-full h-[300px] sm:h-[400px] md:h-[700px]"> {/* Responsive height */}
    <img src="/unsplash_B0aCvAVSX8E.png" alt="" className="w-full h-full object-cover" />

    {/* Overlay فوق الصورة فقط */}
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
      {/* محتوى الـ overlay لو فيه */}
      <div className="bg-white rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 shadow-xl w-[250px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] max-w-full flex flex-col items-center justify-center mx-auto">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 text-center">
            {t?.nav?.aboutUs}
            </h1>
            <div className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center">
              {t?.nav?.home} / {t?.nav?.aboutUs}
            </div>
          </div>
    </div>
    <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
        <div 
          className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
          onClick={handleScrollDown}
        >
          <img 
            src="/ep_arrow-down-bold.png" 
            alt="Scroll down" 
            className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert"
          />
          <img 
            src="/ep_arrow-down-bold.png" 
            alt="Scroll down" 
            className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert -mt-1 sm:-mt-2"
          />
        </div>
      </div>
  </div>

      <div className="max-w-7xl mt-10 sm:mt-15 md:mt-20 mx-auto">
        {/* Main Section - Image on Left, Dark Blue Text on Right */}
        <div className="relative mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div ref={imageRef} className="relative z-100000 lg:ml-50 flex items-center justify-center">
              <div className="relative h-[180px] sm:h-[220px] md:h-[280px] lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img src="/Rectangle 5.png" alt="E&MO Construction" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            
            {/* Right Side - Dark Blue Text Block */}
            <div ref={sectionsRef} className="relative z-20 bg-main rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center shadow-2xl lg:-ml-12">
              <div className="text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">{t?.about?.expertise?.title || t.expertise.title}</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-3 sm:mb-4 md:mb-6 leading-relaxed">{t?.about?.expertise?.text || t.expertise.text}</p>
                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 md:mb-6">
                  {(t?.about?.expertise?.services || t.expertise.services).map((service, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-white text-sm sm:text-base md:text-lg mt-1">•</span>
                      <span className="text-gray-200 font-medium text-sm sm:text-base">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 italic text-sm sm:text-base">{t?.about?.expertise?.guarantee || t.expertise.guarantee}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Side - Text */}
            <div className="flex flex-col justify-center">
              <div className="text-gray-800">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">{t?.about?.values?.title || t?.values?.title}</h2>
                                  {(t?.about?.values?.content || t?.values?.content) && (
                    <div className="space-y-2 sm:space-y-3 md:space-y-4">
                      {(t?.about?.values?.content || t.values.content).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 sm:gap-3">
                          <span className="text-gray-600 text-sm sm:text-base md:text-lg mt-1">•</span>
                          <span className="text-gray-700 font-medium text-sm sm:text-base md:text-lg leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  )}
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative z-10">
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden ">
                <img src="/Rectangle 7.png" alt="E&MO Values" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="max-w-7xl mx-auto mt-8 sm:mt-12 md:mt-16 lg:mt-20">
        <div className="relative mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div ref={imageRef} className="relative z-100000 lg:ml-50 flex items-center justify-center">
              <div className="relative h-[180px] sm:h-[220px] md:h-[280px] lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img src="/Rectangle 8.png" alt="E&MO Construction" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            
            {/* Right Side - Dark Blue Text Block */}
            <div ref={sectionsRef} className="relative z-20 bg-main rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center shadow-2xl lg:-ml-12">
              <div className="text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">{t?.about?.whyChoose?.title || t?.whyChoose?.title}</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-3 sm:mb-4 md:mb-6 leading-relaxed">{t?.about?.whyChoose?.text || t?.whyChoose?.text}</p>
                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 md:mb-6">
                  {(t?.about?.whyChoose?.benefits || t?.whyChoose?.benefits)?.map((service, index) => (
                    <div key={index} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-white text-sm sm:text-base md:text-lg mt-1">•</span>
                      <span className="text-gray-200 font-medium text-sm sm:text-base">{service}</span>
                    </div>
                  ))}
                </div>
                <p className="text-gray-300 italic text-sm sm:text-base">{t?.about?.whyChoose?.conclusion || t?.whyChoose?.conclusion}</p>
              </div>
            </div>
          </div>
        </div>
        </div>

        {/* Vision Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Left Side - Text */}
            <div className="flex flex-col justify-center">
              <div className="text-gray-800">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">{t?.about?.vision?.title || t?.vision?.title}</h2>
                {Array.isArray(t?.about?.vision?.text || t?.vision?.text) ? (
                  <div className="space-y-2 sm:space-y-3">
                    {(t?.about?.vision?.text || t.vision.text).map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 sm:gap-3">
                        <span className="text-gray-600 text-sm sm:text-base md:text-lg mt-1">•</span>
                        <span className="text-gray-700 font-medium text-sm sm:text-base">{item}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="text-gray-600 text-sm sm:text-base md:text-lg mt-1">•</span>
                    <span className="text-gray-700 font-medium text-sm sm:text-base">{t?.about?.vision?.text || t?.vision?.text}</span>
                  </div>
                )}
              </div>
            </div>
            
            {/* Right Side - Image */}
            <div className="relative z-10" ref={el => (window.visionImgRef = el)}>
              <div className="relative w-full h-[200px] sm:h-[250px] md:h-[350px] lg:h-[500px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img src="/Rectangle 7 (1).png" alt="Notre vision et mission" className="w-full h-full object-cover object-center" />
              </div>
            </div>
          </div>
        </div>

        {/* Contact Section */}
       <div className="relative px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20 mb-8 sm:mb-12 md:mb-16 lg:mb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div ref={imageRef} className="relative z-100000 lg:ml-50 flex items-center justify-center">
              <div className="relative h-[180px] sm:h-[220px] md:h-[280px] lg:h-[400px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
                <img src="/Rectangle 8 (1).png" alt="E&MO Construction" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            
            {/* Right Side - Dark Blue Text Block */}
            <div ref={sectionsRef} className="relative z-20 bg-main rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center shadow-2xl lg:-ml-12">
              <div className="text-white">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 md:mb-6">{t?.about?.contact?.title || t?.contact?.title}</h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-200 mb-3 sm:mb-4 md:mb-6 leading-relaxed">{t?.about?.contact?.text || t?.contact?.text}</p>
                <div className="space-y-2 sm:space-y-3 mb-3 sm:mb-4 md:mb-6">
                  {(t?.about?.contact?.services || t?.contact?.services)?.map((service, index) => (
                    <div key={index} className="flex gap-4 sm:gap-6 md:gap-8 lg:gap-10 items-start">
                      <span className="text-white text-sm sm:text-base md:text-lg mt-1">•</span>
                      <span className="text-gray-200 font-medium text-sm sm:text-base">{service}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-6 sm:mt-8 md:mt-10 flex justify-center lg:justify-start lg:ml-80">
                  <Link 
                    href={`/${locale}/contact`}
                    className="bg-white cursor-pointer text-main font-bold py-2 sm:py-3 md:py-4 px-6 sm:px-8 md:px-10 rounded-xl hover:bg-gray-100 transition-colors text-sm sm:text-base md:text-lg"
                  >
                    {t?.buttons?.contactUs || t?.contact?.title}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Cards Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 mt-8 sm:mt-12 md:mt-16 lg:mt-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <span className="text-main font-bold uppercase tracking-wider block mb-2 text-sm sm:text-base md:text-lg">{t?.about?.customServiceSectionTitle || t?.customServiceSectionTitle}</span>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-extrabold mb-2">{t?.about?.customServiceSectionSubtitle || t?.customServiceSectionSubtitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            {(t?.about?.customServiceCards || t?.customServiceCards)?.map((card, idx) => {
              const iconName = emojiToIconName[card.icon] || 'FaTools';
              const Icon = iconsMap[iconName] || FaTools;
              return (
                <div key={idx} className="bg-white rounded-xl shadow-lg p-4 sm:p-6 flex flex-col hover:shadow-xl transition-shadow duration-300">
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 rounded-lg flex items-center justify-center mb-3 sm:mb-4 bg-gray-50">
                    <Icon className="text-main text-2xl sm:text-3xl md:text-4xl" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                    {card.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm leading-relaxed flex-grow">{card.description}</p>
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

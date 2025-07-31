'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const Images = [
  { src: "/unsplash_rEJxpBskj3Q.png", alt: "Kitchen Renovation", label: "Kitchen", icon: "🧱" },
  { src: "/painting.jpg", alt: "Painting Services", label: "Painting", icon: "🎨" },
  { src: "/Rectangle 22.png", alt: "Bathroom Renovation", label: "Bathroom", icon: "🪟" },
  { src: "/Rectangle 24.png", alt: "Flooring Services", label: "Flooring", icon: "🌳" },
  { src: "/Rectangle 26.png", alt: "Insulation Services", label: "Insulation", icon: "🛡" },
];

const ServicesPage = ({ t }) => {
  if (!t || !t.services) return null;
  const { services } = t;
  const router = useRouter();
  const [openIndex, setOpenIndex] = useState(null);
  const [expandedCards, setExpandedCards] = useState(new Set());

  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const modalRef = useRef(null);

  useEffect(() => {
    setIsReady(true);
  }, []);

  // New clean implementation for handling modal opening
  useEffect(() => {
    const savedService = localStorage.getItem('selectedService');
    if (savedService && isReady) {
      try {
        const service = JSON.parse(savedService);
        setSelectedService(service);
        setIsModalOpen(true);
        document.body.style.overflow = 'hidden';
        localStorage.removeItem('selectedService');
        
        // Ensure modal is properly focused and scrollable
        setTimeout(() => {
          if (modalRef.current) {
            modalRef.current.focus();
            modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
            // Trigger scroll event for mobile compatibility
            modalRef.current.dispatchEvent(new Event('touchstart', { bubbles: true }));
            modalRef.current.scrollTo(0, 1);
          }
        }, 150);
      } catch (error) {
        console.error('Error parsing saved service:', error);
        localStorage.removeItem('selectedService');
      }
    }
  }, [isReady]);

  useEffect(() => {
    if (isModalOpen && modalRef.current) {
      modalRef.current.focus();
      modalRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
      // Hack for iOS/Safari: trigger a scroll event and a small scrollTo
      setTimeout(() => {
        if (modalRef.current) {
          modalRef.current.dispatchEvent(new Event('touchstart', { bubbles: true }));
          modalRef.current.scrollTo(0, 1);
        }
      }, 100);
    }
  }, [isModalOpen]);

  const handleToggle = (idx) => {
    const newExpanded = new Set(expandedCards);
    if (newExpanded.has(idx)) {
      newExpanded.delete(idx);
    } else {
      newExpanded.add(idx);
    }
    setExpandedCards(newExpanded);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden'; // Lock background scroll
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
    document.body.style.overflow = 'unset'; // Restore background scroll
  };

  // إغلاق المودال عند الضغط خارج المحتوى
  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  const handleScrollDown = () => {
    // التمرير إلى منتصف الصفحة
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // حساب منتصف الصفحة
    const middlePosition = documentHeight / 2;
    
    // التمرير إلى منتصف الصفحة
    window.scrollTo({
      top: middlePosition,
      behavior: 'smooth'
    });
  };

  // أنماط الكارت
  const getCardClass = (idx) => {
    return `group bg-white/90 backdrop-blur-lg rounded-3xl shadow-md border border-slate-200 p-0 flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden w-full`;
  };

  const getImageClass = (idx) => {
    return 'w-full h-72 object-cover md:w-1/2 md:h-full rounded-3xl md:rounded-none md:rounded-r-3xl md:rounded-l-none transition-all duration-300 group-hover:scale-105';
  };

  const getContentClass = (idx) => {
    return 'flex-1 flex flex-col justify-center items-center text-center gap-4 p-8 md:p-10';
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-16 px-4">
      {/* Hero Section with Background Image */}
      <div className="bg-white px-4 sm:px-6 md:px-12 lg:px-24 xl:px-30 py-8 sm:py-10 md:py-12">
        {/* Container خاص بالصورة فقط */}
        <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
          {/* Background image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: "url('/Rectangle 59.png')" }} 
          ></div>

          {/* Overlay فوق الصورة فقط */}
          <div className="absolute inset-0 bg-black/50 sm:bg-black/60" />

          {/* Content فوق الصورة */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 z-10">
            <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-lg sm:shadow-xl w-[280px] sm:w-[320px] md:w-[360px] lg:w-[400px] max-w-[90%] flex flex-col items-center justify-center mx-auto">
              <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 text-center leading-tight">
                {services.title}
              </h1>
              <div className="text-gray-600 text-sm sm:text-base md:text-lg font-medium text-center">
                {services?.Home} / {services?.title}
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-4 sm:bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
            <div 
              className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-110"
              onClick={handleScrollDown}
              title="Scroll to content"
            >
              <img 
                src="/ep_arrow-down-bold.png" 
                alt="Scroll down" 
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 filter brightness-0 invert scroll-pulse"
              />
              <img 
                src="/ep_arrow-down-bold.png" 
                alt="Scroll down" 
                className="w-6 h-6 sm:w-7 sm:h-7 md:w-8 md:h-8 filter brightness-0 invert -mt-1 sm:-mt-2 scroll-pulse"
                style={{ animationDelay: '0.2s' }}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Cards */}
          {t.services.items.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer"
              onClick={() => handleServiceClick(item)}
            >
              {/* Image Section */}
              <div className="relative h-64 md:h-80">
                <img 
                  src={Images[index]?.src || `/unsplash_B0aCvAVSX8E.png`}
                  alt={item.title} 
                  className="w-full h-full object-cover object-center"
                  style={{ aspectRatio: '4/3' }}
                />
              </div>
              
              {/* Text Section */}
              <div className="p-6 md:p-8">
                {/* Icon and Title */}
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 bg-main rounded-lg flex items-center justify-center">
                    <span className="text-white text-lg">{item.icon}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-gray-800">
                    {item.title}
                  </h3>
                </div>
                
                {/* Content */}
                <div className="text-gray-600 mb-6">
                  <p className="mb-4 leading-relaxed">
                    {item.descriptionIntro || item.description || item.longDescription?.split('\n\n')[1] || "Service description"}
                  </p>
                  
                  <div className="space-y-2">
                    {item.bullets && item.bullets.map((bullet, bulletIndex) => (
                      <div key={bulletIndex} className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1">•</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                    {!item.bullets && item.details && item.details.slice(0, 3).map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2">
                        <span className="text-gray-500 mt-1">•</span>
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                  
                  <p className="mt-4 italic">
                    {item.descriptionOutro || "Notre expertise garantit des résultats de qualité."}
                  </p>
                </div>
                
                {/* Button */}
                <div className="text-center">
                  <button className="bg-main text-white font-bold py-3 px-8 rounded-lg hover:bg-blue-800 transition-colors">
                    Demander un devis
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Service Modal - Improved for Mobile */}
      {isModalOpen && selectedService && (
        <div 
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-[9999] p-2 sm:p-4"
          onClick={handleBackdropClick}
          style={{ 
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            zIndex: 9999,
            padding: '8px'
          }}
        >
          <div 
            ref={modalRef}
            tabIndex={-1}
            className="bg-white rounded-2xl w-full max-w-4xl max-h-[90vh] sm:max-h-[95vh] overflow-y-auto relative"
            onClick={(e) => e.stopPropagation()}
            style={{
              maxHeight: '90vh',
              overflowY: 'scroll',
              WebkitOverflowScrolling: 'touch',
              overscrollBehavior: 'contain',
              touchAction: 'manipulation',
              display: 'flex',
              flexDirection: 'column'
            }}
          >
            {/* Modal Header with Image */}
            <div className="relative bg-white flex-shrink-0">
              <div className="relative h-40 sm:h-48 md:h-64 lg:h-80 rounded-t-2xl overflow-hidden">
                <img 
                  src={Images[selectedService.id]?.src || `/unsplash_B0aCvAVSX8E.png`}
                  alt={selectedService.title} 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-black/40" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="rounded-lg p-3 sm:p-4 md:p-6 text-white text-center">
                    <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-2">
                      {selectedService.title}
                    </h2>
                  </div>
                </div>
                <button 
                  onClick={closeModal}
                  className="absolute top-2 right-2 sm:top-3 sm:right-3 md:top-4 md:right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors z-10"
                  style={{ touchAction: 'manipulation' }}
                >
                  <FaTimes className="w-4 h-4 sm:w-5 sm:h-5" />
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-3 sm:p-4 md:p-6 lg:p-8 pb-6 flex-1">
              <div className="text-gray-600 mb-4">
                <p className="mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base md:text-lg">
                  {selectedService.descriptionIntro || selectedService.description || "Service description"}
                </p>
                
                <h4 className="text-base sm:text-lg md:text-xl font-bold mb-3 sm:mb-4 text-gray-800">
                  Nos services incluent :
                </h4>
                
                <div className="space-y-2 sm:space-y-3">
                  {selectedService.bullets && selectedService.bullets.map((bullet, bulletIndex) => (
                    <div key={bulletIndex} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-green-600 mt-1 text-sm sm:text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-sm sm:text-base md:text-lg">{bullet}</span>
                    </div>
                  ))}
                  {!selectedService.bullets && selectedService.details && selectedService.details.slice(0, 4).map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-2 sm:gap-3">
                      <span className="text-green-600 mt-1 text-sm sm:text-base md:text-lg flex-shrink-0">✓</span>
                      <span className="text-sm sm:text-base md:text-lg">{detail}</span>
                    </div>
                  ))}
                </div>
                
                <p className="mt-4 sm:mt-6 italic text-sm sm:text-base md:text-lg">
                  {selectedService.descriptionOutro || "Notre expertise garantit des résultats de qualité."}
                </p>
              </div>
              
              {/* Modal Button */}
              <div className="text-center pt-3 sm:pt-4">
                <button 
                  className="bg-main text-white font-bold py-2 sm:py-3 px-6 sm:px-8 rounded-lg hover:bg-blue-800 transition-colors w-full sm:w-auto text-sm sm:text-base"
                  onClick={closeModal}
                >
                  Fermer
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Bottom CTA */}
      <div className="mt-16 text-center">
        <div className="bg-main rounded-2xl p-8 text-white max-w-2xl mx-auto">
          <h3 className="text-2xl sm:text-3xl font-bold mb-4">
            {services.needCustomService}
          </h3>
          <p className="text-lg mb-6 opacity-90">
            {services.teamReadyToHelp}
          </p>
          <Link href={`/${t.locale || 'fr'}/contact`}>
            <button className="bg-white text-main cursor-pointer font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors">
              {services.contactUs}
            </button>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes scrollPulse {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
        }

        .scroll-pulse {
          animation: scrollPulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default ServicesPage; 
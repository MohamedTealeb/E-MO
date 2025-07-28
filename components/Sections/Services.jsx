'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaChevronDown, FaChevronUp, FaTimes } from 'react-icons/fa';
import Link from 'next/link';


const Images = [
  { src: "/unsplash_rEJxpBskj3Q.png", alt: "Kitchen Renovation", label: "Kitchen", icon: "🧱" },
  { src: "/painting.jpg", alt: "Painting Services", label: "Painting", icon: "🎨" },
  { src: "/Rectangle 22.png", alt: "Bathroom Renovation", label: "Bathroom", icon: "🪟" },
  { src: "/Rectangle 24.png", alt: "Flooring Services", label: "Flooring", icon: "🌳" },
  { src: "/Rectangle 26.png", alt: "Insulation Services", label: "Insulation", icon: "🛡" },
];

const Services = ({ t }) => {
  if (!t || !t.services) return null;
  const { services } = t;
  const [openIndex, setOpenIndex] = useState(null);
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // اختر شكل الكارت: 'modern' | 'classic' | 'sideCard'
  const cardStyle = 'modern'; // غيّر هذه القيمة لتجربة الأنماط المختلفة

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  const handleServiceClick = (service) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  // أنماط الكارت
  const getCardClass = (idx) => {
    switch (cardStyle) {
      case 'classic':
        return `group bg-white/95 rounded-2xl shadow border border-slate-200 p-0 flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer overflow-hidden w-full`;
      case 'sideCard':
        return `group bg-gradient-to-r from-blue-50 to-indigo-100 rounded-3xl shadow-md border border-blue-200 p-0 flex flex-col md:flex-row items-stretch transition-all duration-300 hover:shadow-xl hover:scale-[1.02] cursor-pointer overflow-hidden w-full`;
      case 'modern':
      default:
        return `group bg-white/90 backdrop-blur-lg rounded-3xl shadow-md border border-slate-200 p-0 flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer overflow-hidden w-full`;
    }
  };

  const getImageClass = (idx) => {
    switch (cardStyle) {
      case 'classic':
        return 'w-full h-64 object-cover md:w-1/2 md:h-auto rounded-2xl md:rounded-none md:rounded-r-2xl md:rounded-l-none transition-all duration-300 group-hover:scale-105';
      case 'sideCard':
        return 'w-full h-56 object-cover md:w-1/2 md:h-full rounded-2xl md:rounded-none md:rounded-r-3xl md:rounded-l-none m-0 shadow-md border border-blue-100';
      case 'modern':
      default:
        return 'w-full h-72 object-cover md:w-1/2 md:h-full rounded-3xl md:rounded-none md:rounded-r-3xl md:rounded-l-none transition-all duration-300 group-hover:scale-105';
    }
  };

  const getContentClass = (idx) => {
    switch (cardStyle) {
      case 'classic':
        return 'flex-1 flex flex-col justify-center items-center text-center gap-3 p-7 md:p-9';
      case 'sideCard':
        return 'flex-1 flex flex-col justify-center items-center text-center gap-4 p-6 md:p-10';
      case 'modern':
      default:
        return 'flex-1 flex flex-col justify-center items-center text-center gap-4 p-8 md:p-10';
    }
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 mt-10 via-blue-50 to-indigo-50 py-16 px-4">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[320px] md:h-[700px] flex items-center justify-center mb-16 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/Rectangle 59.png')" }}></div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full px-4 z-10">
          <div className="bg-white rounded-lg p-8 shadow-xl w-[400px] max-w-full flex flex-col items-center justify-center mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              {services.title}
            </h1>
            <div className="text-gray-600 text-lg font-medium text-center">
              {services?.Home} / {services?.title}
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

      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Service Cards */}
          {t.services.items.map((item, index) => (
            <div 
              key={item.id} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => handleServiceClick(item)}
            >
              {/* Image Section */}
              <div className="relative h-64 md:h-80">
                <img 
                  src={Images[index]?.src || `/unsplash_B0aCvAVSX8E.png`}
                  alt={item.title} 
                  className="w-full h-full object-cover"
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
                        <span className="text-red-600 mt-1">•</span>
                        <span>{bullet}</span>
                      </div>
                    ))}
                    {!item.bullets && item.details && item.details.slice(0, 3).map((detail, detailIndex) => (
                      <div key={detailIndex} className="flex items-start gap-2">
                        <span className="text-red-600 mt-1">•</span>
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

      {/* Service Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
            {/* Modal Header with Image */}
            <div className="relative h-64 md:h-80">
              <img 
                src={Images[selectedService.id]?.src || `/unsplash_B0aCvAVSX8E.png`}
                alt={selectedService.title} 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/40" />
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="bg-main/90 rounded-lg p-6 text-white text-center">
                  <h2 className="text-2xl md:text-3xl font-bold mb-2">
                    {selectedService.title}
                  </h2>
                </div>
              </div>
              <button 
                onClick={closeModal}
                className="absolute top-4 right-4 bg-white/20 hover:bg-white/30 text-white rounded-full p-2 transition-colors"
              >
                <FaTimes className="w-5 h-5" />
              </button>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 md:p-8">
              <div className="text-gray-600 mb-6">
                <p className="mb-4 leading-relaxed text-lg">
                  {selectedService.descriptionIntro || selectedService.description || "Service description"}
                </p>
                
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  Nos services incluent :
                </h4>
                
                <div className="space-y-3">
                  {selectedService.bullets && selectedService.bullets.map((bullet, bulletIndex) => (
                    <div key={bulletIndex} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1 text-lg">✓</span>
                      <span className="text-lg">{bullet}</span>
                    </div>
                  ))}
                  {!selectedService.bullets && selectedService.details && selectedService.details.slice(0, 4).map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1 text-lg">✓</span>
                      <span className="text-lg">{detail}</span>
                    </div>
                  ))}
                </div>
                
                <p className="mt-6 italic text-lg">
                  {selectedService.descriptionOutro || "Notre expertise garantit des résultats de qualité."}
                </p>
              </div>
              
              {/* Modal Button */}
              <div className="text-center">
                <button className="bg-main text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-800 transition-colors text-lg">
                  Demander un devis
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
            <button className="bg-white text-main font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors">
              {services.contactUs}
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;

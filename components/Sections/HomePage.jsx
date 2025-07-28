'use client';
import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import ImageGallery from './ImageGallery';
import ImageSlider from './ImageSlider';
import About from './About';
import Slider_Hero from './Slider_Hero';
import Testmonials from './Testmonials';
import HeroPromise from './HeroPromise';
import QuoteSection from './QuoteSection';
import AboutUS from './AboutUS';
import { FaTimes } from 'react-icons/fa';

const Images = [
  { src: "/unsplash_rEJxpBskj3Q.png", alt: "Kitchen Renovation", label: "Kitchen", icon: "🧱" },
  { src: "/painting.jpg", alt: "Painting Services", label: "Painting", icon: "🎨" },
  { src: "/Rectangle 22.png", alt: "Bathroom Renovation", label: "Bathroom", icon: "🪟" },
  { src: "/Rectangle 24.png", alt: "Flooring Services", label: "Flooring", icon: "🌳" },
  { src: "/Rectangle 26.png", alt: "Insulation Services", label: "Insulation", icon: "🛡" },
];

const HomePage = ({ t, locale = 'fr' }) => {
  const [selectedService, setSelectedService] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // فتح الخدمة المحددة عند تحميل الصفحة
  useEffect(() => {
    const savedService = localStorage.getItem('selectedService');
    if (savedService) {
      try {
        const service = JSON.parse(savedService);
        setSelectedService(service);
        setIsModalOpen(true);
        // مسح الخدمة المحفوظة بعد فتحها
        localStorage.removeItem('selectedService');
      } catch (error) {
        console.error('Error parsing saved service:', error);
        localStorage.removeItem('selectedService');
      }
    }
  }, []);

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedService(null);
  };

  return (
    <>
      <Hero />
      <Slider_Hero t={t}/>
      <AboutUS t={t.AboutUS} />
      <HeroPromise />
      <QuoteSection />
      <ImageSlider />
      <Footer t={t} locale={locale} />

      {/* Service Modal */}
      {isModalOpen && selectedService && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-5xl w-full max-h-[95vh] overflow-hidden shadow-2xl">
            {/* Modal Header with Dark Blue Background */}
            <div className="bg-main text-white p-6 md:p-8 relative">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl md:text-3xl font-bold">
                  {selectedService.title}
                </h2>
                <button 
                  onClick={closeModal}
                  className="bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-colors"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            {/* Modal Content */}
            <div className="p-6 md:p-8 bg-white">
              <div className="text-gray-700 mb-8">
                {/* Introductory Paragraph */}
                <p className="mb-6 leading-relaxed text-lg">
                  {selectedService.descriptionIntro || selectedService.description || "Service description"}
                </p>
                
                {/* Services List Title */}
                <h4 className="text-xl font-bold mb-4 text-gray-800">
                  Nos services incluent :
                </h4>
                
                {/* Services List */}
                <div className="space-y-4 mb-6">
                  {selectedService.bullets && selectedService.bullets.map((bullet, bulletIndex) => (
                    <div key={bulletIndex} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1 text-xl font-bold">✓</span>
                      <span className="text-lg leading-relaxed">{bullet}</span>
                    </div>
                  ))}
                  {!selectedService.bullets && selectedService.details && selectedService.details.slice(0, 4).map((detail, detailIndex) => (
                    <div key={detailIndex} className="flex items-start gap-3">
                      <span className="text-green-600 mt-1 text-xl font-bold">✓</span>
                      <span className="text-lg leading-relaxed">{detail}</span>
                    </div>
                  ))}
                </div>
                
                {/* Concluding Sentence */}
                <p className="italic text-lg text-gray-600">
                  {selectedService.descriptionOutro || "Notre expertise garantit un résultat solide et esthétique."}
                </p>
              </div>
              
              {/* Modal Button */}
              <div className="text-center pt-4">
                <button className="bg-main text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-800 transition-colors text-lg shadow-lg">
                  Demander un devis
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomePage; 
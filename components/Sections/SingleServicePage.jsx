'use client';
import React from 'react';
import Footer from '@/components/shared/Footer';
import { FaTimes } from 'react-icons/fa';

const Images = [
  { src: "/WhatsApp Image 2025-07-27 at 1.06.04 AM 1 (1).png", alt: "Kitchen Renovation", label: "Kitchen", icon: "🧱" },
  { src: "/painting.jpg", alt: "Painting Services", label: "Painting", icon: "🎨" },
  { src: "/Rectangle 22.png", alt: "Bathroom Renovation", label: "Bathroom", icon: "🪟" },
  { src: "/Rectangle 24.png", alt: "Flooring Services", label: "Flooring", icon: "🌳" },
  { src: "/WhatsApp Image 2025-07-27 at 1.16.46 AM (3) 1.png", alt: "Insulation Services", label: "Insulation", icon: "🛡" },
];

const SingleServicePage = ({ t, serviceId = 0 }) => {
  const serviceIndex = serviceId + 1; // تحويل من 1-based إلى 0-based
  const serviceImage = Images[serviceIndex] || Images[0];
  
  // بيانات الخدمة من الترجمة
  const serviceData = t?.services?.items?.[serviceIndex] || t?.services?.items?.[0];

  // تصميم خاص للخدمة الأولى
  if (serviceId === 1) {
    return (
      <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-indigo-50">
        {/* Hero Section with Service Image */}
        <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-30 py-8 sm:py-10 md:py-12">
          <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] xl:h-[700px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Service Image */}
            <div 
              className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
              style={{ backgroundImage: `url('${serviceImage.src}')` }} 
            ></div>

            {/* Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 z-10">
              <div className="text-center">
                <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 mb-4">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center leading-tight">
                    {serviceData?.title || "Service Details"}
                  </h1>
                  <p className="text-white text-lg sm:text-xl opacity-90">
                    {serviceData?.descriptionIntro || "Service description"}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Service Details - Special Design for Service 1 */}
        <div className="max-w-5xl mx-auto px-4 md:px-6 mt-12">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-16">
            {/* Service Icon and Title */}
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-main rounded-full mb-6">
                <span className="text-white text-3xl">{serviceImage.icon}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                {serviceData?.title}
              </h2>
              <div className="w-24 h-1 bg-main mx-auto rounded-full"></div>
            </div>
            
            {/* Service Description */}
            <div className="text-gray-700 mb-12">
              <p className="mb-8 leading-relaxed text-xl text-center max-w-4xl mx-auto">
                {serviceData?.descriptionIntro || serviceData?.description || "Service description"}
              </p>
              
              <h3 className="text-2xl font-bold mb-8 text-center text-main">
                Nos services incluent
              </h3>
              
              <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                {serviceData?.bullets && serviceData.bullets.map((bullet, bulletIndex) => (
                  <div key={bulletIndex} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <span className="text-green-600 mt-1 text-2xl font-bold flex-shrink-0">✓</span>
                    <span className="text-lg leading-relaxed">{bullet}</span>
                  </div>
                ))}
                {!serviceData?.bullets && serviceData?.details && serviceData.details.slice(0, 4).map((detail, detailIndex) => (
                  <div key={detailIndex} className="flex items-start gap-4 p-4 bg-gray-50 rounded-xl">
                    <span className="text-green-600 mt-1 text-2xl font-bold flex-shrink-0">✓</span>
                    <span className="text-lg leading-relaxed">{detail}</span>
                  </div>
                ))}
              </div>
              
              <p className="mt-8 italic text-xl text-center text-gray-600">
                {serviceData?.descriptionOutro || "Notre expertise garantit des résultats exceptionnels."}
              </p>
            </div>
            
            {/* Action Button */}
            <div className="text-center pt-8">
              <button className="bg-main text-white font-bold py-5 px-12 rounded-2xl hover:bg-blue-800 transition-all duration-300 text-xl shadow-lg transform hover:scale-105">
                {t?.buttons?.requestQuote || "Demander un devis"}
              </button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // التصميم الافتراضي لباقي الخدمات
  return (
    <section className="py-16 px-4">
      {/* Hero Section with Service Image */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-30 py-8 sm:py-10 md:py-12">
        <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl sm:shadow-2xl">
          {/* Service Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url('${serviceImage.src}')` }} 
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 sm:bg-black/60" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 z-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 text-center leading-tight">
              {serviceData?.title || "Service Details"}
            </h1>
          </div>
        </div>
      </div>

      {/* Service Details */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 mt-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          {/* Introductory Paragraph */}
          <p className="mb-8 leading-relaxed text-lg text-gray-800">
            {serviceData?.descriptionIntro || serviceData?.description || "Nous réalisons tous les travaux de construction et rénovation, intérieurs et extérieurs, avec un haut niveau de professionnalisme pour vous offrir une maison neuve ou un espace renouvelé au design moderne."}
          </p>
          
          {/* Services List Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-main mb-6 text-center">
            Nos services incluent
          </h2>
          
          {/* Services List */}
          <div className="space-y-4">
            {serviceData?.bullets && serviceData.bullets.map((bullet, bulletIndex) => (
              <div key={bulletIndex} className="flex items-start gap-3">
                <span className="text-green-600 mt-1 text-xl font-bold flex-shrink-0">✓</span>
                <span className="text-lg leading-relaxed text-gray-800">{bullet}</span>
              </div>
            ))}
            {!serviceData?.bullets && serviceData?.details && serviceData.details.slice(0, 4).map((detail, detailIndex) => (
              <div key={detailIndex} className="flex items-start gap-3">
                <span className="text-green-600 mt-1 text-xl font-bold flex-shrink-0">✓</span>
                <span className="text-lg leading-relaxed text-gray-800">{detail}</span>
              </div>
            ))}
          </div>
          
          {/* Concluding Sentence */}
          <p className="mt-8 italic text-lg text-gray-600">
            {serviceData?.descriptionOutro || "Notre expertise garantit un résultat solide et esthétique."}
          </p>
          
          {/* Action Button */}
          <div className="text-center pt-8">
            <button className="bg-main text-white font-bold py-4 px-10 rounded-xl hover:bg-blue-800 transition-colors text-lg shadow-lg">
              {t?.buttons?.requestQuote || "Demander un devis"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleServicePage; 
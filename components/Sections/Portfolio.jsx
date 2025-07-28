'use client'
import React, { useRef, useState } from 'react';
import { FaHome, FaCompass, FaCouch, FaPlay } from 'react-icons/fa';

const Portfolio = ({ t }) => {
  if (!t) return null;

  const handleScrollDown = () => {
    const nextSection = document.querySelector('section:not(.min-h-screen)') || 
                       document.querySelector('main') || 
                       document.querySelector('div[class*="section"]');
    
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="min-h-screen mt-20 bg-gray-100">
      {/* Hero Section with Background Image */}
     
      <div className="relative bg-white px-4 sm:px-8 md:px-16 lg:px-30">
  {/* Wrapper للصور فقط */}
  <div className="relative w-full h-[300px] sm:h-[400px] md:h-[700px]"> {/* Responsive height */}
    <img src="/WhatsApp.jpg" alt="" className="w-full h-full object-cover" />

    {/* Overlay فوق الصورة فقط */}
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
      {/* محتوى الـ overlay لو فيه */}
      <div className="bg-white rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 shadow-xl w-[250px] sm:w-[280px] md:w-[320px] lg:w-[360px] xl:w-[400px] max-w-full flex flex-col items-center justify-center mx-auto">
            <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 text-center">
              {t?.portfolio?.title || "Portfolio"}
            </h1>
            <div className="text-gray-600 text-xs sm:text-sm md:text-base lg:text-lg font-medium text-center">
              {t?.portfolio?.Home} / {t?.portfolio?.title || "Portfolio"}
            </div>
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




      <div className="max-w-7xl mt-10 sm:mt-15 md:mt-20 mx-auto px-4 sm:px-6 md:px-8">
        {/* Recent Works Section with Values */}
        <div className="mb-10 sm:mb-15 md:mb-20">
          <div className="text-center mb-8 sm:mb-10 md:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-3 sm:mb-4">
              {t?.portfolio?.recentWorks || "Nos travaux récents"}
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4">
              {t?.portfolio?.recentWorksSubtitle || "Découvrez nos derniers projets de rénovation et voyez la transformation en action"}
            </p>
          </div>
          
          <div className="py-8 sm:py-10 md:py-12 px-4 sm:px-6 md:px-8 lg:px-16 xl:px-24 relative">
            <div className="rounded-xl sm:rounded-2xl flex flex-col md:flex-row overflow-hidden shadow-2xl relative z-10 bg-white md:bg-transparent">
              {/* Left: Image */}
              <div className="w-full md:w-1/2">
                <img 
                  src="/About.jpg" 
                  alt="Construction" 
                  className="w-full h-[200px] sm:h-[250px] md:h-full object-cover rounded-t-xl sm:rounded-t-2xl md:rounded-none md:rounded-l-2xl"
                />
              </div>

              {/* Right: Content */}
              <div className="w-full md:w-1/2 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 flex flex-col justify-center ">
                <h2 className="text-gray-900 text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4 sm:mb-6">
                  {t?.portfolio?.valuesTitle || "Les valeurs qui guident tout ce que nous faisons"}
                </h2>

                <div className="space-y-3 sm:space-y-4">
                  {/* Item 1 */}
                  <div className="flex items-start gap-2 sm:gap-3">
                    <FaHome className="text-white w-5 h-5 sm:w-6 sm:h-6 bg-main text-lg sm:text-xl mt-1 rounded-sm" />
                    <span className="text-gray-800 font-medium text-sm sm:text-base md:text-lg">{t?.portfolio?.values?.dreamHouse || "Maison de rêve"}</span>
                  </div>

                  {/* Item 2 */}
                  <div className="flex items-start gap-2 sm:gap-3">
                    <FaCompass className="text-white w-5 h-5 sm:w-6 sm:h-6 bg-main text-lg sm:text-xl mt-1 rounded-sm" />
                    <span className="text-gray-800 font-medium text-sm sm:text-base md:text-lg">{t?.portfolio?.values?.luxuryLife || "Vie de luxe"}</span>
                  </div>

                  {/* Item 3 */}
                  <div className="flex items-start gap-2 sm:gap-3 relative">
                    <FaCouch className="text-white w-5 h-5 sm:w-6 sm:h-6 bg-main text-lg sm:text-xl mt-1 rounded-sm" />
                    <span className="text-gray-800 font-medium text-sm sm:text-base md:text-lg">{t?.portfolio?.values?.comfortDesign || "Conception de confort"}</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-main absolute left-0 right-0 bottom-0 h-[150px] sm:h-[180px] sm:hidden md:h-[200px] z-0 hidden md:block">
            </div>
          </div>
        </div>

        {/* Video Gallery Section */}
        <div className="mb-10 sm:mb-15 md:mb-20">
          <div className="relative w-full h-[300px] sm:h-[350px] md:h-[400px] lg:h-[500px] rounded-xl sm:rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/WhatsApp.jpg" 
              alt="Video Gallery" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="bg-white rounded-full p-4 sm:p-5 md:p-6 shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <FaPlay className="text-2xl sm:text-3xl md:text-4xl text-gray-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Image Grid Portfolio Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 mb-5">
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/WhatsApp Image 2025-07-27 at 1.06.02 AM 1.png" 
              alt="Modern House" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/WhatsApp Image 2025-07-27 at 1.16.46 AM 1 (10).png" 
              alt="Greenhouse" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg sm:col-span-2 md:col-span-1">
            <img 
              src="/WhatsApp Image 2025-07-27 at 1.16.46 AM (3) 1.png" 
              alt="Outdoor Deck" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/c284d157df128df821a114b42ed83112bf042cac (2).jpg" 
              alt="Outdoor Deck" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/kitchen.jpg" 
              alt="Outdoor Deck" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[200px] sm:h-[250px] md:h-[300px] rounded-xl sm:rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/insulation.jpg" 
              alt="Outdoor Deck" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export { Portfolio };
export default Portfolio;


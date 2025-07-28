'use client'
import React, { useRef, useState } from 'react';
import { FaHome, FaCompass, FaCouch, FaPlay } from 'react-icons/fa';

const Portfolio = ({ t }) => {
  if (!t) return null;

  return (
    <section className="bg-gray-100 py-20 px-4">
      {/* Hero Section */}
      <div className="relative w-full h-[320px] md:h-[700px] flex items-center justify-center mb-16 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/WhatsApp.jpg')" }}></div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full px-4 z-10">
          <div className="bg-white rounded-lg p-8 shadow-xl w-[400px] max-w-full flex flex-col items-center justify-center mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              Nos réalisations
            </h1>
            <div className="text-gray-600 text-lg font-medium text-center">
              Accueil / Nos Services
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
        {/* Recent Works Section with Values */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Nos travaux récents
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Découvrez nos derniers projets de rénovation et voyez la transformation en action
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
            {/* Left Side - Image */}
            <div className="relative z-10 flex items-center justify-center">
              <div className="relative h-[300px] md:h-[400px] rounded-3xl overflow-hidden shadow-2xl">
                <img src="/About.jpg" alt="Recent Works" className="w-full h-full object-cover object-center" />
              </div>
            </div>
            
            {/* Right Side - Dark Blue Text Block */}
            <div className="relative z-20 bg-main rounded-3xl p-10 md:p-16 flex flex-col justify-center shadow-2xl -ml-12">
              <div className="text-white">
                <h2 className="text-3xl md:text-4xl font-bold mb-6">Les valeurs qui guident tout ce que nous faisons</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <FaHome className="text-white text-xl mt-1" />
                    <span className="text-gray-200 font-medium text-lg">Maison de rêve</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCompass className="text-white text-xl mt-1" />
                    <span className="text-gray-200 font-medium text-lg">Vie de luxe</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <FaCouch className="text-white text-xl mt-1" />
                    <span className="text-gray-200 font-medium text-lg">Conception de confort</span>
                  </div>
                </div>
                {/* Red dot */}
              
              </div>
            </div>
          </div>
        </div>

        {/* Video Gallery Section */}
        <div className="mb-20">
          <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            <img 
              src="/WhatsApp.jpg" 
              alt="Video Gallery" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="bg-white rounded-full p-6 shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <FaPlay className="text-4xl text-gray-800" />
              </div>
            </div>
          </div>
        </div>

        {/* Image Grid Portfolio Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/WhatsApp Image 2025-07-27 at 1.06.02 AM 1.png" 
              alt="Modern House" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/WhatsApp Image 2025-07-27 at 1.16.46 AM 1 (10).png" 
              alt="Greenhouse" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/WhatsApp Image 2025-07-27 at 1.16.46 AM (3) 1.png" 
              alt="Outdoor Deck" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/c284d157df128df821a114b42ed83112bf042cac (2).jpg" 
              alt="Outdoor Deck" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="/kitchen.jpg" 
              alt="Outdoor Deck" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden shadow-lg">
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

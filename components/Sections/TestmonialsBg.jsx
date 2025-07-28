'use client'
import React, { useState } from 'react';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TestmonialsBg = ({ t }) => {
  if (!t?.testimonials) return null;
  const { title, items } = t.testimonials;
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % items.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);
  };

  const currentItem = items[currentIndex];

  return (
    <section className="min-h-screen mt-20 bg-gray-100">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[320px] md:h-[500px] flex items-center justify-center mb-16 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/unsplash_cc0Gg3BegjE.png')" }}></div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full px-4 z-10">
          <div className="bg-white rounded-lg p-8 shadow-xl w-[400px] max-w-full flex flex-col items-center justify-center mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              {title}
            </h1>
            <div className="text-gray-600 text-lg font-medium text-center">
              Accueil / {title}
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

      {/* Testimonial Carousel Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto relative">
          {/* Main Testimonial Card */}
          <div className="bg-white rounded-2xl shadow-lg p-8 relative z-20">
            <div className="text-center">
              <h3 className="text-xl font-bold text-gray-800 mb-4">
                {currentItem.name}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed mb-6">
                {currentItem.text}
              </p>
              <div className="flex items-center justify-center gap-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <FaStar key={i} className="text-orange-500 text-lg" />
                ))}
              </div>
              <div className="text-gray-700 font-medium">5.0</div>
            </div>
          </div>

          {/* Background Cards Stack */}
          <div className="absolute top-4 left-4 right-4 z-10">
            <div className="bg-gray-300 rounded-2xl h-full w-full transform rotate-2"></div>
          </div>
          <div className="absolute top-8 left-8 right-8 z-0">
            <div className="bg-gray-400 rounded-2xl h-full w-full transform rotate-1"></div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-gray-700 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <FaChevronLeft className="text-white text-lg" />
          </button>
          
          <button 
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-gray-700 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <FaChevronRight className="text-white text-lg" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {items.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${
                  idx === currentIndex ? 'bg-gray-700 scale-125' : 'bg-gray-300'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestmonialsBg; 
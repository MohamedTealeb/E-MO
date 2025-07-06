'use client'
import React, { useState } from 'react';

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
    <section
      className="relative min-h-screen w-full flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8"
      style={{
        backgroundImage: 'linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5)), url(/WhatsApp.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        width: '100vw',
        minHeight: '100vh',
      }}
    >
      {/* عمود الأرقام - مخفي في الموبايل، ظاهر في التابلت والكمبيوتر */}
      <div className="hidden sm:flex absolute left-0 top-0 h-full flex-col items-center justify-center z-20 px-2 lg:px-4 select-none">
        <div className="flex flex-col gap-2 lg:gap-4">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`text-white text-sm lg:text-lg font-bold transition-all duration-200 focus:outline-none ${
                idx === currentIndex ? 'scale-125 border-l-4 border-white pl-2' : 'opacity-60 hover:opacity-100'
              }`}
              style={{ minWidth: 20 }}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>

      {/* مؤشرات النقاط للموبايل */}
      <div className="sm:hidden absolute bottom-4 left-1/2 transform -translate-x-1/2 z-20 flex gap-2">
        {items.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentIndex(idx)}
            className={`w-2 h-2 rounded-full transition-all duration-200 ${
              idx === currentIndex ? 'bg-white scale-125' : 'bg-white/50'
            }`}
          />
        ))}
      </div>

      {/* المحتوى */}
      <div className="relative z-10 text-center px-2 sm:px-4 max-w-4xl mx-auto w-full">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 sm:mb-8 lg:mb-12 text-center drop-shadow-lg">
          {title}
        </h2>
        {/* البطاقة الرئيسية */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl sm:rounded-3xl p-4 sm:p-6 lg:p-8 border border-white/20 shadow-2xl mx-2 sm:mx-4">
          <div className="text-white text-center text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed mb-4 sm:mb-6">
            {currentItem.text}
          </div>
          <div className="text-lg sm:text-xl md:text-2xl font-semibold text-white">
            {currentItem.name}
          </div>
        </div>
        {/* الأسهم */}
        <div className="flex justify-center items-center gap-4 sm:gap-6 lg:gap-8 mt-6 sm:mt-8">
          <button 
            onClick={prevTestimonial}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-white text-lg sm:text-2xl">←</span>
          </button>
          <div className="text-white text-sm sm:text-base lg:text-lg">
            {currentIndex + 1} / {items.length}
          </div>
          <button 
            onClick={nextTestimonial}
            className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-white text-lg sm:text-2xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestmonialsBg; 
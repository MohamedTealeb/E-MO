'use client'
import React, { useState } from 'react';

const Testmonials = ({ t }) => {
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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* عمود الأرقام */}
      <div className="fixed left-0 top-0 h-full flex flex-col items-center justify-center z-20 px-4 select-none">
        <div className="flex flex-col gap-4">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`text-white text-lg font-bold transition-all duration-200 focus:outline-none ${
                idx === currentIndex ? 'scale-125 border-l-4 border-white pl-2' : 'opacity-60 hover:opacity-100'
              }`}
              style={{ minWidth: 24 }}
            >
              {idx + 1}
            </button>
          ))}
        </div>
      </div>
      {/* خلفية الصورة */}
      <div 
        className="fixed inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url(/WhatsApp.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* طبقة شفافة فوق الصورة */}
      <div className="fixed inset-0 w-full h-full z-0 bg-black/50" />
      
      {/* المحتوى */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        <h2 className="text-5xl font-bold text-white mb-12 text-center drop-shadow-lg">{title}</h2>
        
        {/* البطاقة الرئيسية */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
          <div className="text-white text-center text-xl leading-relaxed">{currentItem.text}</div>
          <div className="text-2xl font-semibold text-white mb-4">{currentItem.name}</div>
        </div>

        {/* الأسهم */}
        <div className="flex justify-center items-center gap-8 mt-8">
          <button 
            onClick={prevTestimonial}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-white text-2xl">←</span>
          </button>
          
          <div className="text-white text-lg">
            {currentIndex + 1} / {items.length}
          </div>
          
          <button 
            onClick={nextTestimonial}
            className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-all duration-300 backdrop-blur-sm"
          >
            <span className="text-white text-2xl">→</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testmonials;


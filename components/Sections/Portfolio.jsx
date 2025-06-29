'use client'
import React from 'react';

const Portfolio = ({ t }) => {
  if (!t) return null;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-main via-[#1a2332] to-secondary/60 px-2 py-8 overflow-hidden">
      {/* خلفية نجوم خفيفة (يمكنك استبدالها بصورة ثابتة لو أردت) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{background: 'radial-gradient(circle at 60% 40%, #fff2 1px, transparent 1px), radial-gradient(circle at 20% 80%, #fff1 1px, transparent 1px)'}} />
      {/* صورة دائرية */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-72 h-72 rounded-full border-8 border-secondary shadow-2xl overflow-hidden mb-10 bg-white flex items-center justify-center">
          <img
            src="/portfolio.jpg"
            alt="Portfolio"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center drop-shadow-lg">{t.title}</h1>
        <p className="text-2xl text-gray-200 mb-8 text-center max-w-3xl mx-auto opacity-90 font-light">
          {t.text}
        </p>
      </div>
    </div>
  );
};

export { Portfolio };
export default Portfolio;

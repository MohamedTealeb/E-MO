'use client'
import React from 'react';

const About = ({ t }) => {
  if (!t) return null;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light px-4 py-12">
      {/* صورة دائرية اختيارية */}
      <div className="w-64 h-64 rounded-full border-8 border-secondary shadow-xl overflow-hidden mb-8 bg-white flex items-center justify-center">
        <img
          src="/About.jpg"
          alt="About Us"
          className="w-full h-full object-cover object-center"
        />
      </div>
      {/* العنوان */}
      <h1 className="text-4xl font-bold text-main mb-4 text-center">{t.title}</h1>
      {/* النص التعريفي */}
      <p className="text-lg text-dark mb-8 text-center max-w-2xl">{t.text}</p>
      {/* كروت الخبرة والجودة */}
      <div className="flex flex-col sm:flex-row gap-6 mt-4">
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 min-w-[220px] border border-gray-100">
          <span className="text-4xl mb-2">🏆</span>
          <span className="text-xl font-bold text-main mb-1">{t.experience}</span>
        </div>
        <div className="flex flex-col items-center bg-white rounded-xl shadow-md p-6 min-w-[220px] border border-gray-100">
          <span className="text-4xl mb-2">✅</span>
          <span className="text-xl font-bold text-main mb-1">{t.quality}</span>
        </div>
      </div>
    </div>
  );
};

export default About;

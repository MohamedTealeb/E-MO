'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const Services = ({ t }) => {
  if (!t || !t.services) return null;
  const { services } = t;
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 mt-10 via-blue-50 to-indigo-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-main mb-4 drop-shadow-lg">
            {services.title}
          </h2>
          <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
          <p className="text-lg md:text-xl text-dark/80 max-w-3xl mx-auto">
            {services.subtitle}
          </p>
        </div>

        {/* Services Grid */}
        <div className="flex flex-col gap-8">
          {services.items.map((service, idx) => (
            <div
              key={idx}
              className={`relative group bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl ${openIndex === idx ? 'ring-2 ring-main/40' : ''}`}
            >
              <div className="text-5xl mb-4">{service.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-main mb-2 text-center">
                {service.title}
              </h3>
              <p className="text-dark/70 text-base text-center mb-4 min-h-[48px]">
                {service.description}
              </p>
              <button
                onClick={() => handleToggle(idx)}
                className="mt-auto bg-gradient-to-r from-main to-secondary text-white font-semibold py-2 px-6 rounded-lg shadow-md hover:from-secondary hover:to-main transition-colors flex items-center gap-2"
              >
                {openIndex === idx ? services.hideDetails || 'إخفاء التفاصيل' : services.showDetails || 'عرض التفاصيل'}
                {openIndex === idx ? <FaChevronUp /> : <FaChevronDown />}
              </button>
              {/* Details */}
              <div
                className={`overflow-hidden transition-all duration-500 ${openIndex === idx ? 'max-h-96 opacity-100 mt-6 py-4' : 'max-h-0 opacity-0 mt-0 py-0'}`}
              >
                <h4 className="text-lg font-semibold text-main mb-3 mt-2 text-center">
                  {services.whatWeOffer}
                </h4>
                <ul className="space-y-2 mb-4">
                  {service.details.map((detail, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 p-2 rounded-lg transition-colors duration-200 group hover:bg-main/10"
                      style={{ transitionDelay: `${i * 60}ms` }}
                    >
                      <span className="w-3 h-3 bg-secondary rounded-full flex-shrink-0 shadow-sm group-hover:scale-110 transition-transform"></span>
                      <span className="text-dark/90 font-medium text-base">{detail}</span>
                    </li>
                  ))}
                </ul>
                <div className="text-center">
                  <button className="bg-main hover:bg-secondary text-white font-semibold py-2 px-6 rounded-lg transition-colors">
                    {services.requestQuote}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-main to-secondary rounded-2xl p-8 text-white">
            <h3 className="text-2xl sm:text-3xl font-bold mb-4">
              {services.needCustomService}
            </h3>
            <p className="text-lg mb-6 opacity-90">
              {services.teamReadyToHelp}
            </p>
            <button className="bg-white text-main font-bold py-3 px-8 rounded-xl hover:bg-gray-100 transition-colors">
              {services.contactUs}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

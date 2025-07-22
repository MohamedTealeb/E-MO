'use client';
import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Link from 'next/link';


const Images = [
  { src: "/home.jpg", alt: "Kitchen Renovation", label: "Kitchen", icon: "🧱" },
  { src: "/painting.jpg", alt: "Painting Services", label: "Painting", icon: "🎨" },
  { src: "/bathroom.jpg", alt: "Bathroom Renovation", label: "Bathroom", icon: "🪟" },
  { src: "/flooring.jpg", alt: "Flooring Services", label: "Flooring", icon: "🌳" },
  { src: "/home2.jpg", alt: "Insulation Services", label: "Insulation", icon: "🛡" },
];
const Services = ({ t }) => {
  if (!t || !t.services) return null;
  const { services } = t;
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="bg-gradient-to-br from-slate-50 mt-10 via-blue-50 to-indigo-50 py-16 px-4">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[320px] md:h-[500px] flex items-center justify-center mb-16 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/home.jpg')" }}></div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          <div className="bg-white/10 backdrop-blur-md  w-[800px] h-[150px] rounded-2xl p-6 md:p-8 border border-white/30 shadow-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-blue-500 mb-4 text-center drop-shadow-lg">
              {services.title}

            </h2>
            <div className="text-gray-300  text-2xl font-bold text-center mt-2">
              {services?.Home} &nbsp; / &nbsp; {services?.title}
              </div>
           
          </div>
        </div>
      </div>

      <div className="w-full">

        {/* Services Grid */}
        <div className="grid grid-cols-1 gap-8 px-0">
          {services.items.map((service, idx) => (
            <div
              key={idx}
              className={`group bg-white/80 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-0 flex flex-col ${idx % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-stretch transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl cursor-pointer overflow-hidden w-full`}
            >
              {/* النصوص والأيقونة والزر */}
              <div className={`flex-1 flex flex-col justify-center p-6 sm:p-8 items-start text-left ${idx % 2 !== 0 ? 'md:items-end md:text-right' : 'md:items-start md:text-left'}`}>
                <div className="text-4xl mb-4">{Images[idx]?.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-main mb-2">
                  {service.title}
                </h3>
                <p className="text-dark/70 text-base mb-4 min-h-[48px]">
                  {service.description}
                </p>
                <a
                  href={`/${t.locale || 'fr'}/services/${service.id}`}
                  className="inline-block bg-blue-600 text-white font-bold py-2 px-6 rounded-lg shadow hover:bg-blue-700 transition-colors text-center w-fit"
                >
                  Demander un devis
                </a>
              </div>
              {/* صورة الخدمة */}
              {Images[idx] && (
                <img
                  src={Images[idx].src}
                  alt={Images[idx].alt}
                  className="w-full h-44 object-cover md:w-96 md:h-auto rounded-3xl"
                  style={{ minWidth: 'unset', maxHeight: '260px' }}
                />
              )}
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
            <Link href={`/${t.locale || 'fr'}/contact`}>
              <button className="bg-white cursor-pointer hover:bg-gray-300 hover:text-white text-main font-bold py-3 px-8 rounded-xl transition-colors">
                {services.contactUs}
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;

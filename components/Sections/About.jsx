'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaAward, FaCheckCircle, FaTools, FaLeaf, FaClock, FaHandshake, FaStar, FaUsers, FaLightbulb, FaPhone } from 'react-icons/fa';

const About = ({ t }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const sectionsRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1 }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1, delay: 0.3 }
    );
    gsap.fromTo(
      sectionsRef.current.children,
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, delay: 0.6 }
    );
  }, []);

  if (!t) return null;

  return (
    <section className="bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-20 px-6">
      {/* Hero Background Section */}
      <div className="relative w-full h-[320px] md:h-[700px] flex items-center justify-center mb-16 rounded-3xl overflow-hidden shadow-2xl">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/portfolio.jpg')" }}
        ></div>
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          <h1 className="text-2xl md:text-4xl font-bold text-white text-center drop-shadow-lg">
            {t?.title}
          </h1>
        </div>
      </div>
      {/* Services/Features Section */}
     
    
      {/* باقي الصفحة */}
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
       
         
        

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-12 mb-8 md:mb-16">
          {/* Left - Image */}
          <div ref={imageRef} className="lg:col-span-1 mb-6 md:mb-0">
            <div className="relative">
              <div className="w-full h-[180px] xs:h-[220px] sm:h-[260px] md:h-[350px] lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="/About.jpg"
                  alt="E&MO Construction"
                  className="w-full h-full object-cover object-center"
                />
              </div>
           
            </div>
          </div>

          {/* Right - Content Sections */}
          <div ref={sectionsRef} className="lg:col-span-2 space-y-6 sm:space-y-8 md:space-y-12">
            {/* Expertise Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/50">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-main to-secondary rounded-xl flex items-center justify-center">
                  <FaTools className="text-white text-lg sm:text-xl" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-main">{t.expertise.title}</h2>
              </div>
              <p className="text-base sm:text-lg text-dark/80 mb-4 sm:mb-6">{t.expertise.text}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                {t.expertise.services.map((service, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-3 bg-gradient-to-r from-main/5 to-secondary/5 rounded-xl">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    <span className="text-dark/80 font-medium text-xs sm:text-base">{service}</span>
                  </div>
                ))}
              </div>
              <p className="text-dark/70 italic text-xs sm:text-base">{t.expertise.guarantee}</p>
            </div>

            {/* Values Section */}
         

            {/* Why Choose Section */}
           

            {/* Vision Section */}
           

            {/* Contact Section */}
          
          </div>
          
        </div>
        <div className="max-w-7xl mx-auto mb-16">
        <div className="text-center mb-10">
          <span className="text-secondary font-bold uppercase tracking-wider block mb-2 text-base md:text-lg">
            {t?.customServiceSectionTitle}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold mb-2">{t?.customServiceSectionSubtitle}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t?.customServiceCards?.map((card, idx) => (
            <div key={idx} className="bg-white rounded-xl shadow-lg p-8 flex flex-col items-center border-t-4 border-secondary">
              <span className="text-6xl mb-4">{card.icon}</span>
              <h3 className="text-xl font-bold text-secondary mb-2 text-center">{card.title}</h3>
              <p className="text-gray-700 text-center">{card.description}</p>
            </div>
          ))}
        </div>
      </div>
      </div>
    </section>
  );
};

export default About;

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
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div ref={containerRef} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-main mb-6 leading-tight">
            {t.title}
          </h1>
          <div className="w-24 h-1 bg-secondary mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-dark/80 leading-relaxed max-w-4xl mx-auto">
            {t.text}
          </p>
        </div>

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
              <div className=" hidden md:block absolute mb-8 mr-4 bg-white rounded-2xl p-4 sm:p-6 shadow-xl">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-main to-secondary rounded-xl flex items-center justify-center">
                    <FaAward className="text-white text-lg sm:text-xl" />
                  </div>
                  <div>
                    <h3 className="font-bold text-main text-sm sm:text-base">{t.experience}</h3>
                    <p className="text-xs sm:text-sm text-dark/60">{t.experienceDesc}</p>
                  </div>
                </div>
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
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-6 md:p-8 shadow-xl border border-white/50">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-secondary to-accent rounded-xl flex items-center justify-center">
                  <FaStar className="text-white text-lg sm:text-xl" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-main">{t.values.title}</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 sm:gap-6">
                {t.values.principles.map((principle, index) => (
                  <div key={index} className="p-3 sm:p-6 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl border border-gray-100">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 bg-main rounded-lg flex items-center justify-center flex-shrink-0">
                        {index === 0 && <FaCheckCircle className="text-white text-xs sm:text-base" />}
                        {index === 1 && <FaClock className="text-white text-xs sm:text-base" />}
                        {index === 2 && <FaHandshake className="text-white text-xs sm:text-base" />}
                        {index === 3 && <FaLeaf className="text-white text-xs sm:text-base" />}
                      </div>
                      <div>
                        <h3 className="font-bold text-main mb-1 sm:mb-2 text-xs sm:text-base">{principle.title}</h3>
                        <p className="text-dark/70 text-xs sm:text-sm">{principle.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Why Choose Section */}
            <div className="bg-gradient-to-r from-main/10 to-secondary/10 rounded-3xl p-4 sm:p-8 shadow-xl border border-main/20">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-accent to-main rounded-xl flex items-center justify-center">
                  <FaUsers className="text-white text-lg sm:text-xl" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-main">{t.whyChoose.title}</h2>
              </div>
              <p className="text-base sm:text-lg text-dark/80 mb-4 sm:mb-6">{t.whyChoose.text}</p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 sm:gap-4 mb-4 sm:mb-6">
                {t.whyChoose.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center gap-2 sm:gap-3 p-2 sm:p-4 bg-white/70 rounded-xl">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-secondary rounded-lg flex items-center justify-center">
                      <FaCheckCircle className="text-white text-xs sm:text-sm" />
                    </div>
                    <span className="text-dark/80 font-medium text-xs sm:text-base">{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="text-dark/70 font-semibold text-center text-xs sm:text-base">{t.whyChoose.conclusion}</p>
            </div>

            {/* Vision Section */}
            <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-4 sm:p-8 shadow-xl border border-white/50">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r from-secondary to-main rounded-xl flex items-center justify-center">
                  <FaLightbulb className="text-white text-lg sm:text-xl" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-main">{t.vision.title}</h2>
              </div>
              <p className="text-base sm:text-lg text-dark/80 leading-relaxed">{t.vision.text}</p>
            </div>

            {/* Contact Section */}
            <div className="bg-gradient-to-r from-main to-secondary rounded-3xl p-4 sm:p-8 shadow-xl text-white">
              <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white/20 rounded-xl flex items-center justify-center">
                  <FaPhone className="text-white text-lg sm:text-xl" />
                </div>
                <h2 className="text-xl sm:text-2xl md:text-3xl font-bold">{t.contact.title}</h2>
              </div>
              <p className="text-base sm:text-lg text-white/90 leading-relaxed mb-4 sm:mb-6">{t.contact.text}</p>
              <button className="w-full md:w-auto bg-white cursor-pointer text-main font-bold py-4 px-8 rounded-xl hover:bg-gray-100 transition-colors">
                Contactez-nous maintenant
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

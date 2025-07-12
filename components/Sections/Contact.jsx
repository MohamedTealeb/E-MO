'use client'
import React, { useRef, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaAddressBook, FaPaperPlane, FaMapMarkerAlt } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import fr from '@/translations/fr.json';
import nl from '@/translations/nl.json';

const translations = { fr, nl };

export const Contact = () => {
  const pathname = usePathname();
  const locale = pathname.startsWith('/nl') ? 'nl' : 'fr';
  const t = translations[locale].contact;

  const formRef = useRef(null);
  const infoRef = useRef(null);

  useEffect(() => {
    gsap.fromTo([
      formRef.current,
      infoRef.current
    ],
      {
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: 'power3.out'
      }
    );
  }, []);

  return (
    <div className="flex flex-col items-center mt-10 justify-center min-h-screen bg-gradient-to-br from-[#f8fafc] via-[#e2e8f0] to-[#cbd5e1] px-4 py-12">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-bold text-main mb-6 drop-shadow-lg leading-tight">
          {t.title}
        </h1>
        <div className="w-24 h-1 bg-secondary mx-auto mb-6 rounded-full"></div>
        <h2 className="text-2xl md:text-3xl font-semibold text-dark mb-4 opacity-90">
          {t.subtitle}
        </h2>
        <p className="text-lg md:text-xl text-dark/80 leading-relaxed max-w-3xl mx-auto">
          {t.text}
        </p>
      </div>

      {/* Main Content */}
      <div className="w-full max-w-6xl flex flex-col lg:flex-row gap-8 lg:gap-12">
        {/* Contact Form */}
        <div ref={formRef} className="flex-1">
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-main mb-2">Formulaire de contact</h3>
              <p className="text-dark/70">Remplissez le formulaire ci-dessous</p>
            </div>
            
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-main mb-2 font-semibold text-sm uppercase tracking-wide" htmlFor="name">
                    {t.form.name}
                  </label>
                  <input
                    id="name"
                    type="text"
                    placeholder={`Votre ${t.form.name.toLowerCase()}`}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/80 transition-all duration-300 text-lg"
                  />
                </div>
                <div>
                  <label className="block text-main mb-2 font-semibold text-sm uppercase tracking-wide" htmlFor="phone">
                    {t.form.phone}
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    placeholder={`Votre ${t.form.phone.toLowerCase()}`}
                    className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/80 transition-all duration-300 text-lg"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-main mb-2 font-semibold text-sm uppercase tracking-wide" htmlFor="email">
                  {t.form.email}
                </label>
                <input
                  id="email"
                  type="email"
                  placeholder={`Votre ${t.form.email.toLowerCase()}`}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/80 transition-all duration-300 text-lg"
                />
              </div>
              
              <div>
                <label className="block text-main mb-2 font-semibold text-sm uppercase tracking-wide" htmlFor="message">
                  {t.form.message}
                </label>
                <textarea
                  id="message"
                  placeholder={`Votre ${t.form.message.toLowerCase()}`}
                  rows={6}
                  className="w-full border-2 border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:border-secondary focus:ring-2 focus:ring-secondary/20 bg-white/80 transition-all duration-300 text-lg resize-none"
                />
              </div>
              
              <button
                type="submit"
                className="w-full cursor-pointer bg-gradient-to-r from-main to-secondary hover:from-secondary hover:to-main text-white font-bold py-4 px-8 rounded-xl flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <FaPaperPlane className="text-xl" />
                {t.form.submit}
              </button>
            </form>
          </div>
        </div>

        {/* Contact Information */}
        <div ref={infoRef} className="flex-1">
          <div className="bg-white/95 backdrop-blur-sm p-8 md:p-10 rounded-3xl shadow-2xl border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-3xl">
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-main mb-2">Informations de contact</h3>
              <p className="text-dark/70">Nous sommes là pour vous aider</p>
            </div>
            
            <div className="space-y-8">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100">
                <div className="flex-shrink-0 w-12 h-12 bg-main rounded-xl flex items-center justify-center">
                  <FaPhoneAlt className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-main mb-1">Téléphone</h4>
                  <p className="text-dark/80 text-lg font-semibold">+32 123 45 67 89</p>
                  <p className="text-dark/60 text-sm">Lun-Ven: 8h-18h</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100">
                <div className="flex-shrink-0 w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <FaEnvelope className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-main mb-1">Email</h4>
                  <p className="text-dark/80 text-lg font-semibold">info@e-morenovation.be</p>
                  <p className="text-dark/60 text-sm">Réponse sous 24h</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100">
                <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-xl flex items-center justify-center">
                  <FaMapMarkerAlt className="text-white text-xl" />
                </div>
                <div>
                  <h4 className="font-bold text-main mb-1">Adresse</h4>
                  <p className="text-dark/80 text-lg font-semibold">123 Rue Exemple</p>
                  <p className="text-dark/60 text-sm">1000 Ville, Belgique</p>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-main/10 to-secondary/10 border border-main/20">
              <h4 className="font-bold text-main mb-3 text-lg">{t.whyContactUs}</h4>
              <ul className="space-y-2 text-dark/80">
                {t.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-center gap-2">
                    <div className="w-2 h-2 bg-secondary rounded-full"></div>
                    {benefit}
                  </li>
                ))}
              </ul>
            </div>

            {/* Suggested Keywords */}
            <div className="mt-6 p-8 rounded-3xl bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 border border-slate-200/50 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-gradient-to-r from-main to-secondary rounded-xl flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-main text-xl">{t.keywords}</h4>
                  <p className="text-dark/60 text-sm">{t.keywordsSubtitle}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {t.suggestedKeywords.map((keyword, index) => (
                  <div 
                    key={index}
                    className="group relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-main/5 to-secondary/5 rounded-2xl transform transition-all duration-300 group-hover:scale-105 group-hover:from-main/10 group-hover:to-secondary/10"></div>
                    <div className="relative p-4 bg-white/70 backdrop-blur-sm border border-white/50 rounded-2xl hover:border-secondary/30 transition-all duration-300 cursor-pointer group-hover:shadow-lg group-hover:-translate-y-1">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gradient-to-r from-main to-secondary rounded-lg flex items-center justify-center opacity-70 group-hover:opacity-100 transition-opacity">
                          <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                          </svg>
                        </div>
                        <span className="text-dark/80 font-medium text-sm group-hover:text-main transition-colors">
                          {keyword}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-main/5 to-secondary/5 rounded-2xl border border-main/10">
                <div className="flex items-center gap-2 text-sm text-dark/70">
                  <svg className="w-4 h-4 text-secondary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span>{t.keywordsInfo}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
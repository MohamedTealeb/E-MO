'use client'
import React, { useRef, useEffect } from 'react';
import { FaPhoneAlt, FaEnvelope, FaAddressBook, FaPaperPlane } from 'react-icons/fa';
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
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-[#f8fafc] to-[#e0e7ef] px-2 py-8">
      <h1 className="text-4xl font-bold text-main mb-2 text-center drop-shadow-lg">{t.title}</h1>
      <p className="text-lg text-dark mb-8 text-center opacity-90">{t.text}</p>
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
        {/* Form */}
        <form ref={formRef} className="flex-1 bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-accent/30">
          <div className="mb-4">
            <label className="block text-main mb-1 font-semibold" htmlFor="name">{t.form.name}</label>
            <input
              id="name"
              type="text"
              placeholder={t.form.name}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-secondary bg-white/90"
            />
          </div>
          <div className="mb-4">
            <label className="block text-main mb-1 font-semibold" htmlFor="email">{t.form.email}</label>
            <input
              id="email"
              type="email"
              placeholder={t.form.email}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-secondary bg-white/90"
            />
          </div>
          <div className="mb-4">
            <label className="block text-main mb-1 font-semibold" htmlFor="message">{t.form.message}</label>
            <textarea
              id="message"
              placeholder={t.form.message}
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:border-secondary bg-white/90"
            />
          </div>
          <button
            type="submit"
            className="w-full cursor-pointer bg-main hover:bg-secondary text-white font-semibold py-3 rounded-xl flex items-center justify-center gap-2 text-lg shadow-md transition-colors"
          >
            <FaPaperPlane /> {t.form.submit}
          </button>
        </form>
        {/* Contact Info */}
        <div ref={infoRef} className="flex-1 flex flex-col gap-6 justify-center items-start md:items-start bg-white p-8 rounded-2xl shadow-2xl border border-gray-100 transition-all duration-300 hover:scale-105 hover:shadow-accent/30">
          <div className="flex items-center gap-3 text-main text-lg">
            <FaPhoneAlt /> <span className="font-semibold">+32 123 45 67 89</span>
          </div>
          <div className="flex items-center gap-3 text-main text-lg">
            <FaEnvelope /> <span className="font-semibold">info@e-morenovation.be</span>
          </div>
          <div className="flex items-center gap-3 text-main text-lg">
            <FaAddressBook />
            <span className="font-semibold">123 Rue Exemple, 1000 Ville</span>
          </div>
        </div>
      </div>
    </div>
  );
};



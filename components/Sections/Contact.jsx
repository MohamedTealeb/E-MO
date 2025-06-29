'use client'
import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaAddressBook, FaPaperPlane } from 'react-icons/fa';
import { usePathname } from 'next/navigation';
import fr from '@/translations/fr.json';
import nl from '@/translations/nl.json';

const translations = { fr, nl };

export const Contact = () => {
  const pathname = usePathname();
  const locale = pathname.startsWith('/nl') ? 'nl' : 'fr';
  const t = translations[locale].contact;

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-light px-2 py-8">
      <h1 className="text-4xl font-bold text-main mb-2 text-center">{t.title}</h1>
      <p className="text-lg text-dark mb-8 text-center">{t.text}</p>
      <div className="w-full max-w-4xl flex flex-col md:flex-row gap-8">
        {/* Form */}
        <form className="flex-1 bg-white p-6 rounded-md shadow-md border border-gray-200">
          <div className="mb-4">
            <label className="block text-dark mb-1" htmlFor="name">{t.form.name}</label>
            <input
              id="name"
              type="text"
              placeholder={t.form.name}
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-secondary"
            />
          </div>
          <div className="mb-4">
            <label className="block text-dark mb-1" htmlFor="email">{t.form.email}</label>
            <input
              id="email"
              type="email"
              placeholder={t.form.email}
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-secondary"
            />
          </div>
          <div className="mb-4">
            <label className="block text-dark mb-1" htmlFor="message">{t.form.message}</label>
            <textarea
              id="message"
              placeholder={t.form.message}
              rows={5}
              className="w-full border border-gray-400 rounded px-3 py-2 focus:outline-none focus:border-secondary"
            />
          </div>
        
          <button
            type="submit"
            className="w-full cursor-pointer bg-main hover:bg-secondary text-white font-semibold py-2 rounded flex items-center justify-center gap-2 transition-colors"
          >
            <FaPaperPlane /> {t.form.submit}
          </button>
        </form>
        {/* Contact Info */}
        <div className="flex-1 flex flex-col gap-6 justify-center items-start md:items-start">
          <div className="flex items-center gap-3 text-main text-lg">
            <FaPhoneAlt /> <span>+32 123 45 67 89</span>
          </div>
          <div className="flex items-center gap-3 text-main text-lg">
            <FaEnvelope /> <span>contact@email.com</span>
          </div>
          <div className="flex items-center gap-3 text-main text-lg">
            <FaAddressBook />
            <span>123 Rue Exemple, 1000 Ville</span>
          </div>
        </div>
      </div>
    </div>
  );
};



'use client'
import React from 'react';
import { usePathname } from 'next/navigation';
import fr from '@/translations/fr.json';
import nl from '@/translations/nl.json';
const translations = { fr, nl };

const serviceImages = [
  '/kitchen.jpg',
  '/bathroom.jpg',
  '/painting.jpg',
  '/flooring.jpg',
  '/insulation.jpg',
];

const serviceEmojis = {
  kitchen: "🍽️",
  bathroom: "🛁",
  painting: "🎨",
  flooring: "🪵",
  insulation: "🧱"
};

export const Services = ({ t }) => {
  if (!t || !t.items) return null;
  const serviceKeys = Object.keys(t.items).filter(key => !key.endsWith('_caption'));

  const getImage = idx => serviceImages[idx] || serviceImages[serviceImages.length - 1];

  return (
    <div className="flex flex-col items-center justify-center min-h-screen mt-20 bg-light px-2 py-8">
      <h1 className="text-4xl font-bold text-main mb-2 text-center">{t.title}</h1>
      {t.text && <p className="text-lg text-dark mb-8 text-center">{t.text}</p>}
      <div className="w-full  max-w-6xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
        {serviceKeys.map((key, idx) => (
          <div
            key={key}
            className="group bg-gradient-to-br cursor-pointer from-[#f8fafc] to-[#e0e7ef] rounded-2xl shadow-xl p-8 flex flex-col items-center transition-transform duration-300 hover:-translate-y-2 hover:shadow-2xl border border-gray-100"
            style={{ minHeight: 440 }}
          >
            <div className="w-full h-60 mb-4 overflow-hidden rounded-xl flex items-center justify-center bg-white shadow-inner">
              <img
                src={getImage(idx)}
                alt={t.items[key]}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <h2 className="text-2xl font-extrabold text-main mb-2 text-center leading-tight">
              {t.items[key]}
            </h2>
            <p className="text-dark text-center text-lg opacity-80 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-1">
              <span>{serviceEmojis[key]}</span>
              {t.items[`${key}_caption`]}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};


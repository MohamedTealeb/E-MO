'use client'
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '@/public/HLogo.png';
import { FaFacebookF, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = ({ t, locale }) => {
  return (
    <footer className="bg-main text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info - Left Section */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <img 
                src={logo.src}
                alt="Company Logo" 
                className="h-16 object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">E-Mo Renovation</h3>
            <p className="text-gray-300 mb-6 text-sm">
              {locale === 'fr' 
                ? "Votre partenaire de confiance pour tous vos projets de rénovation"
                : "Uw vertrouwde partner voor al uw renovatieprojecten"
              }
            </p>
            
            {/* Social Media Icons */}
            <div className="flex space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors cursor-pointer">
                <FaFacebookF className="text-white w-8 h-8 text-lg" />
              </div>
              <div className="w-10 h-10 bg-gradient-to-r from-orange-500 via-red-500 to-pink-500 rounded-lg flex items-center justify-center hover:opacity-80 transition-opacity cursor-pointer">
                <FaInstagram className="text-white w-8 h-8 text-lg" />
              </div>
              <div className="w-10 h-10 bg-gray-400 rounded-lg flex items-center justify-center hover:bg-gray-500 transition-colors cursor-pointer">
                <FaEnvelope className="text-white w-8 h-8 text-lg" />
              </div>
            </div>
          </div>

          {/* Quick Links - Middle Section */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">
              {locale === 'fr' ? 'Liens rapides' : 'Snelle links'}
            </h4>
            <div className="flex flex-col space-y-2">
              <Link href={`/${locale}`} className="text-gray-300 hover:text-white transition-colors flex items-center justify-center">
                <span className="text-gray-500 mr-2">→</span>
                {t?.nav?.home || 'Accueil'}
              </Link>
              <Link href={`/${locale}/about`} className="text-gray-300 hover:text-white transition-colors flex items-center justify-center">
                <span className="text-gray-500 mr-2">→</span>
                {t?.nav?.about || 'À propos'}
              </Link>
              <Link href={`/${locale}/services`} className="text-gray-300 hover:text-white transition-colors flex items-center justify-center">
                <span className="text-gray-500 mr-2">→</span>
                {t?.nav?.services || 'Services'}
              </Link>
              <Link href={`/${locale}/portfolio`} className="text-gray-300 hover:text-white transition-colors flex items-center justify-center">
                <span className="text-gray-500 mr-2">→</span>
                {t?.nav?.portfolio || 'Portfolio'}
              </Link>
              <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-white transition-colors flex items-center justify-center">
                <span className="text-gray-500 mr-2">→</span>
                {t?.nav?.contact || 'Contact'}
              </Link>
            </div>
          </div>

          {/* Contact Info - Right Section */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">
              {locale === 'fr' ? 'Suivez-nous' : 'Volg ons'}
            </h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <span className="text-red-500">📍</span>
                <span className="text-gray-300 text-sm">Driekoningenstraat 215 9100 Sint-Niklaas</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <span className="text-red-500">📞</span>
                <span className="text-gray-300 text-sm">+0465 21 81 94</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <span className="text-red-500">✉️</span>
                <span className="text-gray-300 text-sm">info@emo-renovation.be</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300 text-sm">
            © E-Mo . {t?.footer?.rights || 'Tous droits réservés'}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
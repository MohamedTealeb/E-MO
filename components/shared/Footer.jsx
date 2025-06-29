'use client'
import React from 'react';
import Link from 'next/link';

const Footer = ({ t, locale }) => {
  return (
    <footer className="bg-main text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div className="text-center md:text-left">
            <div className="flex justify-center md:justify-start mb-4">
              <img 
                src="/HLogo.jpg" 
                alt="Company Logo" 
                className="w-16 h-16 rounded-full object-cover"
              />
            </div>
            <h3 className="text-xl font-bold mb-4">E-Mo Renovation</h3>
            <p className="text-gray-300 mb-4">
              {locale === 'fr' 
                ? "Votre partenaire de confiance pour tous vos projets de rénovation"
                : "Uw vertrouwde partner voor al uw renovatieprojecten"
              }
            </p>
          </div>

          {/* Quick Links */}
          <div className="text-center">
            <h4 className="text-lg font-semibold mb-4">{t?.quickLinks?.title || 'Quick Links'}</h4>
            <div className="flex flex-col space-y-2">
              <Link href={`/${locale}`} className="text-gray-300 hover:text-white transition-colors">
                {t?.nav?.home}
              </Link>
              <Link href={`/${locale}/about`} className="text-gray-300 hover:text-white transition-colors">
                {t?.nav?.about}
              </Link>
              <Link href={`/${locale}/services`} className="text-gray-300 hover:text-white transition-colors">
                {t?.nav?.services}
              </Link>
              <Link href={`/${locale}/portfolio`} className="text-gray-300 hover:text-white transition-colors">
                {t?.nav?.portfolio}
              </Link>
              <Link href={`/${locale}/contact`} className="text-gray-300 hover:text-white transition-colors">
                {t?.nav?.contact}
              </Link>
            </div>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <h4 className="text-lg font-semibold mb-4">{t?.footer?.followUs}</h4>
            <div className="space-y-3">
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <span className="text-accent">📍</span>
                <span className="text-gray-300">Brussels, Belgium</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <span className="text-accent">📞</span>
                <span className="text-gray-300">+32 123 456 789</span>
              </div>
              <div className="flex items-center justify-center md:justify-end space-x-2">
                <span className="text-accent">✉️</span>
                <span className="text-gray-300">info@emo-renovation.be</span>
              </div>
            </div>
            
            {/* Social Media Icons */}
          
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            © E-Mo . {t?.footer?.rights}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 
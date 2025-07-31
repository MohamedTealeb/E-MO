'use client'
import React, { useRef, useEffect } from 'react';
import { FaPaperPlane, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
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
  const cardsRef = useRef([]);

  useEffect(() => {
    gsap.fromTo(
      formRef.current,
      {
        opacity: 0,
        y: 60
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: 'power3.out'
      }
    );

    gsap.fromTo(
      cardsRef.current,
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        delay: 0.4,
        ease: 'power2.out'
      }
    );
  }, []);

  return (
    <div className="min-h-screen overflow-hidden bg-gray-100 py-20 px-4">
      {/* Header Section */}
      <div className="text-center mb-12 max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          {t.title}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
          {t.text}
        </p>
      </div>

      {/* Image above form */}
      <div className=" w-full absolute  left-0 mx-auto mb-16">
        <img 
          src="/Rectangle 31.png" 
          alt="Contact illustration" 
          className="w-full h-auto rounded-2xl shadow-lg"
        />
      </div>

      {/* Contact Form Card */}
      <div className="max-w-2xl mx-auto mb-16">
        <div ref={formRef} className="bg-white rounded-2xl shadow-lg p-8 relative">
          {/* Background Map Textures */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute left-0 top-0 w-1/3 h-full bg-gradient-to-br from-brown-200 to-brown-300 transform -rotate-12 -translate-x-8"></div>
            <div className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-br from-green-200 to-green-300 transform rotate-12 translate-x-8"></div>
          </div>
          
          <div className="relative z-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-2">Formulaire de contact</h3>
              <p className="text-gray-600">Remplissez le formulaire ci-dessous</p>
            </div>
            
            <form className="space-y-6">
              <div>
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="name">
                  Nom et prénom
                </label>
                <div className="border-b-2 border-gray-300 pb-2">
                  <input
                    id="name"
                    type="text"
                    placeholder="Votre nom et prénom"
                    className="w-full bg-transparent border-none outline-none text-lg"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="phone">
                  Téléphone
                </label>
                <div className="border-b-2 border-gray-300 pb-2">
                  <input
                    id="phone"
                    type="tel"
                    placeholder="Votre téléphone"
                    className="w-full bg-transparent border-none outline-none text-lg"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="email">
                  Email
                </label>
                <div className="border-b-2 border-gray-300 pb-2">
                  <input
                    id="email"
                    type="email"
                    placeholder="Votre email"
                    className="w-full bg-transparent border-none outline-none text-lg"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-gray-700 mb-2 font-medium" htmlFor="message">
                  Message
                </label>
                <div className="border-b-2 border-gray-300 pb-2">
                  <textarea
                    id="message"
                    placeholder="Votre message"
                    rows={4}
                    className="w-full bg-transparent border-none outline-none text-lg resize-none"
                  />
                </div>
              </div>
              
              <button
                type="submit"
                className="w-full  bg-main text-white font-bold py-4 px-8 rounded-lg flex items-center justify-center gap-3 text-lg transition-all duration-300 mt-8"
              >
                <FaPaperPlane className="text-xl" />
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Contact Information Cards */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-main mb-4">Entrer en contact</h2>
          <div className="flex items-center justify-center gap-2 mb-2">
          
            <p className="text-lg text-gray-600">Nous sommes là pour vous aider</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Phone Card */}
          <div 
            ref={el => (cardsRef.current[0] = el)}
            className="bg-white rounded-2xl shadow-lg p-6 relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-main rounded-full flex items-center justify-center">
              <FaPhoneAlt className="text-white text-xl" />
            </div>
            <div className="text-center pt-8">
              <h3 className="text-xl font-bold text-main mb-3">Téléphone</h3>
              <p className="text-gray-700 text-lg font-semibold mb-1">+32491129917</p>
              <p className="text-gray-700 text-lg font-semibold mb-1">+32465218194</p>
              <p className="text-gray-600 text-sm">Lun-Ven: 8h-18h</p>
            </div>
          </div>

          {/* Email Card */}
          <div 
            ref={el => (cardsRef.current[1] = el)}
            className="bg-white rounded-2xl shadow-lg p-6 relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-main rounded-full flex items-center justify-center">
              <FaEnvelope className="text-white text-xl" />
            </div>
            <div className="text-center pt-8">
              <h3 className="text-xl font-bold text-main mb-3">Email</h3>
              <p className="text-gray-700 text-lg font-semibold mb-1 underline">info@e-morenovation.be</p>
              <p className="text-gray-600 text-sm">Réponse sous 24h</p>
            </div>
          </div>

          {/* Address Card */}
          <div 
            ref={el => (cardsRef.current[2] = el)}
            className="bg-white rounded-2xl shadow-lg p-6 relative"
          >
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-main rounded-full flex items-center justify-center">
              <FaMapMarkerAlt className="text-white text-xl" />
            </div>
            <div className="text-center pt-8">
              <h3 className="text-xl font-bold text-main mb-3">Adresse</h3>
              <p className="text-gray-700 text-lg font-semibold mb-1">Driekoningenstraat 215 9100 Sint-Niklaas</p>
              <p className="text-gray-600 text-sm">1000 Ville, Belgique</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
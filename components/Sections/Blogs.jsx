'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { FaQuoteLeft } from 'react-icons/fa';

const Blogs = ({ t }) => {
  if (!t?.blogs) return null;
  const { title, items, Home: home } = t.blogs;
  const cardsRef = useRef([]);

  useEffect(() => {
    if (cardsRef.current.length) {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 60,
          scale: 0.8,
          rotate: -8
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          rotate: 0,
          stagger: 0.15,
          duration: 0.8,
          ease: 'back.out(1.7)'
        }
      );
    }
  }, []);

  return (
    <section className="py-20 bg-gradient-to-br mt-20 from-[#f8fafc] to-[#e0e7ef] min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[320px] md:h-[700px] flex items-center justify-center mb-16 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/unsplash_EZERpkl3Lso.png')" }}></div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full px-4 z-10">
          <div className="bg-white rounded-lg p-8 shadow-xl w-[400px] max-w-full flex flex-col items-center justify-center mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4 text-center">
              {title}
            </h1>
            <div className="text-gray-600 text-lg font-medium text-center">
              {home} / {title}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div className="flex flex-col items-center gap-1">
            <img 
              src="/ep_arrow-down-bold.png" 
              alt="Scroll down" 
              className="w-8 h-8 filter brightness-0 invert"
            />
            <img 
              src="/ep_arrow-down-bold.png" 
              alt="Scroll down" 
              className="w-8 h-8 filter brightness-0 invert -mt-2"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top row - 2 cards */}
          <div className="flex justify-center gap-16 mb-16">
            {items.slice(0, 2).map((item, idx) => (
              <div
                key={idx}
                ref={el => (cardsRef.current[idx] = el)}
                className="bg-white rounded-xl shadow-md p-6 relative hover:shadow-lg transition-all duration-300 cursor-pointer group w-80"
              >
                {/* Large quotation mark */}
                <div className="absolute top-0 mb-0 right-0 text-gray-600 text-7xl font-bold">
                  <FaQuoteLeft />
                </div>
                
                <div className="relative z-10 pt-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight pr-8">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 pr-4">
                    {item.excerpt}
                  </p>
                  <div className="text-xs text-gray-500 text-right font-medium">
                    {item.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom row - 1 centered card */}
          <div className="flex justify-center">
            {items.slice(2, 3).map((item, idx) => (
              <div
                key={idx + 2}
                ref={el => (cardsRef.current[idx + 2] = el)}
                className="bg-white rounded-xl shadow-md p-6 relative hover:shadow-lg transition-all duration-300 cursor-pointer group w-80"
              >
                {/* Large quotation mark */}
                <div className="absolute top-0 right-0 text-gray-600 text-7xl font-bold">
                  <FaQuoteLeft />
                </div>
                
                <div className="relative z-10 pt-2">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 leading-tight pr-8">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 pr-4">
                    {item.excerpt}
                  </p>
                  <div className="text-xs text-gray-500 text-right font-medium">
                    {item.author}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blogs; 
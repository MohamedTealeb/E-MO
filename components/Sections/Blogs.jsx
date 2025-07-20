'use client'
import React, { useRef, useEffect } from 'react';
import gsap from 'gsap';

const Blogs = ({ t }) => {
  if (!t?.blogs) return null;
  const { title, items } = t.blogs;
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
      <div className="relative w-full h-[320px] md:h-[500px] flex items-center justify-center mb-16 rounded-3xl overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/home2.jpg')" }}></div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 flex flex-col items-center justify-center w-full h-full px-4">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 md:p-8 border border-white/30 shadow-2xl">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 text-center drop-shadow-lg">{title}</h2>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-12">
          {items.map((item, idx) => (
            <div
              key={idx}
              ref={el => (cardsRef.current[idx] = el)}
              className="bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-8 max-w-xs min-w-[270px] flex flex-col items-start border-t-4 border-accent hover:scale-105 hover:shadow-accent/30 transition-all duration-300 cursor-pointer group"
              style={{ minHeight: 270 }}
            >
              {item.image && (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-32 h-32 object-cover rounded-full shadow-lg mb-4 border-4 border-white group-hover:scale-110 transition-transform duration-300 mx-auto self-center"
                />
              )}
              <div className="text-2xl font-bold text-accent mb-3 group-hover:text-main transition-colors duration-200 text-center w-full">{item.title}</div>
              <div className="text-gray-700 text-base mb-4 leading-relaxed group-hover:text-dark/90 transition-colors duration-200">{item.excerpt}</div>
              <div className="text-sm text-gray-500 mt-auto self-end group-hover:text-accent transition-colors duration-200">{item.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs; 
'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
 
  { src: '/kitchen.jpg', alt: 'Kitchen' },
  { src: '/bathroom.jpg', alt: 'Bathroom' },
  { src: '/painting.jpg', alt: 'Painting' },
  { src: '/flooring.jpg', alt: 'Flooring' },


];

const SLIDE_WIDTH = 200; // نفس min-w لكل صورة
const DURATION = 18; // مدة الحركة الكاملة بالثواني

const ImageSlider = () => {
  // كرر الصور مرتين لتحقيق تأثير الماركيه
  const marqueeImages = [...images, ...images];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4 overflow-hidden">
        <motion.div
          className="flex gap-0"
          style={{ width: `${marqueeImages.length * SLIDE_WIDTH}px` }}
          animate={{ x: [0, -images.length * SLIDE_WIDTH] }}
          transition={{ repeat: Infinity, duration: DURATION, ease: 'linear' }}
        >
          {marqueeImages.map((img, idx) => (
            <div
              key={idx}
              className="w-[280px] h-[280px] flex-shrink-0 rounded-2xl shadow-lg overflow-hidden bg-gray-100 snap-center relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </motion.div>
      </div>
      <style jsx global>{`
        .scrollbar-hide::-webkit-scrollbar { display: none; }
        .scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default ImageSlider; 
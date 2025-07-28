'use client'
import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const images = [
  { src: '/Rectangle 61.png', alt: 'Kitchen' },
  { src: '/Rectangle 60.png', alt: 'Bathroom' },
  { src: '/Rectangle 58.png', alt: 'Flooring' },
  { src: '/Rectangle 59.png', alt: 'Painting' },
];

const ImageSlider = () => {
  return (
    <section className="py-16 bg-gray-200">
      <div className="overflow-x-auto overflow-y-hidden sm:overflow-hidden px-4 sm:px-0">
        <motion.div
          className="flex gap-3 sm:gap-0 min-w-max sm:min-w-0"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {images.map((img, idx) => (
            <div
              key={idx}
              className="w-64 h-40 sm:w-64 sm:h-40 md:w-80 md:h-48 lg:w-[357px] lg:h-[300px] flex-shrink-0 shadow-lg overflow-hidden bg-gray-100 rounded-lg sm:rounded-none sm:snap-center relative"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover object-center"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ImageSlider; 
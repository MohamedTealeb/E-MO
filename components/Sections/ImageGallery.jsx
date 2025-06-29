'use client'
import React from 'react';
import kitchen from '@/public/kitchen.jpg';
import bathroom from '@/public/bathroom.jpg';
import painting from '@/public/painting.jpg';

const ImageGallery = ({ t }) => {
  const images = [
    {
      src: kitchen.src,
      alt: 'Kitchen Renovation'
    
    },
    {
      src: bathroom.src, 
      alt: 'Bathroom Renovation'
     
    },
    {
      src: painting.src,
      alt: 'Painting Work'
      
    }
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-main text-center mb-12">
          {t?.gallery?.title || 'Our Recent Work'}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {images.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 cursor-pointer bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
               
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery; 
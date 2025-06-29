'use client'
import React from 'react';
import kitchen from '@/public/kitchen.jpg';
import bathroom from '@/public/bathroom.jpg';
import painting from '@/public/painting.jpg';
import flooring from '@/public/flooring.jpg';
import insulation from '@/public/insulation.jpg';
import portfolio from '@/public/portfolio.jpg';

const PortfolioGallery = ({ t }) => {
  const portfolioImages = [
    {
      src: kitchen.src,
      alt: 'Kitchen Renovation',
      title: 'Kitchen'
    },
    {
      src: bathroom.src,
      alt: 'Bathroom Renovation', 
      title: 'Bathroom'
    },
    {
      src: painting.src,
      alt: 'Painting Work',
      title: 'Painting'
    },
    {
      src: flooring.src,
      alt: 'Flooring Installation',
      title: 'Flooring'
    },
    {
      src: insulation.src,
      alt: 'Insulation Work',
      title: 'Insulation'
    },
    {
      src: portfolio.src,
      alt: 'Portfolio Project',
      title: 'Project'
    }
  ];

  return (
    <section className="py-16 bg-light">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-main text-center mb-12">
          {t?.gallery?.title || 'Our Portfolio Gallery'}
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {portfolioImages.map((image, index) => (
            <div key={index} className="group relative overflow-hidden rounded-2xl shadow-xl">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                <h3 className="text-white text-2xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {image.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PortfolioGallery; 
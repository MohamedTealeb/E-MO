'use client'
import React from 'react';
import kitchen from '@/public/home.jpg';
import bathroom from '@/public/p2.jpg';
import painting from '@/public/p3.jpg';
import flooring from '@/public/p4.jpg';
import insulation from '@/public/p5.jpg';
import portfolio from '@/public/p6.jpg';

const PortfolioGallery = ({ t }) => {
  const portfolioImages = [
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
    },
    {
      src: flooring.src,
      alt: 'Flooring Installation'
    },
    {
      src: insulation.src,
      alt: 'Insulation Work'
    },
    {
      src: portfolio.src,
      alt: 'Portfolio Project'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-main mb-4">
            {t?.gallery?.title || 'Our Portfolio Gallery'}
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            {t?.gallery?.subtitle || 'Discover our latest renovation projects and see the transformation in action'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-7xl mx-auto">
          {portfolioImages.map((image, index) => (
            <div key={index} className="group relative">
              {/* Main Image Container */}
              <div className="relative overflow-hidden cursor-pointer rounded-3xl shadow-2xl bg-white p-4">
                <div className="aspect-[4/3]  overflow-hidden rounded-2xl">
                  <img
                    src={image.src}
                    alt={image.alt} 
                    className="w-full  h-full object-cover transition-all duration-700 group-hover:scale-125"
                  />
                </div>
                
                {/* Overlay with title */}
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-2xl">
                  <div className="absolute bottom-4 left-4 right-4">
                   
                  </div>
                </div>
              </div>
              
              {/* Decorative element */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-accent rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100"></div>
            </div>
          ))}
        </div>
        
      
      </div>
    </section>
  );
};

export default PortfolioGallery; 
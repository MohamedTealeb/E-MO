'use client'
import React from 'react';
import kitchen from '@/public/kitchen.jpg';
import painting from '@/public/painting.jpg';
import home from '@/public/home.jpg';

const cardImages = [home.src, painting.src, kitchen.src];

const ImageGallery = ({ t }) => {
  const cards = t?.serviceCards || [];

  return (
    <section className="py-16 bg-[#f4f8fc]">
      <div className="container mx-auto px-4">
        {cards.map((card, idx) => {
          // Alternate layout for even/odd cards
          const isEven = idx % 2 === 1;
          return (
            <div
              key={idx}
              className={`flex flex-col md:flex-row ${isEven ? 'md:flex-row-reverse' : ''} bg-white rounded-2xl shadow-lg overflow-hidden mb-10`}
            >
              {/* Text */}
              <div className="flex-1 p-6 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  {/* Icon placeholder, you can replace with real SVG/icon if needed */}
                  {/* <span className="text-3xl text-blue-600 mr-3">{card.icon}</span> */}
                  <h3 className="text-xl font-bold text-gray-800">{card.title}</h3>
                </div>
                <ul className="mb-4 list-disc list-inside text-gray-700">
                  {card.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
              {/* Image */}
              <div className="md:w-1/3 w-full h-48 md:h-auto relative flex-shrink-0">
                <img
                  src={cardImages[idx % cardImages.length]}
                  alt={card.title}
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ImageGallery; 
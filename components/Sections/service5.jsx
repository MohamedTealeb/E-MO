'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const Service5 = ({ t }) => {
  const [currentImage, setCurrentImage] = useState('before');
  const [dragPositions, setDragPositions] = useState([50, 50, 50, 50]); // Separate position for each image
  const [isDragging, setIsDragging] = useState(false);
  const [activeDragIndex, setActiveDragIndex] = useState(null);
  const dragRefs = useRef([]);
  
  const serviceData = t?.services?.items?.[4] || t?.services?.items?.[4]; // service 4 (insulation services)
  const serviceImage = { 
    src: "/WhatsApp Image 2025-07-27 at 1.16.46 AM (3) 1.png", 
    alt: "Insulation Services", 
    label: "Insulation", 
    icon: "🛡" 
  };

  // Handle mouse/touch events for dragging
  const handleMouseDown = useCallback((e, index) => {
    e.preventDefault();
    setIsDragging(true);
    setActiveDragIndex(index);
  }, []);

  const handleMouseMove = useCallback((e) => {
    if (!isDragging || activeDragIndex === null || !dragRefs.current[activeDragIndex]) return;
    
    const rect = dragRefs.current[activeDragIndex].getBoundingClientRect();
    const clientX = e.clientX || (e.touches && e.touches[0]?.clientX);
    const position = ((clientX - rect.left) / rect.width) * 100;
    
    // Clamp position between 0% and 100%
    const clampedPosition = Math.max(0, Math.min(100, position));
    
    setDragPositions(prev => {
      const newPositions = [...prev];
      newPositions[activeDragIndex] = clampedPosition;
      return newPositions;
    });
  }, [isDragging, activeDragIndex]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setActiveDragIndex(null);
  }, []);

  // Add and remove event listeners
 

  return (
    <section className="py-16 px-4">
      {/* Hero Section with Service Image */}
      <div className="px-4 sm:px-6 md:px-12 lg:px-24 xl:px-30 py-8 sm:py-10 md:py-12">
        <div className="relative h-[250px] sm:h-[300px] md:h-[400px] lg:h-[500px] xl:h-[700px] rounded-2xl sm:rounded-3xl overflow-hidden">
          {/* Service Image */}
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat" 
            style={{ backgroundImage: `url('${serviceImage.src}')` }} 
          ></div>

          {/* Overlay */}
          <div className="absolute inset-0 bg-black/50 sm:bg-black/60" />

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-3 sm:px-4 md:px-6 z-10">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 sm:mb-3 md:mb-4 text-center leading-tight">
              {serviceData?.title || "Services d'isolation et rénovation énergétique"}
            </h1>
          </div>
        </div>
      </div>

      {/* Service Details - Matching the image design */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 mt-8">
        <div className="rounded-2xl p-8 md:p-12">
          {/* Introductory Paragraph */}
          <p className="mb-8 leading-relaxed text-lg text-gray-800">
            {serviceData?.descriptionIntro || "Nous proposons des solutions d'isolation complètes pour améliorer l'efficacité énergétique de votre maison et réduire vos factures de chauffage."}
          </p>
          
          </div>
         
      </div>
      <div className="max-w-6xl mx-auto">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
      {/* Top Left Image */}
      <div className="rounded-xl overflow-hidden shadow bg-white">
        <img
          src="/WhatsApp Image 2025-06-29 at 16.14.07_934589cc.jpg"
          alt="Cuisine 1"
          className="w-full h-[300px] md:h-[600px] object-cover"
        />
      </div>

      {/* Top Right Text Box */}
      <div className="flex items-center justify-center">
                 <div className="bg-white shadow-md mb-4 md:mb-66 text-2xl md:text-5xl rounded-md w-full md:w-[300px] p-4 md:p-0">
           <p className="text-2xl md:text-4xl font-semibold leading-relaxed ">
           {serviceData?.bullets?.[0] || "Isolation extérieure en pierre : protection et esthétique réunies."}           </p>
         </div>
      </div>

      {/* Top Right Image */}
      <div className="rounded-xl overflow-hidden shadow bg-white">
        <img
          src="/hero.jpg"
          alt="Cuisine 2"
          className="w-full h-[200px] md:h-[300px] object-cover"
        />
      </div>

      {/* Bottom Left Text Box */}
      <div className="flex items-center justify-center">
        <div className="w-full md:w-auto">
                 <div className="bg-white shadow-md p-4 text-xl rounded-md text-center w-full md:w-[400px]">
           <p className="text-2xl md:text-4xl font-semibold leading-relaxed">
         
             {serviceData?.bullets?.[1] || "Isolation crépie : une finition moderne avec une efficacité thermique optimale."}
           </p>
         </div>
        <div className='mt-4 md:mt-10 rounded-xl'>
          <img src="/WhatsApp Image 2025-07-27 at 1.16.46 AM (2) 2 (1).png" className='rounded-xl w-full h-[200px] md:h-auto object-cover' alt="" />
        </div>
          
        </div>
      </div>

      {/* Image under second text */}
      <div className="rounded-xl md:absolute md:mr-34 md:mt-80 md:right-0 md:mb-66 overflow-hidden shadow md:col-span-1">
        <img
         src="/WhatsApp Image 2025-08-02 at 3.06.41 PM (1) 1.png"
         
          alt="Kitchen Detail"
          className="w-full md:w-[720px] h-[200px] md:h-[300px] rounded-xl md:mb-66 object-cover"
        />
      </div>

      {/* Bottom Right Image - Fixed positioning */}
      <div className="rounded-xl overflow-hidden shadow md:col-span-2">
        <img
           src="/WhatsApp Image 2025-07-27 at 1.16.46 AM 1 (10).png"
          alt="Cuisine 3"
          className="w-full md:w-[770px] p-2 md:p-3 md:ml-10 rounded-xl h-[300px] md:h-[700px] object-cover"
        />
      </div>
    </div>
  </div>
  <div className='mt-6 md:mt-10'>
    <img src="/WhatsApp 1.png" className='rounded-xl h-[300px] md:h-[700px] w-full object-cover' alt="" />
  </div>
  <div className='mt-6 md:mt-10 grid grid-cols-1 md:grid-cols-2 gap-4'> 
    <img src="/WhatsApp Image 2025-07-27 at 1.16.46 AM (3) 2.png" className='rounded-xl h-[250px] md:h-[500px] w-full object-cover' alt="" />
    <img src="/WhatsApp Image 2025-07-27 at 1.16.46 AM (1) 3.png" className='rounded-xl h-[250px] md:h-[500px] w-full object-cover' alt="" />
  </div>

  <p className='mt-6 md:mt-10 text-center text-lg md:text-xl font-bold text-main px-4'>
    {serviceData?.serviceDetails?.conclusion || "Notre expertise en peinture garantit un résultat durable et esthétique."}
  </p>
    </section>
  );
};

export default Service5; 
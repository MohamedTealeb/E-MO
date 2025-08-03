'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const Service4 = ({ t }) => {
  const [currentImage, setCurrentImage] = useState('before');
  const [dragPositions, setDragPositions] = useState([50, 50, 50, 50]); // Separate position for each image
  const [isDragging, setIsDragging] = useState(false);
  const [activeDragIndex, setActiveDragIndex] = useState(null);
  const dragRefs = useRef([]);

  // Ensure scroll is enabled on this page
  useEffect(() => {
    document.body.style.overflow = 'auto';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);
  
  const serviceData = t?.services?.items?.[3] || t?.services?.items?.[3]; // service 3 (flooring services)
  const garden = t?.serviceDetails?.garden; // garden service details
  const serviceImage = { 
    src: "/Rectangle 24.png", 
    alt: "Flooring Services", 
    label: "Flooring", 
    icon: "🌳" 
  };

  const beforeAfterProjects = [
    {
      before: "/flooring.jpg",
      after: "/painting.jpg",
      title: "Installation parquet"
    },
    {
      before: "/kitchen.jpg",
      after: "/bathroom.jpg",
      title: "Carrelage moderne"
    },
    {
      before: "/Rectangle 22.png",
      after: "/Rectangle 24.png",
      title: "Sol stratifié"
    },
    {
      before: "/WhatsApp Image 2025-07-27 at 1.06.16 AM 1.png",
      after: "/WhatsApp Image 2025-07-30 at 21.53.43_be7e15f7.jpg",
      title: "Rénovation sols"
    }
  ];

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
              {serviceData?.title || "Services de revêtement de sol"}
            </h1>
          </div>
        </div>
      </div>

      {/* Service Details - Matching the image design */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 mt-8">
        <div className="rounded-2xl p-8 md:p-12">
          {/* Introductory Paragraph */}
          <p className="mb-8 leading-relaxed text-lg text-gray-800">
            {serviceData?.descriptionIntro || "Nous proposons des solutions complètes de revêtement de sol avec des matériaux de qualité pour transformer votre espace avec des sols durables et esthétiques."}
          </p>
          
          {/* Services List Title */}
         </div>
      </div>
      <div className="max-w-6xl mx-auto">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-4">
    {/* Top Left Image */}
    <div className="rounded-xl overflow-hidden shadow bg-white">
      <img
        src="/WhatsApp Image 2025-07-31 at 11.28.46 PM 1.png"
        alt="Cuisine 1"
        className="w-full h-[300px] md:h-[600px] object-cover"
      />
    </div>

    {/* Top Right Text Box */}
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-md mb-4 md:mb-66 text-2xl md:text-5xl rounded-md text-center w-full md:w-[300px] p-4 md:p-0">
        <p className="text-2xl md:text-4xl font-semibold leading-relaxed">
          {garden?.textBox1 || "Embellissement des jardins avec des designs innovants et confortables."}
        </p>
      </div>
    </div>

    {/* Top Right Image */}
    <div className="rounded-xl overflow-hidden shadow bg-white">
      <img
        src="/WhatsApp Image 2025-07-31 at 11.28.45 PM (2) 1.png"
        alt="Cuisine 2"
        className="w-full h-[200px] md:h-[300px] object-cover"
      />
    </div>

    {/* Bottom Left Text Box */}
    <div className="flex items-center justify-center">
      <div className="bg-white shadow-md p-4 text-xl rounded-md text-center w-full md:w-[400px]">
        <p className="text-2xl md:text-4xl font-semibold leading-relaxed">
          {garden?.textBox2 || "Pose de revêtements extérieurs ajoutant une touche pratique et élégante au jardin."}
        </p>
      </div>
    </div>

    {/* Bottom Right Image */}
    <div className="rounded-xl md:absolute md:mr-34 md:mt-80 md:right-0 md:mb-66 overflow-hidden shadow md:col-span-2">
      <img
        src="/WhatsApp Image 2025-07-31 at 11.28.47 PM (1) 1.png"
        alt="Cuisine 3"
        className="w-full md:w-[740px] h-[300px] md:h-[600px] md:mb-66 object-cover"
      />
    </div>
  </div>
</div>
<div className="max-w-6xl mx-auto mt-6 md:mt-30">
  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
    {/* First Image */}
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <img
       src="/WhatsApp Image 2025-07-31 at 11.28.45 PM 1.png"
       
        alt="Service Image 1"
        className="w-full h-[250px] md:h-[400px] object-cover"
      />
    </div>

    {/* Second Image */}
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <img
        src="/WhatsApp Image 2025-07-27 at 1.16.44 AM (1) 3.png"
        alt="Service Image 2"
        className="w-full h-[250px] md:h-[400px] object-cover"
      />
    </div>

    {/* Third Image */}
    <div className="rounded-xl overflow-hidden shadow-lg bg-white">
      <img
     src="/WhatsApp Image 2025-07-27 at 1.16.46 AM (1) 1 (1).png"
        alt="Service Image 3"
        className="w-full h-[250px] md:h-[400px] object-cover"
      />
    </div>
  </div>
</div>
<p className="mt-6 md:mt-20 font-bold text-base md:text-lg text-center text-main px-4">
            {garden?.textBox3 || "Notre expertise garantit un résultat solide et esthétique."}
          </p>

    </section>
  );
};

export default Service4; 
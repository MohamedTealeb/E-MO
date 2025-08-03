'use client';
import React, { useState, useRef, useEffect, useCallback } from 'react';
import { MdNavigateBefore, MdNavigateNext } from 'react-icons/md';

const Service1 = ({ t }) => {
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
  
  const serviceData = t?.services?.items?.[0] || t?.services?.items?.[0]; // service 0 (construction services)
  const serviceImage = { 
    src: "/WhatsApp Image 2025-07-27 at 1.06.04 AM 1 (1).png", 
    alt: "Construction Services", 
    label: "Construction", 
    icon: "🧱" 
  };

  const beforeAfterProjects = [
    {
      before: "/WhatsApp Image 2025-07-30 at 21.53.43_be7e15f7.jpg",
      after:"/WhatsApp Image 2025-07-27 at 1.06.16 AM 1.png",
      title: "Rénovation murale"
    },
    {
      before: "/WhatsApp Image 2025-07-31 at 11.27.46 PM (3) 1.png",
      after: "/WhatsApp Image 2025-07-27 at 1.16.44 AM (2) 1.png",
      title: "Escalier rénové"
    },
    {
      before: "/WhatsApp Image 2025-07-27 at 1.16.35 AM 2.png",
      after: "/WhatsApp Image 2025-07-27 at 1.06.24 AM 1.png",
      title: "Cuisine moderne"
    },
    {
      before: "/insulation.jpg",
      after: "/WhatsApp Image 2025-07-27 at 1.16.40 AM (5) 2.png",
      title: "Salle de bain"
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
  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      document.addEventListener('touchmove', handleMouseMove);
      document.addEventListener('touchend', handleMouseUp);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      document.removeEventListener('touchmove', handleMouseMove);
      document.removeEventListener('touchend', handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp]);

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
              {serviceData?.title || "Travaux de construction et rénovation"}
            </h1>
          </div>
        </div>
      </div>

      {/* Service Details - Matching the image design */}
      <div className="max-w-4xl mx-auto px-4 md:px-6 mt-8">
        <div className="rounded-2xl p-8 md:p-12">
          {/* Introductory Paragraph */}
          <p className="mb-8 leading-relaxed text-lg text-gray-800">
            {serviceData?.descriptionIntro || "Nous réalisons tous les travaux de construction et rénovation, intérieurs et extérieurs, avec un haut niveau de professionnalisme pour vous offrir une maison neuve ou un espace renouvelé au design moderne."}
          </p>
          
          {/* Services List Title */}
          <h2 className="text-2xl md:text-3xl font-bold text-main mb-6 text-center">
            Nos services incluent
          </h2>
          
          {/* Services List */}
          <div className="space-y-4">
            {serviceData?.bullets && serviceData.bullets.map((bullet, bulletIndex) => (
              <div key={bulletIndex} className="flex items-start gap-3">
                <span className="text-green-600 mt-1 text-xl font-bold flex-shrink-0">✓</span>
                <span className="text-lg leading-relaxed text-gray-800">{bullet}</span>
              </div>
            ))}
            {!serviceData?.bullets && serviceData?.details && serviceData.details.slice(0, 4).map((detail, detailIndex) => (
              <div key={detailIndex} className="flex items-start gap-3">
                <span className="text-green-600 mt-1 text-xl font-bold flex-shrink-0">✓</span>
                <span className="text-lg leading-relaxed text-gray-800">{detail}</span>
              </div>
            ))}
          </div>
          
          {/* Before/After Grid */}
          <div className="text-center pt-8 mb-8">
           
            
            {/* Grid Container */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-5xl mx-auto">
              {beforeAfterProjects.map((project, index) => (
                <div key={index} className="relative group">
                  <div 
                    ref={el => dragRefs.current[index] = el}
                    className="relative h-[250px] sm:h-[300px] rounded-xl overflow-hidden shadow-lg cursor-ew-resize select-none"
                    onMouseDown={(e) => handleMouseDown(e, index)}
                    onTouchStart={(e) => handleMouseDown(e, index)}
                  >
                    {/* Before Image (Left Side) */}
                    <div className="absolute left-0 top-0 w-full h-full">
                      <img 
                        src={project.before}
                        alt="Avant"
                        className="w-full h-full object-cover pointer-events-none"
                      />
                   
                    </div>
                    
                    {/* After Image (Right Side) - Clipped */}
                    <div 
                      className="absolute left-0 top-0 h-full overflow-hidden"
                      style={{ width: `${dragPositions[index]}%` }}
                    >
                      <img 
                        src={project.after}
                        alt="Après"
                        className="w-full h-full object-cover pointer-events-none"
                      />
                     
                    </div>
                    
                    {/* Draggable Divider Line */}
                    <div 
                      className="absolute top-0 w-1 h-full bg-white shadow-lg cursor-ew-resize z-10"
                      style={{ left: `${dragPositions[index]}%` }}
                    >
                      {/* Drag Handle */}
                      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-full p-3 shadow-lg">
                        <div className="flex items-center gap-1">
                          <MdNavigateBefore className="w-5 h-5 text-gray-600" />
                          <MdNavigateNext className="w-5 h-5 text-gray-600" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Project Title */}
                
                </div>
              ))}
            </div>
          </div>

          {/* Concluding Sentence */}
          <p className="mt-20  font-bold  text-lg text-center text-gray-600">
            {serviceData?.descriptionOutro || "Notre expertise garantit un résultat solide et esthétique."}
          </p>
          
          {/* Action Button */}
         
        </div>
      </div>
    </section>
  );
};

export default Service1;

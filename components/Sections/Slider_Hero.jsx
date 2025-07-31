'use client'
import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, ArrowRight, BadgeCheck, MapPin, Briefcase, Users, Wrench } from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const FeaturesSection = ({ t }) => {
  // بيانات المميزات من الترجمة
  const features = [
    {
      icon: <BadgeCheck size={36} className="text-[#1A3C57]" />,
      title: t?.different?.certifiedTitle || "Properly Certified",
      desc: t?.different?.certifiedDesc || "We are CPP, RAMS, CIP certified. So rest assured our work will be to the highest standard.",
    },
    {
      icon: <MapPin size={36} className="text-[#1A3C57]" />,
      title: t?.different?.areaTitle || "Wide Area Served",
      desc: t?.different?.areaDesc || "Andover, Winchester, Southampton, Gosport and Portsmouth and surrounding areas.",
    },
          {
        icon: <Wrench size={36} className="text-[#1A3C57]" />,
        title: t?.different?.shopTitle || "One Stop Shop",
        desc: t?.different?.shopDesc || "Any home Improvement job you need, we can either do it or find the best person to do so.",
      },
    {
      icon: <Users size={36} className="text-[#1A3C57]" />,
      title: t?.different?.friendlyTitle || "Friendly & Reliable",
      desc: t?.different?.friendlyDesc || "We pride ourselves on our customer service and outstanding workmanship. Check our reviews!",
    },
  ];
  
  const cardsRef = useRef([]);
  
  useEffect(() => {
    if (cardsRef.current.length) {
      gsap.set(cardsRef.current, { opacity: 0, y: 40 });
      gsap.to(cardsRef.current, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 0.7,
        ease: "power2.out",
        scrollTrigger: {
          trigger: cardsRef.current[0]?.parentNode,
          start: "top 80%",
        }
      });
    }
  }, [t]);
  
  const handleMouseEnter = (idx) => {
    gsap.to(cardsRef.current[idx], { scale: 1.07, duration: 0.3, ease: 'power2.out' });
  };
  
  const handleMouseLeave = (idx) => {
    gsap.to(cardsRef.current[idx], { scale: 1, duration: 0.3, ease: 'power2.out' });
  };
  
  return (
    <div className="w-full mt-8 sm:mt-12 md:mt-16 flex flex-col items-center bg-[#1A3C57] py-8 sm:py-12 md:py-16 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-8 sm:mb-10 md:mb-12 text-center font-serif">
        {t?.different?.sectionTitle || "Pourquoi nous sommes différents"}
      </h2>
      <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-4 sm:gap-6 max-w-7xl">
        {features.map((f, i) => (
          <div
            key={i}
            ref={el => cardsRef.current[i] = el}
            className="flex-1 flex flex-col items-center bg-white p-4 sm:p-6 md:p-8 rounded-xl cursor-pointer"
            onMouseEnter={() => handleMouseEnter(i)}
            onMouseLeave={() => handleMouseLeave(i)}
          >
            <div className="mb-4 sm:mb-6">{f.icon}</div>
            <h3 className="text-lg sm:text-xl font-bold text-[#1A3C57] mb-2 sm:mb-4 text-center">{f.title}</h3>
            <p className="text-gray-600 text-center text-xs sm:text-sm leading-relaxed">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const Slider_Hero = ({ t }) => {
  const [activeIndex, setActiveIndex] = useState(1); // 0: first, 1: center, 2: third

  const images = [
    { src: "/unsplash_mLx6oMw32PI.png", alt: "Kitchen" },
    { src: "/unsplash_rEJxpBskj3Q.png", alt: "Living Room" },
    { src: "/unsplash_cc0Gg3BegjE.png", alt: "Bathroom" }
  ];

  // Auto slide effect
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % images.length);
    }, 3000); // كل 3 ثواني

    return () => clearInterval(interval); // تنظيف التايمر عند إزالة المكون
  }, [images.length]);

  const handleImageClick = (index) => {
    setActiveIndex(index);
  };

  const getImageClasses = (index) => {
    const baseClasses = "rounded-xl overflow-hidden transition-all duration-500 cursor-pointer";
    
    if (index === activeIndex) {
      // Center image - main
      return `${baseClasses} w-48 h-64 sm:w-64 sm:h-80 md:w-80 md:h-96 lg:w-96 lg:h-[500px] scale-90 sm:scale-95 md:scale-100 lg:scale-105`;
    } else {
      // Side images
      return `${baseClasses} w-32 h-48 sm:w-48 sm:h-72 md:w-56 md:h-80 lg:w-64 lg:h-96 scale-75 sm:scale-85 md:scale-90`;
    }
  };

  return (
    <section className="w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 flex flex-col items-center">
    
      <div className="flex items-center gap-2 mb-6 sm:mb-8">
        <span className="h-2 w-2 rounded-full bg-red-500 inline-block"></span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[#1A3C57]">
          {t?.slider?.title || "Our Services"}
        </h2>
      </div>
      <div className="relative w-full flex flex-col justify-center items-center mb-6">
        {/* Slider */}
        <div className="flex gap-2 sm:gap-4 md:gap-6 w-full justify-center items-center mb-6 px-4 sm:px-6 md:px-8">
          {images.map((image, index) => (
            <div
              key={index}
              className={getImageClasses(index)}
              onClick={() => handleImageClick(index)}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
        {/* Arrows under the slider */}
        
      </div>
      {/* سكشن المميزات تحت السلايدر */}
      <FeaturesSection t={t} />
    </section>
  );
}

export default Slider_Hero;

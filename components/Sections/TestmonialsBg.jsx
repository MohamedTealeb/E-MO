'use client'
import React, { useState, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { FaStar, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

const TestmonialsBg = ({ t }) => {
  const [swiper, setSwiper] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScrollDown = () => {
    // التمرير إلى منتصف الصفحة
    const currentPosition = window.pageYOffset || document.documentElement.scrollTop;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    // حساب منتصف الصفحة
    const middlePosition = documentHeight / 2;
    
    // التمرير إلى منتصف الصفحة
    window.scrollTo({
      top: middlePosition,
      behavior: 'smooth'
    });
  };

  const items = t?.testimonials?.items || [
    {
      name: "Sophie Bernard",
      text: "Travail très professionnel, équipe sympathique et délais respectés. Je referai appel à eux sans hésiter."
    },
    {
      name: "Marie Lefevre",
      text: "Une équipe professionnelle et à l'écoute. Résultat impeccable."
    },
    {
      name: "Jean-Pierre Martin",
      text: "Excellente expérience avec E-Mo pour la rénovation de notre salle de bain. Travail de qualité et prix raisonnables. Nous sommes très satisfaits du résultat."
    }
  ];

  const title = t?.testimonials?.title || "Témoignages Clients";

  const goNext = () => {
    if (swiper) {
      swiper.slideNext();
    }
  };

  const goPrev = () => {
    if (swiper) {
      swiper.slidePrev();
    }
  };

  const handleSlideChange = (swiper) => {
    setActiveIndex(swiper.realIndex);
  };

  return (
    <section className="mt-20 bg-gray-100">
      {/* Hero Section with Background Image */}
      <div className="px-4 md:px-16 lg:px-30 bg-white py-12">
  {/* Wrapper للصورة فقط */}
  <div className="relative w-full h-[300px] sm:h-[400px] md:h-[700px] rounded-2xl overflow-hidden">
    <img 
      src="/unsplash_WQ35C1ZqCPk (1).png" 
      alt="" 
      className="w-full h-full object-cover" 
    />

    {/* Overlay على الصورة فقط */}
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-10">
      <div className="bg-white rounded-lg p-3 sm:p-4 md:p-6 lg:p-8 shadow-xl w-[259px] sm:w-[280px] md:w-[320px] lg:w-[350px] xl:w-[500px] max-w-full flex flex-col items-center justify-center mx-auto">
        <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-gray-800 mb-2 sm:mb-3 md:mb-4 text-center">
          {title}
        </h1>
      </div>
    </div>

    {/* Scroll icon */}
    <div className="absolute bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
      <div 
        className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-all duration-300 hover:scale-110"
        onClick={handleScrollDown}
        title="Scroll to content"
      >
        <img 
          src="/ep_arrow-down-bold.png" 
          alt="Scroll down" 
          className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert scroll-pulse"
        />
        <img 
          src="/ep_arrow-down-bold.png" 
          alt="Scroll down" 
          className="w-6 h-6 sm:w-8 sm:h-8 filter brightness-0 invert -mt-1 sm:-mt-2 scroll-pulse"
          style={{ animationDelay: '0.2s' }}
        />
      </div>
    </div>
  </div>
</div>

      {/* Testimonial Carousel Section */}
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto relative">
          <Swiper
            onSwiper={setSwiper}
            onSlideChange={handleSlideChange}
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
              el: '.swiper-pagination',
              bulletClass: 'swiper-pagination-bullet',
              bulletActiveClass: 'swiper-pagination-bullet-active',
            }}
            className="testimonials-swiper"
          >
            {items.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="relative">
                  {/* Background Cards Stack - Behind Center */}
                  <div className={`absolute top-6 left-1/2 transform -translate-x-1/2 z-10 transition-all duration-700 ${
                    index === activeIndex ? 'opacity-100 scale-100 background-card-slide' : 'opacity-50 scale-95'
                  }`}>
                    <div className="bg-gray-600 rounded-2xl w-96 h-56 transform -rotate-6 transition-all duration-700"></div>
                  </div>
                  
                  {/* Background Cards Stack - Behind Center Second */}
                  <div className={`absolute top-8 left-1/2 transform -translate-x-1/2 z-0 transition-all duration-700 ${
                    index === activeIndex ? 'opacity-100 scale-100 background-card-slide-second' : 'opacity-30 scale-90'
                  }`}>
                    <div className="bg-gray-500 rounded-2xl w-96 h-56 transform rotate-3 transition-all duration-700"></div>
                  </div>

                  {/* Main Testimonial Card */}
                  <div className={`bg-white rounded-2xl shadow-lg p-8 relative z-20 mx-auto w-80 transition-all duration-700 ${
                    index === activeIndex ? 'opacity-100 scale-100 card-slide-up' : 'opacity-0 scale-95'
                  }`}>
                    <div className="text-center">
                      <h3 className="text-xl font-bold text-gray-800 mb-4">
                        {item.name}
                      </h3>
                      <p className="text-gray-600 text-base leading-relaxed mb-6">
                        {item.text}
                      </p>
                      <div className="flex items-center justify-center gap-1 mb-2">
                        {[...Array(5)].map((_, i) => (
                          <FaStar key={i} className="text-orange-500 text-lg" />
                        ))}
                      </div>
                      <div className="text-gray-700 font-medium">5.0</div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Custom Navigation Arrows */}
          <button 
            onClick={goPrev}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-gray-700 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <FaChevronLeft className="text-white text-lg" />
          </button>
          
          <button 
            onClick={goNext}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 z-30 w-12 h-12 bg-gray-700 hover:bg-gray-800 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg"
          >
            <FaChevronRight className="text-white text-lg" />
          </button>

          {/* Custom Pagination */}
          <div className="swiper-pagination flex justify-center gap-2 mt-8"></div>
        </div>
      </div>

      <style jsx>{`
        .testimonials-swiper {
          padding-bottom: 40px;
        }
        
        .swiper-pagination-bullet {
          width: 8px;
          height: 8px;
          background: #d1d5db;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        
        .swiper-pagination-bullet-active {
          background: #3b82f6;
          transform: scale(1.25);
        }
        
        .swiper-pagination {
          position: relative !important;
          bottom: 0 !important;
        }

        @keyframes slideInFromBack {
          0% {
            opacity: 0;
            transform: translateY(20px) scale(0.9);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        @keyframes cardSlideUp {
          0% {
            opacity: 0;
            transform: translateY(50px) scale(0.8) translateZ(0);
          }
          50% {
            opacity: 0.7;
            transform: translateY(25px) scale(0.9) translateZ(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) translateZ(0);
          }
        }

        @keyframes backgroundCardSlide {
          0% {
            opacity: 0;
            transform: translateY(30px) scale(0.7) rotate(-6deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(-6deg);
          }
        }

        @keyframes backgroundCardSlideSecond {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.6) rotate(3deg);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1) rotate(3deg);
          }
        }

        .slide-active {
          animation: slideInFromBack 0.7s ease-out;
        }

        .card-slide-up {
          animation: cardSlideUp 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .background-card-slide {
          animation: backgroundCardSlide 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .background-card-slide-second {
          animation: backgroundCardSlideSecond 1s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        @keyframes scrollPulse {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(5px);
          }
        }

        .scroll-pulse {
          animation: scrollPulse 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
};

export default TestmonialsBg; 
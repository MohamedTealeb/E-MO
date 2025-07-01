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

  const ImageComparisonSlider = ({ before, after, beforeLabel = 'Avant', afterLabel = 'Après' }) => {
    const [pos, setPos] = React.useState(50);
    const ref = React.useRef(null);

    const handleMove = (e) => {
      const rect = ref.current.getBoundingClientRect();
      let x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
      let percent = ((x - rect.left) / rect.width) * 100;
      percent = Math.max(0, Math.min(100, percent));
      setPos(percent);
    };

    return (
      <div
        ref={ref}
        className="relative w-full aspect-[4/3] bg-gray-200 overflow-hidden rounded-2xl shadow-lg select-none mb-6"
        style={{ userSelect: 'none' }}
        onMouseMove={e => e.buttons === 1 && handleMove(e)}
        onMouseDown={handleMove}
        onTouchMove={handleMove}
        onTouchStart={handleMove}
      >
        {pos < 100 && (
          <img src={before} alt={beforeLabel} className="absolute inset-0 w-full h-full object-cover" />
        )}
        {pos > 0 && (
          <img
            src={after}
            alt={afterLabel}
            className="absolute inset-0 h-full object-cover transition-all duration-200"
            style={{ width: `${pos}%`, clipPath: `inset(0 ${100 - pos}% 0 0)` }}
          />
        )}
        <div
          className="absolute top-0 left-0 h-full flex items-center justify-center z-10 cursor-ew-resize"
          style={{ left: `calc(${pos}% - 24px)`, width: '48px' }}
          onMouseDown={e => e.preventDefault()}
        >
          <div className="w-12 h-12 bg-white rounded-full border-2 border-yellow-400 flex items-center justify-center shadow-lg">
            <span className="text-3xl text-yellow-500">⇄</span>
          </div>
        </div>
        {pos > 0 && (
          <span
            className="absolute left-4 bottom-4 bg-white/80 px-4 py-1 rounded text-gray-800 font-semibold text-lg"
            style={{ opacity: pos / 100 }}
          >
            {afterLabel}
          </span>
        )}
        {pos < 100 && (
          <span
            className="absolute right-4 bottom-4 bg-white/80 px-4 py-1 rounded text-gray-800 font-semibold text-lg"
            style={{ opacity: 1 - pos / 100 }}
          >
            {beforeLabel}
          </span>
        )}
      </div>
    );
  };

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
          {Array.from({length: Math.floor(portfolioImages.length/2)}).map((_, i) => (
            <ImageComparisonSlider
              key={i}
              before={portfolioImages[i*2].src}
              after={portfolioImages[i*2+1].src}
              beforeLabel={t?.before || 'Avant'}
              afterLabel={t?.after || 'Après'}
            />
          ))}
        </div>
        
      
      </div>
    </section>
  );
};

export default PortfolioGallery; 
'use client'
import React, { useRef, useState } from 'react';

const Portfolio = ({ t }) => {
  if (!t) return null;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen px-2 py-8 overflow-hidden">
      {/* خلفية الصورة */}
      <div 
        className="absolute inset-0 w-full h-full z-0"
        style={{
          backgroundImage: 'url(/portfolio.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      {/* طبقة شفافة فوق الصورة */}
      <div className="absolute inset-0 w-full h-full z-0 bg-gradient-to-br from-main/80 via-[#1a2332]/70 to-secondary/60" />
      {/* خلفية نجوم خفيفة */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{background: 'radial-gradient(circle at 60% 40%, #fff2 1px, transparent 1px), radial-gradient(circle at 20% 80%, #fff1 1px, transparent 1px)'}} />
      {/* المحتوى */}
      <div className="relative z-10 flex flex-col items-center justify-center  w-full h-full px-4">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl  w-[800px] h-[150px] p-6 md:p-8 border border-white/30 shadow-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold  text-blue-500 mb-4 text-center drop-shadow-lg">{t.title}</h1>
          <div className="text-gray-300  text-2xl font-bold text-center mt-2">
              {t?.Home} &nbsp; / &nbsp; {t?.title}
              </div>
        </div>
      </div>
    </div>
  );
};

const ImageComparisonSlider = ({ before, after, beforeLabel, afterLabel }) => {
  const [pos, setPos] = useState(50);
  const ref = useRef(null);

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
      className="relative w-full max-w-2xl mx-auto aspect-[4/3] bg-gray-200 overflow-hidden rounded-2xl shadow-lg select-none mb-10"
      style={{ userSelect: 'none' }}
      onMouseMove={e => e.buttons === 1 && handleMove(e)}
      onMouseDown={handleMove}
      onTouchMove={handleMove}
      onTouchStart={handleMove}
    >
      {/* صورة قبل */}
      <img src={before} alt={beforeLabel} className="absolute inset-0 w-full h-full object-cover" />
      {/* صورة بعد */}
      <img
        src={after}
        alt={afterLabel}
        className="absolute inset-0 h-full object-cover transition-all duration-200"
        style={{ width: `${pos}%`, clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      />
      {/* السهم */}
      <div
        className="absolute top-0 left-0 h-full flex items-center justify-center z-10 cursor-ew-resize"
        style={{ left: `calc(${pos}% - 24px)`, width: '48px' }}
        onMouseDown={e => e.preventDefault()}
      >
        <div className="w-12 h-12 bg-white rounded-full border-2 border-yellow-400 flex items-center justify-center shadow-lg">
          <span className="text-3xl text-yellow-500">⇄</span>
        </div>
      </div>
      {/* النصوص */}
      <span className="absolute left-4 bottom-4 bg-white/80 px-4 py-1 rounded text-gray-800 font-semibold text-lg">{afterLabel}</span>
      <span className="absolute right-4 bottom-4 bg-white/80 px-4 py-1 rounded text-gray-800 font-semibold text-lg">{beforeLabel}</span>
    </div>
  );
};

export { Portfolio };
export default Portfolio;

'use client'
import React, { useRef, useState } from 'react';

const Portfolio = ({ t }) => {
  if (!t) return null;

  return (
    <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-main via-[#1a2332] to-secondary/60 px-2 py-8 overflow-hidden">
      {/* خلفية نجوم خفيفة (يمكنك استبدالها بصورة ثابتة لو أردت) */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none" style={{background: 'radial-gradient(circle at 60% 40%, #fff2 1px, transparent 1px), radial-gradient(circle at 20% 80%, #fff1 1px, transparent 1px)'}} />
      {/* صورة دائرية */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-72 h-72 rounded-full border-8 border-secondary shadow-2xl overflow-hidden mb-10 bg-white flex items-center justify-center">
          <img
            src="/portfolio.jpg"
            alt="Portfolio"
            className="w-full h-full object-cover object-center"
          />
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 text-center drop-shadow-lg">{t.title}</h1>
        <p className="text-2xl text-gray-200 mb-8 text-center max-w-3xl mx-auto opacity-90 font-light">
          {t.text}
        </p>
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

'use client';
import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { FaAward, FaCheckCircle } from 'react-icons/fa';

const About = ({ t }) => {
  const containerRef = useRef(null);
  const imageRef = useRef(null);
  const cardRef1 = useRef(null);
  const cardRef2 = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      containerRef.current,
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1 }
    );
    gsap.fromTo(
      imageRef.current,
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1 }
    );
    gsap.fromTo(
      [cardRef1.current, cardRef2.current],
      { opacity: 0, y: 40 },
      { opacity: 1, y: 0, duration: 1, stagger: 0.3, delay: 0.4 }
    );
  }, []);

  if (!t) return null;

  return (
    <section className="bg-[#eee] py-20 px-6">
      <div className="max-w-7xl mx-auto flex flex-col flex-col-reverse lg:flex-row items-center justify-between gap-12">
        {/* Left - Text and Cards */}
        <div
          ref={containerRef}
          className="backdrop-blur-md bg-white/20 rounded-3xl shadow-xl p-8 md:p-12 flex-1"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-main mb-6">
            {t.title}
          </h1>
          <p className="text-base md:text-lg text-gray-800 leading-relaxed mb-10 max-w-2xl">
            {t.text}
          </p>

          <div className="flex flex-col sm:flex-row gap-6">
            <div
              ref={cardRef1}
              className="flex-1 bg-white bg-opacity-70 border border-gray-200 shadow-lg rounded-2xl p-6 text-center"
            >
              <FaAward className="text-4xl text-secondary mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-main mb-2">{t.experience}</h3>
              <p className="text-sm text-gray-600">{t.experienceDesc}</p>
            </div>

            <div
              ref={cardRef2}
              className="flex-1 bg-white bg-opacity-70 border border-gray-200 shadow-lg rounded-2xl p-6 text-center"
            >
              <FaCheckCircle className="text-4xl text-secondary mb-3 mx-auto" />
              <h3 className="text-xl font-semibold text-main mb-2">{t.quality}</h3>
              <p className="text-sm text-gray-600">{t.qualityDesc}</p>
            </div>
          </div>
        </div>

        {/* Right - Image */}
        <div
          ref={imageRef}
          className="w-full lg:w-[400px] h-[400px] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img
            src="https://images.pexels.com/photos/731082/pexels-photo-731082.jpeg"
            alt="About Us"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
};

export default About;

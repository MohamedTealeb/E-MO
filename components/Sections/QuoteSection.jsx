'use client';
import { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const QuoteSection = () => {
  const [t, setT] = useState(null);
  const [currentLocale, setCurrentLocale] = useState("fr");
  const stepsRefs = useRef([]);
  const sectionRef = useRef(null);

  useEffect(() => {
    const locale = localStorage.getItem("preferred-locale") || "fr";
    setCurrentLocale(locale);
    import(`@/translations/${locale}.json`).then((data) => setT(data.default));
  }, []);

  useEffect(() => {
    if (t && t.quoteSection && stepsRefs.current.length) {
      gsap.set(stepsRefs.current, { opacity: 0, y: 40 });
      gsap.to(stepsRefs.current, {
        opacity: 1,
        y: 0,
        stagger: 0.4,
        duration: 0.8,
        ease: "power2.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
        }
      });
      if (stepsRefs.current[0]) {
        gsap.fromTo(
          stepsRefs.current[0],
          { scale: 0.8 },
          {
            scale: 1,
            duration: 0.6,
            ease: "bounce.out",
            delay: 0.2
          }
        );
      }
    }
  }, [t]);

  if (!t || !t.quoteSection) return null;
  const { image, subtitle, title, desc, button, steps } = t.quoteSection;

  const stepVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.4 }
    })
  };

  return (
    <section ref={sectionRef} className="w-full bg-gray-200 py-16 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Card - Main Content */}
        <div className="bg-white rounded-2xl shadow-xl p-8 flex flex-col">
          {/* Image */}
          <div className="w- h-72 mb-6 rounded-xl overflow-hidden">
            <img src="/unsplash_YqFz7UMm8qE.png" alt="" className="w-full h-full object-cover" />
          </div>
          
          {/* Text Content */}
          <div className="flex-1">
            <span className="uppercase text-xs text-gray-500 mb-2 font-semibold tracking-wider">{subtitle}</span>
            <h2 className="text-2xl md:text-3xl font-bold text-[#1A3C57] mb-4 leading-tight">{title}</h2>
            <p className="text-gray-600 mb-6 leading-relaxed">{desc}</p>
            
            {/* Button */}
            <div className="flex justify-end items-center gap-3">
              <span className="text-[#1A3C57] font-semibold">{button}</span>
              <Link href={`/${currentLocale}/contact`}>
                <button className="bg-[#1A3C57] text-white w-12 cursor-pointer h-12 rounded-full font-semibold shadow-lg hover:bg-[#0f2a3f] transition-all duration-300 flex items-center justify-center">
                  <span className="text-white text-lg">→</span>
                </button>
              </Link>
            </div>
          </div>
        </div>

        {/* Right Column - Timeline */}
        <div className="flex flex-col justify-center relative">
          {/* Vertical Line */}
          <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-300 rounded-full z-0 hidden md:block" />
          
          {/* Steps */}
          <div className="flex flex-col gap-6 pl-0 md:pl-20">
            {steps.map((step, idx) => (
              <div
                key={idx}
                className="relative"
                ref={el => stepsRefs.current[idx] = el}
              >
                {/* Step Card */}
                <div className="bg-white rounded-xl shadow-lg p-4 md:p-6">
                  <h3 className="text-lg font-bold text-[#1A3C57] mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default QuoteSection; 
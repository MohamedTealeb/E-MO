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
    <section ref={sectionRef} className="w-full flex flex-col md:flex-row gap-8 py-16 px-4 md:px-16 bg-[#f8f9fb]">
      {/* Left Card */}
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-lg w-full flex flex-col items-start">
        <img src={image} alt="" className="w-full h-56 object-cover rounded-xl mb-6" />
        <span className="uppercase text-xs text-gray-500 mb-2">{subtitle}</span>
        <h2 className="text-3xl font-bold text-[#1A3C57] mb-4">{title}</h2>
        <p className="text-gray-500 mb-6">{desc}</p>
        <Link href={`/${currentLocale}/contact`}>
          <button className="bg-blue-600 cursor-pointer text-white px-6 py-3 rounded-md font-semibold shadow hover:bg-blue-700 transition animate-pulse flex items-center gap-2 ring-2 ring-blue-300 ring-offset-2">
            {button}
            <span className="animate-bounce">→</span>
          </button>
        </Link>
      </div>
      {/* Timeline */}
      <div className="flex-1 flex flex-col justify-center relative">
        <div className="absolute left-6 top-0 bottom-0 w-1 bg-gray-200 rounded-full z-0 hidden md:block" />
        <motion.div
          className="flex flex-col gap-12 pl-0 md:pl-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step, idx) => (
            <div
              key={idx}
              className="relative flex items-start gap-6"
              ref={el => stepsRefs.current[idx] = el}
            >
              {/* Circle Number */}
              <div className="flex flex-col items-center z-10">
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center text-blue-600 font-bold text-xl border-2 border-blue-100">
                  {idx + 1}
                </div>
                {idx < steps.length - 1 && (
                  <div className="w-1 flex-1 bg-gray-200 mt-1" />
                )}
              </div>
              {/* Step Content */}
              <div className="bg-white rounded-xl shadow p-6 flex-1">
                <h3 className="text-lg font-bold text-[#1A3C57] mb-2">{step.title}</h3>
                <p className="text-gray-500">{step.desc}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default QuoteSection; 
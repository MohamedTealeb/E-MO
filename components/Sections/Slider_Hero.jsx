'use client';
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, BadgeCheck, MapPin, Briefcase, Users } from "lucide-react";

export default function Slider_Hero() {
  const [current, setCurrent] = useState(0);
  const [t, setT] = useState(null);
  const [locale, setLocale] = useState("fr");

  useEffect(() => {
    const storedLocale = localStorage.getItem("preferred-locale") || "fr";
    setLocale(storedLocale);
    import(`@/translations/${storedLocale}.json`).then((data) => setT(data.default));
  }, []);

  if (!t) return null;

  const services = [
    {
      src: "/home.jpg",
      label: t.services.items.kitchen,
      caption: t.services.items.kitchen_caption,
    },
    {
      src: "/bathroom.jpg",
      label: t.services.items.bathroom,
      caption: t.services.items.bathroom_caption,
    },
    {
      src: "/painting.jpg",
      label: t.services.items.painting,
      caption: t.services.items.painting_caption,
    },
    {
      src: "/flooring.jpg",
      label: t.services.items.flooring,
      caption: t.services.items.flooring_caption,
    },
    {
      src: "/insulation.jpg",
      label: t.services.items.insulation,
      caption: t.services.items.insulation_caption,
    },
  ];

  const handlePrev = () => {
    setCurrent((prev) => (prev - 1 + services.length) % services.length);
  };

  const handleNext = () => {
    setCurrent((prev) => (prev + 1) % services.length);
  };

  // Helper to get the index with wrap-around
  const getIndex = (idx) => (idx + services.length) % services.length;

  return (
    <section className="w-full bg-white py-20 flex flex-col items-center">
      <span className="uppercase tracking-widest text-xs text-gray-500 mb-2">
        How can we help?
      </span>
      <div className="flex items-center gap-2 mb-8">
        <span className="h-2 w-2 rounded-full bg-red-500 inline-block"></span>
        <h2 className="text-4xl md:text-5xl font-bold text-[#1A3C57]">
          Our Services
        </h2>
      </div>
      <div className="relative w-full flex flex-col justify-center items-center">
        {/* Slider */}
        <div className="flex gap-6 w-full justify-center items-center mb-6">
          {/* Previous Card (partially visible) */}
          <div
            className="hidden md:block w-64 opacity-50 scale-90 transition-all duration-300"
            style={{ zIndex: 1 }}
          >
            <ServiceCard {...services[getIndex(current - 1)]} />
          </div>
          {/* Main Card */}
          <div
            className="w-80 md:w-[32rem] scale-100 shadow-2xl transition-all duration-300"
            style={{ zIndex: 2 }}
          >
            <ServiceCard {...services[current]} main />
          </div>
          {/* Next Card (partially visible) */}
          <div
            className="hidden md:block w-64 opacity-50 scale-90 transition-all duration-300"
            style={{ zIndex: 1 }}
          >
            <ServiceCard {...services[getIndex(current + 1)]} />
          </div>
        </div>
        {/* Arrows under the slider */}
        <div className="flex items-center gap-6 mt-2">
          <button
            onClick={handlePrev}
            className="bg-white rounded-full shadow p-3 hover:bg-gray-100 transition"
            aria-label="Previous"
          >
            <ArrowLeft size={28} />
          </button>
          <button
            onClick={handleNext}
            className="bg-white rounded-full shadow p-3 hover:bg-gray-100 transition"
            aria-label="Next"
          >
            <ArrowRight size={28} />
          </button>
        </div>
      </div>
      {/* سكشن المميزات تحت السلايدر */}
      <FeaturesSection t={t} />
    </section>
  );
}

function ServiceCard({ src, label, caption, main }) {
  return (
    <div
      className={`bg-white rounded-xl shadow-lg overflow-hidden flex flex-col items-center transition-transform ${
        main ? "scale-105" : ""
      }`}
    >
      <img
        src={src}
        alt={label}
        className={`w-full ${main ? "h-96" : "h-40"} object-cover`}
      />
      <div className="p-6 flex flex-col items-center">
        <h3 className="text-2xl font-bold text-[#1A3C57]">{label}</h3>
        <span className="text-xs text-gray-500 mt-2 text-center">{caption}</span>
      </div>
    </div>
  );
}

function FeaturesSection({ t }) {
  // بيانات المميزات من الترجمة
  const features = [
    {
      icon: <BadgeCheck size={36} className="text-[#1A3C57]" />,
      title: t.different?.certifiedTitle || "Properly Certified",
      desc: t.different?.certifiedDesc || "We are CPP, RAMS, CIP certified. So rest assured our work will be to the highest standard.",
    },
    {
      icon: <MapPin size={36} className="text-[#1A3C57]" />,
      title: t.different?.areaTitle || "Wide Area Served",
      desc: t.different?.areaDesc || "Andover, Winchester, Southampton, Gosport and Portsmouth and surrounding areas.",
    },
    {
      icon: <Briefcase size={36} className="text-[#1A3C57]" />,
      title: t.different?.shopTitle || "One Stop Shop",
      desc: t.different?.shopDesc || "Any home Improvement job you need, we can either do it or find the best person to do so.",
    },
    {
      icon: <Users size={36} className="text-[#1A3C57]" />,
      title: t.different?.friendlyTitle || "Friendly & Reliable",
      desc: t.different?.friendlyDesc || "We pride ourselves on our customer service and outstanding workmanship. Check our reviews!",
    },
  ];
  return (
    <div className="w-full mt-16 flex flex-col items-center">
      <span className="uppercase tracking-widest text-xs text-gray-500 mb-2">{t.different?.sectionTitle || "Why we're different"}</span>
      <div className="w-full flex flex-col md:flex-row justify-center items-stretch gap-4 md:gap-0 bg-[#f8f9fb] rounded-xl p-4 md:p-0">
        {features.map((f, i) => (
          <div key={i} className="flex-1 flex flex-col items-center bg-white m-2 p-6 rounded-xl shadow-sm border border-gray-100">
            <div className="mb-4">{f.icon}</div>
            <h3 className="text-lg font-bold text-[#1A3C57] mb-2 text-center">{f.title}</h3>
            <p className="text-gray-500 text-center text-sm">{f.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

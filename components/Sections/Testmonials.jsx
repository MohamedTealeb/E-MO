'use client'
import React from 'react';

const Testmonials = ({ t }) => {
  if (!t?.testimonials) return null;
  const { title, items } = t.testimonials;

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-main mb-10 text-center">{title}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 max-w-xs min-w-[250px] flex flex-col items-center border-t-4 border-accent">
              <div className="text-xl font-semibold text-accent mb-2">{item.name}</div>
              <div className="text-gray-700 text-center text-lg">"{item.text}"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testmonials;

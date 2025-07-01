import React from 'react';

const Blogs = ({ t }) => {
  if (!t?.blogs) return null;
  const { title, items } = t.blogs;

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-main mb-10 text-center">{title}</h2>
        <div className="flex flex-wrap justify-center gap-8">
          {items.map((item, idx) => (
            <div key={idx} className="bg-white rounded-2xl shadow-lg p-6 max-w-xs min-w-[250px] flex flex-col items-start border-t-4 border-accent">
              <div className="text-xl font-bold text-accent mb-2">{item.title}</div>
              <div className="text-gray-700 text-base mb-3">{item.excerpt}</div>
              <div className="text-sm text-gray-500 mt-auto self-end">{item.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogs; 
import React from "react";

async function getTranslation() {
  const translations = await import('@/translations/fr.json');
  return translations.default.serviceDetails.finishing;
}

const ServicePage = async () => {
  const t = await getTranslation();
  return (
    <section className="min-h-[70vh] mt-10 flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 py-12 px-4">
      <div className="bg-white/90 shadow-2xl rounded-3xl max-w-2xl w-full mx-auto p-8 border border-gray-100">
        <div className="flex flex-col items-center mb-8">
          <span className="text-5xl mb-2 drop-shadow">{t.title.split(' ')[0]}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-main text-center mb-2">{t.title.replace(/^[^ ]+ /, '')}</h1>
          <div className="w-20 h-1 bg-gradient-to-r from-main to-secondary rounded-full mb-4"></div>
        </div>
        <p className="text-lg text-dark/80 mb-6 text-center">{t.intro}</p>
        <h2 className="text-xl font-semibold mb-3 text-main">{t.listTitle}</h2>
        <ul className="space-y-3 mb-6">
          {t.items.map((item, idx) => (
            <li key={idx} className="flex items-start gap-2 text-base text-dark/90">
              <span className="text-secondary mt-1">✔️</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-base text-dark/70 text-center">{t.conclusion}</p>
      </div>
    </section>
  );
};

export default ServicePage; 
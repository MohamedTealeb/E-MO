'use client'
import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { FaQuoteLeft } from 'react-icons/fa';
import { Quote, X } from 'lucide-react';

const Blogs = ({ t }) => {
  const cardsRef = useRef([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.style.opacity = '1';
              entry.target.style.transform = 'translateY(0)';
            }, index * 200);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach((card) => {
      if (card) {
        card.style.opacity = '0';
        card.style.transform = 'translateY(50px)';
        card.style.transition = 'all 0.6s ease-out';
        observer.observe(card);
      }
    });

    return () => observer.disconnect();
  }, []);

  const handleScrollDown = () => {
    const nextSection = document.querySelector('section:not(.min-h-screen)') || 
                       document.querySelector('main') || 
                       document.querySelector('div[class*="section"]');
    
    if (nextSection) {
      nextSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    } else {
      // Fallback: scroll down by viewport height
      window.scrollTo({
        top: window.innerHeight,
        behavior: 'smooth'
      });
    }
  };

  const handleArticleClick = (article) => {
    setSelectedArticle(article);
    document.body.style.overflow = 'hidden'; // منع التمرير في الخلفية
  };

  const handleCloseArticle = () => {
    setSelectedArticle(null);
    document.body.style.overflow = 'auto'; // إعادة تفعيل التمرير
  };

  if (!t?.blogs) return null;
  const { title, Home, items } = t.blogs;

  return (
    <section className="py-20 px-4 md:px-16 lg:px-30 bg-gradient-to-br  from-[#f8fafc] to-[#e0e7ef] min-h-screen">
      {/* Hero Section with Background Image */}
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[500px] lg:h-[700px] flex items-center justify-center mb-8 md:mb-16 overflow-hidden shadow-2xl">
        <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: "url('/unsplash_EZERpkl3Lso.png')" }}></div>
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full px-4 z-10">
          <div className="bg-white rounded-lg p-4 sm:p-6 md:p-8 shadow-xl w-[280px] sm:w-[320px] md:w-[400px] max-w-full flex flex-col items-center justify-center mx-auto">
            <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 mb-2 md:mb-4 text-center">
              {title}
            </h1>
            <div className="text-gray-600 text-sm sm:text-base md:text-lg font-medium text-center">
              {Home} / {title}
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-4 md:bottom-8 left-1/2 transform -translate-x-1/2 z-30">
          <div 
            className="flex flex-col items-center gap-1 cursor-pointer hover:opacity-80 transition-opacity"
            onClick={handleScrollDown}
          >
            <img 
              src="/ep_arrow-down-bold.png" 
              alt="Scroll down" 
              className="w-6 h-6 md:w-8 md:h-8 filter brightness-0 invert"
            />
            <img 
              src="/ep_arrow-down-bold.png" 
              alt="Scroll down" 
              className="w-6 h-6 md:w-8 md:h-8 filter brightness-0 invert -mt-1 md:-mt-2"
            />
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Top row - 2 cards */}
          <div className="flex flex-col md:flex-row justify-center gap-4 md:gap-8 lg:gap-16 mb-8 md:mb-16">
            {items.slice(0, 2).map((item, idx) => (
              <div key={idx} className="relative mb-8 md:mb-0">
                {/* Large quotation mark outside the card */}
                <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 text-gray-600 text-4xl md:text-7xl font-bold z-20">
                  <Quote size={40} className='md:hidden text-gray-800' strokeWidth={0.5} />
                  <Quote size={80} className='hidden md:block text-gray-800' strokeWidth={0.5} />
                </div>
                
                <div
                  ref={el => (cardsRef.current[idx] = el)}
                  className="bg-white rounded-xl shadow-md p-4 md:p-6 relative hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group w-full md:w-80"
                  onClick={() => handleArticleClick(item)}
                >
                  <div className="relative z-10 pt-2">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 leading-tight pr-6 md:pr-8">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3 md:mb-4 pr-2 md:pr-4">
                      {item.excerpt}
                    </p>
                    <div className="text-xs text-gray-500 text-right font-medium">
                      {item.author}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Bottom row - 1 centered card */}
          <div className="flex justify-center">
            {items.slice(2, 3).map((item, idx) => (
              <div key={idx + 2} className="relative">
                {/* Large quotation mark outside the card */}
                <div className="absolute -top-2 md:-top-4 -right-2 md:-right-4 text-gray-600 text-4xl md:text-7xl font-bold z-20">
                  <Quote size={40} className='md:hidden text-gray-800' strokeWidth={0.5} />
                  <Quote size={80} className='hidden md:block text-gray-800' strokeWidth={0.5} />
                </div>
                
                <div
                  ref={el => (cardsRef.current[idx + 2] = el)}
                  className="bg-white rounded-xl shadow-md p-4 md:p-6 relative hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer group w-full md:w-80"
                  onClick={() => handleArticleClick(item)}
                >
                  <div className="relative z-10 pt-2">
                    <h3 className="text-base md:text-lg font-bold text-gray-900 mb-2 md:mb-3 leading-tight pr-6 md:pr-8">
                      {item.title}
                    </h3>
                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3 md:mb-4 pr-2 md:pr-4">
                      {item.excerpt}
                    </p>
                    <div className="text-xs text-gray-500 text-right font-medium">
                      {item.author}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Article Modal */}
      {selectedArticle && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={handleCloseArticle}
        >
          <div 
            className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-bold text-gray-900">
                {selectedArticle.title}
              </h2>
              <button
                onClick={handleCloseArticle}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                aria-label="Close article"
              >
                <X className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            
            {/* Content */}
            <div className="p-6">
              <div className="mb-6">
                <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                  {selectedArticle.title}
                </h1>
              
                <p className="text-gray-700 leading-relaxed text-base md:text-lg">
                  {selectedArticle.excerpt}
                </p>
              </div>
              
              {/* Full article content */}
              <div className="prose prose-lg max-w-none">
                {selectedArticle.fullContent ? (
                  <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                    {selectedArticle.fullContent}
                  </div>
                ) : (
                  <>
                    <p className="text-gray-700 leading-relaxed">
                      هذا هو المحتوى الكامل للمقال. يمكنك إضافة المزيد من المحتوى هنا مثل الفقرات والصور والعناوين الفرعية.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      يمكنك أيضاً إضافة روابط ومقاطع فيديو أو أي محتوى آخر تريده في المقال.
                    </p>
                    <p className="text-gray-700 leading-relaxed mt-4">
                      هذا النص هو مثال لنص يمكن أن يستبدل في نفس المساحة، لقد تم توليد هذا النص من مولد النص العربى، حيث يمكنك أن تولد مثل هذا النص أو العديد من النصوص الأخرى إضافة إلى زيادة عدد الحروف التى يولدها التطبيق.
                    </p>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blogs; 
'use client';

import { useEffect, useState, useTransition, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useCallback } from "react";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiMenu } from "react-icons/hi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "@/public/E&mo_LOGO[1].png";

const Navbar = ({ forceDarkText = false }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const currentLocale = pathname.startsWith("/nl") ? "nl" : "fr";
  const [locale, setLocale] = useState(currentLocale);
  const [labels, setLabels] = useState({});
  const [translations, setTranslations] = useState({});
  const [scrolled, setScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState(null);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [isSheetOpen, setIsSheetOpen] = useState(false);
  const dropdownTimer = useRef();



  // Scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const loadTranslations = async () => {
      const saved = localStorage.getItem("preferred-locale") || currentLocale;
      setLocale(saved);
      const translations = await import(`@/translations/${saved}.json`);
      setLabels(translations.default.nav);
      setTranslations(translations.default);
    };

    loadTranslations();
  }, [pathname]);

  const handleLocaleChange = (e) => {
    const newLocale = e.target.value;
    localStorage.setItem("preferred-locale", newLocale);
    const newPath = pathname.replace(/^\/(fr|nl)/, `/${newLocale}`);
    startTransition(() => router.push(newPath));
  };

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const handleServiceClick = useCallback((subItem, e) => {
    e.preventDefault();
    e.stopPropagation();
    
    console.log('Service clicked:', subItem);
    
    // استخراج الرقم من href (مثل /fr/services/0 -> 0)
    const hrefMatch = subItem.href.match(/\/services\/(\d+)$/);
    const serviceIndex = hrefMatch ? parseInt(hrefMatch[1]) : -1;
    
    console.log('Service index:', serviceIndex);
    console.log('Available services:', translations.services?.items);
    
    if (serviceIndex !== -1 && translations.services?.items?.[serviceIndex]) {
      const selectedService = translations.services.items[serviceIndex];
      
      console.log('Selected service:', selectedService);
      
      // حفظ الخدمة المحددة في localStorage
      localStorage.setItem('selectedService', JSON.stringify(selectedService));
      
      // إغلاق القائمة في mobile
      setOpenSubmenu(null);
      setDesktopDropdownOpen(false);
      
      // التوجيه إلى صفحة الخدمات
      const newPath = subItem.href.replace(/\/\d+$/, ''); // إزالة الرقم من نهاية المسار
      console.log('Navigating to:', newPath);
      
      // إغلاق Sheet في mobile فوراً
      setIsSheetOpen(false);
      
      router.push(newPath);
    } else {
      console.error('Service not found for index:', serviceIndex);
    }
  }, [translations, router]);

  const navItems = [
    { href: `/${locale}`, label: labels.home },
    { href: `/${locale}/about`, label: labels.about },
    { href: `/${locale}/portfolio`, label: labels.portfolio },
    { href: `/${locale}/services`, label: labels.services, hasSubmenu: true },
    { href: `/${locale}/blogs`, label: labels.blogs },
    { href: `/${locale}/contact`, label: labels.contact },
    { href: `/${locale}/testmonialsBg`, label: labels.testimonials },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 px-3 sm:px-4 md:px-6 py-3 sm:py-3 md:py-4 transition-all duration-300 ${
        (forceDarkText || scrolled)
          ? "bg-white text-black shadow-md"
          : "bg-gray-100/80 backdrop-blur-sm text-black"
      }`}
    >
      <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-0">
        {/* Logo */}
        <div className="flex-shrink-0">
          <img 
            src={logo.src} 
            className="w-auto h-8 sm:h-10 transition-all duration-300" 
            alt="Logo"
          />
        </div>

        {/* Center Navigation - Hidden on Mobile */}
        <nav
          className={`hidden lg:flex items-center mr-0 lg:mr-8 gap-3 lg:gap-6 py-2 lg:py-3 px-2 lg:px-6 bg-white rounded-full shadow-lg`}
        >
          {navItems.map((item) => (
            item.hasSubmenu ? (
              <div
                key={item.href}
                className="relative"
                onMouseEnter={() => {
                  if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
                  setDesktopDropdownOpen(true);
                }}
                onMouseLeave={() => {
                  dropdownTimer.current = setTimeout(() => setDesktopDropdownOpen(false), 300);
                }}
              >
                <div className={`flex items-center gap-1`}>
                  <Link
                    href={item.href}
                    className={`hover:text-secondary transition-colors font-semibold text-black text-base lg:text-lg`}
                    style={{lineHeight: 1.2}}
                  >
                    {item.label}
                  </Link>
                  <button
                    className={`hover:text-secondary transition-colors font-semibold focus:outline-none text-black`}
                    onClick={() => setDesktopDropdownOpen((v) => !v)}
                    type="button"
                    tabIndex={-1}
                    aria-label="Show submenu"
                  >
                    <svg className="w-4 h-4  " style={{transform: desktopDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'}} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                  </button>
                </div>
                <div
                  className={`absolute left-1/2 mt-1 z-50 transition-all duration-200 ${desktopDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} w-64 sm:w-72 max-w-lg min-w-[256px] sm:min-w-[288px]`}
                  style={{ pointerEvents: desktopDropdownOpen ? 'auto' : 'none', transform: `translateX(-50%) ${desktopDropdownOpen ? '' : ' translateY(-8px)'}` }}
                >
                  <div className="bg-white border border-gray-200 shadow-lg rounded-xl py-1 sm:py-2 px-1">
                    {translations.services?.serviceSubItems?.map((subItem, idx) => (
                      <button
                        key={idx}
                        onClick={(e) => handleServiceClick(subItem, e)}
                        className="block w-full text-left rounded-md px-3 sm:px-4 py-1.5 sm:py-2 text-main text-xs sm:text-sm transition-colors duration-150 hover:bg-secondary/10 hover:text-secondary cursor-pointer"
                        type="button"
                      >
                        <span className="inline-block align-middle">{subItem.label}</span>
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`hover:text-secondary transition-colors font-semibold text-black text-base lg:text-lg`}
              >
                {item.label}
              </Link>
            )
          ))}
        </nav>

        {/* Right side - Search and Language - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-2 lg:gap-4">
          {/* Search Icon */}
          <button className="p-2 cursor-pointer text-black hover:text-secondary transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          {/* Language Selector */}
          <button
            onClick={() => handleLocaleChange({ target: { value: locale === 'fr' ? 'nl' : 'fr' } })}
            className="p-2 cursor-pointer text-black hover:text-secondary transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

        {/* Mobile Controls */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Language Selector for Mobile */}
          <button
            onClick={() => handleLocaleChange({ target: { value: locale === 'fr' ? 'nl' : 'fr' } })}
            className="flex items-center gap-1 px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-200 text-black hover:bg-gray-50 transition-colors min-h-[44px]"
          >
            <span className="text-sm font-medium">{locale.toUpperCase()}</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
          
          {/* Search Icon for Mobile */}
          <button className="p-3 text-black hover:text-secondary transition-colors bg-white rounded-lg shadow-sm border border-gray-200 min-h-[44px] min-w-[44px] flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          
          {/* Menu Button */}
          <Sheet open={isSheetOpen} onOpenChange={(open) => {
            setIsSheetOpen(open);
            if (!open) {
              setOpenSubmenu(null);
            }
          }}>
            <SheetTrigger asChild>
              <button
                className={`p-3 cursor-pointer z-50 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50 transition-colors min-h-[44px] min-w-[44px] flex items-center justify-center ${
                  (forceDarkText || scrolled) ? "text-black" : "text-black"
                }`}
                aria-label="Open menu"
              >
                <HiMenu className="h-6 w-6" />
              </button>
            </SheetTrigger>
            <SheetContent 
              side="left" 
              className="bg-white text-black p-0 w-[85vw] max-w-[320px] border-r border-gray-200"
              onPointerDownOutside={() => {
                setIsSheetOpen(false);
                setOpenSubmenu(null);
              }}
              onEscapeKeyDown={() => {
                setIsSheetOpen(false);
                setOpenSubmenu(null);
              }}
            >
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                {/* Header */}
                <div className="p-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center justify-between">
                    <h2 className="text-lg font-bold text-black">Menu</h2>
                    <button
                      onClick={() => {
                        setIsSheetOpen(false);
                        setOpenSubmenu(null);
                      }}
                      className="p-2 text-gray-500 hover:text-gray-700 transition-colors"
                      aria-label="Close menu"
                    >
                     
                    </button>
                  </div>
                </div>
                
                {/* Navigation */}
                <nav className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-1">
                    {navItems.map((item) => (
                      <div key={item.href}>
                        {item.hasSubmenu ? (
                          <>
                            <div className="flex items-center justify-between w-full py-3 px-2 rounded-lg hover:bg-gray-50 transition-colors">
                              <Link
                                href={item.href}
                                className="text-base font-medium hover:text-secondary transition-colors flex-1 text-left"
                                onClick={() => {
                                  setOpenSubmenu(null);
                                  // إغلاق Sheet في mobile فوراً
                                  setIsSheetOpen(false);
                                }}
                              >
                                {item.label}
                              </Link>
                              <button
                                onClick={() => toggleSubmenu('services')}
                                className="ml-2 p-2 text-black hover:text-secondary transition-colors min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg hover:bg-gray-100"
                                aria-label="Show submenu"
                                type="button"
                              >
                                {openSubmenu === 'services' ? (
                                  <FaChevronUp className="h-4 w-4" />
                                ) : (
                                  <FaChevronDown className="h-4 w-4" />
                                )}
                              </button>
                            </div>
                            {openSubmenu === 'services' && (
                              <div className="ml-4 mb-2 flex flex-col gap-1 bg-gray-50 rounded-lg p-3">
                                {translations.services?.serviceSubItems?.map((subItem, index) => (
                                  <button
                                    key={index}
                                    onClick={(e) => handleServiceClick(subItem, e)}
                                    className="text-sm text-gray-700 hover:text-secondary transition-colors py-2 px-3 rounded-md hover:bg-white min-h-[36px] flex items-center w-full text-left cursor-pointer"
                                  >
                                    {subItem.label}
                                  </button>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          <Link
                            href={item.href}
                            className="text-base font-medium hover:text-secondary transition-colors block py-3 px-2 rounded-lg hover:bg-gray-50 min-h-[44px] flex items-center"
                            onClick={() => {
                              // إغلاق Sheet في mobile فوراً
                              setIsSheetOpen(false);
                            }}
                          >
                            {item.label}
                          </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>
                
                {/* Footer */}
            
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

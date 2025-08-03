'use client';

import { useEffect, useState, useTransition, useRef, useCallback } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
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

  // Scroll listener background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
      setDesktopDropdownOpen(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll to top when pathname changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  // إغلاق dropdown عند الضغط خارجه أو الضغط على Escape
  useEffect(() => {
    const handleClickOutside = (event) => {
      const dropdownElement = event.target.closest('[data-dropdown="services"]');
      if (!dropdownElement && desktopDropdownOpen) {
        setDesktopDropdownOpen(false);
      }
    };

    const handleEscapeKey = (event) => {
      if (event.key === 'Escape' && desktopDropdownOpen) {
        setDesktopDropdownOpen(false);
      }
    };

    if (desktopDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
      document.addEventListener('keydown', handleEscapeKey);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
      document.removeEventListener('keydown', handleEscapeKey);
    };
  }, [desktopDropdownOpen]);

  // load translations
  useEffect(() => {
    const loadTranslations = async () => {
      const saved = localStorage.getItem("preferred-locale") || currentLocale;
      setLocale(saved);
      const translations = await import(`@/translations/${saved}.json`);
      setLabels(translations.default.nav);
      setTranslations(translations.default);
    };
    loadTranslations();
  }, [pathname, currentLocale]);

  const handleLocaleChange = (e) => {
    const newLocale = e.target.value;
    localStorage.setItem("preferred-locale", newLocale);
    setLocale(newLocale);
    const newPath = pathname.replace(/^\/(fr|nl)/, `/${newLocale}`);
    startTransition(() => router.push(newPath));
  };

  const toggleSubmenu = (menuName) => {
    setOpenSubmenu(openSubmenu === menuName ? null : menuName);
  };

  const handleServiceClick = useCallback((subItem, e) => {
    e.preventDefault();
    e.stopPropagation();
    const hrefMatch = subItem.href.match(/\/services\/(\d+)$/);
    const serviceIndex = hrefMatch ? parseInt(hrefMatch[1]) : -1;

    if (serviceIndex !== -1 && translations.services?.items?.[serviceIndex]) {
      const selectedService = translations.services.items[serviceIndex];
      localStorage.setItem('selectedService', JSON.stringify(selectedService));
      
      // إغلاق جميع القوائم
      setOpenSubmenu(null);
      setDesktopDropdownOpen(false);
      setIsSheetOpen(false);

      const servicePath = `/${locale}/services/${serviceIndex + 1}`;
      router.push(servicePath);
    } else {
      console.error('Service not found for index:', serviceIndex);
    }
  }, [translations, router, locale]);

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
    <header className={`fixed top-0 left-0 w-full z-50 px-3 sm:px-4 md:px-6 py-3 md:py-4 transition-all duration-300 ${
      (forceDarkText || scrolled)
        ? "bg-white text-black shadow-md"
        : "bg-gray-100/80 backdrop-blur-sm text-black"
    }`}>
      <div className="flex items-center justify-between gap-3 sm:gap-4 md:gap-0">
        <div className="flex-shrink-0">
          <img src={logo.src} className="w-auto h-8 sm:h-10 transition-all duration-300" alt="Logo" />
        </div>

        <nav className="hidden lg:flex items-center gap-6 bg-white rounded-full shadow-lg py-2 px-6">
          {navItems.map(item => (
            item.hasSubmenu ? (
              <div key={item.href} className="relative" data-dropdown="services"
                   onMouseEnter={() => {
                     if (dropdownTimer.current) clearTimeout(dropdownTimer.current);
                     setDesktopDropdownOpen(true);
                   }}
                   onMouseLeave={() => {
                     dropdownTimer.current = setTimeout(() => setDesktopDropdownOpen(false), 300);
                   }}>
                <div className="flex items-center gap-1">
                  <Link href={item.href} className="hover:text-secondary transition-colors font-semibold text-black text-base lg:text-lg" style={{ lineHeight: 1.2 }}>
                    {item.label}
                  </Link>
                  <button type="button" tabIndex={-1} aria-label="Show submenu"
                          className="hover:text-secondary transition-colors font-semibold text-black"
                          onClick={() => setDesktopDropdownOpen(v => !v)}>
                    <FaChevronDown style={{ transform: desktopDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)' }} />
                  </button>
                </div>
                <div className={`absolute left-1/2 mt-1 z-50 transition-all duration-200 ${desktopDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'}`} style={{ width: '18rem', transform: `translateX(-50%)` }}>
                  <div className="bg-white border border-gray-200 shadow-lg rounded-xl py-2 px-2">
                    {translations.services?.serviceSubItems?.map((subItem, idx) => (
                      <button key={idx} onClick={(e) => handleServiceClick(subItem, e)}
                              className="block w-full text-left rounded-md px-4 py-2 text-sm hover:bg-secondary/10 hover:text-secondary">
                        {subItem.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href}
                    className="hover:text-secondary transition-colors font-semibold text-black text-base lg:text-lg">
                {item.label}
              </Link>
            )
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <button className="p-2 hover:text-secondary transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button onClick={() => handleLocaleChange({ target: { value: locale === 'fr' ? 'nl' : 'fr' } })}
                  className="p‑2 hover:text‑secondary transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </button>
        </div>

        <div className="flex lg:hidden items-center gap-2">
          <button onClick={() => {
            handleLocaleChange({ target: { value: locale === 'fr' ? 'nl' : 'fr' } });
            setIsSheetOpen(false);
            setOpenSubmenu(null);
          }}
                  className="flex items-center gap-1 px-3 py-2 bg-white rounded-lg shadow-sm border border-gray-200 hover:bg-gray-50">
            <span className="text-sm font-medium">{locale.toUpperCase()}</span>
            <FaChevronDown className="w-4 h-4" />
          </button>

          <button className="p-3 bg-white rounded-lg shadow-sm border border-gray-200 min-h-[44px] min-w-[44px] flex items-center justify-center hover:bg-gray-50">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>

          <Sheet open={isSheetOpen} onOpenChange={open => {
            setIsSheetOpen(open);
            if (!open) setOpenSubmenu(null);
          }}>
            <SheetTrigger asChild>
              <button aria-label="Open menu" className="p-3 bg-white rounded-lg shadow-sm border border-gray-200 flex items-center justify-center min-h-[44px]">
                <HiMenu className="w-6 h-6" />
              </button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white text-black w-[85vw] max-w-[320px] border-r border-gray-200 p-0">
              <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
              <div className="flex flex-col h-full">
                <div className="p-4  bg-gray-50">
                  <div className="flex justify-between items-center">
                    <h2 className="text-lg font-bold">Menu</h2>
                    
                  </div>
                </div>
                <nav className="flex-1 p-4 overflow-y-auto">
                  <div className="space-y-1">
                    {navItems.map(item => (
                      <div key={item.href}>
                        {item.hasSubmenu ? (
                          <>
                            <div className="flex justify-between items-center py-3 px-2 rounded-lg hover:bg-gray-50">
                                                           <Link href={item.href} onClick={() => { 
                                 setIsSheetOpen(false); 
                                 setOpenSubmenu(null);
                               }}
                                   className="text-base font-medium flex-1">
                               {item.label}
                             </Link>
                              <button onClick={() => toggleSubmenu('services')}
                                      className="p-2 min-h-[40px] min-w-[40px] flex items-center justify-center rounded-lg hover:bg-gray-100">
                                {openSubmenu === 'services' ? <FaChevronUp /> : <FaChevronDown />}
                              </button>
                            </div>
                            {openSubmenu === 'services' && (
                              <div className="ml-4 mb-2 flex flex-col gap-1 bg-gray-50 rounded-lg p-3">
                                                                 {translations.services?.serviceSubItems?.map((subItem, i) => (
                                   <button key={i} onClick={(e) => {
                                     handleServiceClick(subItem, e);
                                     setIsSheetOpen(false);
                                     setOpenSubmenu(null);
                                   }}
                                           className="text-sm text-gray-700 hover:text-secondary py-2 px-3 rounded-md hover:bg-white">
                                     {subItem.label}
                                   </button>
                                 ))}
                              </div>
                            )}
                          </>
                        ) : (
                                                     <Link href={item.href} onClick={() => { 
                               setIsSheetOpen(false); 
                               setOpenSubmenu(null);
                             }}
                                 className="block py-3 px-2 rounded-lg hover:bg-gray-50 text-base font-medium">
                             {item.label}
                           </Link>
                        )}
                      </div>
                    ))}
                  </div>
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

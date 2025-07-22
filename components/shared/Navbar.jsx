'use client';

import { useEffect, useState, useTransition, useRef } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiMenu } from "react-icons/hi";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import logo from "@/public/HLogo.png";
import scrolledLogo from "@/public/E&mo_LOGO[1].png";

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
      className={`fixed top-0 left-0 w-full z-50 px-6 py-4 flex items-center justify-between transition-all duration-300 ${
        (forceDarkText || scrolled)
          ? "bg-white text-black shadow-md"
          : "bg-transparent text-white"
      }`}
    >
      <h1 className="text-xl font-bold">
        <img 
          src={scrolled ? scrolledLogo.src : logo.src} 
          className={`w-auto transition-all duration-300 ${scrolled ? 'h-8' : 'h-16'}`} 
        />
      </h1>

      <nav
        className={`hidden md:flex items-center gap-6 py-2 px-4 border bg-black/30 rounded-full transition-all duration-300 ${
          (forceDarkText || scrolled) ? "border-black" : "border-white"
        }`}
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
                  className={`hover:text-secondary transition-colors font-semibold ${
                    (forceDarkText || scrolled) ? "text-black" : "text-white"
                  }`}
                  style={{lineHeight: 1.2}}
                >
                  {item.label}
                </Link>
                <button
                  className={`hover:text-secondary transition-colors font-semibold focus:outline-none`}
                  onClick={() => setDesktopDropdownOpen((v) => !v)}
                  type="button"
                  tabIndex={-1}
                  aria-label="Show submenu"
                >
                  <svg className="w-4 h-4 transition-transform duration-200" style={{transform: desktopDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)'}} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
              </div>
              <div
                className={`absolute left-1/2 mt-2 z-50 transition-all duration-200 ${desktopDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'} w-96 max-w-lg min-w-[300px]`}
                style={{ pointerEvents: desktopDropdownOpen ? 'auto' : 'none', transform: `translateX(-50%) ${desktopDropdownOpen ? '' : ' translateY(-8px)'}` }}
              >
                <div className="bg-white border border-gray-200 shadow-2xl rounded-2xl py-4 px-2">
                  {translations.services?.serviceSubItems?.map((subItem, idx) => (
                    <Link
                      key={idx}
                      href={subItem.href}
                      className="block rounded-lg px-7 py-3 text-main text-lg  whitespace-nowrap transition-colors duration-150 hover:bg-secondary/10 hover:text-secondary pl-1"
                    >
                      {subItem.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={`hover:text-secondary transition-colors font-semibold ${
                (forceDarkText || scrolled) ? "text-black" : "text-white"
              }`}
            >
              {item.label}
            </Link>
          )
        ))}
      </nav>

      <div className="hidden md:flex">
        <select
          value={locale}
          onChange={handleLocaleChange}
          className={`font-semibold text-sm px-4 py-2 rounded-md cursor-pointer outline-none transition-all ${
            (forceDarkText || scrolled)
              ? "bg-white/30 text-black border border-black"
              : "bg-white/30 text-white border border-white"
          }`}
        >
          <option value="fr">FR</option>
          <option value="nl">NL</option>
        </select>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden flex items-center gap-2">
        <select
          value={locale}
          onChange={handleLocaleChange}
          className={`text-sm px-2 py-1 rounded-md cursor-pointer outline-none font-semibold ${
            (forceDarkText || scrolled) ? "bg-white text-black" : "bg-white text-main"
          }`}
        >
          <option value="fr">FR</option>
          <option value="nl">NL</option>
        </select>
        <Sheet>
          <SheetTrigger asChild>
            <button
              className={`p-0 cursor-pointer ${
                (forceDarkText || scrolled) ? "text-black " : "text-black"
              }`}
            >
              <HiMenu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-light text-main p-4">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="mt-10 flex flex-col gap-6">
              {navItems.map((item) => (
                <div key={item.href}>
                  {item.hasSubmenu ? (
                    <>
                      <div className="flex items-center justify-between w-full">
                        <Link
                          href={item.href}
                          className="text-lg font-semibold hover:text-accent flex-1 text-left"
                          onClick={() => setOpenSubmenu(null)}
                        >
                          {item.label}
                        </Link>
                        <button
                          onClick={() => toggleSubmenu('services')}
                          className="ml-2 p-1 text-main hover:text-accent"
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
                        <div className="mt-2 ml-4 flex flex-col gap-2">
                          {translations.services?.serviceSubItems?.map((subItem, index) => (
                            <Link
                              key={index}
                              href={subItem.href}
                              className="text-sm text-gray-600 hover:text-accent py-1"
                            >
                              {subItem.label}
                            </Link>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <Link
                      href={item.href}
                      className="text-lg font-semibold hover:text-accent"
                    >
                      {item.label}
                    </Link>
                  )}
                </div>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;

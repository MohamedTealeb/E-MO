'use client';

import { useEffect, useState, useTransition } from "react";
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
import logo from "@/public/HLogo.png";

const Navbar = ({ forceDarkText = false }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const currentLocale = pathname.startsWith("/nl") ? "nl" : "fr";
  const [locale, setLocale] = useState(currentLocale);
  const [labels, setLabels] = useState({});
  const [scrolled, setScrolled] = useState(false);

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
    };

    loadTranslations();
  }, [pathname]);

  const handleLocaleChange = (e) => {
    const newLocale = e.target.value;
    localStorage.setItem("preferred-locale", newLocale);
    const newPath = pathname.replace(/^\/(fr|nl)/, `/${newLocale}`);
    startTransition(() => router.push(newPath));
  };

  const navItems = [
    { href: `/${locale}`, label: labels.home },
    { href: `/${locale}/about`, label: labels.about },
    { href: `/${locale}/portfolio`, label: labels.portfolio },
    { href: `/${locale}/services`, label: labels.services },
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
        <img src={logo.src} className="w-auto h-16" />
      </h1>

      <nav
        className={`hidden md:flex items-center gap-6 py-2 px-4 border bg-black/30 rounded-full transition-all duration-300 ${
          (forceDarkText || scrolled) ? "border-black" : "border-white"
        }`}
      >
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className={`hover:text-secondary transition-colors font-semibold ${
              (forceDarkText || scrolled) ? "text-black" : "text-white"
            }`}
          >
            {item.label}
          </Link>
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
                (forceDarkText || scrolled) ? "text-black bg-black/20" : "text-black bg-black/20"
              }`}
            >
              <HiMenu className="h-6 w-6" />
            </button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-light text-main p-4">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <nav className="mt-10 flex flex-col gap-6">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-lg font-semibold hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
};

export default Navbar;

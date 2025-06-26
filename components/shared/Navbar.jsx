"use client";

import { useEffect, useState, useTransition } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { HiMenu } from "react-icons/hi";
import logo from "@/public/HLogo.jpg";
const Navbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  const currentLocale = pathname.startsWith("/nl") ? "nl" : "fr";
  const [locale, setLocale] = useState(currentLocale);
  const [labels, setLabels] = useState({});

  // Load translation file
  useEffect(() => {
    const loadTranslations = async () => {
      const saved = localStorage.getItem("preferred-locale") || currentLocale;
      setLocale(saved);
      const translations = await import(`@/translations/${saved}.json`);
      setLabels(translations.default.nav); // Assuming { nav: { home, about... } }
    };

    loadTranslations();
  }, [pathname]);

  const handleLocaleChange = (e) => {
    const newLocale = e.target.value;
    localStorage.setItem("preferred-locale", newLocale);

    const newPath = pathname.replace(/^\/(fr|nl)/, `/${newLocale}`);
    startTransition(() => {
      router.push(newPath);
    });
  };

  const navItems = [
    { href: `/${locale}`, label: labels.home },
    { href: `/${locale}/about`, label: labels.about },
    { href: `/${locale}/portfolio`, label: labels.portfolio },
    { href: `/${locale}/services`, label: labels.services },
    { href: `/${locale}/contact`, label: labels.contact },
  ];

  return (
    <header className="bg-main text-light px-6 py-4 flex items-center justify-between shadow-md  border-b border-secondary">
      <h1 className="text-xl font-bold text-white">
        <img src={logo.src} className="w-36 h-16" />
      </h1>

      {/* Desktop Navigation */}
      <nav className="hidden md:flex items-center gap-6 py-2 px-4 text-white border border-secondary rounded-full">
        {navItems.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="hover:text-accent transition-colors font-semibold"
          >
            {item.label}
          </Link>
        ))}
      </nav>
      <div className="hidden md:flex">
        <select
          value={locale}
          onChange={handleLocaleChange}
          className="bg-secondary text-white font-semibold text-sm px-4 py-2 rounded-md cursor-pointer outline-none"
        >
          <option value="fr">FR</option>
          <option value="nl">NL</option>
        </select>
      </div>

      {/* Mobile Menu (Sheet) */}
      <div className="md:hidden flex items-center gap-2">
        <select
          value={locale}
          onChange={handleLocaleChange}
          className="bg-white text-main font-semibold text-sm px-2 py-1 rounded-md cursor-pointer outline-none"
        >
          <option value="fr">FR</option>
          <option value="nl">NL</option>
        </select>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="text-white p-0 cursor-pointer">
              <HiMenu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="bg-light text-main p-4">
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

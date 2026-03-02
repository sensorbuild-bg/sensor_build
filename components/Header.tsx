"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useMemo, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Header() {
  const pathname = usePathname();
  const { lang, setLang } = useLanguage();
  const t = translations[lang].nav;

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);

  const navigation = useMemo(
    () => [
      { name: t.home, href: "/" },
      { name: t.services, href: "/services" },
      { name: t.lighting, href: "/osvetlenie" },
      { name: t.howWeWork, href: "/how-we-work" },
      { name: t.projects, href: "/projects" },
      { name: t.contacts, href: "/contacts" },
    ],
    [t]
  );

  const handleCloseMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 250);
  };

  // close on route change
  useEffect(() => {
    if (isMenuOpen) handleCloseMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // lock body scroll when menu open
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  return (
    <header className="absolute top-0 left-0 w-full z-50">
      {/* Desktop (>= lg) */}
      <div className="hidden lg:block">
        <div
          className={`relative w-full ${
            lang === "bg" ? "bg-[#13182c]" : "bg-white"
          }`}
        >
          {/* Зелената линия – “продължение на логото” */}
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[8px] bg-gradient-to-r from-[#62b946] to-[#0c5447] pointer-events-none z-0"
            aria-hidden="true"
          />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Височина на header-а (като преди) */}
            <div className="relative h-[96px] grid grid-cols-[auto,1fr,auto] items-center z-10">
              {/* Logo */}
              <Link href="/" className="flex items-center">
                <div className="pr-10">
                  <Image
                    src={lang === "bg" ? "/logodark.png" : "/logo.webp"}
                    alt="Sensor Build Logo"
                    width={220}
                    height={88}
                    className="h-auto w-auto bg-transparent"
                    priority
                  />
                </div>
              </Link>

              {/* Nav center */}
              <nav className="flex justify-center">
                <div className="flex items-center gap-10">
                  {navigation.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`whitespace-nowrap text-lg font-bold transition-colors ${
                          isActive
                            ? lang === "bg"
                              ? "text-white border-b-2 border-white pb-0.5"
                              : "text-black border-b-2 border-black pb-0.5"
                            : lang === "bg"
                            ? "text-white hover:text-[#4da855]"
                            : "text-black hover:text-[#4da855]"
                        }`}
                      >
                        {item.name}
                      </Link>
                    );
                  })}
                </div>
              </nav>

              {/* Language right */}
              <div className="flex items-center gap-2 justify-end">
                <button
                  onClick={() => setLang("bg")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md text-white transition-all duration-200 ${
                    lang === "bg"
                      ? "bg-[#2d6b35] shadow-md"
                      : "bg-[#388644]/40 hover:bg-[#388644]/60"
                  }`}
                >
                  BG
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md text-white transition-all duration-200 ${
                    lang === "en"
                      ? "bg-[#2d6b35] shadow-md"
                      : "bg-[#388644]/40 hover:bg-[#388644]/60"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile + Tablet (< lg) */}
      <div className="lg:hidden">
        <div
          className={`relative w-full ${
            lang === "bg" ? "bg-[#13182c]" : "bg-white"
          }`}
        >
          {/* Зелената линия – същата височина/позиция */}
          <div
            className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[5px] bg-gradient-to-r from-[#62b946] to-[#0c5447] pointer-events-none z-0"
            aria-hidden="true"
          />

          <div className="relative z-10 flex items-center justify-between px-4 py-4">
            <Link href="/" className="flex items-center">
              <Image
                src={lang === "bg" ? "/logodark.png" : "/logo.webp"}
                alt="Sensor Build Logo"
                width={150}
                height={60}
                className="h-auto w-auto bg-transparent"
                priority
              />
            </Link>

            <div className="flex items-center gap-2">
              <div className="flex items-center gap-1">
                <button
                  onClick={() => setLang("bg")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md text-white transition-all duration-200 ${
                    lang === "bg" ? "bg-[#2d6b35] shadow-md" : "bg-[#388644]/40"
                  }`}
                >
                  BG
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-3 py-1.5 text-xs font-semibold rounded-md text-white transition-all duration-200 ${
                    lang === "en" ? "bg-[#2d6b35] shadow-md" : "bg-[#388644]/40"
                  }`}
                >
                  EN
                </button>
              </div>

              <button
                onClick={() => setIsMenuOpen(true)}
                className="p-2 rounded-md transition-colors bg-transparent"
                aria-label="Open menu"
              >
                <div className="w-6 h-6 flex flex-col justify-center gap-[6px]">
                  <span className="block h-0.5 w-6 bg-[#388644]" />
                  <span className="block h-0.5 w-6 bg-[#388644]" />
                  <span className="block h-0.5 w-6 bg-[#388644]" />
                </div>
              </button>
            </div>
          </div>

          {/* Mobile Menu Overlay */}
          {isMenuOpen && (
            <>
              <div
                className="fixed inset-0 bg-black/60 z-[100]"
                onClick={handleCloseMenu}
                aria-hidden="true"
              />

              <nav
                className={`fixed top-0 right-0 h-full w-80 max-w-[90vw] bg-white shadow-xl z-[101] overflow-y-auto transform transition-transform duration-250 ease-out ${
                  isClosing ? "translate-x-full" : "translate-x-0"
                }`}
              >
                <div className="flex justify-end p-4 border-b border-gray-200">
                  <button
                    onClick={handleCloseMenu}
                    className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-6 h-6 text-gray-700"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                <div className="flex flex-col px-4 pb-8 pt-2">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleCloseMenu}
                      className={`text-lg font-semibold py-4 px-4 rounded transition-colors ${
                        pathname === item.href
                          ? "text-[#4da855] bg-[#4da855]/10"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>
            </>
          )}
        </div>
      </div>
    </header>
  );
}

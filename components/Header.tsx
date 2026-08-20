"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isScrolledRef = useRef(false);

  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const t = translations[lang].nav;

  const handleCloseMenu = () => {
    setIsClosing(true);

    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 300);
  };

  useEffect(() => {
    const COLLAPSE_AT = 120;
    const EXPAND_AT = 20;
    let ticking = false;

    const updateHeader = () => {
      const scrollY = window.scrollY;

      if (!isScrolledRef.current && scrollY > COLLAPSE_AT) {
        isScrolledRef.current = true;
        setIsScrolled(true);
      } else if (isScrolledRef.current && scrollY < EXPAND_AT) {
        isScrolledRef.current = false;
        setIsScrolled(false);
      }

      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateHeader);
        ticking = true;
      }
    };

    if (window.scrollY > COLLAPSE_AT) {
      isScrolledRef.current = true;
      setIsScrolled(true);
    } else {
      isScrolledRef.current = false;
      setIsScrolled(false);
    }

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      handleCloseMenu();
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  const navigation = [
    { name: t.home, href: "/" },
    { name: t.services, href: "/services" },
    { name: t.lighting, href: "/osvetlenie" },
    {
      name: lang === "bg" ? "Цени" : "Prices",
      href: "/prices",
      highlight: true,
    },
    { name: t.projects, href: "/projects" },
    { name: t.contacts, href: "/contacts" },
  ];

  const isActiveLink = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const homeLabel = lang === "bg" ? "Sensor Build – начало" : "Sensor Build – home";
  const menuLabel = lang === "bg" ? "Основна навигация" : "Main navigation";

  return (
    <header
      className={`sticky top-0 w-full z-50 ${
        lang === "bg" ? "bg-[#13182c]" : "bg-white"
      } ${isScrolled ? "shadow-xl" : "shadow-none"}`}
    >
      <div
        className={`hidden xl:block relative overflow-hidden transition-[height] duration-300 ease-in-out ${
          isScrolled ? "h-[82px]" : "h-[150px]"
        }`}
      >
        <div
          className={`absolute left-0 right-0 bg-gradient-to-r from-[#62b946] to-[#0c5447] pointer-events-none z-40 transition-all duration-300 ease-in-out ${
            isScrolled
              ? "bottom-0 h-[4px]"
              : lang === "en"
              ? "top-[50.9%] -translate-y-1/2 h-[0.5rem]"
              : "top-[51%] -translate-y-1/2 h-[0.40rem]"
          }`}
        />

        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="relative h-full flex items-center justify-between z-30">
            <Link
              href="/"
              aria-label={homeLabel}
              className="flex items-center -ml-4 shrink-0"
            >
              <div
                className={`transition-all duration-300 ease-in-out ${
                  isScrolled ? "pr-6 xl:pr-8" : "pr-6 xl:pr-12"
                }`}
              >
                <Image
                  src={lang === "bg" ? "/logodark.png" : "/logo.webp"}
                  alt="Sensor Build"
                  width={200}
                  height={80}
                  className={`h-auto bg-transparent transition-[width] duration-300 ease-in-out ${
                    isScrolled ? "w-[115px]" : "w-[200px]"
                  }`}
                />
              </div>
            </Link>

            <nav
              aria-label={menuLabel}
              className={`flex-1 flex justify-center transition-[margin] duration-300 ease-in-out ${
                isScrolled ? "mt-0" : "-mt-10"
              }`}
            >
              <div
                className={`flex transition-all duration-300 ease-in-out ${
                  isScrolled
                    ? "space-x-8 2xl:space-x-10"
                    : "space-x-12"
                }`}
              >
                {navigation.map((item) => {
                  const active = isActiveLink(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      aria-current={active ? "page" : undefined}
                      className={`whitespace-nowrap font-bold transition-colors border-b-2 ${
                        isScrolled ? "text-base pb-1" : "text-lg pb-0.5"
                      } ${
                        active
                          ? item.highlight
                            ? "text-[#62b946] border-[#62b946]"
                            : lang === "bg"
                            ? "text-white border-white"
                            : "text-black border-black"
                          : item.highlight
                          ? "text-[#62b946] border-transparent hover:text-[#7fd15f]"
                          : lang === "bg"
                          ? "text-white border-transparent hover:text-[#4da855]"
                          : "text-black border-transparent hover:text-[#4da855]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </nav>

            <div
              className={`flex items-center space-x-1 ml-6 shrink-0 transition-[margin] duration-300 ease-in-out ${
                isScrolled ? "mt-0" : "-mt-12"
              }`}
              aria-label={lang === "bg" ? "Избор на език" : "Language selection"}
            >
              <button
                type="button"
                onClick={() => setLang("bg")}
                aria-pressed={lang === "bg"}
                aria-label="Български"
                className={`px-3 py-1.5 text-xs font-semibold rounded-md text-white transition-all duration-200 ${
                  lang === "bg"
                    ? "bg-[#2d6b35] shadow-md"
                    : "bg-[#388644]/40 hover:bg-[#388644]/60"
                }`}
              >
                BG
              </button>

              <button
                type="button"
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                aria-label="English"
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

      <div
        className={`xl:hidden relative overflow-hidden transition-[height] duration-300 ease-in-out ${
          isScrolled ? "h-[64px]" : "h-[100px]"
        }`}
      >
        <div
          className={`absolute left-0 right-0 bg-gradient-to-r from-[#62b946] to-[#0c5447] pointer-events-none z-40 transition-all duration-300 ease-in-out ${
            isScrolled
              ? "bottom-0 h-[3px]"
              : lang === "en"
              ? "top-[50.7%] -translate-y-1/2 h-[0.3rem]"
              : "top-[50.6%] -translate-y-1/2 h-[0.23rem]"
          }`}
        />

        <div className="h-full flex items-center justify-between px-4 relative z-30">
          <Link
            href="/"
            aria-label={homeLabel}
            className="flex items-center shrink-0"
          >
            <Image
              src={lang === "bg" ? "/logodark.png" : "/logo.webp"}
              alt="Sensor Build"
              width={120}
              height={48}
              className={`h-auto bg-transparent transition-[width] duration-300 ease-in-out ${
                isScrolled ? "w-[82px]" : "w-[120px]"
              }`}
            />
          </Link>

          <div
            className={`flex items-center space-x-2 transition-[margin] duration-300 ease-in-out ${
              isScrolled ? "mt-0" : "-mt-12"
            }`}
          >
            <div
              className="flex items-center space-x-1"
              aria-label={lang === "bg" ? "Избор на език" : "Language selection"}
            >
              <button
                type="button"
                onClick={() => setLang("bg")}
                aria-pressed={lang === "bg"}
                aria-label="Български"
                className={`px-3 py-1.5 text-xs font-semibold rounded-md text-white transition-all duration-200 ${
                  lang === "bg"
                    ? "bg-[#2d6b35] shadow-md"
                    : "bg-[#388644]/40 hover:bg-[#388644]/60"
                }`}
              >
                BG
              </button>

              <button
                type="button"
                onClick={() => setLang("en")}
                aria-pressed={lang === "en"}
                aria-label="English"
                className={`px-3 py-1.5 text-xs font-semibold rounded-md text-white transition-all duration-200 ${
                  lang === "en"
                    ? "bg-[#2d6b35] shadow-md"
                    : "bg-[#388644]/40 hover:bg-[#388644]/60"
                }`}
              >
                EN
              </button>
            </div>

            <button
              type="button"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md transition-colors bg-transparent"
              aria-label={lang === "bg" ? "Отвори меню" : "Open menu"}
              aria-expanded={isMenuOpen}
              aria-controls="mobile-navigation"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5" aria-hidden="true">
                <span
                  className={`block h-0.5 w-6 transition-all ${
                    isMenuOpen
                      ? "bg-[#388644] rotate-45 translate-y-2"
                      : "bg-[#388644]"
                  }`}
                />

                <span
                  className={`block h-0.5 w-6 transition-all ${
                    isMenuOpen
                      ? "bg-[#388644] opacity-0"
                      : "bg-[#388644]"
                  }`}
                />

                <span
                  className={`block h-0.5 w-6 transition-all ${
                    isMenuOpen
                      ? "bg-[#388644] -rotate-45 -translate-y-2"
                      : "bg-[#388644]"
                  }`}
                />
              </div>
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 z-[100] transition-opacity duration-300"
              onClick={handleCloseMenu}
              aria-hidden="true"
            />

            <nav
              id="mobile-navigation"
              aria-label={menuLabel}
              className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-[101] overflow-y-auto transform transition-transform duration-300 ease-out ${
                isClosing ? "translate-x-full" : "translate-x-0"
              }`}
              style={
                !isClosing
                  ? { animation: "slide-in-right 0.3s ease-out" }
                  : {}
              }
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <Link href="/" aria-label={homeLabel} onClick={handleCloseMenu}>
                  <Image
                    src="/logo.webp"
                    alt="Sensor Build"
                    width={110}
                    height={44}
                    className="h-auto w-auto bg-transparent"
                  />
                </Link>

                <button
                  type="button"
                  onClick={handleCloseMenu}
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                  aria-label={lang === "bg" ? "Затвори меню" : "Close menu"}
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
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

              <div className="flex flex-col px-4 py-6">
                {navigation.map((item) => {
                  const active = isActiveLink(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleCloseMenu}
                      aria-current={active ? "page" : undefined}
                      className={`text-lg font-semibold py-4 px-4 rounded-lg transition-colors ${
                        active
                          ? "text-[#4da855] bg-[#4da855]/10"
                          : item.highlight
                          ? "text-[#2d6b35] hover:bg-[#4da855]/10"
                          : "text-gray-800 hover:bg-gray-100"
                      }`}
                    >
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

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
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
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

  return (
    <header
      className={`sticky top-0 w-full z-50 transition-all duration-300 ${
        lang === "bg" ? "bg-[#13182c]" : "bg-white"
      } ${isScrolled ? "shadow-xl" : "shadow-none"}`}
    >
      {/* ================= DESKTOP (>= xl / 1280px) ================= */}
      <div
        className={`hidden xl:block relative transition-all duration-300 overflow-hidden ${
          isScrolled ? "h-[82px]" : "h-[150px]"
        }`}
      >
        {/* 
          Най-горе: линията минава през логото.
          При скрол: линията отива долу, за да не минава през менюто.
          z-40 я държи над линията на самото лого.
        */}
        <div
          className={`absolute left-0 right-0 bg-gradient-to-r from-[#62b946] to-[#0c5447] pointer-events-none z-40 transition-all duration-300 ${
            isScrolled
              ? "bottom-0 h-[4px]"
              : lang === "en"
              ? "top-[50.9%] -translate-y-1/2 h-[0.5rem]"
              : "top-[51%] -translate-y-1/2 h-[0.40rem]"
          }`}
        />

        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="relative h-full flex items-center justify-between z-30">
            <Link href="/" className="flex items-center -ml-4 shrink-0">
              <div
                className={`transition-all duration-300 ${
                  isScrolled ? "pr-6 xl:pr-8" : "pr-6 xl:pr-12"
                }`}
              >
                <Image
                  src={lang === "bg" ? "/logodark.png" : "/logo.webp"}
                  alt="Sensor Build Logo"
                  width={200}
                  height={80}
                  className={`h-auto bg-transparent transition-all duration-300 ${
                    isScrolled ? "w-[115px]" : "w-[200px]"
                  }`}
                  priority
                />
              </div>
            </Link>

            <nav
              className={`flex-1 flex justify-center transition-all duration-300 ${
                isScrolled ? "mt-0" : "-mt-10"
              }`}
            >
              <div
                className={`flex transition-all duration-300 ${
                  isScrolled ? "space-x-8 2xl:space-x-10" : "space-x-12"
                }`}
              >
                {navigation.map((item) => {
                  const active = isActiveLink(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
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
              className={`flex items-center space-x-1 ml-6 shrink-0 transition-all duration-300 ${
                isScrolled ? "mt-0" : "-mt-12"
              }`}
            >
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

      {/* ================= MOBILE + TABLET (< xl / 1280px) ================= */}
      <div
        className={`xl:hidden relative transition-all duration-300 overflow-hidden ${
          isScrolled ? "h-[64px]" : "h-[100px]"
        }`}
      >
        {/* 
          Най-горе: линията минава през логото.
          При скрол: линията отива долу, за да не минава през бутоните.
          z-40 я държи над линията на самото лого.
        */}
        <div
          className={`absolute left-0 right-0 bg-gradient-to-r from-[#62b946] to-[#0c5447] pointer-events-none z-40 transition-all duration-300 ${
            isScrolled
              ? "bottom-0 h-[3px]"
              : lang === "en"
              ? "top-[50.7%] -translate-y-1/2 h-[0.3rem]"
              : "top-[50.6%] -translate-y-1/2 h-[0.23rem]"
          }`}
        />

        <div className="h-full flex items-center justify-between px-4 relative z-30">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={lang === "bg" ? "/logodark.png" : "/logo.webp"}
              alt="Sensor Build Logo"
              width={120}
              height={48}
              className={`h-auto bg-transparent transition-all duration-300 ${
                isScrolled ? "w-[82px]" : "w-[120px]"
              }`}
              priority
            />
          </Link>

          <div
            className={`flex items-center space-x-2 transition-all duration-300 ${
              isScrolled ? "mt-0" : "-mt-12"
            }`}
          >
            <div className="flex items-center space-x-1">
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

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md transition-colors bg-transparent"
              aria-label="Toggle menu"
              aria-expanded={isMenuOpen}
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={`block h-0.5 w-6 transition-all ${
                    isMenuOpen
                      ? "bg-[#388644] rotate-45 translate-y-2"
                      : "bg-[#388644]"
                  }`}
                />

                <span
                  className={`block h-0.5 w-6 transition-all ${
                    isMenuOpen ? "bg-[#388644] opacity-0" : "bg-[#388644]"
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
            />

            <nav
              className={`fixed top-0 right-0 h-full w-80 max-w-[85vw] bg-white shadow-xl z-[101] overflow-y-auto transform transition-transform duration-300 ease-out ${
                isClosing ? "translate-x-full" : "translate-x-0"
              }`}
              style={
                !isClosing ? { animation: "slide-in-right 0.3s ease-out" } : {}
              }
            >
              <div className="flex items-center justify-between p-4 border-b border-gray-100">
                <Image
                  src="/logo.webp"
                  alt="Sensor Build Logo"
                  width={110}
                  height={44}
                  className="h-auto w-auto bg-transparent"
                />

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

              <div className="flex flex-col px-4 py-6">
                {navigation.map((item) => {
                  const active = isActiveLink(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleCloseMenu}
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

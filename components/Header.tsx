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
      setIsScrolled(window.scrollY > 20);
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
      className={`sticky top-0 w-full z-50 transition-shadow duration-300 ${
        lang === "bg" ? "bg-[#13182c]" : "bg-white"
      } ${isScrolled ? "shadow-xl" : "shadow-none"}`}
    >
      {/* ================= DESKTOP (>= xl / 1280px) ================= */}
      <div className="hidden xl:block relative h-[112px] overflow-hidden">
        {/* Зелената линия остава през логото */}
        <div
          className={`absolute left-0 right-0 ${
            lang === "en" ? "top-[50.9%]" : "top-[51%]"
          } -translate-y-1/2 ${
            lang === "en" ? "h-[0.5rem]" : "h-[0.40rem]"
          } bg-gradient-to-r from-[#62b946] to-[#0c5447] pointer-events-none z-20`}
        />

        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8">
          <div className="relative h-full flex items-center justify-between z-30">
            <Link href="/" className="flex items-center -ml-3 shrink-0">
              <div className="pr-8 xl:pr-12">
                <Image
                  src={lang === "bg" ? "/logodark.png" : "/logo.webp"}
                  alt="Sensor Build Logo"
                  width={170}
                  height={68}
                  className="h-auto w-[170px] bg-transparent"
                  priority
                />
              </div>
            </Link>

            <nav className="flex-1 flex justify-center -mt-7">
              <div className="flex space-x-9 2xl:space-x-11">
                {navigation.map((item) => {
                  const active = isActiveLink(item.href);

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`whitespace-nowrap text-base 2xl:text-lg font-bold transition-colors border-b-2 pb-0.5 ${
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

            <div className="flex items-center space-x-1 -mt-8 ml-6 shrink-0">
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
      <div className="xl:hidden relative h-[84px] overflow-hidden">
        {/* Зелената линия остава през логото и на мобилна версия */}
        <div
          className={`absolute left-0 right-0 ${
            lang === "en" ? "top-[50.7%]" : "top-[50.6%]"
          } -translate-y-1/2 ${
            lang === "en" ? "h-[0.3rem]" : "h-[0.23rem]"
          } bg-gradient-to-r from-[#62b946] to-[#0c5447] pointer-events-none z-20`}
        />

        <div className="h-full flex items-center justify-between px-4 relative z-30">
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src={lang === "bg" ? "/logodark.png" : "/logo.webp"}
              alt="Sensor Build Logo"
              width={105}
              height={42}
              className="h-auto w-[105px] bg-transparent"
              priority
            />
          </Link>

          <div className="flex items-center space-x-2 -mt-8">
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

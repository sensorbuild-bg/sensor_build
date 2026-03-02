"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
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

  const navigation = [
    { name: t.home, href: "/" },
    { name: t.services, href: "/services" },
    { name: t.lighting, href: "/osvetlenie" },
    { name: t.howWeWork, href: "/how-we-work" },
    { name: t.projects, href: "/projects" },
    { name: t.contacts, href: "/contacts" },
  ];

  return (
    <header
      className={`w-full relative z-50 ${
        lang === "bg" ? "bg-[#13182c]" : "bg-white"
      }`}
    >
      {/* ================= DESKTOP (>=1024px) ================= */}
      <div className="hidden lg:block">
        {/* Green line */}
        <div
          className={`absolute left-0 right-0 ${
            lang === "en" ? "top-[50.9%]" : "top-[51%]"
          } -translate-y-1/2 ${
            lang === "en" ? "h-[0.5rem]" : "h-[0.40rem]"
          } bg-gradient-to-r from-[#62b946] to-[#0c5447] pointer-events-none z-20`}
        ></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative py-4">
            <div className="flex items-center justify-between relative z-10">
              
              {/* Logo */}
              <Link href="/" className="flex items-center -ml-4">
                <div className="pr-6 xl:pr-12">
                  <Image
                    src={lang === "bg" ? "/logodark.png" : "/logo.webp"}
                    alt="Sensor Build Logo"
                    width={200}
                    height={80}
                    className="h-auto w-auto bg-transparent"
                    priority
                  />
                </div>
              </Link>

              {/* Navigation */}
              <nav className="flex-1 flex justify-center -mt-10">
                <div className="flex space-x-12">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`whitespace-nowrap text-lg font-bold transition-colors ${
                        pathname === item.href
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
                  ))}
                </div>
              </nav>

              {/* Language Switch */}
              <div className="flex items-center space-x-1 -mt-12 ml-6">
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

      {/* ================= MOBILE + TABLET (<1024px) ================= */}
      <div className="lg:hidden relative">

        {/* Green line */}
        <div
          className={`absolute left-0 right-0 ${
            lang === "en" ? "top-[50.7%]" : "top-[50.6%]"
          } -translate-y-1/2 ${
            lang === "en" ? "h-[0.3rem]" : "h-[0.23rem]"
          } bg-gradient-to-r from-[#62b946] to-[#0c5447] pointer-events-none z-20`}
        ></div>

        <div className="flex items-center justify-between px-4 py-4 relative z-10">
          
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={lang === "bg" ? "/logodark.png" : "/logo.webp"}
              alt="Sensor Build Logo"
              width={120}
              height={48}
              className="h-auto w-auto bg-transparent"
              priority
            />
          </Link>

          {/* Right side */}
          <div className="flex items-center space-x-2 -mt-12">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setLang("bg")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md text-white transition-all duration-200 ${
                  lang === "bg"
                    ? "bg-[#2d6b35] shadow-md"
                    : "bg-[#388644]/40"
                }`}
              >
                BG
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 text-xs font-semibold rounded-md text-white transition-all duration-200 ${
                  lang === "en"
                    ? "bg-[#2d6b35] shadow-md"
                    : "bg-[#388644]/40"
                }`}
              >
                EN
              </button>
            </div>

            {/* Burger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-md transition-colors bg-transparent"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={`block h-0.5 w-6 transition-all ${
                    isMenuOpen
                      ? "bg-[#388644] rotate-45 translate-y-2"
                      : "bg-[#388644]"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 transition-all ${
                    isMenuOpen ? "bg-[#388644] opacity-0" : "bg-[#388644]"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 transition-all ${
                    isMenuOpen
                      ? "bg-[#388644] -rotate-45 -translate-y-2"
                      : "bg-[#388644]"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <>
            <div
              className="fixed inset-0 bg-black/60 z-[100] transition-opacity duration-300"
              onClick={handleCloseMenu}
            ></div>

            <nav
              className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl z-[101] overflow-y-auto transform transition-transform duration-300 ease-out ${
                isClosing ? "translate-x-full" : "translate-x-0"
              }`}
            >
              <div className="flex justify-end p-4">
                <button
                  onClick={handleCloseMenu}
                  className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                >
                  ✕
                </button>
              </div>

              <div className="flex flex-col px-4 pb-8">
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
    </header>
  );
}

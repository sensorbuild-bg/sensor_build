"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { lang, setLang } = useLanguage();
  const pathname = usePathname();
  const t = translations[lang].nav;

  const navigation = [
    { name: t.home, href: "/" },
    { name: t.services, href: "/services" },
    { name: t.howWeWork, href: "/how-we-work" },
    { name: t.projects, href: "/projects" },
    { name: t.contacts, href: "/contacts" },
  ];

  return (
    <header className={`w-full bg-transparent relative z-50`}>
      {/* Desktop Version */}
      <div className="hidden md:block">
        {/* Green line extending full width of screen */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-1 bg-[#22c55e] pointer-events-none z-20"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Logo with line extending to the end */}
          <div className="relative py-4">
            <div className="flex items-center justify-between relative z-10">
              {/* Logo on the left */}
              <Link href="/" className="flex items-center">
                <div className="pr-4">
                  <Image
                    src={lang === "en" ? "/logodark.png" : "/logo2.webp"}
                    alt="Sensor Build Logo"
                    width={200}
                    height={80}
                    className="h-auto w-auto"
                    priority
                  />
                </div>
              </Link>

              {/* Navigation buttons centered horizontally */}
              <nav className="flex-1 flex justify-center -mt-10">
                <div className="flex space-x-12">
                  {navigation.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`text-lg font-bold transition-colors ${
                        pathname === item.href
                          ? "text-[#22c55e] border-b-2 border-[#22c55e] pb-0.5"
                          : lang === "en"
                          ? "text-white hover:text-[#22c55e]"
                          : "text-[#22c55e] hover:text-[#16a34a]"
                      }`}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </nav>

              {/* Language switch on the right */}
              <div className="flex items-center space-x-2 -mt-10">
                <button
                  onClick={() => setLang("bg")}
                  className={`px-2 py-1 text-xs font-medium rounded ${
                    lang === "bg"
                      ? "bg-[#22c55e] text-white"
                      : lang === "en"
                      ? "text-white hover:bg-gray-700"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  BG
                </button>
                <button
                  onClick={() => setLang("en")}
                  className={`px-2 py-1 text-xs font-medium rounded ${
                    lang === "en"
                      ? "bg-[#22c55e] text-white"
                      : "text-gray-700 hover:bg-gray-100"
                  }`}
                >
                  EN
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Version */}
      <div className="md:hidden relative">
        {/* Green line extending full width of screen */}
        <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 h-0.5 bg-[#22c55e] pointer-events-none z-20"></div>
        <div className="flex items-center justify-between px-4 py-4 relative z-10">
          <Link href="/" className="flex items-center">
            <Image
              src={lang === "en" ? "/logodark.png" : "/logo2.webp"}
              alt="Sensor Build Logo"
              width={120}
              height={48}
              className="h-auto w-auto"
              priority
            />
          </Link>

          <div className="flex items-center space-x-2 -mt-10">
            <div className="flex items-center space-x-1">
              <button
                onClick={() => setLang("bg")}
                className={`px-2 py-1 text-xs font-medium rounded ${
                  lang === "bg" ? "bg-[#22c55e] text-white" : "text-gray-700"
                }`}
              >
                BG
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-2 py-1 text-xs font-medium rounded ${
                  lang === "en" ? "bg-[#22c55e] text-white" : "text-gray-700"
                }`}
              >
                EN
              </button>
            </div>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md transition-colors ${
                isMenuOpen ? "bg-[#22c55e]" : "bg-gray-100"
              }`}
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center space-y-1.5">
                <span
                  className={`block h-0.5 w-6 transition-all ${
                    isMenuOpen
                      ? "bg-white rotate-45 translate-y-2"
                      : "bg-gray-700"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 transition-all ${
                    isMenuOpen ? "bg-white opacity-0" : "bg-gray-700"
                  }`}
                ></span>
                <span
                  className={`block h-0.5 w-6 transition-all ${
                    isMenuOpen
                      ? "bg-white -rotate-45 -translate-y-2"
                      : "bg-gray-700"
                  }`}
                ></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <nav className="bg-[#22c55e] px-4 py-2 relative z-50">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`text-white text-sm font-medium py-1.5 px-2 rounded ${
                    pathname === item.href ? "bg-white/20" : "hover:bg-white/10"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}

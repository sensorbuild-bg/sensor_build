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

  const headerBg = lang === "bg" ? "bg-[#13182c]" : "bg-white";
  const linkBase = lang === "bg" ? "text-white" : "text-black";
  const linkHover = "hover:text-[#4da855]";
  const activeUnderline =
    lang === "bg" ? "border-white" : "border-black";

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsMenuOpen(false);
      setIsClosing(false);
    }, 250);
  };

  // Close menu on route change
  useEffect(() => {
    if (isMenuOpen) closeMenu();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (!isMenuOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isMenuOpen]);

  return (
    <header className={`sticky top-0 z-50 w-full ${headerBg}`}>
      {/* Content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-[76px] items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center">
            <Image
              src={lang === "bg" ? "/logodark.png" : "/logo.webp"}
              alt="Sensor Build Logo"
              width={200}
              height={80}
              className="h-auto w-auto bg-transparent"
              priority
            />
          </Link>

          {/* Desktop nav (>= lg) */}
          <nav className="hidden lg:flex items-center gap-10">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={[
                    "whitespace-nowrap text-[17px] font-bold transition-colors",
                    linkBase,
                    linkHover,
                    isActive ? `border-b-2 pb-1 ${activeUnderline}` : "",
                  ].join(" ")}
                >
                  {item.name}
                </Link>
              );
            })}
          </nav>

          {/* Right side */}
          <div className="flex items-center gap-2">
            {/* Language switch */}
            <div className="hidden sm:flex items-center gap-1">
              <button
                type="button"
                onClick={() => setLang("bg")}
                className={[
                  "px-3 py-1.5 text-xs font-semibold rounded-md text-white transition-all",
                  lang === "bg"
                    ? "bg-[#2d6b35] shadow-md"
                    : "bg-[#388644]/40 hover:bg-[#388644]/60",
                ].join(" ")}
              >
                BG
              </button>
              <button
                type="button"
                onClick={() => setLang("en")}
                className={[
                  "px-3 py-1.5 text-xs font-semibold rounded-md text-white transition-all",
                  lang === "en"
                    ? "bg-[#2d6b35] shadow-md"
                    : "bg-[#388644]/40 hover:bg-[#388644]/60",
                ].join(" ")}
              >
                EN
              </button>
            </div>

            {/* Burger button (< lg) */}
            <button
              type="button"
              onClick={() => setIsMenuOpen(true)}
              className="lg:hidden p-2 rounded-md transition-colors"
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
      </div>

      {/* Green line (stable, not percentage-based) */}
      <div className="h-[4px] w-full bg-gradient-to-r from-[#62b946] to-[#0c5447]" />

      {/* Mobile Menu */}
      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 z-[100] transition-opacity"
            onClick={closeMenu}
            aria-hidden="true"
          />

          {/* Side panel */}
          <aside
            className={[
              "fixed top-0 right-0 z-[101] h-full w-[320px] max-w-[90vw] bg-white shadow-2xl",
              "transition-transform duration-250 ease-out",
              isClosing ? "translate-x-full" : "translate-x-0",
            ].join(" ")}
            role="dialog"
            aria-modal="true"
          >
            {/* Panel header */}
            <div className="flex items-center justify-between px-4 py-4 border-b border-gray-200">
              <div className="flex items-center gap-2">
                <Image
                  src={lang === "bg" ? "/logodark.png" : "/logo.webp"}
                  alt="Sensor Build Logo"
                  width={140}
                  height={56}
                  className="h-auto w-auto"
                />
              </div>

              <button
                type="button"
                onClick={closeMenu}
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                aria-label="Close menu"
              >
                <svg
                  className="w-6 h-6 text-gray-800"
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

            {/* Language switch inside panel (for small screens) */}
            <div className="px-4 pt-4 sm:hidden">
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setLang("bg")}
                  className={[
                    "flex-1 px-3 py-2 text-sm font-semibold rounded-md text-white transition-all",
                    lang === "bg"
                      ? "bg-[#2d6b35] shadow-md"
                      : "bg-[#388644]/40 hover:bg-[#388644]/60",
                  ].join(" ")}
                >
                  BG
                </button>
                <button
                  type="button"
                  onClick={() => setLang("en")}
                  className={[
                    "flex-1 px-3 py-2 text-sm font-semibold rounded-md text-white transition-all",
                    lang === "en"
                      ? "bg-[#2d6b35] shadow-md"
                      : "bg-[#388644]/40 hover:bg-[#388644]/60",
                  ].join(" ")}
                >
                  EN
                </button>
              </div>
            </div>

            {/* Links */}
            <nav className="px-2 py-4">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className={[
                      "mx-2 flex items-center rounded-lg px-4 py-3 text-[17px] font-semibold transition-colors",
                      isActive
                        ? "text-[#4da855] bg-[#4da855]/10"
                        : "text-gray-800 hover:bg-gray-100",
                    ].join(" ")}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </aside>
        </>
      )}
    </header>
  );
}

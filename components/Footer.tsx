"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="relative z-[100] text-white py-8 bg-[#0f1426] border-t border-[#2d6b35]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CONTACT */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-6">

          {/* PHONE */}
          <a
            href="tel:+359878344020"
            className="flex items-center space-x-3 text-[#4da855] hover:text-[#7dff94] transition-colors"
          >
            <span className="text-xl">📞</span>
            <span className="text-sm font-medium">
              +359 878 344 020
            </span>
          </a>

          {/* EMAIL */}
          <a
            href="mailto:sensorbuild@gmail.com"
            className="flex items-center space-x-3 text-[#4da855] hover:text-[#7dff94] transition-colors"
          >
            <span className="text-xl">✉️</span>
            <span className="text-sm font-medium">
              sensorbuild@gmail.com
            </span>
          </a>

        </div>

        {/* SOCIAL */}
        <div className="flex flex-wrap items-center justify-center gap-10 mb-6">

          {/* FACEBOOK */}
          <a
            href="https://www.facebook.com/profile.php?id=61582272743716"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#4da855] hover:text-[#7dff94] transition-colors"
          >
            <span className="text-2xl">📘</span>
            <span className="text-sm font-medium">
              {lang === "bg"
                ? "Последвай ни във Facebook"
                : "Follow us on Facebook"}
            </span>
          </a>

          {/* INSTAGRAM */}
          <a
            href="https://www.instagram.com/sensorbuild/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#4da855] hover:text-[#7dff94] transition-colors"
          >
            <span className="text-2xl">📷</span>
            <span className="text-sm font-medium">
              {lang === "bg"
                ? "Последвай ни в Instagram"
                : "Follow us on Instagram"}
            </span>
          </a>

          {/* LINKEDIN */}
          <a
            href="https://www.linkedin.com/company/sensor-build/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 text-[#4da855] hover:text-[#7dff94] transition-colors"
          >
            <span className="text-2xl">💼</span>
            <span className="text-sm font-medium">
              {lang === "bg"
                ? "Последвай ни в LinkedIn"
                : "Follow us on LinkedIn"}
            </span>
          </a>

        </div>

        {/* COPYRIGHT */}
        <div className="text-center">
          <p className="text-sm text-gray-400">
            {t.copyright}
          </p>
        </div>

      </div>
    </footer>
  );
}

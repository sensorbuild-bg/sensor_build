"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="relative z-[100] text-white py-10 bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* CONTACT */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-6 mb-6">

          <a
            href="tel:+359878344020"
            className="flex items-center space-x-2 hover:text-[#388644] transition-colors"
          >
            <span className="text-lg">📞</span>
            <span className="text-sm font-medium">
              +359 XXX XXX XXX
            </span>
          </a>

          <a
            href="mailto:office@sensorbuild.bg"
            className="flex items-center space-x-2 hover:text-[#388644] transition-colors"
          >
            <span className="text-lg">✉️</span>
            <span className="text-sm font-medium">
              office@sensorbuild.bg
            </span>
          </a>

        </div>

        {/* SOCIAL */}
        <div className="flex flex-wrap items-center justify-center gap-8 mb-6">

          {/* Facebook */}
          <a
            href="https://www.facebook.com/profile.php?id=61582272743716"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-[#388644] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 
              5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43
              c0-3.007 1.792-4.669 4.533-4.669
              1.312 0 2.686.235 2.686.235v2.953H15.83
              c-1.491 0-1.956.925-1.956
              1.874v2.25h3.328l-.532
              3.47h-2.796v8.385C19.612
              23.027 24 18.062 24 12.073z" />
            </svg>

            <span className="text-sm font-medium">
              {lang === "bg"
                ? "Последвай ни във Facebook"
                : "Follow us on Facebook"}
            </span>
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/sensorbuild/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-[#388644] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2.163c3.204 0 3.584.012 
              4.85.07 3.252.148 4.771 
              1.691 4.919 4.919.058 
              1.265.069 1.645.069 
              4.849 0 3.205-.012 
              3.584-.069 4.849-.149 
              3.225-1.664 4.771-4.919 
              4.919-1.266.058-1.644.07-4.85.07-3.204 
              0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92
              -.058-1.265-.07-1.644-.07-4.849
              0-3.204.013-3.583.07-4.849
              .149-3.227 1.664-4.771
              4.919-4.919 1.266-.057 
              1.645-.069 4.849-.069z"/>
            </svg>

            <span className="text-sm font-medium">
              {lang === "bg"
                ? "Последвай ни в Instagram"
                : "Follow us on Instagram"}
            </span>
          </a>

          {/* LinkedIn */}
          <a
            href="https://www.linkedin.com/company/sensor-build/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-2 hover:text-[#388644] transition-colors"
          >
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 
              0-5 2.239-5 5v14c0 
              2.761 2.239 5 5 
              5h14c2.761 0 5-2.239 
              5-5v-14c0-2.761-2.239-5-5-5zm-11 
              19h-3v-11h3v11zm-1.5-12.268
              c-.966 0-1.75-.784-1.75-1.75
              s.784-1.75 1.75-1.75
              1.75.784 1.75 1.75
              -.784 1.75-1.75 
              1.75zm13.5 
              12.268h-3v-5.604c0-1.337
              -.026-3.059-1.865-3.059
              -1.867 0-2.154 1.459-2.154 
              2.967v5.696h-3v-11h2.879v1.507h.041
              c.401-.761 1.379-1.563 
              2.838-1.563 3.034 0 
              3.596 1.996 3.596 
              4.59v6.466z"/>
            </svg>

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

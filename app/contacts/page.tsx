"use client";

import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import AnimatedDiv from "@/components/AnimatedDiv";

export default function Contacts() {
  const { lang } = useLanguage();
  const t = translations[lang].contacts;

  return (
    <div
      className={`py-16 md:py-24 ${
        lang === "bg" ? "bg-[#13182c]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1
            className={`text-4xl md:text-5xl font-bold mb-4 ${
              lang === "bg" ? "text-white" : "text-gray-900"
            }`}
          >
            {t.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Phone Section */}
          <AnimatedDiv
            className={`rounded-lg p-8 text-center ${
              lang === "bg" ? "bg-[#1a2342]" : "bg-gray-50"
            }`}
          >
            <div className="w-16 h-16 bg-[#388644] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                />
              </svg>
            </div>
            <h2
              className={`text-2xl font-semibold mb-4 ${
                lang === "bg" ? "text-white" : "text-gray-900"
              }`}
            >
              {t.phone}
            </h2>
            <a
              href="tel:+359878344020"
              className="inline-block px-8 py-4 bg-[#388644] text-white text-lg font-semibold rounded-lg hover:bg-[#2d6b35] transition-colors mb-4"
            >
              {t.callNow}
            </a>
            <p
              className={`mb-2 ${
                lang === "bg" ? "text-white" : "text-gray-600"
              }`}
            >
              +359 878 344 020
            </p>
            <a
              href="viber://chat?number=+359878344020"
              className="text-[#388644] hover:underline"
            >
              {t.viber}
            </a>
          </AnimatedDiv>

          {/* Messenger Section */}
          <AnimatedDiv
            className={`rounded-lg p-8 text-center ${
              lang === "bg" ? "bg-[#1a2342]" : "bg-gray-50"
            }`}
          >
            <div className="w-16 h-16 bg-[#388644] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 0C5.373 0 0 4.925 0 11c0 1.894.52 3.7 1.441 5.3L0 24l7.925-1.378c1.5.39 3.1.6 4.75.6 6.627 0 12-4.925 12-11S18.627 0 12 0zm0 19.5c-1.5 0-3-.3-4.35-.825l-.3-.15-3.15.675.675-3.075-.15-.3C4.2 15.4 3.75 13.2 3.75 11c0-4.725 3.825-8.55 8.55-8.55S21.45 6.275 21.45 11s-3.825 8.5-8.45 8.5z" />
              </svg>
            </div>
            <h2
              className={`text-2xl font-semibold mb-4 ${
                lang === "bg" ? "text-white" : "text-gray-900"
              }`}
            >
              {t.messenger}
            </h2>
            <a
              href="https://www.facebook.com/profile.php?id=61582272743716"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-[#0084ff] text-white text-lg font-semibold rounded-lg hover:bg-[#0066cc] transition-colors"
            >
              {t.sendMessage}
            </a>
          </AnimatedDiv>

          {/* Email Section */}
          <AnimatedDiv
            className={`rounded-lg p-8 text-center ${
              lang === "bg" ? "bg-[#1a2342]" : "bg-gray-50"
            }`}
          >
            <div className="w-16 h-16 bg-[#388644] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h2
              className={`text-2xl font-semibold mb-4 ${
                lang === "bg" ? "text-white" : "text-gray-900"
              }`}
            >
              {t.email}
            </h2>
            <a
              href="mailto:sensorbuild@gmail.com"
              className="text-[#388644] hover:underline text-lg"
            >
              sensorbuild@gmail.com
            </a>
          </AnimatedDiv>

          {/* Working Hours Section */}
          <AnimatedDiv
            className={`rounded-lg p-8 text-center ${
              lang === "bg" ? "bg-[#1a2342]" : "bg-gray-50"
            }`}
          >
            <div className="w-16 h-16 bg-[#388644] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </div>
            <h2
              className={`text-2xl font-semibold mb-4 ${
                lang === "bg" ? "text-white" : "text-gray-900"
              }`}
            >
              {t.workingHours}
            </h2>
            <div
              className={`space-y-2 ${
                lang === "bg" ? "text-white" : "text-gray-600"
              }`}
            >
              <p>{t.workingHoursText.weekdays}</p>
              <p>{t.workingHoursText.saturday}</p>
              <p>{t.workingHoursText.sunday}</p>
            </div>
          </AnimatedDiv>

          {/* Location Section */}
          <AnimatedDiv
            className={`rounded-lg p-8 text-center md:col-span-2 ${
              lang === "bg" ? "bg-[#1a2342]" : "bg-gray-50"
            }`}
          >
            <div className="w-16 h-16 bg-[#388644] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg
                className="w-8 h-8 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h2
              className={`text-2xl font-semibold mb-4 ${
                lang === "bg" ? "text-white" : "text-gray-900"
              }`}
            >
              {t.location}
            </h2>
            <p className={lang === "bg" ? "text-white" : "text-gray-600"}>
              {t.locationText}
            </p>
          </AnimatedDiv>
        </div>
      </div>
    </div>
  );
}

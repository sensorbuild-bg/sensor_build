"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import Footer from "@/components/Footer";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang].home;

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Image */}
      <div className="fixed inset-0 z-[1]">
        <Image
          src="/main.webp"
          alt="Background"
          fill
          className="object-cover"
          priority
          quality={90}
        />
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/30"></div>
      </div>

      {/* Main Content */}
      <div className="relative z-[2] pt-16 md:pt-0 flex-grow">
        {/* Hero Section with centered main text */}
        <section className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto -mt-[20rem]">
            <h1
              className={`text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white drop-shadow-lg`}
            >
              {t.title}
            </h1>
            {t.subtitle && (
              <h2
                className={`text-2xl sm:text-xl md:text-3xl mb-8 text-white/90 drop-shadow-md`}
              >
                {t.subtitle}
              </h2>
            )}
            {t.tagline && (
              <p className="text-xl sm:text-lg md:text-2xl text-[#4da855] font-semibold mb-12 drop-shadow-md">
                {t.tagline}
              </p>
            )}
          </div>
        </section>

        {/* Additional Content Sections */}
        {t.description1 && (
          <section
            className={`relative z-[2] pt-8 pb-16 md:pt-12 md:pb-24 -mt-96 md:-mt-96 ${
              lang === "bg" ? "bg-[#1a2342]/95" : "bg-white/95"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div
                className={`max-w-4xl mx-auto space-y-6 leading-relaxed text-center ${
                  lang === "bg" ? "text-white" : "text-gray-700"
                }`}
              >
                {t.description1 && (
                  <p className="text-lg md:text-xl">{t.description1}</p>
                )}
                {t.description2 && (
                  <p className="text-lg md:text-xl">{t.description2}</p>
                )}
                {t.description3 && (
                  <p className="text-lg md:text-xl">{t.description3}</p>
                )}
              </div>
            </div>
          </section>
        )}

        {/* Why Choose Us Section */}
        {t.whyChooseUs && (
          <section
            className={`relative z-[2] py-16 md:py-24 ${
              lang === "bg" ? "bg-[#13182c]/95" : "bg-gray-50/95"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                className={`text-3xl md:text-4xl font-bold text-center mb-12 ${
                  lang === "bg" ? "text-white" : "text-gray-900"
                }`}
              >
                {t.whyChooseUs}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {t.why1 && (
                  <div
                    className={`p-6 rounded-lg shadow-md border-l-4 border-[#388644] ${
                      lang === "bg" ? "bg-[#1a2342]" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`text-xl font-semibold mb-3 ${
                        lang === "bg" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {t.why1}
                    </h3>
                    {t.why1Desc && (
                      <p
                        className={
                          lang === "bg" ? "text-white" : "text-gray-600"
                        }
                      >
                        {t.why1Desc}
                      </p>
                    )}
                  </div>
                )}
                {t.why2 && (
                  <div
                    className={`p-6 rounded-lg shadow-md border-l-4 border-[#388644] ${
                      lang === "bg" ? "bg-[#1a2342]" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`text-xl font-semibold mb-3 ${
                        lang === "bg" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {t.why2}
                    </h3>
                    {t.why2Desc && (
                      <p
                        className={
                          lang === "bg" ? "text-white" : "text-gray-600"
                        }
                      >
                        {t.why2Desc}
                      </p>
                    )}
                  </div>
                )}
                {t.why3 && (
                  <div
                    className={`p-6 rounded-lg shadow-md border-l-4 border-[#388644] ${
                      lang === "bg" ? "bg-[#1a2342]" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`text-xl font-semibold mb-3 ${
                        lang === "bg" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {t.why3}
                    </h3>
                    {t.why3Desc && (
                      <p
                        className={
                          lang === "bg" ? "text-white" : "text-gray-600"
                        }
                      >
                        {t.why3Desc}
                      </p>
                    )}
                  </div>
                )}
                {t.why4 && (
                  <div
                    className={`p-6 rounded-lg shadow-md border-l-4 border-[#388644] ${
                      lang === "bg" ? "bg-[#1a2342]" : "bg-white"
                    }`}
                  >
                    <h3
                      className={`text-xl font-semibold mb-3 ${
                        lang === "bg" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {t.why4}
                    </h3>
                    {t.why4Desc && (
                      <p
                        className={
                          lang === "bg" ? "text-white" : "text-gray-600"
                        }
                      >
                        {t.why4Desc}
                      </p>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA Buttons Section */}
        <section
          className={`relative z-[2] w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${
            lang === "bg" ? "bg-[#1a2342]/95" : "bg-white/95"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
              {t.callNow && (
                <a
                  href="tel:+359878344020"
                  className="w-full sm:w-auto px-8 py-4 bg-[#388644] text-white text-lg font-semibold rounded-lg hover:bg-[#2d6b35] transition-colors text-center"
                >
                  {t.callNow}
                </a>
              )}
              {t.sendMessage && (
                <a
                  href="/contacts"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-[#388644] text-lg font-semibold rounded-lg border-2 border-[#388644] hover:bg-[#388644] hover:text-white transition-colors text-center"
                >
                  {t.sendMessage}
                </a>
              )}
            </div>
            {t.footerText && (
              <p
                className={`text-center max-w-2xl mx-auto ${
                  lang === "bg" ? "text-white" : "text-gray-600"
                }`}
              >
                {t.footerText}
              </p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

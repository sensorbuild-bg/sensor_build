"use client";

import Link from "next/link";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";
import AnimatedDiv from "@/components/AnimatedDiv";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang].home;

  return (
    <div
      className={`relative min-h-screen flex flex-col ${
        lang === "bg" ? "bg-[#13182c]" : "bg-white"
      }`}
    >
      {/* Main Content */}
      <div className="relative z-[2] pt-16 md:pt-0 flex-grow">
        {/* Hero Section with centered main text */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
          {/* Background Image only behind the hero text */}
          <div className="absolute inset-0 z-[1]">
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

          <div className="relative z-[2] text-center max-w-4xl mx-auto -mt-32 md:-mt-20">
            <h1
              className={`text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-noah-bold mb-6 text-white drop-shadow-lg uppercase`}
            >
              {t.title}
            </h1>
            {t.subtitle && (
              <h2
                className={`text-2xl sm:text-xl md:text-3xl mb-8 text-white/90 drop-shadow-md`}
              >
                <TypewriterText text={t.subtitle} speed={70} />
              </h2>
            )}
            {t.tagline && (
              <p className="text-xl sm:text-lg md:text-2xl text-[#4da855] font-semibold mb-12 drop-shadow-md">
                <TypewriterText
                  text={t.tagline}
                  speed={70}
                  delay={t.subtitle ? t.subtitle.length * 70 + 500 : 0}
                />
              </p>
            )}
          </div>
        </section>

        {/* Additional Content Sections */}
        {t.description1 && (
          <section
            className={`relative z-[3] -mt-[18vh] pt-20 pb-16 md:-mt-[18vh] md:pt-28 md:pb-24 ${
              lang === "bg" ? "bg-[#1a2342]" : "bg-white"
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
            className={`relative py-16 md:py-24 ${
              lang === "bg" ? "bg-[#13182c]" : "bg-gray-50"
            }`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2
                className={`text-3xl md:text-4xl font-noah-bold text-center mb-12 ${
                  lang === "bg" ? "text-white" : "text-gray-900"
                }`}
              >
                {t.whyChooseUs}
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {t.why1 && (
                  <AnimatedDiv
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
                  </AnimatedDiv>
                )}
                {t.why2 && (
                  <AnimatedDiv
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
                  </AnimatedDiv>
                )}
                {t.why3 && (
                  <AnimatedDiv
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
                  </AnimatedDiv>
                )}
                {t.why4 && (
                  <AnimatedDiv
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
                  </AnimatedDiv>
                )}
              </div>
            </div>
          </section>
        )}

        {/* CTA Buttons Section */}
        <section
          className={`relative w-full px-4 sm:px-6 lg:px-8 py-16 md:py-24 ${
            lang === "bg" ? "bg-[#1a2342]" : "bg-white"
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
              <AnimatedDiv className="max-w-2xl mx-auto">
                <p
                  className={`text-center ${
                    lang === "bg" ? "text-white" : "text-gray-600"
                  }`}
                >
                  {t.footerText}
                </p>
              </AnimatedDiv>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import Footer from "@/components/Footer";
import TypewriterText from "@/components/TypewriterText";
import AnimatedDiv from "@/components/AnimatedDiv";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang].home;
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const projectImages = [
    "/project4/20251008_150415_main-ezgif.com-jpg-to-webp-converter.webp",
    "/project6/20250925_132227_main.webp",
    "/project5/20251109_145613_main-ezgif.com-jpg-to-webp-converter.webp",
    "/20250713_183946.webp",
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    if (!api) {
      return;
    }

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4000); // Change slide every 4 seconds

    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    const checkMobile = () => {
      const isMobileDevice = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      ) || window.innerWidth < 768;
      setIsMobile(isMobileDevice);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

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
  <p className="inline-block text-lg sm:text-xl md:text-3xl text-[#2D6B35] font-semibold mb-12 drop-shadow-md px-4 py-2 rounded-xl bg-white/55 backdrop-blur-sm border border-[#2D6B35]/20 shadow-sm animate-fadeInUpSoft">
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

        {/* Projects Slideshow Section */}
        <section
          className={`relative py-16 md:py-24 ${
            lang === "bg" ? "bg-[#1a2342]" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-3xl md:text-4xl font-noah-bold text-center mb-12 ${
                lang === "bg" ? "text-white" : "text-gray-900"
              }`}
            >
              {lang === "bg" ? "Нашите проекти" : "Our Projects"}
            </h2>
            <Link href="/projects" className="block group">
              <Carousel
                setApi={setApi}
                opts={{
                  align: "center",
                  loop: true,
                  containScroll: "trimSnaps",
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-2 md:-ml-4 lg:-ml-8">
                  {projectImages.map((image, index) => {
                    const isActive = current === index;
                    return (
                      <CarouselItem
                        key={index}
                        className="pl-2 md:pl-4 lg:pl-8 basis-[85%] md:basis-1/2 lg:basis-[45%]"
                      >
                        <div
                          className={`relative aspect-[3/4] overflow-hidden rounded-lg shadow-lg group-hover:shadow-xl transition-all duration-500 ${
                            isActive
                              ? "lg:scale-110 lg:z-10 lg:shadow-2xl"
                              : "lg:scale-90 lg:opacity-70"
                          }`}
                        >
                          <Image
                            src={image}
                            alt={`Project ${index + 1}`}
                            fill
                            className="object-cover group-hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            <div className="absolute bottom-4 left-4 right-4">
                              <p className="text-white text-sm font-semibold">
                                {lang === "bg"
                                  ? "Вижте проектите"
                                  : "View Projects"}
                              </p>
                            </div>
                          </div>
                        </div>
                      </CarouselItem>
                    );
                  })}
                </CarouselContent>
              </Carousel>
            </Link>
          </div>
        </section>

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
                  href={isMobile ? "tel:+359878344020" : "/contacts"}
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

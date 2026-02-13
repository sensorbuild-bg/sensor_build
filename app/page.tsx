"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import TypewriterText from "@/components/TypewriterText";
import AnimatedDiv from "@/components/AnimatedDiv";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

type Slide = {
  id: number; // /projects/[id] (0..5)
  image: string;
  labelBg: string;
  labelEn: string;
};

export default function Home() {
  const { lang } = useLanguage();
  const t = translations[lang].home;

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  // IMPORTANT: id is 0..5 because /projects/[id] is index-based in your app
  const projectSlides: Slide[] = [
    {
      id: 0,
      image: "/project1/main.webp",
      labelBg: "Освежителен ремонт",
      labelEn: "Refresh renovation",
    },
    {
      id: 1,
      image:
        "/project2/20250806_190332_main-ezgif.com-jpg-to-webp-converter.webp",
      labelBg: "Цялостно изграждане на електрическа инсталация",
      labelEn: "Complete electrical installation",
    },
    {
      id: 2,
      image: "/project3/20250723_174911_main.webp",
      labelBg: "ВиК инсталации",
      labelEn: "Plumbing installations",
    },
    {
      id: 3,
      image: "/project4/20251008_150415_main-ezgif.com-jpg-to-webp-converter.webp",
      labelBg: "Изграждане на водно подово отопление",
      labelEn: "Hydronic underfloor heating",
    },
    {
      id: 4,
      image:
        "/project5/20251109_145613_main-ezgif.com-jpg-to-webp-converter.webp",
      labelBg: "Гипсокартон",
      labelEn: "Drywall",
    },
    {
      id: 5,
      image: "/project6/20250925_132227_main.webp",
      labelBg: "Осветление",
      labelEn: "Lighting",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());
    api.on("select", () => setCurrent(api.selectedScrollSnap()));
  }, [api]);

  useEffect(() => {
    if (!api) return;
    const interval = setInterval(() => api.scrollNext(), 4000);
    return () => clearInterval(interval);
  }, [api]);

  useEffect(() => {
    const checkMobile = () => {
      const mobileUA =
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        );
      setIsMobile(mobileUA || window.innerWidth < 768);
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
      <div className="relative z-[2] pt-16 md:pt-0 flex-grow">
        {/* HERO */}
        <section className="relative h-[70vh] md:h-[80vh] flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="absolute inset-0 z-[1]">
            <Image
              src="/main.webp"
              alt="Background"
              fill
              className="object-cover"
              priority
              quality={90}
            />
            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-[2] text-center max-w-4xl mx-auto -mt-32 md:-mt-20">
            <h1 className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-noah-bold mb-2 text-white drop-shadow-lg uppercase">
              {t.title}
            </h1>

            {t.subtitle && (
              <h2 className="text-2xl sm:text-xl md:text-3xl mb-8 text-white/90 drop-shadow-md">
                <TypewriterText text={t.subtitle} speed={70} />
              </h2>
            )}

            {t.tagline && (
              <div className="mb-12 flex justify-center">
                <span className="inline-flex items-center px-5 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/25 shadow-sm text-[#2D6B35] text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-sm">
                  <TypewriterText
                    text={t.tagline}
                    speed={70}
                    delay={t.subtitle ? t.subtitle.length * 70 + 500 : 0}
                  />
                </span>
              </div>
            )}
          </div>
        </section>

        {/* DESCRIPTION */}
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

        {/* WHY CHOOSE US */}
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

       {/* PROJECTS SLIDESHOW */}
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

    <Carousel
      setApi={setApi}
      opts={{ align: "center", loop: true, containScroll: "trimSnaps" }}
      className="w-full"
    >
      {/* ВАЖНО: даваме въздух и разрешаваме overflow */}
      <CarouselContent className="-ml-2 md:-ml-4 lg:-ml-8 py-10 overflow-visible">
        {projectSlides.map((slide, index) => {
          const isActive = current === index;

          return (
            <CarouselItem
              key={slide.id}
              className="pl-2 md:pl-4 lg:pl-8 basis-[85%] md:basis-1/2 lg:basis-[45%] overflow-visible"
            >
              <Link href={`/projects/${slide.id}`} className="block group">
                {/* Карта: вече НЕ я режем с overflow-hidden */}
                <div
                  className={`relative aspect-[3/4] rounded-lg shadow-lg transition-all duration-500 ${
                    isActive
                      ? "lg:scale-110 lg:z-10 lg:shadow-2xl"
                      : "lg:scale-90 lg:opacity-80"
                  }`}
                >
                  {/* Снимка (само тя е overflow-hidden за красиви ръбове) */}
                  <div className="absolute inset-0 overflow-hidden rounded-lg">
                    <Image
                      src={slide.image}
                      alt={lang === "bg" ? slide.labelBg : slide.labelEn}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                    />
                    <div className="absolute inset-0 bg-black/20" />
                  </div>

                  {/* Центриран панел + повдигнат бутон */}
                  <div className="absolute inset-x-0 bottom-0 px-4 pb-4 pt-10 bg-gradient-to-t from-black/75 via-black/35 to-transparent">
                    <div className="flex flex-col items-center text-center">
                      <p className="text-white text-base font-semibold leading-snug line-clamp-2 max-w-[90%]">
                        {lang === "bg" ? slide.labelBg : slide.labelEn}
                      </p>

                      <span className="mt-3 inline-flex items-center justify-center rounded-lg bg-[#388644] px-5 py-2 text-white text-sm font-semibold shadow-md">
                        {lang === "bg" ? "Отвори проект" : "Open project"}
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            </CarouselItem>
          );
        })}
      </CarouselContent>

      {/* Стрелки */}
      <CarouselPrevious
        className="left-3 md:left-4 top-1/2 -translate-y-1/2
                   h-11 w-11 md:h-12 md:w-12
                   p-0 flex items-center justify-center
                   rounded-lg bg-[#13182c]/70 backdrop-blur-sm
                   border border-white/20 shadow-lg
                   text-white hover:bg-[#13182c]/90 hover:scale-105
                   transition-all duration-200"
      />
      <CarouselNext
        className="right-3 md:right-4 top-1/2 -translate-y-1/2
                   h-11 w-11 md:h-12 md:w-12
                   p-0 flex items-center justify-center
                   rounded-lg bg-[#13182c]/70 backdrop-blur-sm
                   border border-white/20 shadow-lg
                   text-white hover:bg-[#13182c]/90 hover:scale-105
                   transition-all duration-200"
      />
    </Carousel>
  </div>
</section>
      </div>
    </div>
  );
}

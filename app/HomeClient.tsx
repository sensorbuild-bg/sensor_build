"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import TypewriterText from "@/components/TypewriterText";
import { business } from "@/lib/business";

type VisualCard = {
  titleBg: string;
  titleEn: string;
  descBg: string;
  descEn: string;
  href: string;
  image: string;
};

type ProjectCard = {
  id: number;
  titleBg: string;
  titleEn: string;
  image: string;
};

const featuredServices: VisualCard[] = [
  {
    titleBg: "Ремонт на апартамент",
    titleEn: "Apartment renovation",
    descBg: "Цялостни и частични ремонти – от инсталациите до финалния детайл.",
    descEn: "Complete and partial renovations, from installations to final finishing.",
    href: "/services/remont-na-apartament",
    image: "/project1/main.webp",
  },
  {
    titleBg: "Гипсокартон",
    titleEn: "Drywall",
    descBg: "Предстенни обшивки, тавани, ниши и решения за интериора.",
    descEn: "Wall linings, ceilings, niches and interior drywall solutions.",
    href: "/services/gipsokarton",
    image: "/services/gipsokarton/main-gipsokarton.webp",
  },
  {
    titleBg: "Шпакловки",
    titleEn: "Skimming",
    descBg: "Равни и подготвени за боядисване стени и тавани.",
    descEn: "Smooth walls and ceilings prepared for painting.",
    href: "/services/shpaklovki",
    image: "/services/shpaklovki/shpaklovki-1.webp",
  },
  {
    titleBg: "Електроинсталации",
    titleEn: "Electrical installations",
    descBg: "Нови точки, трасета, табла и цялостни електрически инсталации.",
    descEn: "New points, routes, panels and complete electrical installations.",
    href: "/services/el-instalacii",
    image: "/project2/20250806_190332_main-ezgif.com-jpg-to-webp-converter.webp",
  },
  {
    titleBg: "ВиК инсталации",
    titleEn: "Plumbing installations",
    descBg: "Водопровод и канализация за бани, кухни и цялостни жилища.",
    descEn: "Water supply and drainage for bathrooms, kitchens and homes.",
    href: "/services/vik-instalacii",
    image: "/project3/20250723_174911_main.webp",
  },
  {
    titleBg: "Подово отопление",
    titleEn: "Underfloor heating",
    descBg: "Водно подово отопление с прецизно изпълнение на всеки слой.",
    descEn: "Water underfloor heating with precise execution of every layer.",
    href: "/services/podovo-otoplenie",
    image: "/project4/20251008_150415_main-ezgif.com-jpg-to-webp-converter.webp",
  },
];

const projectCards: ProjectCard[] = [
  {
    id: 0,
    titleBg: "Освежителен ремонт",
    titleEn: "Refresh renovation",
    image: "/project1/main.webp",
  },
  {
    id: 1,
    titleBg: "Електроинсталация",
    titleEn: "Electrical installation",
    image: "/project2/20250806_190332_main-ezgif.com-jpg-to-webp-converter.webp",
  },
  {
    id: 3,
    titleBg: "Подово отопление",
    titleEn: "Underfloor heating",
    image: "/project4/20251008_150415_main-ezgif.com-jpg-to-webp-converter.webp",
  },
  {
    id: 4,
    titleBg: "Гипсокартон",
    titleEn: "Drywall",
    image: "/project5/20251109_145613_main-ezgif.com-jpg-to-webp-converter.webp",
  },
];

export default function HomeClient() {
  const { lang } = useLanguage();
  const isBg = lang === "bg";

  const copy = isBg
    ? {
        brand: "SENSOR BUILD",
        seoTitle: "Ремонти и строителство в София",
        subtitle: "Цялостни и частични ремонти на жилища, офиси и търговски пространства.",
        tagline: "Прецизност, на която можете да се доверите!",
        primaryCta: "Заяви оглед",
        secondaryCta: "Виж проекти",
        servicesTitle: "Какво можем да направим за вас",
        servicesText: "Най-търсените ни услуги – с реални снимки от изпълнение.",
        allServices: "Виж всички услуги",
        projectsTitle: "Реални обекти. Реална работа.",
        projectsText: "Разгледайте част от изпълнените от Sensor Build дейности.",
        allProjects: "Всички проекти",
        whyTitle: "Ремонт без излишна сложност",
        finalTitle: "Имате обект за ремонт?",
        finalText: "Пишете ни какво планирате. Ще уточним необходимите дейности и следващата стъпка.",
        finalPrimary: "Свържи се с нас",
        finalSecondary: "Ориентировъчни цени",
        call: "Обади се",
        message: "Пиши ни",
      }
    : {
        brand: "SENSOR BUILD",
        seoTitle: "Construction and Renovations in Sofia",
        subtitle: "Complete and partial renovations of homes, offices and commercial spaces.",
        tagline: "Precision you can trust!",
        primaryCta: "Request a visit",
        secondaryCta: "View projects",
        servicesTitle: "What we can do for you",
        servicesText: "Our most requested services, with real photos from completed work.",
        allServices: "View all services",
        projectsTitle: "Real sites. Real work.",
        projectsText: "Explore a selection of completed Sensor Build projects.",
        allProjects: "All projects",
        whyTitle: "A renovation without unnecessary complexity",
        finalTitle: "Planning a renovation?",
        finalText: "Tell us about your project. We will clarify the required work and the next step.",
        finalPrimary: "Contact us",
        finalSecondary: "Indicative prices",
        call: "Call",
        message: "Message us",
      };

  const trustItems = isBg
    ? ["Оглед на място", "Ясна оферта", "Инженерен подход", "Чисто предаване"]
    : ["On-site visit", "Clear offer", "Engineering approach", "Clean handover"];

  const advantages = isBg
    ? [
        { title: "Ясно още от началото", text: "Уточняваме обхвата и дейностите преди старта." },
        { title: "Технически подход", text: "Решенията се съобразяват с реалното състояние на обекта." },
        { title: "Фокус върху детайла", text: "Целта е завършен, подреден и устойчив резултат." },
      ]
    : [
        { title: "Clear from the start", text: "We define the scope and required work before starting." },
        { title: "Technical approach", text: "Solutions are based on the actual condition of the site." },
        { title: "Attention to detail", text: "The goal is a complete, organized and durable result." },
      ];

  return (
    <div className={`min-h-screen pb-20 md:pb-0 ${isBg ? "bg-[#13182c]" : "bg-white"}`}>
      <section className="relative min-h-[64svh] md:min-h-[76vh] flex items-center justify-center overflow-hidden px-4 py-14 sm:px-6 md:py-20 lg:px-8">
        <Image
          src="/main.webp"
          alt={isBg ? "Ремонти и строителство в София – Sensor Build" : "Construction and renovations in Sofia – Sensor Build"}
          fill
          sizes="100vw"
          className="object-cover"
          quality={90}
          preload
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/40 to-black/60" />

        <div className="relative z-10 mx-auto w-full max-w-5xl text-center">
          <div className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-noah-bold text-white drop-shadow-lg uppercase">
            {copy.brand}
          </div>
          <h1 className="mt-3 text-2xl sm:text-3xl md:text-4xl font-semibold text-white drop-shadow-md">
            {copy.seoTitle}
          </h1>
          <p className="mx-auto mt-4 max-w-3xl text-base sm:text-lg md:text-xl leading-relaxed text-white/90 drop-shadow-md">
            {copy.subtitle}
          </p>
          <div className="mt-5 flex justify-center">
            <span className="inline-flex min-h-11 items-center rounded-xl border border-white/30 bg-white/85 px-4 py-2 text-sm sm:text-base md:text-lg font-semibold text-[#2D6B35] shadow-lg backdrop-blur-sm">
              <TypewriterText text={copy.tagline} speed={38} delay={60} />
            </span>
          </div>
          <div className="mt-7 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3">
            <Link href="/contacts" className="rounded-xl bg-[#388644] px-7 py-3.5 text-center text-white text-base font-semibold shadow-lg transition hover:bg-[#2d6b35] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              {copy.primaryCta}
            </Link>
            <Link href="/projects" className="rounded-xl border border-white/40 bg-black/15 px-7 py-3.5 text-center text-white text-base font-semibold backdrop-blur-sm transition hover:bg-white/15 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white">
              {copy.secondaryCta}
            </Link>
          </div>
        </div>
      </section>

      <section className={`${isBg ? "bg-[#13182c]" : "bg-white"} py-5 md:py-7`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-1 md:grid md:grid-cols-4 md:overflow-visible md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {trustItems.map((item) => (
              <div key={item} className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold md:text-center ${isBg ? "border-white/10 bg-[#1a2342] text-white/90" : "border-gray-200 bg-gray-50 text-gray-800"}`}>
                <span className="mr-2 text-[#62b946]" aria-hidden="true">✓</span>{item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`py-12 md:py-20 ${isBg ? "bg-[#13182c]" : "bg-gray-50"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div className="max-w-3xl">
              <h2 className={`text-3xl md:text-5xl font-noah-bold ${isBg ? "text-white" : "text-gray-900"}`}>{copy.servicesTitle}</h2>
              <p className={`mt-3 text-base md:text-lg ${isBg ? "text-white/70" : "text-gray-600"}`}>{copy.servicesText}</p>
            </div>
            <Link href="/services" className="hidden md:inline-flex items-center gap-2 font-semibold text-[#62b946] hover:underline">
              {copy.allServices} <span aria-hidden="true">→</span>
            </Link>
          </div>

          <div className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 md:grid md:grid-cols-2 lg:grid-cols-3 md:overflow-visible md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {featuredServices.map((service) => (
              <Link key={service.href} href={service.href} className={`group relative w-[82vw] max-w-[360px] shrink-0 snap-center overflow-hidden rounded-2xl border shadow-lg md:w-auto md:max-w-none ${isBg ? "border-white/10 bg-[#1a2342]" : "border-gray-200 bg-white"}`}>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <Image src={service.image} alt={`${isBg ? service.titleBg : service.titleEn} – Sensor Build`} fill sizes="(max-width: 767px) 82vw, (max-width: 1023px) 50vw, 33vw" className="object-cover transition-transform duration-500 group-hover:scale-105" quality={75} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/5 to-transparent" />
                  <h3 className="absolute inset-x-0 bottom-0 p-4 text-xl font-semibold text-white">{isBg ? service.titleBg : service.titleEn}</h3>
                </div>
                <div className="flex items-start justify-between gap-3 p-4">
                  <p className={`text-sm leading-relaxed ${isBg ? "text-white/75" : "text-gray-600"}`}>{isBg ? service.descBg : service.descEn}</p>
                  <span className="mt-0.5 shrink-0 text-xl text-[#62b946] transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 md:hidden">
            <Link href="/services" className="inline-flex items-center gap-2 font-semibold text-[#62b946]">{copy.allServices} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className={`py-12 md:py-20 ${isBg ? "bg-[#1a2342]" : "bg-white"}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <h2 className={`text-3xl md:text-5xl font-noah-bold ${isBg ? "text-white" : "text-gray-900"}`}>{copy.projectsTitle}</h2>
              <p className={`mt-3 text-base md:text-lg ${isBg ? "text-white/70" : "text-gray-600"}`}>{copy.projectsText}</p>
            </div>
            <Link href="/projects" className="hidden md:inline-flex items-center gap-2 font-semibold text-[#62b946] hover:underline">{copy.allProjects} <span aria-hidden="true">→</span></Link>
          </div>

          <div className="mt-8 flex gap-4 overflow-x-auto snap-x snap-mandatory pb-3 md:grid md:grid-cols-2 lg:grid-cols-4 md:overflow-visible md:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            {projectCards.map((project) => (
              <Link key={project.id} href={`/projects/${project.id}`} className="group relative w-[72vw] max-w-[300px] shrink-0 snap-center overflow-hidden rounded-2xl shadow-lg md:w-auto md:max-w-none">
                <div className="relative aspect-[4/3]">
                  <Image src={project.image} alt={`${isBg ? project.titleBg : project.titleEn} – проект на Sensor Build`} fill sizes="(max-width: 767px) 72vw, (max-width: 1023px) 50vw, 25vw" className="object-cover transition-transform duration-500 group-hover:scale-105" quality={75} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4">
                    <h3 className="text-base md:text-lg font-semibold text-white">{isBg ? project.titleBg : project.titleEn}</h3>
                    <span className="shrink-0 text-xl text-[#7bd567] transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="mt-5 md:hidden">
            <Link href="/projects" className="inline-flex items-center gap-2 font-semibold text-[#62b946]">{copy.allProjects} <span aria-hidden="true">→</span></Link>
          </div>
        </div>
      </section>

      <section className={`py-12 md:py-16 ${isBg ? "bg-[#13182c]" : "bg-gray-50"}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-center text-3xl md:text-4xl font-noah-bold ${isBg ? "text-white" : "text-gray-900"}`}>{copy.whyTitle}</h2>
          <div className="mt-8 grid gap-3 md:grid-cols-3">
            {advantages.map((item) => (
              <div key={item.title} className={`rounded-2xl border p-5 ${isBg ? "border-white/10 bg-[#1a2342]" : "border-gray-200 bg-white"}`}>
                <h3 className={`text-lg font-semibold ${isBg ? "text-white" : "text-gray-900"}`}>{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${isBg ? "text-white/70" : "text-gray-600"}`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={`px-4 pb-12 pt-4 md:px-6 md:pb-20 ${isBg ? "bg-[#13182c]" : "bg-gray-50"}`}>
        <div className="relative mx-auto max-w-6xl overflow-hidden rounded-3xl bg-[#388644] px-5 py-9 text-center shadow-xl sm:px-8 md:py-12">
          <div className="absolute inset-0 bg-gradient-to-r from-black/15 via-transparent to-black/10" />
          <div className="relative z-10 mx-auto max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-noah-bold text-white">{copy.finalTitle}</h2>
            <p className="mx-auto mt-3 max-w-2xl text-base md:text-lg leading-relaxed text-white/90">{copy.finalText}</p>
            <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
              <Link href="/contacts" className="rounded-xl bg-white px-7 py-3.5 font-semibold text-[#2d6b35] transition hover:bg-white/90">{copy.finalPrimary}</Link>
              <Link href="/prices" className="rounded-xl border border-white/35 bg-white/10 px-7 py-3.5 font-semibold text-white transition hover:bg-white/20">{copy.finalSecondary}</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="fixed inset-x-0 bottom-0 z-50 border-t border-white/10 bg-[#101629]/95 p-2.5 shadow-[0_-8px_30px_rgba(0,0,0,0.22)] backdrop-blur md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
          <a href={`tel:${business.phoneE164}`} className="flex min-h-12 items-center justify-center rounded-xl bg-[#388644] px-4 font-semibold text-white" aria-label={`${copy.call}: ${business.phoneDisplay}`}>
            <span aria-hidden="true" className="mr-2">☎</span>{copy.call}
          </a>
          <Link href="/contacts" className="flex min-h-12 items-center justify-center rounded-xl border border-white/20 bg-white/10 px-4 font-semibold text-white">
            <span aria-hidden="true" className="mr-2">✉</span>{copy.message}
          </Link>
        </div>
      </div>
    </div>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
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
  slug: string;
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
    slug: "osvezhitelen-remont",
    titleBg: "Освежителен ремонт",
    titleEn: "Refresh renovation",
    image: "/project1/main.webp",
  },
  {
    slug: "elektroinstalacia",
    titleBg: "Електроинсталация",
    titleEn: "Electrical installation",
    image: "/project2/20250806_190332_main-ezgif.com-jpg-to-webp-converter.webp",
  },
  {
    slug: "podovo-otoplenie",
    titleBg: "Подово отопление",
    titleEn: "Underfloor heating",
    image: "/project4/20251008_150415_main-ezgif.com-jpg-to-webp-converter.webp",
  },
  {
    slug: "gipsokarton",
    titleBg: "Гипсокартон",
    titleEn: "Drywall",
    image: "/project5/20251109_145613_main-ezgif.com-jpg-to-webp-converter.webp",
  },
];

function ArrowIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M5 12h13M13 7l5 5-5 5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function VisitIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M4 11.5 12 5l8 6.5V20a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-8.5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
      <path d="M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
    </svg>
  );
}

function ProjectsIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M2.5 12s3.3-6 9.5-6 9.5 6 9.5 6-3.3 6-9.5 6-9.5-6-9.5-6Z" stroke="currentColor" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="2.5" stroke="currentColor" strokeWidth="1.7" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <path d="M7.4 3.5 10 7.3 8.5 9.5c1.2 2.5 3.1 4.4 5.7 5.7l2.2-1.5 3.8 2.6c.4.3.6.8.4 1.3-.5 1.4-1.8 2.9-3.5 3-6 .2-13.8-7.6-13.6-13.6.1-1.7 1.6-3 3-3.5.4-.2.8 0 .9 0Z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true" className="h-5 w-5">
      <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.7" />
      <path d="m4.5 7 7.5 6 7.5-6" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function HomeClient() {
  const { lang } = useLanguage();
  const isBg = lang === "bg";

  const copy = isBg
    ? {
        brand: "SENSOR BUILD",
        seoTitle: "Ремонти и строителство в София",
        subtitle: "Цялостни и частични ремонти на жилища, офиси и търговски пространства.",
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
      <section className="relative flex min-h-[calc(100svh-100px)] items-center justify-center overflow-hidden px-5 py-9 sm:px-6 md:min-h-[calc(100vh-150px)] md:py-14 lg:px-8">
        <Image
          src="/main.webp"
          alt={isBg ? "Ремонти и строителство в София – Sensor Build" : "Construction and renovations in Sofia – Sensor Build"}
          fill
          sizes="100vw"
          className="object-cover object-center"
          quality={90}
          preload
        />

        <div className="absolute inset-0 bg-black/38" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#090d16]/45 via-transparent to-[#090d16]/70" />
        <div className="absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-black/30 to-transparent" />

        <div className="relative z-10 mx-auto flex w-full max-w-3xl flex-col items-center text-center text-white">
          <div className="select-none">
            <div className="text-[clamp(2.9rem,12vw,5.8rem)] font-light uppercase leading-[0.9] tracking-[0.16em] text-white/95 drop-shadow-[0_2px_18px_rgba(0,0,0,0.28)]">
              SENSOR
            </div>
            <div className="mt-3 text-[clamp(1rem,4vw,1.7rem)] font-light uppercase tracking-[0.48em] text-white/90">
              BUILD
            </div>
            <div className="mx-auto mt-6 h-[2px] w-20 bg-[#62b946] shadow-[0_0_16px_rgba(98,185,70,0.35)] sm:w-24" />
          </div>

          <h1 className="mt-8 max-w-[12ch] text-[clamp(2.35rem,9vw,4.6rem)] font-light leading-[1.05] tracking-[-0.02em] text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.3)] sm:max-w-[16ch] md:mt-10">
            {isBg ? (
              <>
                Ремонти и <span className="sm:whitespace-nowrap">строителство</span> в София
              </>
            ) : (
              <>Construction and Renovations in Sofia</>
            )}
          </h1>

          <p className="mt-5 max-w-xl text-[0.98rem] font-light leading-relaxed text-white/82 sm:text-lg md:mt-6 md:text-xl">
            {copy.subtitle}
          </p>

          <div className="mt-8 grid w-full max-w-[440px] gap-3 md:mt-10">
            <Link
              href="/contacts"
              className="group flex min-h-14 items-center rounded-full border border-[#62b946]/75 bg-black/10 px-5 text-white backdrop-blur-[2px] transition duration-300 hover:border-[#7bd567] hover:bg-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#62b946]"
            >
              <span className="flex w-10 justify-start text-[#62b946]">
                <VisitIcon />
              </span>
              <span className="flex-1 text-center text-base font-medium tracking-wide sm:text-lg">{copy.primaryCta}</span>
              <span className="flex w-10 justify-end text-[#62b946] transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
            </Link>

            <Link
              href="/projects"
              className="group flex min-h-14 items-center rounded-full border border-white/38 bg-black/10 px-5 text-white backdrop-blur-[2px] transition duration-300 hover:border-white/65 hover:bg-black/25 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/80"
            >
              <span className="flex w-10 justify-start text-[#62b946]">
                <ProjectsIcon />
              </span>
              <span className="flex-1 text-center text-base font-medium tracking-wide sm:text-lg">{copy.secondaryCta}</span>
              <span className="flex w-10 justify-end text-white/65 transition-transform duration-300 group-hover:translate-x-1">
                <ArrowIcon />
              </span>
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
              <Link key={project.slug} href={`/projects/${project.slug}`} className="group relative w-[72vw] max-w-[300px] shrink-0 snap-center overflow-hidden rounded-2xl shadow-lg md:w-auto md:max-w-none">
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

      <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
        <div className="mx-auto grid max-w-md grid-cols-2 overflow-hidden rounded-full border border-white/20 bg-[#0e1425]/88 shadow-[0_12px_34px_rgba(0,0,0,0.28)] backdrop-blur-md">
          <a
            href={`tel:${business.phoneE164}`}
            className="flex min-h-14 items-center justify-center gap-3 border-r border-white/15 px-4 font-medium text-white transition hover:bg-white/8"
            aria-label={`${copy.call}: ${business.phoneDisplay}`}
          >
            <span className="text-[#62b946]"><PhoneIcon /></span>
            <span>{copy.call}</span>
          </a>
          <Link
            href="/contacts"
            className="flex min-h-14 items-center justify-center gap-3 px-4 font-medium text-white transition hover:bg-white/8"
          >
            <span className="text-[#62b946]"><MailIcon /></span>
            <span>{copy.message}</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

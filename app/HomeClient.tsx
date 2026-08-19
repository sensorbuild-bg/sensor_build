"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
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
  id: number;
  image: string;
  labelBg: string;
  labelEn: string;
};

export default function HomeClient() {
  const { lang } = useLanguage();
  const isBg = lang === "bg";

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const copy = isBg
    ? {
        brand: "SENSOR BUILD",

        seoTitle: "Ремонти и строителство в София",

        subtitle:
          "Цялостни и частични ремонти с ясен план, техническо изпълнение и внимание към детайла.",

        tagline: "Прецизност, на която можете да се доверите!",

        primaryCta: "Заяви оглед",
        secondaryCta: "Виж цени",

        trust: [
          "Оглед на място",
          "Ясна оферта",
          "Работа по етапи",
          "Чисто предаване",
        ],

        servicesTitle: "Ремонтни услуги в София",

        servicesSubtitle:
          "Подхождаме към всеки ремонт с ясен план, техническо мислене и внимание към детайла.",

        localServicesText:
          "Извършваме цялостни и частични ремонти в София, като съчетаваме различните строително-ремонтни дейности в последователен и добре организиран процес.",

        services: [
          {
            title: "Основни и освежителни ремонти",
            desc: "Цялостни и частични ремонти на жилища, офиси и търговски пространства – от подготовката и демонтажните дейности до финалните довършителни работи.",
            href: "/services",
          },
          {
            title: "Електроинсталации",
            desc: "Изграждане и преработка на електроинсталации, нови електрически точки, контакти, ключове, осветление и електрически табла.",
            href: "/services/el-instalacii",
          },
          {
            title: "ВиК инсталации",
            desc: "Изграждане и подмяна на водопроводни и канализационни инсталации за бани, кухни и други помещения.",
            href: "/services/vik-instalacii",
          },
          {
            title: "Гипсокартон и сухо строителство",
            desc: "Предстенни обшивки, преградни стени, окачени тавани, ниши, куфари и други решения от гипсокартон.",
            href: "/services/gipsokarton",
          },
          {
            title: "Шпакловки",
            desc: "Подготовка и шпакловане на стени и тавани, финишни слоеве, шлайфане и подготовка за боядисване.",
            href: "/services/shpaklovki",
          },
          {
            title: "Боядисване",
            desc: "Подготовка, грундиране и боядисване на стени и тавани при ново строителство и освежителни ремонти.",
            href: "/services/boyadisvane",
          },
          {
            title: "Подово отопление",
            desc: "Изграждане на подово отопление с подготовка на основата и съобразяване с последващите подови слоеве и настилки.",
            href: "/services/podovo-otoplenie",
          },
          {
            title: "Подови настилки",
            desc: "Подготовка на основата и монтаж на подови настилки според помещението, натоварването и желания краен резултат.",
            href: "/services/podovi-nastilki",
          },
          {
            title: "Ремонт на бани",
            desc: "Цялостни ремонти на бани – ВиК, подготовка на основите, хидроизолация, облицовки, настилки и довършителни работи.",
            href: "/services/bani",
          },
          {
            title: "Осветление с монтаж",
            desc: "Доставка и монтаж на интериорно, екстериорно, индустриално и аварийно осветление.",
            href: "/osvetlenie",
          },
        ],

        processTitle: "Как протича работата?",

        processSubtitle:
          "Ремонтът не трябва да започва с хаос. Започва с оглед, уточняване и ясен план.",

        process: [
          {
            step: "01",
            title: "Оглед и консултация",
            desc: "Разглеждаме обекта, обсъждаме нуждите и уточняваме възможните решения.",
          },
          {
            step: "02",
            title: "Оферта по дейности",
            desc: "Подготвяме ясно предложение с обхват, материали и ориентировъчни срокове.",
          },
          {
            step: "03",
            title: "Изпълнение по етапи",
            desc: "Работим подредено, с контрол на всеки етап и внимание към детайла.",
          },
          {
            step: "04",
            title: "Финално предаване",
            desc: "Преглеждаме завършеното заедно и предаваме чисто и подредено пространство.",
          },
        ],

        projectsTitle: "Реални проекти и процес на работа",

        projectsSubtitle:
          "Вижте част от изпълнените дейности – от инсталации и подготвителни работи до завършен детайл.",

        openProject: "Отвори проект",

        whyTitle: "Защо Sensor Build?",

        why: [
          {
            title: "Не започваме „на око“",
            desc: "Измерваме, обсъждаме и планираме, преди да започнем изпълнението.",
          },
          {
            title: "Знаете какво плащате",
            desc: "Офертата се подготвя по дейности, за да е ясно какво включва ремонтът.",
          },
          {
            title: "Мислим като инженери",
            desc: "Съчетаваме практическо изпълнение с техническо мислене и контрол.",
          },
          {
            title: "Пазим обекта",
            desc: "Работим подредено, опаковаме, почистваме и се стремим към чист финал.",
          },
        ],

        finalTitle: "Планирате ремонт в София?",

        finalText:
          "Обадете се или ни пишете, за да уточним обекта, необходимите дейности и възможностите за изпълнение.",

        finalPrimary: "Свържи се с нас",
        finalSecondary: "Виж цени",
      }
    : {
        brand: "SENSOR BUILD",

        seoTitle: "Construction and Renovations in Sofia",

        subtitle:
          "Complete and partial renovations with a clear plan, technical execution and attention to detail.",

        tagline: "Precision you can trust!",

        primaryCta: "Request a visit",
        secondaryCta: "View prices",

        trust: [
          "On-site visit",
          "Clear offer",
          "Step-by-step work",
          "Clean handover",
        ],

        servicesTitle: "Renovation services in Sofia",

        servicesSubtitle:
          "We approach every renovation with a clear plan, technical thinking and attention to detail.",

        localServicesText:
          "We carry out complete and partial renovations in Sofia, combining the different construction and finishing activities into a well-organized process.",

        services: [
          {
            title: "Full and refresh renovations",
            desc: "Complete and partial renovations of homes, offices and commercial spaces, from preparation and demolition to final finishing works.",
            href: "/services",
          },
          {
            title: "Electrical installations",
            desc: "Installation and renovation of electrical systems, sockets, switches, lighting points and electrical panels.",
            href: "/services/el-instalacii",
          },
          {
            title: "Plumbing installations",
            desc: "Installation and replacement of water supply and drainage systems for bathrooms, kitchens and other spaces.",
            href: "/services/vik-instalacii",
          },
          {
            title: "Drywall and suspended ceilings",
            desc: "Wall linings, partition walls, suspended ceilings, niches, service boxes and other drywall solutions.",
            href: "/services/gipsokarton",
          },
          {
            title: "Skimming and plaster finishing",
            desc: "Preparation and skimming of walls and ceilings, finishing layers, sanding and preparation for painting.",
            href: "/services/shpaklovki",
          },
          {
            title: "Painting",
            desc: "Preparation, priming and painting of walls and ceilings for new construction and renovation projects.",
            href: "/services/boyadisvane",
          },
          {
            title: "Underfloor heating",
            desc: "Installation of underfloor heating with proper base preparation and coordination with subsequent floor layers.",
            href: "/services/podovo-otoplenie",
          },
          {
            title: "Floor coverings",
            desc: "Base preparation and installation of floor coverings according to the room, load and desired final appearance.",
            href: "/services/podovi-nastilki",
          },
          {
            title: "Bathroom renovations",
            desc: "Complete bathroom renovations including plumbing, waterproofing, tiling, flooring and finishing works.",
            href: "/services/bani",
          },
          {
            title: "Lighting with installation",
            desc: "Supply and installation of interior, exterior, industrial and emergency lighting.",
            href: "/osvetlenie",
          },
        ],

        processTitle: "How does the work process go?",

        processSubtitle:
          "A renovation should not start with chaos. It starts with a site visit, clarification and a clear plan.",

        process: [
          {
            step: "01",
            title: "Site visit and consultation",
            desc: "We inspect the site, discuss your needs and clarify the possible solutions.",
          },
          {
            step: "02",
            title: "Detailed offer",
            desc: "We prepare a clear proposal with scope, materials and indicative timing.",
          },
          {
            step: "03",
            title: "Step-by-step execution",
            desc: "We work in an organized way, with control at every stage and attention to detail.",
          },
          {
            step: "04",
            title: "Final handover",
            desc: "We review the completed work together and hand over a clean, finished space.",
          },
        ],

        projectsTitle: "Real projects and work process",

        projectsSubtitle:
          "See part of our completed work – from installations and preparation to final details.",

        openProject: "Open project",

        whyTitle: "Why Sensor Build?",

        why: [
          {
            title: "We do not start by guessing",
            desc: "We measure, discuss and plan before the execution begins.",
          },
          {
            title: "You know what you pay for",
            desc: "The offer is structured by activities, so the scope is clear.",
          },
          {
            title: "We think like engineers",
            desc: "We combine practical execution with technical thinking and control.",
          },
          {
            title: "We protect the site",
            desc: "We work in an organized way, protect the space and aim for a clean finish.",
          },
        ],

        finalTitle: "Planning a renovation in Sofia?",

        finalText:
          "Call or message us so we can clarify the site, the required works and the execution options.",

        finalPrimary: "Contact us",
        finalSecondary: "View prices",
      };

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
      image:
        "/project4/20251008_150415_main-ezgif.com-jpg-to-webp-converter.webp",
      labelBg: "Изграждане на подово отопление",
      labelEn: "Underfloor heating",
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

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    handleSelect();
    api.on("select", handleSelect);

    return () => {
      api.off("select", handleSelect);
    };
  }, [api]);

  useEffect(() => {
    if (!api) return;

    const interval = setInterval(() => {
      api.scrollNext();
    }, 4500);

    return () => clearInterval(interval);
  }, [api]);

  return (
    <div
      className={`relative min-h-screen flex flex-col ${
        isBg ? "bg-[#13182c]" : "bg-white"
      }`}
    >
      <div className="relative z-[2] pt-16 md:pt-0 flex-grow">
        {/* HERO */}
        <section className="relative min-h-[78vh] md:min-h-[84vh] flex items-center justify-center px-4 sm:px-6 lg:px-8 py-24 md:py-28 overflow-hidden">
          <div className="absolute inset-0 z-[1]">
            <Image
              src="/main.webp"
              alt={
                isBg
                  ? "Ремонти и строителство в София - Sensor Build"
                  : "Construction and renovations in Sofia - Sensor Build"
              }
              fill
              sizes="100vw"
              className="object-cover"
              priority
              quality={90}
            />

            <div className="absolute inset-0 bg-black/30" />
          </div>

          <div className="relative z-[2] text-center max-w-5xl mx-auto -mt-10 md:-mt-14">
            {/* Brand - визуално остава голямо */}
            <div className="text-5xl sm:text-5xl md:text-7xl lg:text-8xl font-noah-bold mb-3 text-white drop-shadow-lg uppercase">
              {copy.brand}
            </div>

            {/* Главното SEO заглавие на страницата */}
            <h1 className="text-2xl sm:text-2xl md:text-4xl mb-5 text-white drop-shadow-md font-semibold">
              {copy.seoTitle}
            </h1>

            <div className="text-lg sm:text-xl md:text-2xl mb-8 text-white/90 drop-shadow-md">
              <TypewriterText text={copy.subtitle} speed={40} />
            </div>

            <div className="mb-8 flex justify-center">
              <span className="inline-flex items-center px-5 py-2 rounded-xl bg-white/60 backdrop-blur-sm border border-white/25 shadow-sm text-[#2D6B35] text-lg sm:text-xl md:text-2xl font-semibold drop-shadow-sm">
                <TypewriterText
                  text={copy.tagline}
                  speed={70}
                  delay={copy.subtitle.length * 40 + 500}
                />
              </span>
            </div>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contacts"
                className="w-full sm:w-auto rounded-xl bg-[#388644] px-8 py-4 text-center text-white text-base md:text-lg font-semibold shadow-lg transition-all duration-200 hover:bg-[#2D6B35] hover:-translate-y-0.5"
              >
                {copy.primaryCta}
              </Link>

              <Link
                href="/prices"
                className="w-full sm:w-auto rounded-xl border border-white/35 bg-white/10 px-8 py-4 text-center text-white text-base md:text-lg font-semibold backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5"
              >
                {copy.secondaryCta}
              </Link>
            </div>
          </div>
        </section>

        {/* TRUST STRIP */}
        <section
          className={`relative z-[4] py-8 md:py-10 ${
            isBg ? "bg-[#13182c]" : "bg-gray-50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div
              className={`grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 rounded-2xl border p-4 shadow-xl ${
                isBg
                  ? "bg-[#1a2342] border-white/10"
                  : "bg-white border-gray-200"
              }`}
            >
              {copy.trust.map((item) => (
                <div
                  key={item}
                  className={`flex items-center justify-center gap-3 rounded-xl px-4 py-5 text-center text-base md:text-lg font-semibold ${
                    isBg
                      ? "bg-[#13182c] text-white"
                      : "bg-gray-50 text-gray-900"
                  }`}
                >
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#388644] text-white text-lg">
                    ✓
                  </span>

                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section
          className={`relative py-16 md:py-24 ${
            isBg ? "bg-[#13182c]" : "bg-gray-50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-4xl text-center mb-12">
              <h2
                className={`text-3xl md:text-5xl font-noah-bold ${
                  isBg ? "text-white" : "text-gray-900"
                }`}
              >
                {copy.servicesTitle}
              </h2>

              <p
                className={`mt-4 text-lg md:text-xl leading-relaxed ${
                  isBg ? "text-white/75" : "text-gray-600"
                }`}
              >
                {copy.servicesSubtitle}
              </p>

              <p
                className={`mt-4 text-base md:text-lg leading-relaxed ${
                  isBg ? "text-white/65" : "text-gray-600"
                }`}
              >
                {copy.localServicesText}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
              {copy.services.map((service) => (
                <AnimatedDiv
                  key={service.title}
                  className={`group rounded-2xl border p-7 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                    isBg
                      ? "bg-[#1a2342] border-white/10"
                      : "bg-white border-gray-200"
                  }`}
                >
                  <Link href={service.href} className="block h-full">
                    <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#388644] text-white text-xl font-bold">
                      ✓
                    </div>

                    <h3
                      className={`text-xl md:text-2xl font-semibold mb-3 ${
                        isBg ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {service.title}
                    </h3>

                    <p
                      className={`leading-relaxed ${
                        isBg ? "text-white/70" : "text-gray-600"
                      }`}
                    >
                      {service.desc}
                    </p>

                    <div className="mt-6 inline-flex items-center text-[#4ea85b] font-semibold">
                      {isBg
                        ? `Виж ${service.title}`
                        : `View ${service.title}`}

                      <span className="ml-2 transition-transform group-hover:translate-x-1">
                        →
                      </span>
                    </div>
                  </Link>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section
          className={`relative py-16 md:py-24 ${
            isBg ? "bg-[#1a2342]" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 items-start">
              <div>
                <h2
                  className={`text-3xl md:text-5xl font-noah-bold ${
                    isBg ? "text-white" : "text-gray-900"
                  }`}
                >
                  {copy.processTitle}
                </h2>

                <p
                  className={`mt-5 text-lg md:text-xl leading-relaxed ${
                    isBg ? "text-white/75" : "text-gray-600"
                  }`}
                >
                  {copy.processSubtitle}
                </p>

                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/contacts"
                    className="rounded-xl bg-[#388644] px-7 py-4 text-center text-white font-semibold shadow-lg transition-all duration-200 hover:bg-[#2D6B35]"
                  >
                    {copy.primaryCta}
                  </Link>

                  <Link
                    href="/services"
                    className={`rounded-xl px-7 py-4 text-center font-semibold border transition-all duration-200 ${
                      isBg
                        ? "border-white/20 text-white hover:bg-white/10"
                        : "border-gray-300 text-gray-900 hover:bg-gray-100"
                    }`}
                  >
                    {isBg ? "Виж ремонтните услуги" : "View renovation services"}
                  </Link>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                {copy.process.map((item) => (
                  <AnimatedDiv
                    key={item.step}
                    className={`rounded-2xl border p-6 ${
                      isBg
                        ? "bg-[#13182c] border-white/10"
                        : "bg-gray-50 border-gray-200"
                    }`}
                  >
                    <div className="text-[#4ea85b] text-3xl font-noah-bold mb-4">
                      {item.step}
                    </div>

                    <h3
                      className={`text-xl font-semibold mb-3 ${
                        isBg ? "text-white" : "text-gray-900"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p
                      className={`leading-relaxed ${
                        isBg ? "text-white/70" : "text-gray-600"
                      }`}
                    >
                      {item.desc}
                    </p>
                  </AnimatedDiv>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS */}
        <section
          className={`relative py-16 md:py-24 ${
            isBg ? "bg-[#13182c]" : "bg-gray-50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl text-center mb-12">
              <h2
                className={`text-3xl md:text-5xl font-noah-bold ${
                  isBg ? "text-white" : "text-gray-900"
                }`}
              >
                {copy.projectsTitle}
              </h2>

              <p
                className={`mt-4 text-lg md:text-xl leading-relaxed ${
                  isBg ? "text-white/75" : "text-gray-600"
                }`}
              >
                {copy.projectsSubtitle}
              </p>
            </div>

            <Carousel
              setApi={setApi}
              opts={{
                align: "center",
                loop: true,
                containScroll: "trimSnaps",
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4 lg:-ml-8 py-10 overflow-visible">
                {projectSlides.map((slide, index) => {
                  const isActive = current === index;

                  return (
                    <CarouselItem
                      key={slide.id}
                      className="pl-2 md:pl-4 lg:pl-8 basis-[85%] md:basis-1/2 lg:basis-[45%] overflow-visible"
                    >
                      <Link
                        href={`/projects/${slide.id}`}
                        className="block group"
                      >
                        <div
                          className={`relative aspect-[3/4] rounded-2xl shadow-lg transition-all duration-500 ${
                            isActive
                              ? "lg:scale-110 lg:z-10 lg:shadow-2xl"
                              : "lg:scale-90 lg:opacity-80"
                          }`}
                        >
                          <div className="absolute inset-0 overflow-hidden rounded-2xl">
                            <Image
                              src={slide.image}
                              alt={isBg ? slide.labelBg : slide.labelEn}
                              fill
                              className="object-cover transition-transform duration-500 group-hover:scale-105"
                              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 45vw"
                            />

                            <div className="absolute inset-0 bg-black/25" />
                          </div>

                          <div className="absolute inset-x-0 bottom-0 px-4 pb-5 pt-16 bg-gradient-to-t from-black/85 via-black/45 to-transparent rounded-b-2xl">
                            <div className="flex flex-col items-center text-center">
                              <p className="text-white text-lg md:text-xl font-semibold leading-snug line-clamp-2 max-w-[92%]">
                                {isBg ? slide.labelBg : slide.labelEn}
                              </p>

                              <span className="mt-4 inline-flex items-center justify-center rounded-xl bg-[#388644] px-6 py-3 text-white text-sm md:text-base font-semibold shadow-md transition-all duration-200 group-hover:bg-[#2D6B35]">
                                {copy.openProject}
                              </span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>

              <CarouselPrevious
                className="left-3 md:left-4 top-1/2 -translate-y-1/2
                           h-11 w-11 md:h-12 md:w-12
                           p-0 flex items-center justify-center
                           rounded-xl bg-[#13182c]/75 backdrop-blur-sm
                           border border-white/20 shadow-lg
                           text-white hover:bg-[#13182c]/95 hover:scale-105
                           transition-all duration-200"
              />

              <CarouselNext
                className="right-3 md:right-4 top-1/2 -translate-y-1/2
                           h-11 w-11 md:h-12 md:w-12
                           p-0 flex items-center justify-center
                           rounded-xl bg-[#13182c]/75 backdrop-blur-sm
                           border border-white/20 shadow-lg
                           text-white hover:bg-[#13182c]/95 hover:scale-105
                           transition-all duration-200"
              />
            </Carousel>
          </div>
        </section>

        {/* WHY SENSOR BUILD */}
        <section
          className={`relative py-16 md:py-24 ${
            isBg ? "bg-[#1a2342]" : "bg-white"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              className={`text-3xl md:text-5xl font-noah-bold text-center mb-12 ${
                isBg ? "text-white" : "text-gray-900"
              }`}
            >
              {copy.whyTitle}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {copy.why.map((item) => (
                <AnimatedDiv
                  key={item.title}
                  className={`p-6 rounded-2xl shadow-md border-l-4 border-[#388644] ${
                    isBg ? "bg-[#13182c]" : "bg-gray-50"
                  }`}
                >
                  <h3
                    className={`text-xl font-semibold mb-3 ${
                      isBg ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {item.title}
                  </h3>

                  <p
                    className={`leading-relaxed ${
                      isBg ? "text-white/70" : "text-gray-600"
                    }`}
                  >
                    {item.desc}
                  </p>
                </AnimatedDiv>
              ))}
            </div>
          </div>
        </section>

        {/* FINAL CTA */}
        <section
          className={`relative py-16 md:py-24 ${
            isBg ? "bg-[#13182c]" : "bg-gray-50"
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative overflow-hidden rounded-3xl bg-[#388644] px-6 py-12 md:px-12 md:py-16 text-center shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-r from-black/20 via-transparent to-black/10" />

              <div className="relative z-[2] mx-auto max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-noah-bold text-white">
                  {copy.finalTitle}
                </h2>

                <p className="mt-5 text-lg md:text-xl leading-relaxed text-white/90">
                  {copy.finalText}
                </p>

                <div className="mt-9 flex flex-col sm:flex-row items-center justify-center gap-4">
                  <Link
                    href="/contacts"
                    className="w-full sm:w-auto rounded-xl bg-white px-8 py-4 text-center text-[#2D6B35] text-base md:text-lg font-semibold shadow-lg transition-all duration-200 hover:-translate-y-0.5 hover:bg-white/90"
                  >
                    {copy.finalPrimary}
                  </Link>

                  <Link
                    href="/prices"
                    className="w-full sm:w-auto rounded-xl border border-white/35 bg-white/10 px-8 py-4 text-center text-white text-base md:text-lg font-semibold backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:-translate-y-0.5"
                  >
                    {copy.finalSecondary}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

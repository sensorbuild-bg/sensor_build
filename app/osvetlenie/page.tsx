"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

type Category = "interior" | "exterior" | "industrial" | "emergency" | "commonAreas";

type Subcategory =
  | "interiorWall"
  | "interiorCeiling"
  | "downlights"
  | "panels"
  | "track"
  | "chandeliers"
  | "exteriorWall"
  | "exteriorCeiling"
  | "garden"
  | "commonCeiling"
  | "commonWall";

type SocketType = "GU10" | "E27" | "E14" | "Integrated LED";

type Product = {
  id: string;
  img: string;

  name: { bg: string; en: string };
  desc: { bg: string; en: string };

  priceEur: number;

  category: Category;
  subcategory?: Subcategory;

  // качества (използваме ги вече за филтри/баджове)
  flickerFree?: boolean;
  ra90?: boolean;
  ip?: string; // "IP20", "IP44", "IP65"...
  dimmable?: boolean;

  // подготвяме ги за бъдещи филтри (засега само съхраняваме)
  socket?: SocketType;
  powerW?: number;
  cct?: string; // "3000K", "4000K", "CCT 3000-6000K"
  sensor?: boolean;
};

const heroImages = [
  "/images/lighting/hero-1.jpg",
  "/images/lighting/hero-2.jpg",
  "/images/lighting/hero-3.jpg",
];

// ✅ Плейсхолдърни продукти (ще ги сменяме с реалните)
const products: Product[] = [
  {
    id: "leo-f30-sr36",
    img: "/images/lighting/common-areas/leo-f30-sr36-sensor-ceiling.jpg",
    name: {
      bg: "Vivalux плафониера със сензор LEO F30 SR36",
      en: "Vivalux ceiling light with motion sensor LEO F30 SR36",
    },
    desc: {
      bg: "Практична плафониера със сензор за движение, подходяща за входове, стълбища, коридори и общи части. Осигурява автоматично включване и икономия на електроенергия.",
      en: "Practical motion-sensor ceiling light suitable for entrances, staircases, corridors and common areas. Provides automatic activation and energy efficiency.",
    },
    priceEur: 35,
    category: "commonAreas",
    subcategory: "commonCeiling",
    ip: "IP20",
    flickerFree: false,
    ra90: false,
    dimmable: false,
    socket: "E27",
    sensor: true,
  },

  // примерни (ще ги замениш/ще ги подредим)
  {
    id: "bergamo",
    img: "/images/lighting/bergamo-gu10.jpg",
    name: {
      bg: "Vivalux фасаден аплик BERGAMO 1xGU10 – черно",
      en: "Vivalux outdoor wall light BERGAMO 1xGU10 – black",
    },
    desc: {
      bg: "Фасаден аплик с изчистен дизайн, устойчив на атмосферни условия.",
      en: "Minimal outdoor wall light, weather-resistant.",
    },
    priceEur: 40,
    category: "exterior",
    subcategory: "exteriorWall",
    flickerFree: true,
    ra90: true,
    ip: "IP44",
    dimmable: false,
    socket: "GU10",
  },
  {
    id: "jex",
    img: "/images/lighting/jex-1200.jpg",
    name: {
      bg: "Vivalux индустриално осветително тяло JEX PC BASE 222 LED – 1200 mm",
      en: "Vivalux industrial fixture JEX PC BASE 222 LED – 1200 mm",
    },
    desc: {
      bg: "Практично осветително тяло за гаражи, складове и работни зони.",
      en: "Practical lighting solution for garages and work areas.",
    },
    priceEur: 45,
    category: "industrial",
    flickerFree: true,
    ra90: false,
    ip: "IP65",
    dimmable: false,
    socket: "Integrated LED",
    powerW: 36,
    cct: "4000K",
  },
];

function Badge({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "bg" | "en";
}) {
  // BG: “неон”/премиум на тъмно; EN: зелено, чисто
  const cls =
    lang === "bg"
      ? "border-[#2d6b35] text-[#7dff94] bg-transparent"
      : "border-[#2d6b35] text-[#2d6b35] bg-transparent";

  return (
    <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${cls}`}>
      {children}
    </span>
  );
}

function TogglePill({
  checked,
  onChange,
  label,
  lang,
}: {
  checked: boolean;
  onChange: (v: boolean) => void;
  label: string;
  lang: "bg" | "en";
}) {
  const base =
    "inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition";

  const onCls =
    lang === "bg"
      ? "border-[#2d6b35] text-[#7dff94] bg-[#0f1426]"
      : "border-[#2d6b35] text-[#2d6b35] bg-white";

  const offCls =
    lang === "bg"
      ? "border-[#2d6b35] text-white bg-transparent hover:bg-white/5"
      : "border-[#2d6b35] text-black bg-white hover:bg-gray-50";

  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
      className={`${base} ${checked ? onCls : offCls}`}
    >
      <span
        className={`h-4 w-4 rounded-sm border ${
          checked
            ? "border-[#2d6b35] bg-[#2d6b35]"
            : lang === "bg"
              ? "border-white/40 bg-transparent"
              : "border-gray-300 bg-transparent"
        }`}
      />
      {label}
    </button>
  );
}

function CardShell({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "bg" | "en";
}) {
  // EN: без сиво, пак зелено
  const cls =
    lang === "bg"
      ? "border-2 border-[#2d6b35] bg-transparent"
      : "border border-[#2d6b35] bg-white";

  return <div className={`rounded-2xl p-4 ${cls}`}>{children}</div>;
}

export default function LightingPage() {
  const router = useRouter();
  const { lang } = useLanguage();
  const t = translations[lang]; // (оставям го, както е при теб)

  const content =
    lang === "bg"
      ? {
          kicker: "SENSOR BUILD • ОСВЕТЛЕНИЕ",
          h1: "Осветление Vivalux – доставка и монтаж",
          lead:
            "Осветлението се подбира за жилищни, офис и общи части, като се съобразява комфортът за очите и реалните условия на обекта. Предлагаме и градинско осветление.",
          sectionTitle: "Каталог осветители",
          note: "Посочените цени включват осветителното тяло, доставка и стандартен монтаж.",
          cta: "Запитване",

          heroCta1: "Разгледай каталога",
          heroCta2: "Запитване",

          whyTitle: "Защо Flicker-Free и Ra≥90?",
          whyFlickerTitle: "Без трептене (Flicker-Free)",
          whyFlickerText:
            "Невидимото трептене може да натоварва зрението при продължителен престой. Подбираме модели със стабилен светлинен поток за по-комфортна среда.",
          whyRaTitle: "Ra ≥ 90 (висок CRI)",
          whyRaText:
            "Високият цветопредавателен индекс прави цветовете по-естествени и пространството по-приятно. Това е ключово за интериори с висок естетически стандарт.",

          onlyFlicker: "Само Flicker-Free",
          onlyRa: "Само Ra≥90",
          onlyIp: "Само с IP защита",
          onlyDimmable: "Само димируеми",

          dimLabel: "Димируемо",
          sensorLabel: "Сензор",
          priceFrom: "Цена от",
          priceSub: "с включени доставка и монтаж",

          categoriesTitle: "Видове осветление",
          categories: {
            interior: "Интериорно осветление",
            exterior: "Външно осветление",
            industrial: "Индустриално осветление",
            emergency: "Аварийно осветление",
            commonAreas: "Осветление за стълбища и общи части",
          },
          subs: {
            interiorWall: "Аплици",
            interiorCeiling: "Плафониери",
            downlights: "LED луни",
            panels: "LED панели",
            track: "Релсови осветителни системи",
            chandeliers: "LED полилеи",
            exteriorWall: "Фасадни аплици",
            exteriorCeiling: "Външни плафониери",
            garden: "Градински осветителни тела",
            commonCeiling: "Плафониери и тела за общи части",
            commonWall: "Аплици за общи части",
          },

          metaTitle: "Осветление Vivalux – доставка и монтаж | Sensor Build",
          metaDesc: "Професионално LED осветление с включена доставка и монтаж.",
        }
      : {
          kicker: "SENSOR BUILD • LIGHTING",
          h1: "Vivalux Lighting – Supply & Installation",
          lead:
            "Lighting is selected for residential and commercial spaces with visual comfort and real site conditions in mind. We also provide garden lighting.",
          sectionTitle: "Lighting catalog",
          note: "Prices include the fixture, delivery and standard installation.",
          cta: "Request",

          heroCta1: "View catalog",
          heroCta2: "Request",

          whyTitle: "Why Flicker-Free and Ra≥90?",
          whyFlickerTitle: "Flicker-Free",
          whyFlickerText:
            "Invisible flicker can increase eye strain over time. We select models with a stable light output for better visual comfort.",
          whyRaTitle: "Ra ≥ 90 (High CRI)",
          whyRaText:
            "High CRI delivers more natural colors and a better perception of materials and finishes — ideal for premium interiors.",

          onlyFlicker: "Flicker-Free only",
          onlyRa: "Ra≥90 only",
          onlyIp: "IP rated only",
          onlyDimmable: "Dimmable only",

          dimLabel: "Dimmable",
          sensorLabel: "Sensor",
          priceFrom: "Price from",
          priceSub: "delivery & installation included",

          categoriesTitle: "Lighting types",
          categories: {
            interior: "Interior lighting",
            exterior: "Outdoor lighting",
            industrial: "Industrial lighting",
            emergency: "Emergency lighting",
            commonAreas: "Staircase & common area lighting",
          },
          subs: {
            interiorWall: "Wall lights",
            interiorCeiling: "Ceiling lights",
            downlights: "LED downlights",
            panels: "LED panels",
            track: "Track systems",
            chandeliers: "LED chandeliers",
            exteriorWall: "Outdoor wall lights",
            exteriorCeiling: "Outdoor ceiling lights",
            garden: "Garden lighting",
            commonCeiling: "Common area ceiling lights",
            commonWall: "Common area wall lights",
          },

          metaTitle: "Vivalux Lighting – Supply & Installation | Sensor Build",
          metaDesc: "Professional LED lighting with delivery and installation included.",
        };

  // meta (както го правеше)
  if (typeof document !== "undefined") {
    document.title = content.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", content.metaDesc);
  }

  const [heroIndex, setHeroIndex] = useState(0);

  // филтри (активни сега)
  const [onlyFlicker, setOnlyFlicker] = useState(false);
  const [onlyRa, setOnlyRa] = useState(false);
  const [onlyIp, setOnlyIp] = useState(false);
  const [onlyDimmable, setOnlyDimmable] = useState(false);

  // ✅ auto-rotate hero
  useEffect(() => {
    const id = window.setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 4500);
    return () => window.clearInterval(id);
  }, []);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (onlyFlicker && !p.flickerFree) return false;
      if (onlyRa && !p.ra90) return false;
      if (onlyIp && !p.ip) return false;
      if (onlyDimmable && !p.dimmable) return false;
      return true;
    });
  }, [onlyFlicker, onlyRa, onlyIp, onlyDimmable]);

  const tree = useMemo(() => {
    const out: Record<Category, Record<string, Product[]>> = {
      interior: {},
      exterior: {},
      industrial: {},
      emergency: {},
      commonAreas: {},
    };

    for (const p of filtered) {
      const sub = p.subcategory ?? "__root__";
      if (!out[p.category][sub]) out[p.category][sub] = [];
      out[p.category][sub].push(p);
    }
    return out;
  }, [filtered]);

  const goContacts = (_p: Product) => {
    router.push("/contacts");
  };

  const pageBg = lang === "bg" ? "bg-[#13182C] text-white" : "bg-white text-black";
  const mutedText = lang === "bg" ? "opacity-70" : "text-gray-700";
  const greenBorder = lang === "bg" ? "border-2 border-[#2d6b35]" : "border border-[#2d6b35]";

  return (
    <main className={`min-h-screen ${pageBg}`}>
      <section className="mx-auto max-w-7xl px-4 py-10">
        {/* HERO */}
        <div className={`relative overflow-hidden rounded-3xl ${greenBorder}`}>
          <div className="relative h-[38vh] min-h-[320px]">
            <Image
              src={heroImages[heroIndex]}
              alt={content.h1}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />

            {/* overlay: BG по-силен, EN по-лек */}
            <div className={`absolute inset-0 ${lang === "bg" ? "bg-black/55" : "bg-black/25"}`} />

            <div className="absolute inset-0 flex items-end p-6 md:p-10">
              <div className="max-w-3xl">
                <p className={`text-sm ${lang === "bg" ? "opacity-80 text-white" : "text-white/90"}`}>
                  {content.kicker}
                </p>

                <h1 className="mt-3 text-3xl font-semibold md:text-5xl text-white">
                  {content.h1}
                </h1>

                <p className="mt-4 max-w-3xl text-white/85">{content.lead}</p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {/* ✅ правилното зелено (outline) */}
                  <a
                    href="#catalog"
                    className="inline-flex items-center justify-center rounded-xl border-2 border-[#2d6b35] px-5 py-3 text-sm font-semibold text-[#7dff94] hover:border-[#4da855] hover:text-[#4da855]"
                  >
                    {content.heroCta1}
                  </a>

                  <Link
                    href="/contacts"
                    className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold ${
                      lang === "bg"
                        ? "bg-[#2d6b35] text-white hover:bg-[#4da855]"
                        : "border border-white text-white hover:bg-white/10"
                    }`}
                  >
                    {content.heroCta2}
                  </Link>
                </div>

                {/* dots */}
                <div className="mt-6 flex gap-2">
                  {heroImages.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setHeroIndex(i)}
                      className={`h-2.5 w-10 rounded-full border ${
                        i === heroIndex
                          ? "border-[#2d6b35] bg-[#2d6b35]"
                          : "border-white/30 bg-white/10 hover:bg-white/15"
                      }`}
                      aria-label={`Hero ${i + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WHY */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold">{content.whyTitle}</h2>
          <div className="mt-4 grid gap-6 md:grid-cols-2">
            <CardShell lang={lang}>
              <h3 className="text-base font-semibold">{content.whyFlickerTitle}</h3>
              <p className={`mt-2 text-sm ${mutedText}`}>{content.whyFlickerText}</p>
            </CardShell>
            <CardShell lang={lang}>
              <h3 className="text-base font-semibold">{content.whyRaTitle}</h3>
              <p className={`mt-2 text-sm ${mutedText}`}>{content.whyRaText}</p>
            </CardShell>
          </div>
        </div>

        {/* CATALOG */}
        <section id="catalog" className="mt-12">
          <h2 className="text-xl font-semibold">{content.sectionTitle}</h2>
          <p className={`mt-2 ${mutedText}`}>{content.note}</p>

          {/* Filters (активните) */}
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <TogglePill checked={onlyFlicker} onChange={setOnlyFlicker} label={content.onlyFlicker} lang={lang} />
            <TogglePill checked={onlyRa} onChange={setOnlyRa} label={content.onlyRa} lang={lang} />
            <TogglePill checked={onlyIp} onChange={setOnlyIp} label={content.onlyIp} lang={lang} />
            <TogglePill checked={onlyDimmable} onChange={setOnlyDimmable} label={content.onlyDimmable} lang={lang} />
          </div>

          {/* Categories (collapsed by default) */}
          <div className="mt-8 space-y-4">
            {(Object.keys(content.categories) as Category[]).map((cat) => {
              const catObj = tree[cat];
              const hasAny = Object.keys(catObj).some((k) => (catObj[k]?.length ?? 0) > 0);
              if (!hasAny) return null;

              return (
                <details key={cat} className={`rounded-2xl p-4 ${greenBorder}`}>
                  <summary className="cursor-pointer select-none text-base font-semibold">
                    {content.categories[cat]}
                  </summary>

                  <div className="mt-5 space-y-8">
                    {(
                      [
                        "interiorWall",
                        "interiorCeiling",
                        "downlights",
                        "panels",
                        "track",
                        "chandeliers",
                        "exteriorWall",
                        "exteriorCeiling",
                        "garden",
                        "commonCeiling",
                        "commonWall",
                      ] as Subcategory[]
                    )
                      .filter((sub) => (catObj[sub]?.length ?? 0) > 0)
                      .map((sub) => (
                        <div key={sub}>
                          <div className="mb-3 text-sm font-semibold">{content.subs[sub]}</div>

                          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {catObj[sub]!.map((p) => {
                              const name = lang === "bg" ? p.name.bg : p.name.en;
                              const desc = lang === "bg" ? p.desc.bg : p.desc.en;

                              return (
                                <article key={p.id} className={`rounded-2xl p-4 ${greenBorder}`}>
                                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                                    <Image
                                      src={p.img}
                                      alt={name}
                                      fill
                                      className="object-cover"
                                      sizes="(max-width: 1024px) 50vw, 25vw"
                                    />
                                  </div>

                                  {/* badges */}
                                  <div className="mt-3 flex flex-wrap gap-2">
                                    {p.flickerFree && <Badge lang={lang}>Flicker-Free</Badge>}
                                    {p.ra90 && <Badge lang={lang}>Ra≥90</Badge>}
                                    {p.ip && <Badge lang={lang}>{p.ip}</Badge>}
                                    {p.dimmable && <Badge lang={lang}>{content.dimLabel}</Badge>}
                                    {p.sensor && <Badge lang={lang}>{content.sensorLabel}</Badge>}
                                    {p.socket && <Badge lang={lang}>{p.socket}</Badge>}
                                  </div>

                                  <h3 className="mt-3 text-base font-semibold">{name}</h3>
                                  <p className={`mt-2 text-sm ${mutedText}`}>{desc}</p>

                                  <div className={`mt-4 rounded-xl p-3 ${greenBorder}`}>
                                    <p className="text-sm font-semibold">
                                      {content.priceFrom} {p.priceEur} € / {lang === "bg" ? "бр." : "pcs"}
                                    </p>
                                    <p className={`text-xs ${mutedText}`}>{content.priceSub}</p>
                                  </div>

                                  <button
                                    onClick={() => goContacts(p)}
                                    className={`mt-4 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold ${
                                      lang === "bg"
                                        ? "border-2 border-[#2d6b35] hover:text-[#4da855] hover:border-[#4da855]"
                                        : "border border-[#2d6b35] text-black hover:bg-[#2d6b35] hover:text-white"
                                    }`}
                                  >
                                    {content.cta}
                                  </button>
                                </article>
                              );
                            })}
                          </div>
                        </div>
                      ))}
                  </div>
                </details>
              );
            })}
          </div>
        </section>
      </section>
    </main>
  );
}

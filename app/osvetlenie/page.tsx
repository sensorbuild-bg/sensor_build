"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

type Category = "interior" | "exterior" | "industrial" | "emergency";
type Subcategory =
  | "interiorWall"
  | "interiorCeiling"
  | "downlights"
  | "panels"
  | "track"
  | "chandeliers"
  | "exteriorWall"
  | "exteriorCeiling"
  | "garden";

type Product = {
  id: string;
  img: string;
  name: { bg: string; en: string };
  desc: { bg: string; en: string };
  priceEur: number;

  category: Category;
  subcategory?: Subcategory;

  flickerFree?: boolean;
  ra90?: boolean;
  ip?: string;
};

const heroImages = [
  "/images/lighting/hero-1.jpg",
  "/images/lighting/hero-2.jpg",
  "/images/lighting/hero-3.jpg",
];

// ✅ Плейсхолдър (после ще ги сменим с твоите 20)
const products: Product[] = [
  {
    id: "leo",
    img: "/images/lighting/leo-f30-sr36.jpg",
    name: {
      bg: "Vivalux плафониера със сензор LEO F30 SR36",
      en: "Vivalux ceiling light with motion sensor LEO F30 SR36",
    },
    desc: {
      bg: "Плафониера със сензор за движение, подходяща за входове, коридори и общи части.",
      en: "Motion-sensor ceiling light for entrances and common areas.",
    },
    priceEur: 35,
    category: "interior",
    subcategory: "interiorCeiling",
    flickerFree: true,
  },
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
  },
  {
    id: "lucas",
    img: "/images/lighting/lucas-led-36w.jpg",
    name: {
      bg: "Vivalux LED плафон LUCAS 36W – черно + дърво",
      en: "Vivalux LED ceiling light LUCAS 36W – black + wood",
    },
    desc: {
      bg: "Декоративен LED плафон с избор на цветна температура.",
      en: "Decorative ceiling light with selectable color temperature.",
    },
    priceEur: 115,
    category: "interior",
    subcategory: "interiorCeiling",
    ra90: true,
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
    ip: "IP65",
  },
];

function Badge({
  children,
  lang,
}: {
  children: React.ReactNode;
  lang: "bg" | "en";
}) {
  // BG: по-“неон” на тъмно; EN: по-минималистично
  const cls =
    lang === "bg"
      ? "border-[#2d6b35] text-[#7dff94] bg-transparent"
      : "border-gray-200 text-gray-700 bg-gray-50";

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
  const onBg =
    lang === "bg"
      ? "border-[#2d6b35] text-[#7dff94] bg-[#0f1426]"
      : "border-black text-black bg-white";
  const offBg =
    lang === "bg"
      ? "border-[#2d6b35] text-white bg-transparent hover:bg-white/5"
      : "border-gray-200 text-gray-700 bg-white hover:bg-gray-50";

  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      aria-pressed={checked}
      className={`${base} ${checked ? onBg : offBg}`}
    >
      <span
        className={`h-4 w-4 rounded-sm border ${
          checked
            ? lang === "bg"
              ? "border-[#2d6b35] bg-[#2d6b35]"
              : "border-black bg-black"
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
  const cls =
    lang === "bg"
      ? "border-2 border-[#2d6b35] bg-transparent"
      : "border border-gray-200 bg-white";

  return <div className={`rounded-2xl p-4 ${cls}`}>{children}</div>;
}

export default function LightingPage() {
  const router = useRouter();
  const { lang } = useLanguage();
  const t = translations[lang]; // оставяме както ти е структурата

  const content =
    lang === "bg"
      ? {
          kicker: "SENSOR BUILD • ОСВЕТЛЕНИЕ",
          h1: "Осветление Vivalux – доставка и монтаж",
          lead:
            "Осветлението се подбира за жилищни, офис и общи части, като се съобразява комфортът за очите и реалните условия на обекта.",
          sectionTitle: "Подбрани осветители",
          note:
            "Посочените цени включват осветителното тяло, доставка и стандартен монтаж.",
          cta: "Запитване",
          // ново:
          heroCta1: "Разгледай каталога",
          heroCta2: "Запитване",
          whyTitle: "Защо Flicker-Free и Ra≥90?",
          whyFlickerTitle: "Без трептене (Flicker-Free)",
          whyFlickerText:
            "Невидимото трептене може да натоварва зрението при продължителен престой. Подбираме модели със стабилен светлинен поток за по-комфортна среда.",
          whyRaTitle: "Ra ≥ 90 (висок CRI)",
          whyRaText:
            "Високият цветопредавателен индекс прави цветовете по-естествени и пространството по-приятно. Това е ключово за интериори с висок естетически стандарт.",
          filtersTitle: "Филтри",
          onlyFlicker: "Само Flicker-Free",
          onlyRa: "Само Ra≥90",
          priceFrom: "Цена от",
          priceSub: "с включени доставка и монтаж",
          categoriesTitle: "Категории",
          categories: {
            interior: "Интериорно осветление",
            exterior: "Външно осветление",
            industrial: "Индустриално осветление",
            emergency: "Аварийно осветление",
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
          },
          metaTitle: "Осветление Vivalux – доставка и монтаж | Sensor Build",
          metaDesc: "Професионално LED осветление с включена доставка и монтаж.",
        }
      : {
          kicker: "SENSOR BUILD • LIGHTING",
          h1: "Vivalux Lighting – Supply & Installation",
          lead:
            "Lighting is selected for residential and commercial spaces with visual comfort and real site conditions in mind.",
          sectionTitle: "Selected fixtures",
          note:
            "Prices include the fixture, delivery and standard installation.",
          cta: "Request",
          // new:
          heroCta1: "View catalog",
          heroCta2: "Request",
          whyTitle: "Why Flicker-Free and Ra≥90?",
          whyFlickerTitle: "Flicker-Free",
          whyFlickerText:
            "Invisible flicker can increase eye strain over time. We select models with a stable light output for better visual comfort.",
          whyRaTitle: "Ra ≥ 90 (High CRI)",
          whyRaText:
            "High CRI delivers more natural colors and a better perception of materials and finishes — ideal for premium interiors.",
          filtersTitle: "Filters",
          onlyFlicker: "Flicker-Free only",
          onlyRa: "Ra≥90 only",
          priceFrom: "Price from",
          priceSub: "delivery & installation included",
          categoriesTitle: "Categories",
          categories: {
            interior: "Interior lighting",
            exterior: "Outdoor lighting",
            industrial: "Industrial lighting",
            emergency: "Emergency lighting",
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
          },
          metaTitle: "Vivalux Lighting – Supply & Installation | Sensor Build",
          metaDesc: "Professional LED lighting with delivery and installation included.",
        };

  // оставяме твоя подход за meta (работи, макар че после можем да го направим по Next metadata)
  if (typeof document !== "undefined") {
    document.title = content.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", content.metaDesc);
  }

  const [heroIndex, setHeroIndex] = useState(0);
  const [onlyFlicker, setOnlyFlicker] = useState(false);
  const [onlyRa, setOnlyRa] = useState(false);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      if (onlyFlicker && !p.flickerFree) return false;
      if (onlyRa && !p.ra90) return false;
      return true;
    });
  }, [onlyFlicker, onlyRa]);

  const tree = useMemo(() => {
    const out: Record<Category, Record<string, Product[]>> = {
      interior: {},
      exterior: {},
      industrial: {},
      emergency: {},
    };

    for (const p of filtered) {
      const sub = p.subcategory ?? "__root__";
      if (!out[p.category][sub]) out[p.category][sub] = [];
      out[p.category][sub].push(p);
    }
    return out;
  }, [filtered]);

  const goContacts = (p: Product) => {
    // както искаш: просто към контакти
    router.push("/contacts");
    // ако решиш по-късно да се подава продукт:
    // const name = lang === "bg" ? p.name.bg : p.name.en;
    // router.push(`/contacts?ref=lighting&product=${encodeURIComponent(name)}`);
  };

  const pageBg = lang === "bg" ? "bg-[#13182C] text-white" : "bg-white text-black";
  const mutedText = lang === "bg" ? "opacity-70" : "text-gray-600";
  const sectionBorder = lang === "bg" ? "border-[#2d6b35]" : "border-gray-200";

  return (
    <main className={`min-h-screen ${pageBg}`}>
      <section className="mx-auto max-w-7xl px-4 py-10">
        {/* back */}
        <div className="mb-6">
          <Link
            href="/"
            className={`inline-flex items-center gap-2 rounded-xl border px-4 py-2 text-sm font-semibold ${
              lang === "bg"
                ? "border-[#2d6b35] text-[#7dff94]"
                : "border-gray-200 text-black hover:bg-gray-50"
            }`}
          >
            ← {lang === "bg" ? "Назад" : "Back"}
          </Link>
        </div>

        {/* HERO */}
        <div className={`relative overflow-hidden rounded-3xl border ${lang === "bg" ? "border-[#2d6b35]/60" : "border-gray-200"}`}>
          <div className="relative h-[38vh] min-h-[320px]">
            <Image
              src={heroImages[heroIndex]}
              alt={content.h1}
              fill
              className="object-cover"
              priority
              sizes="100vw"
            />
            <div
              className={`absolute inset-0 ${
                lang === "bg" ? "bg-black/55" : "bg-black/25"
              }`}
            />
            <div className="absolute inset-0 flex items-end p-6 md:p-10">
              <div className="max-w-3xl">
                <p className={`text-sm ${lang === "bg" ? "opacity-80" : "text-white/90"}`}>
                  {content.kicker}
                </p>
                <h1 className="mt-3 text-3xl font-semibold md:text-5xl text-white">
                  {content.h1}
                </h1>
                <p className="mt-4 max-w-3xl text-white/85">
                  {content.lead}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href="#catalog"
                    className={`inline-flex items-center justify-center rounded-xl px-5 py-3 text-sm font-semibold ${
                      lang === "bg"
                        ? "border-2 border-[#2d6b35] text-[#7dff94] hover:border-[#4da855]"
                        : "bg-white text-black hover:bg-gray-100"
                    }`}
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
                          ? lang === "bg"
                            ? "border-[#2d6b35] bg-[#2d6b35]"
                            : "border-white bg-white"
                          : lang === "bg"
                            ? "border-white/30 bg-white/10"
                            : "border-white/40 bg-white/20"
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

        {/* FILTERS + CATALOG */}
        <section id="catalog" className="mt-12">
          <h2 className="text-xl font-semibold">{content.sectionTitle}</h2>
          <p className={`mt-2 ${mutedText}`}>{content.note}</p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <TogglePill
              checked={onlyFlicker}
              onChange={setOnlyFlicker}
              label={content.onlyFlicker}
              lang={lang}
            />
            <TogglePill
              checked={onlyRa}
              onChange={setOnlyRa}
              label={content.onlyRa}
              lang={lang}
            />
          </div>

          {/* Categories as accordion using <details> */}
          <div className="mt-8 space-y-4">
            {(Object.keys(content.categories) as Category[]).map((cat) => {
              // ако няма продукти в категорията -> не показваме
              const catObj = tree[cat];
              const hasAny = Object.keys(catObj).some((k) => (catObj[k]?.length ?? 0) > 0);
              if (!hasAny) return null;

              return (
                <details
                  key={cat}
                  open
                  className={`rounded-2xl border p-4 ${
                    lang === "bg" ? "border-[#2d6b35]" : "border-gray-200"
                  }`}
                >
                  <summary className="cursor-pointer select-none text-base font-semibold">
                    {content.categories[cat]}
                  </summary>

                  <div className="mt-5 space-y-8">
                    {/* подкатегории (ако има) */}
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
                      ] as Subcategory[]
                    )
                      .filter((sub) => (catObj[sub]?.length ?? 0) > 0)
                      .map((sub) => (
                        <div key={sub}>
                          <div className="mb-3 text-sm font-semibold">
                            {content.subs[sub]}
                          </div>

                          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                            {catObj[sub]!.map((p) => {
                              const name = lang === "bg" ? p.name.bg : p.name.en;
                              const desc = lang === "bg" ? p.desc.bg : p.desc.en;

                              return (
                                <article
                                  key={p.id}
                                  className={`rounded-2xl p-4 ${
                                    lang === "bg"
                                      ? "border-2 border-[#2d6b35]"
                                      : "border border-gray-200"
                                  }`}
                                >
                                  <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                                    <Image
                                      src={p.img}
                                      alt={name}
                                      fill
                                      className="object-cover"
                                      sizes="(max-width: 1024px) 50vw, 25vw"
                                    />
                                  </div>

                                  <div className="mt-3 flex flex-wrap gap-2">
                                    {p.flickerFree && <Badge lang={lang}>Flicker-Free</Badge>}
                                    {p.ra90 && <Badge lang={lang}>Ra≥90</Badge>}
                                    {p.ip && <Badge lang={lang}>{p.ip}</Badge>}
                                  </div>

                                  <h3 className="mt-3 text-base font-semibold">{name}</h3>
                                  <p className={`mt-2 text-sm ${mutedText}`}>{desc}</p>

                                  <div
                                    className={`mt-4 rounded-xl border p-3 ${
                                      lang === "bg"
                                        ? "border-2 border-[#2d6b35]"
                                        : "border border-gray-200 bg-gray-50"
                                    }`}
                                  >
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
                                        : "border border-black text-black hover:bg-black hover:text-white"
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

                    {/* ако има продукти без subcategory */}
                    {(catObj["__root__"]?.length ?? 0) > 0 ? (
                      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        {catObj["__root__"].map((p) => {
                          const name = lang === "bg" ? p.name.bg : p.name.en;
                          const desc = lang === "bg" ? p.desc.bg : p.desc.en;

                          return (
                            <article
                              key={p.id}
                              className={`rounded-2xl p-4 ${
                                lang === "bg"
                                  ? "border-2 border-[#2d6b35]"
                                  : "border border-gray-200"
                              }`}
                            >
                              <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-white">
                                <Image src={p.img} alt={name} fill className="object-cover" />
                              </div>
                              <h3 className="mt-4 text-base font-semibold">{name}</h3>
                              <p className={`mt-2 text-sm ${mutedText}`}>{desc}</p>
                              <button
                                onClick={() => goContacts(p)}
                                className={`mt-4 inline-flex w-full items-center justify-center rounded-xl px-4 py-2.5 text-sm font-semibold ${
                                  lang === "bg"
                                    ? "border-2 border-[#2d6b35] hover:text-[#4da855] hover:border-[#4da855]"
                                    : "border border-black text-black hover:bg-black hover:text-white"
                                }`}
                              >
                                {content.cta}
                              </button>
                            </article>
                          );
                        })}
                      </div>
                    ) : null}
                  </div>
                </details>
              );
            })}
          </div>

          {/* SEO block (кратко и чисто) */}
          <div
            className={`mt-10 rounded-2xl border p-6 ${
              lang === "bg" ? `border-[#2d6b35]` : "border-gray-200"
            }`}
          >
            <h3 className="text-base font-semibold">
              {lang === "bg"
                ? "Доставка и монтаж на LED осветление"
                : "LED lighting supply & installation"}
            </h3>
            <p className={`mt-2 text-sm ${mutedText}`}>
              {lang === "bg"
                ? "Предлагаме интериорно, външно, индустриално и аварийно LED осветление с доставка и монтаж. Подбираме модели Flicker-Free и с висок CRI (Ra≥90) за комфортна и премиум светлинна среда."
                : "We provide interior, outdoor, industrial and emergency LED lighting with supply and installation. We select Flicker-Free models and high CRI (Ra≥90) fixtures for premium visual comfort."}
            </p>
          </div>
        </section>
      </section>
    </main>
  );
}

"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const products = [
  {
    key: "leo",
    img: "/images/lighting/leo-f30-sr36.jpg.jpg",
  },
  {
    key: "bergamo",
    img: "/images/lighting/bergamo-gu10.jpg.jpg",
  },
  {
    key: "lucas",
    img: "/images/lighting/lucas-led-36w.jpg.jpg",
  },
  {
    key: "jex",
    img: "/images/lighting/jex-1200.jpg.jpg",
  },
] as const;

export default function LightingPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

  const content = lang === "bg"
    ? {
        kicker: "SENSOR BUILD • ОСВЕТЛЕНИЕ",
        h1: "Осветление Vivalux – доставка и монтаж",
        lead:
          "Осветлението се подбира за жилищни, офис и общи части, като се съобразява комфортът за очите и реалните условия на обекта.",
        sectionTitle: "Подбрани осветители",
        note:
          "Посочените цени са за осветителното тяло с включена доставка и стандартен монтаж.",
        priceLabel: "Цена с доставка и монтаж",
        cta: "Запитване",
        otherTitle: "Монтаж на осветители, избрани от клиента",
        otherText:
          "Ако клиентът вече е избрал осветително тяло, се извършва професионален монтаж независимо от марката.",
        items: [
          {
            name: "Vivalux плафониера със сензор LEO F30 SR36",
            desc:
              "Плафониера със сензор за движение, подходяща за входове, коридори и общи части. Осигурява автоматично включване и удобство при ежедневно ползване.",
            price: "от 35€ / бр. (доставка + монтаж)",
          },
          {
            name: "Vivalux фасаден аплик BERGAMO 1xGU10 – черно",
            desc:
              "Фасаден аплик с изчистен дизайн, подходящ за тераси, входове и външни пространства. Устойчив на атмосферни условия и подходящ за дългосрочна експлоатация.",
            price: "от 40€ / бр. (доставка + монтаж)",
          },
          {
            name: "Vivalux LED плафон LUCAS LED 36W – черно + дърво",
            desc:
              "Декоративен LED плафон с избор на цветна температура, подходящ за дневни, кухни и офис пространства. Съчетава функционалност и топъл визуален акцент.",
            price: "от 115€ / бр. (доставка + монтаж)",
          },
          {
            name: "Vivalux индустриално осветително тяло JEX PC BASE 222 LED – 1200 mm",
            desc:
              "Практично и надеждно осветително тяло за гаражи, складове, сервизни помещения и работни зони. Подходящо за пространства с повишени изисквания към осветеността.",
            price: "от 45€ / бр. (доставка + монтаж)",
          },
        ],
        metaTitle: "Осветление Vivalux – доставка и монтаж | Sensor Build",
        metaDesc:
          "Професионално LED осветление с включена доставка и монтаж. Подбрани осветители Vivalux и монтаж на осветители, избрани от клиента.",
      }
    : {
        kicker: "SENSOR BUILD • LIGHTING",
        h1: "Vivalux Lighting – Supply & Installation",
        lead:
          "Lighting is selected for residential, office and common areas, with visual comfort and real site conditions in mind.",
        sectionTitle: "Selected fixtures",
        note: "Prices include the fixture, delivery and standard installation.",
        priceLabel: "Supply & installation",
        cta: "Request",
        otherTitle: "Installation of customer-selected lighting",
        otherText:
          "If the client has already chosen a fixture, we provide professional installation regardless of brand.",
        items: [
          {
            name: "Vivalux ceiling light with motion sensor LEO F30 SR36",
            desc:
              "A motion-sensor ceiling light for entrances, corridors and common areas. Automatic switching for everyday convenience.",
            price: "from 35€ / pcs (delivery + installation)",
          },
          {
            name: "Vivalux outdoor wall light BERGAMO 1xGU10 – black",
            desc:
              "Minimal outdoor wall light for terraces and entrances. Weather-resistant and suitable for long-term use.",
            price: "from 40€ / pcs (delivery + installation)",
          },
          {
            name: "Vivalux LED ceiling light LUCAS 36W – black + wood",
            desc:
              "Decorative ceiling light with selectable color temperature, suitable for living rooms, kitchens and offices.",
            price: "from 115€ / pcs (delivery + installation)",
          },
          {
            name: "Vivalux industrial fixture JEX PC BASE 222 LED – 1200 mm",
            desc:
              "Practical lighting solution for garages, storage rooms and work areas with higher lighting needs.",
            price: "from 45€ / pcs (delivery + installation)",
          },
        ],
        metaTitle: "Vivalux Lighting – Supply & Installation | Sensor Build",
        metaDesc:
          "Professional LED lighting with delivery and installation included. Selected Vivalux fixtures and installation of customer-provided lighting.",
      };

  // Meta tags (client-side fallback). Ако искаш, ще го направим и server-side.
  if (typeof document !== "undefined") {
    document.title = content.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", content.metaDesc);
  }

  return (
    <main className={`min-h-screen ${lang === "bg" ? "bg-[#1A2342] text-white" : "bg-white text-black"}`}>
      <section className="relative overflow-hidden border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <p className={`${lang === "bg" ? "text-white/70" : "text-black/60"} text-sm tracking-wide`}>
            {content.kicker}
          </p>
          <h1 className="mt-3 text-3xl md:text-4xl font-semibold leading-tight">
            {content.h1}
          </h1>
          <p className={`mt-4 max-w-3xl ${lang === "bg" ? "text-white/75" : "text-black/70"}`}>
            {content.lead}
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/contacts"
              className={`rounded-2xl px-5 py-2.5 text-sm font-medium transition ${
                lang === "bg"
                  ? "bg-emerald-500/90 text-black hover:bg-emerald-400"
                  : "bg-[#2d6b35] text-white hover:bg-[#24592b]"
              }`}
            >
              {content.cta}
            </Link>

            <a
              href="#products"
              className={`rounded-2xl border px-5 py-2.5 text-sm font-medium transition ${
                lang === "bg"
                  ? "border-white/15 text-white/90 hover:border-white/30 hover:bg-white/5"
                  : "border-black/15 text-black/90 hover:border-black/30 hover:bg-black/5"
              }`}
            >
              {content.sectionTitle}
            </a>
          </div>
        </div>
      </section>

      <section id="products" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-xl font-semibold">{content.sectionTitle}</h2>
        <p className={`mt-2 max-w-3xl ${lang === "bg" ? "text-white/70" : "text-black/70"}`}>
          {content.note}
        </p>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((p, i) => (
        <article
  key={p.name}
  className={`group rounded-2xl border-2 p-4 transition ${
    lang === "bg"
      ? "border-[#2d6b35] bg-transparent hover:border-[#4da855]"
      : "border-[#2d6b35] bg-white hover:border-[#4da855]"
  }`}
>
              <div className={`relative aspect-[4/3] overflow-hidden rounded-xl ${lang === "bg" ? "bg-white/5" : "bg-black/5"}`}>
                <Image
                  src={products[i].img}
                  alt={p.name}
                  fill
                  className="object-cover transition duration-300 group-hover:scale-[1.02]"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
              </div>

              <h3 className="mt-4 text-base font-semibold leading-snug">{p.name}</h3>
              <p className={`mt-2 text-sm ${lang === "bg" ? "text-white/70" : "text-black/70"}`}>
                {p.desc}
              </p>

              <div
  className={`mt-4 rounded-xl border-2 p-3 ${
    lang === "bg"
      ? "border-[#2d6b35] bg-transparent"
      : "border-[#2d6b35] bg-white"
  }`}
>
                <p className={`text-xs ${lang === "bg" ? "text-white/60" : "text-black/60"}`}>
                  {content.priceLabel}
                </p>
                <p className="text-sm font-semibold">{p.price}</p>
              </div>

              <div className="mt-4">
         <Link
  href="/contacts"
  className={`inline-flex w-full items-center justify-center rounded-xl border-2 px-4 py-2.5 text-sm font-semibold transition ${
    lang === "bg"
      ? "border-[#2d6b35] text-white hover:border-[#4da855] hover:text-[#4da855]"
      : "border-[#2d6b35] text-black hover:border-[#4da855] hover:text-[#4da855]"
  }`}
>
                  {content.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-16">
        <div className={`rounded-2xl border p-6 md:p-8 ${lang === "bg" ? "border-white/10 bg-white/5" : "border-black/10 bg-black/5"}`}>
          <h2 className="text-xl font-semibold">{content.otherTitle}</h2>
          <p className={`mt-3 max-w-3xl ${lang === "bg" ? "text-white/70" : "text-black/70"}`}>
            {content.otherText}
          </p>
        </div>
      </section>
    </main>
  );
}

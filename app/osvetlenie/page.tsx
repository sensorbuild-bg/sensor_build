"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";

const products = [
  { key: "leo", img: "/images/lighting/leo-f30-sr36.jpg" },
  { key: "bergamo", img: "/images/lighting/bergamo-gu10.jpg" },
  { key: "lucas", img: "/images/lighting/lucas-led-36w.jpg" },
  { key: "jex", img: "/images/lighting/jex-1200.jpg" },
] as const;

export default function LightingPage() {
  const { lang } = useLanguage();
  const t = translations[lang];

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
          otherTitle: "Монтаж на осветители, избрани от клиента",
          otherText:
            "Ако клиентът вече е избрал осветително тяло, се извършва професионален монтаж независимо от марката.",
          items: [
            {
              name: "Vivalux плафониера със сензор LEO F30 SR36",
              desc:
                "Плафониера със сензор за движение, подходяща за входове, коридори и общи части.",
              priceMain: "Цена от 35€ / бр.",
              priceSub: "с включени доставка и монтаж",
            },
            {
              name: "Vivalux фасаден аплик BERGAMO 1xGU10 – черно",
              desc:
                "Фасаден аплик с изчистен дизайн, устойчив на атмосферни условия.",
              priceMain: "Цена от 40€ / бр.",
              priceSub: "с включени доставка и монтаж",
            },
            {
              name: "Vivalux LED плафон LUCAS 36W – черно + дърво",
              desc:
                "Декоративен LED плафон с избор на цветна температура.",
              priceMain: "Цена от 115€ / бр.",
              priceSub: "с включени доставка и монтаж",
            },
            {
              name:
                "Vivalux индустриално осветително тяло JEX PC BASE 222 LED – 1200 mm",
              desc:
                "Практично осветително тяло за гаражи, складове и работни зони.",
              priceMain: "Цена от 45€ / бр.",
              priceSub: "с включени доставка и монтаж",
            },
          ],
          metaTitle: "Осветление Vivalux – доставка и монтаж | Sensor Build",
          metaDesc:
            "Професионално LED осветление с включена доставка и монтаж.",
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
          otherTitle: "Installation of customer-selected lighting",
          otherText:
            "If the client has already chosen a fixture, we provide professional installation regardless of brand.",
          items: [
            {
              name:
                "Vivalux ceiling light with motion sensor LEO F30 SR36",
              desc:
                "Motion-sensor ceiling light for entrances and common areas.",
              priceMain: "Price from 35€ / pcs",
              priceSub: "delivery & installation included",
            },
            {
              name:
                "Vivalux outdoor wall light BERGAMO 1xGU10 – black",
              desc:
                "Minimal outdoor wall light, weather-resistant.",
              priceMain: "Price from 40€ / pcs",
              priceSub: "delivery & installation included",
            },
            {
              name:
                "Vivalux LED ceiling light LUCAS 36W – black + wood",
              desc:
                "Decorative ceiling light with selectable color temperature.",
              priceMain: "Price from 115€ / pcs",
              priceSub: "delivery & installation included",
            },
            {
              name:
                "Vivalux industrial fixture JEX PC BASE 222 LED – 1200 mm",
              desc:
                "Practical lighting solution for garages and work areas.",
              priceMain: "Price from 45€ / pcs",
              priceSub: "delivery & installation included",
            },
          ],
          metaTitle:
            "Vivalux Lighting – Supply & Installation | Sensor Build",
          metaDesc:
            "Professional LED lighting with delivery and installation included.",
        };

  if (typeof document !== "undefined") {
    document.title = content.metaTitle;
    const meta = document.querySelector('meta[name="description"]');
    if (meta) meta.setAttribute("content", content.metaDesc);
  }

  return (
    <main
      className={`min-h-screen ${
        lang === "bg"
          ? "bg-[#13182C] text-white"
          : "bg-white text-black"
      }`}
    >
      <section className="mx-auto max-w-7xl px-4 py-12">
        <p className="text-sm opacity-70">{content.kicker}</p>
        <h1 className="mt-3 text-3xl font-semibold">
          {content.h1}
        </h1>
        <p className="mt-4 max-w-3xl opacity-80">
          {content.lead}
        </p>
      </section>

      <section
        id="products"
        className="mx-auto max-w-7xl px-4 py-12"
      >
        <h2 className="text-xl font-semibold">
          {content.sectionTitle}
        </h2>
        <p className="mt-2 opacity-70">{content.note}</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {content.items.map((p, i) => (
            <article
              key={p.name}
              className="rounded-2xl border-2 border-[#2d6b35] p-4"
            >
              <div className="relative aspect-[4/3] overflow-hidden rounded-xl">
                <Image
                  src={products[i].img}
                  alt={p.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mt-4 text-base font-semibold">
                {p.name}
              </h3>
              <p className="mt-2 text-sm opacity-70">
                {p.desc}
              </p>

              <div className="mt-4 rounded-xl border-2 border-[#2d6b35] p-3">
                <p className="text-sm font-semibold">
                  {p.priceMain}
                </p>
                <p className="text-xs opacity-70">
                  {p.priceSub}
                </p>
              </div>

              <Link
                href="/contacts"
                className="mt-4 inline-flex w-full items-center justify-center rounded-xl border-2 border-[#2d6b35] px-4 py-2.5 text-sm font-semibold hover:text-[#4da855] hover:border-[#4da855]"
              >
                {content.cta}
              </Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

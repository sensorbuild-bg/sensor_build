'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

type ServiceItem = {
  title: string;
  desc: string;
  slug?: string;
  href?: string;
  longDesc?: string;
  images?: string[];
  content?: string[];
};

export default function ServicesClient() {
  const { lang } = useLanguage();
  const t = translations[lang].services;
  const isBg = lang === 'bg';
  const services = t.services as ServiceItem[];

  const orderedServices = [...services].sort((a, b) => {
    const aInterior = a.slug === 'vutreshni-remonti' || a.slug === 'interior-renovations';
    const bInterior = b.slug === 'vutreshni-remonti' || b.slug === 'interior-renovations';
    if (aInterior) return -1;
    if (bInterior) return 1;
    return 0;
  });

  const resolveHref = (service: ServiceItem) => {
    const titleLower = service.title.toLowerCase();
    const isLighting = titleLower.includes('освет') || titleLower.includes('lighting');
    const isInteriorRenovation =
      service.slug === 'vutreshni-remonti' ||
      service.slug === 'interior-renovations' ||
      titleLower.includes('вътрешни ремонти') ||
      titleLower.includes('interior renovations');

    if (isInteriorRenovation) return '/services/remont-na-apartament';
    if (isLighting) return '/osvetlenie';
    return service.href || `/services/${service.slug}`;
  };

  const resolveImage = (service: ServiceItem) => {
    if (service.images?.[0]) return service.images[0];

    const titleLower = service.title.toLowerCase();
    if (
      service.slug === 'vutreshni-remonti' ||
      service.slug === 'interior-renovations' ||
      titleLower.includes('вътрешни ремонти')
    ) {
      return '/project1/main.webp';
    }

    if (titleLower.includes('освет') || titleLower.includes('lighting')) {
      return '/images/lighting/hero-1.jpg';
    }

    return '/main.webp';
  };

  return (
    <div className={isBg ? 'bg-[#13182c]' : 'bg-white'}>
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1
              className={`text-3xl sm:text-4xl md:text-5xl font-noah-bold ${
                isBg ? 'text-white' : 'text-gray-900'
              }`}
            >
              {isBg
                ? 'Строителни и ремонтни услуги в София'
                : 'Construction and renovation services in Sofia'}
            </h1>

            <p
              className={`mt-4 text-base md:text-lg leading-relaxed ${
                isBg ? 'text-white/75' : 'text-gray-600'
              }`}
            >
              {isBg
                ? 'Изберете конкретна услуга или разгледайте цялостния ремонт на апартамент. На всяка страница ще намерите реални снимки и подробности за изпълнението.'
                : 'Choose a specific service or explore complete apartment renovation. Each page includes real photos and execution details.'}
            </p>
          </div>

          <div className="mt-9 grid grid-cols-1 gap-3 sm:gap-4 md:grid-cols-2 lg:grid-cols-3">
            {orderedServices.map((service, index) => {
              const href = resolveHref(service);
              const image = resolveImage(service);

              return (
                <Link
                  key={service.slug || `${service.title}-${index}`}
                  href={href}
                  className={`group flex min-h-[116px] overflow-hidden rounded-2xl border shadow-sm transition hover:-translate-y-0.5 hover:shadow-lg md:block ${
                    isBg
                      ? 'border-white/10 bg-[#1a2342]'
                      : 'border-gray-200 bg-white'
                  }`}
                >
                  <div className="relative w-28 shrink-0 overflow-hidden sm:w-32 md:aspect-[16/9] md:w-full">
                    <Image
                      src={image}
                      alt={`${service.title} – Sensor Build`}
                      fill
                      sizes="(max-width: 767px) 128px, (max-width: 1023px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      quality={75}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/25 to-transparent md:from-black/45" />
                  </div>

                  <div className="flex min-w-0 flex-1 items-center justify-between gap-3 p-4 md:items-start md:p-5">
                    <div className="min-w-0">
                      <h2
                        className={`text-base sm:text-lg md:text-xl font-semibold leading-snug ${
                          isBg ? 'text-white' : 'text-gray-900'
                        }`}
                      >
                        {service.title}
                      </h2>
                      <p
                        className={`mt-1.5 line-clamp-2 text-sm leading-relaxed md:mt-2 ${
                          isBg ? 'text-white/65' : 'text-gray-600'
                        }`}
                      >
                        {service.desc}
                      </p>
                    </div>

                    <span
                      className="mt-0.5 shrink-0 text-xl text-[#62b946] transition-transform group-hover:translate-x-1"
                      aria-hidden="true"
                    >
                      →
                    </span>
                  </div>
                </Link>
              );
            })}
          </div>

          <div
            className={`mt-10 rounded-2xl border px-5 py-6 text-center md:px-8 ${
              isBg
                ? 'border-white/10 bg-[#1a2342] text-white'
                : 'border-gray-200 bg-gray-50 text-gray-900'
            }`}
          >
            <p className="mx-auto max-w-2xl text-base md:text-lg">
              {isBg
                ? 'Не сте сигурни кои дейности са нужни? Опишете ни обекта и ще ви насочим към подходящото решение.'
                : 'Not sure which services you need? Tell us about the site and we will guide you to the right solution.'}
            </p>
            <Link
              href="/contacts"
              className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#388644] px-7 py-3.5 font-semibold text-white transition hover:bg-[#2d6b35]"
            >
              {isBg ? 'Заяви оглед' : 'Request a site visit'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

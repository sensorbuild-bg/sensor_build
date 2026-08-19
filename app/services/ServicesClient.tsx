'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import AnimatedDiv from '@/components/AnimatedDiv';

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

  const services = t.services as ServiceItem[];

  const lightingIndex = services.findIndex(
    (s) =>
      s.title.toLowerCase().includes('освет') ||
      s.title.toLowerCase().includes('lighting')
  );

  const orderedServices = [...services];

  if (lightingIndex > -1) {
    const [lighting] = orderedServices.splice(lightingIndex, 1);
    orderedServices.splice(1, 0, lighting);
  }

  return (
    <div className={`${lang === 'bg' ? 'bg-[#13182c]' : 'bg-white'}`}>
      <div className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1
              className={`text-4xl md:text-5xl font-noah-bold mb-4 ${
                lang === 'bg' ? 'text-white' : 'text-gray-900'
              }`}
            >
              {lang === 'bg'
                ? 'Строителни и ремонтни услуги в София'
                : 'Construction and renovation services in Sofia'}
            </h1>

            <p
              className={`text-lg max-w-3xl mx-auto ${
                lang === 'bg' ? 'text-white/90' : 'text-gray-600'
              }`}
            >
              {lang === 'bg'
                ? 'Извършваме цялостни и частични ремонти, електро- и ВиК инсталации, гипсокартон, шпакловки, боядисване, бани, настилки, замазки и подово отопление в София.'
                : 'We provide complete and partial renovations, electrical and plumbing installations, drywall, skimming, painting, bathrooms, flooring, screeds and underfloor heating in Sofia.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {orderedServices.map((service, index) => {
              const titleLower = service.title.toLowerCase();

              const isLighting =
                titleLower.includes('освет') ||
                titleLower.includes('lighting');

              const isInteriorRenovation =
                titleLower.includes('вътрешни ремонти') ||
                titleLower.includes('interior renovations') ||
                service.slug === 'vutreshni-remonti' ||
                service.slug === 'interior-renovations';

              const href = isInteriorRenovation
                ? '/services/remont-na-apartament'
                : isLighting
                  ? '/osvetlenie'
                  : service.href || `/services/${service.slug}`;

              const ctaText = isInteriorRenovation
                ? lang === 'bg'
                  ? 'Ремонт на апартамент'
                  : 'Apartment renovation'
                : isLighting
                  ? lang === 'bg'
                    ? 'Към осветление'
                    : 'Go to lighting'
                  : lang === 'bg'
                    ? `Виж ${service.title}`
                    : `View ${service.title}`;

              return (
                <Link
                  key={service.slug || index}
                  href={href}
                  className="block h-full group"
                >
                  <AnimatedDiv
                    className={`relative h-full min-h-[210px] rounded-lg p-6 transition-all duration-300 cursor-pointer
                      border-2 border-[#388644]
                      hover:border-[#62b946]
                      hover:shadow-[0_0_24px_rgba(98,185,70,0.28)]
                      hover:scale-[1.02]
                      ${lang === 'bg' ? 'bg-[#1a2342]' : 'bg-white'}
                    `}
                  >
                    <div className="flex h-full flex-col justify-between gap-8">
                      <div>
                        <h2
                          className={`text-xl md:text-2xl font-semibold mb-4 pr-10
                            ${lang === 'bg' ? 'text-white' : 'text-gray-900'}
                          `}
                        >
                          {service.title}
                        </h2>

                        <p
                          className={`text-base md:text-lg leading-relaxed ${
                            lang === 'bg' ? 'text-white/90' : 'text-gray-600'
                          }`}
                        >
                          {service.desc}
                        </p>
                      </div>

                      <div className="flex items-center justify-between pt-2">
                        <span className="text-[#62b946] font-semibold text-sm md:text-base">
                          {ctaText}
                        </span>

                        <span
                          className="w-10 h-10 rounded-full border border-[#62b946] text-[#62b946]
                          flex items-center justify-center text-xl transition-all duration-300
                          group-hover:bg-[#62b946] group-hover:text-white group-hover:translate-x-1"
                        >
                          →
                        </span>
                      </div>
                    </div>
                  </AnimatedDiv>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p
              className={`max-w-2xl mx-auto ${
                lang === 'bg' ? 'text-white' : 'text-gray-600'
              }`}
            >
              {t.miniText}
            </p>

            <p
              className={`max-w-2xl mx-auto mt-4 ${
                lang === 'bg' ? 'text-white' : 'text-gray-600'
              }`}
            >
              {t.contactText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

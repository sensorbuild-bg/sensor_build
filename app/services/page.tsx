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

export default function Services() {
  const { lang } = useLanguage();
  const t = translations[lang].services;

  const services = t.services as ServiceItem[];

  // Подреждане на осветлението второ
  const lightingIndex = services.findIndex((s) =>
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
            <h1 className={`text-4xl md:text-5xl font-noah-bold mb-4 ${lang === 'bg' ? 'text-white' : 'text-gray-900'}`}>
              {t.title}
            </h1>

            <p className={`text-lg max-w-3xl mx-auto ${lang === 'bg' ? 'text-white' : 'text-gray-600'}`}>
              {t.description}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {orderedServices.map((service, index) => {
              const isLighting =
                service.title.toLowerCase().includes('освет') ||
                service.title.toLowerCase().includes('lighting');

              const href = isLighting
                ? '/osvetlenie'
                : service.href || `/services/${service.slug}`;

              return (
                <Link
                  key={service.slug || index}
                  href={href}
                  className="block h-full group"
                >
                  <AnimatedDiv
                    className={`relative h-full rounded-lg p-6 transition-all duration-300 cursor-pointer
                      border-2 border-[#388644]
                      hover:shadow-[0_0_20px_rgba(56,134,68,0.25)]
                      hover:scale-[1.02]
                      ${lang === 'bg' ? 'bg-[#1a2342]' : 'bg-white'}
                    `}
                  >
                    <h3
                      className={`text-xl font-semibold mb-3 flex items-center justify-between
                        ${lang === 'bg' ? 'text-white' : 'text-gray-900'}
                      `}
                    >
                      {service.title}

                      <span className="text-[#62b946] text-lg ml-2 transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </h3>

                    <p className={lang === 'bg' ? 'text-white/90' : 'text-gray-600'}>
                      {service.desc}
                    </p>
                  </AnimatedDiv>
                </Link>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className={`max-w-2xl mx-auto ${lang === 'bg' ? 'text-white' : 'text-gray-600'}`}>
              {t.miniText}
            </p>

            <p className={`max-w-2xl mx-auto mt-4 ${lang === 'bg' ? 'text-white' : 'text-gray-600'}`}>
              {t.contactText}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import AnimatedDiv from '@/components/AnimatedDiv';

export default function Services() {
  const { lang } = useLanguage();
  const t = translations[lang].services;

  return (
    <div className={`py-16 md:py-24 ${lang === 'bg' ? 'bg-[#13182c]' : 'bg-white'}`}>
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
     {t.services.map((service, index) => {
  const isLighting =
    service.title.toLowerCase().includes('освет') ||
    service.title.toLowerCase().includes('lighting');

  const Card = (
    <AnimatedDiv
      className={`relative rounded-lg p-6 transition-all duration-300
        ${
          isLighting
            ? `
              border-2 border-[#62b946]
              shadow-[0_0_0_2px_rgba(98,185,70,0.25)]
              hover:shadow-[0_0_25px_rgba(98,185,70,0.35)]
              hover:scale-[1.02]
              cursor-pointer
            `
            : 'border-2 border-[#388644] hover:shadow-lg'
        }
        ${lang === 'bg' ? 'bg-[#1a2342]' : 'bg-white'}
      `}
    >
      <h3
        className={`text-xl font-semibold mb-3 flex items-center justify-between
          ${lang === 'bg' ? 'text-white' : 'text-gray-900'}
        `}
      >
        {service.title}

        {isLighting && (
          <span className="text-[#62b946] text-lg ml-2">→</span>
        )}
      </h3>

      <p className={lang === 'bg' ? 'text-white/90' : 'text-gray-600'}>
        {service.desc}
      </p>
    </AnimatedDiv>
  );

  return isLighting ? (
    <Link key={index} href="/osvetlenie" className="block">
      {Card}
    </Link>
  ) : (
    <div key={index}>{Card}</div>
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
  );
}

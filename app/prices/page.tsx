'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedDiv from '@/components/AnimatedDiv';

export default function PricesPage() {
  const { lang } = useLanguage();

  const isBg = lang === 'bg';

  return (
    <div className={`${isBg ? 'bg-[#13182c]' : 'bg-white'} py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* HEADER */}
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-5xl font-noah-bold mb-4 ${
              isBg ? 'text-white' : 'text-gray-900'
            }`}
          >
            {isBg ? 'Цени' : 'Prices'}
          </h1>

          <p
            className={`text-lg max-w-3xl mx-auto ${
              isBg ? 'text-white' : 'text-gray-600'
            }`}
          >
            {isBg
              ? 'Ремонтни дейности с включени материали.'
              : 'Estimated prices for renovation services including materials.'}
          </p>
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* REFRESH */}
          <AnimatedDiv
            className={`rounded-lg p-8 border-2 border-[#388644] ${
              isBg ? 'bg-[#1a2342]' : 'bg-white'
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-4 ${
                isBg ? 'text-white' : 'text-gray-900'
              }`}
            >
              {isBg ? 'Освежителен ремонт' : 'Refresh Renovation'}
            </h2>

            <p className="text-[#62b946] text-xl font-semibold mb-6">
              {isBg ? 'от 50€ до 150€ / м²' : 'from €50 to €150 / m²'}
            </p>

            <ul
              className={`space-y-2 ${isBg ? 'text-white/90' : 'text-gray-600'}`}
            >
              <li>
                •{' '}
                {isBg
                  ? 'Шпакловка (частична или цялостна)'
                  : 'Skimming (partial or full)'}
              </li>
              <li>• {isBg ? 'Боядисване' : 'Painting'}</li>
              <li>• {isBg ? 'Дребни ремонти' : 'Minor repairs'}</li>
              <li>
                •{' '}
                {isBg
                  ? 'Местене или смяна на ключове и контакти'
                  : 'Relocation or replacement of switches and sockets'}
              </li>
              <li>• {isBg ? 'Монтаж на осветление' : 'Lighting installation'}</li>
              <li>• {isBg ? 'Почистване' : 'Cleaning'}</li>
              <li>
                •{' '}
                {isBg
                  ? 'Други дейности според обекта'
                  : 'Other works depending on the project'}
              </li>
            </ul>
          </AnimatedDiv>

          {/* FULL */}
          <AnimatedDiv
            className={`rounded-lg p-8 border-2 border-[#62b946] ${
              isBg ? 'bg-[#1a2342]' : 'bg-white'
            }`}
          >
            <h2
              className={`text-2xl font-bold mb-4 ${
                isBg ? 'text-white' : 'text-gray-900'
              }`}
            >
              {isBg ? 'Основен ремонт' : 'Full Renovation'}
            </h2>

            <p className="text-[#62b946] text-xl font-semibold mb-6">
              {isBg ? 'от 250€ до 450€ / м²' : 'from €250 to €450 / m²'}
            </p>

            <ul
              className={`space-y-2 ${isBg ? 'text-white/90' : 'text-gray-600'}`}
            >
              <li>• {isBg ? 'Къртене и извозване' : 'Demolition and removal'}</li>
              <li>• {isBg ? 'Ел. инсталации' : 'Electrical installation'}</li>
              <li>• {isBg ? 'ВиК инсталации' : 'Plumbing installation'}</li>
              <li>• {isBg ? 'Гипсокартон' : 'Drywall works'}</li>
              <li>• {isBg ? 'Шпакловка' : 'Skimming'}</li>
              <li>• {isBg ? 'Боядисване' : 'Painting'}</li>
              <li>• {isBg ? 'Плочки и настилки' : 'Tiles and flooring'}</li>
              <li>• {isBg ? 'Бани' : 'Bathrooms'}</li>
              <li>
                •{' '}
                {isBg
                  ? 'Други дейности според обекта'
                  : 'Other works depending on the project'}
              </li>
            </ul>
          </AnimatedDiv>
        </div>

        {/* FOOTER TEXT + CTA */}
        <div className="text-center mt-16">
          <p
            className={`max-w-2xl mx-auto ${
              isBg ? 'text-white' : 'text-gray-600'
            }`}
          >
            {isBg
              ? 'Цените са ориентировъчни и зависят от състоянието на обекта, квадратурата и избраните материали.'
              : 'Prices are indicative and depend on the condition of the property, size, and selected materials.'}
          </p>

          <p
            className={`max-w-2xl mx-auto mt-4 ${
              isBg ? 'text-white' : 'text-gray-600'
            }`}
          >
            {isBg
              ? 'За точна оферта се свържете с нас.'
              : 'Contact us for a precise quotation.'}
          </p>

          <div className="mt-8">
            <Link
              href="/contacts"
              className="inline-flex items-center justify-center rounded-md bg-[#2d6b35] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#4da855] hover:scale-[1.02]"
            >
              {isBg ? 'Към контакти' : 'Go to Contacts'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

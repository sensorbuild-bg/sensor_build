'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedDiv from '@/components/AnimatedDiv';
import { trackEvent } from '@/lib/analytics';

export default function PricesClient() {
  const { lang } = useLanguage();
  const isBg = lang === 'bg';

  return (
    <div className={`${isBg ? 'bg-[#13182c]' : 'bg-white'} py-16 md:py-24`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1
            className={`text-4xl md:text-5xl font-noah-bold mb-4 ${
              isBg ? 'text-white' : 'text-gray-900'
            }`}
          >
            {isBg ? 'Цени за ремонт в София' : 'Renovation prices in Sofia'}
          </h1>

          <p
            className={`text-lg max-w-3xl mx-auto ${
              isBg ? 'text-white/90' : 'text-gray-600'
            }`}
          >
            {isBg
              ? 'Ориентировъчни цени за освежителен и основен ремонт. Крайната оферта се определя след оглед според състоянието, площта и необходимите дейности.'
              : 'Indicative prices for refresh and full renovations. The final quotation is prepared after a site visit according to the condition, size and required works.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
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

            <ul className={`space-y-2 ${isBg ? 'text-white/90' : 'text-gray-600'}`}>
              <li>• {isBg ? 'Шпакловка (частична или цялостна)' : 'Skimming (partial or full)'}</li>
              <li>• {isBg ? 'Боядисване' : 'Painting'}</li>
              <li>• {isBg ? 'Дребни ремонти' : 'Minor repairs'}</li>
              <li>• {isBg ? 'Местене или смяна на ключове и контакти' : 'Relocation or replacement of switches and sockets'}</li>
              <li>• {isBg ? 'Монтаж на осветление' : 'Lighting installation'}</li>
              <li>• {isBg ? 'Почистване' : 'Cleaning'}</li>
              <li>• {isBg ? 'Други дейности според обекта' : 'Other works depending on the project'}</li>
            </ul>
          </AnimatedDiv>

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

            <ul className={`space-y-2 ${isBg ? 'text-white/90' : 'text-gray-600'}`}>
              <li>• {isBg ? 'Къртене и извозване' : 'Demolition and removal'}</li>
              <li>• {isBg ? 'Ел. инсталации' : 'Electrical installation'}</li>
              <li>• {isBg ? 'ВиК инсталации' : 'Plumbing installation'}</li>
              <li>• {isBg ? 'Гипсокартон' : 'Drywall works'}</li>
              <li>• {isBg ? 'Шпакловка' : 'Skimming'}</li>
              <li>• {isBg ? 'Боядисване' : 'Painting'}</li>
              <li>• {isBg ? 'Плочки и настилки' : 'Tiles and flooring'}</li>
              <li>• {isBg ? 'Бани' : 'Bathrooms'}</li>
              <li>• {isBg ? 'Други дейности според обекта' : 'Other works depending on the project'}</li>
            </ul>
          </AnimatedDiv>

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
              {isBg ? 'Основен ремонт на баня' : 'Complete Bathroom Renovation'}
            </h2>

            <p className="text-[#62b946] text-xl font-semibold mb-2">
              {isBg ? 'от 4 500€ / баня' : 'from €4,500 / bathroom'}
            </p>
            <p className={`mb-6 text-sm leading-relaxed ${isBg ? 'text-white/65' : 'text-gray-500'}`}>
              {isBg
                ? 'Ориентир за баня в ново строителство или при обект без необходимост от основно къртене и извозване.'
                : 'Indicative price for a bathroom in new construction or a project without major demolition and removal.'}
            </p>

            <ul className={`space-y-3 ${isBg ? 'text-white/90' : 'text-gray-600'}`}>
              <li>• {isBg ? 'ВиК и електроинсталации' : 'Plumbing and electrical installations'}</li>
              <li>• {isBg ? 'Предстенни обшивки, куфари и ревизии' : 'Wall linings, service boxes and access panels'}</li>
              <li>• {isBg ? 'Хидроизолация на мокрите зони' : 'Waterproofing of wet areas'}</li>
              <li>• {isBg ? 'Окачен таван и подготовка за осветление' : 'Suspended ceiling and lighting preparation'}</li>
              <li>• {isBg ? 'Полагане на стенни и подови плочки' : 'Wall and floor tiling'}</li>
              <li>• {isBg ? 'Монтаж на санитария и мебели' : 'Installation of sanitary ware and furniture'}</li>
            </ul>

            <p className={`mt-5 text-sm leading-relaxed ${isBg ? 'text-white/65' : 'text-gray-500'}`}>
              {isBg
                ? 'При стара баня с къртене, демонтаж, извозване и допълнителна подготовка цената се определя индивидуално след оглед.'
                : 'For an existing bathroom requiring demolition, removal and additional preparation, the price is determined individually after a site visit.'}
            </p>

            <Link
              href="/projects/zavarshena-banya"
              onClick={() => trackEvent('bathroom_project_from_prices_click', { location: 'bathroom_price_card' })}
              className="mt-7 inline-flex items-center text-sm font-semibold text-[#62b946] hover:underline"
            >
              {isBg ? 'Виж завършен проект →' : 'View completed project →'}
            </Link>
          </AnimatedDiv>
        </div>

        <div className="text-center mt-16">
          <p className={`max-w-2xl mx-auto ${isBg ? 'text-white' : 'text-gray-600'}`}>
            {isBg
              ? 'Цените са ориентировъчни и зависят от състоянието на обекта, квадратурата, обхвата на работите и избраните материали.'
              : 'Prices are indicative and depend on the condition of the property, size, scope of works and selected materials.'}
          </p>

          <p className={`max-w-2xl mx-auto mt-4 ${isBg ? 'text-white' : 'text-gray-600'}`}>
            {isBg
              ? 'За точна оферта се свържете с нас и заявете оглед.'
              : 'Contact us and request a site visit for a precise quotation.'}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/services/remont-na-apartament"
              className="inline-flex items-center justify-center rounded-md border border-[#62b946] px-6 py-3 text-sm font-semibold text-[#62b946] transition-all duration-200 hover:bg-[#62b946] hover:text-white"
            >
              {isBg ? 'Ремонт на апартамент' : 'Apartment renovation'}
            </Link>
            <Link
              href="/contacts"
              onClick={() => trackEvent('prices_request_visit_click', { location: 'prices_footer' })}
              className="inline-flex items-center justify-center rounded-md bg-[#2d6b35] px-6 py-3 text-sm font-semibold text-white transition-all duration-200 hover:bg-[#4da855] hover:scale-[1.02]"
            >
              {isBg ? 'Заяви оглед' : 'Request a site visit'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

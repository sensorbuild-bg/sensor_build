'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import AnimatedDiv from '@/components/AnimatedDiv';

export default function HowWeWork() {
  const { lang } = useLanguage();
  const t = translations[lang].howWeWork;

  const steps = [
    { number: '1', ...t.step1 },
    { number: '2', ...t.step2 },
    { number: '3', ...t.step3 },
    { number: '4', ...t.step4 },
  ];

  const isBg = lang === 'bg';

  const preparationItems = isBg
    ? [
        { title: 'Какво ще ремонтираме', text: 'Помещенията и приблизителната площ, дали жилището е ново строителство или се използва, както и какво трябва да се демонтира.' },
        { title: 'Промени в разпределението и инсталациите', text: 'Желаните позиции за мивка, пералня, контакти, осветление и други точки, които могат да изискват нови трасета.' },
        { title: 'Избор на покрития', text: 'Ако вече имате предпочитани плочки, настилки, мебели или примерни снимки, те помагат да уточним детайлите.' },
        { title: 'Достъп и организация', text: 'Възможност за оглед, достъп до обекта и особености, свързани с етаж, общи части и доставки.' },
      ]
    : [
        { title: 'Scope of works', text: 'Rooms, approximate floor area, whether the property is new or occupied, and which existing finishes may need removing.' },
        { title: 'Layout and service changes', text: 'Desired locations for basins, washing machines, sockets, lights and any points requiring new service routes.' },
        { title: 'Finish preferences', text: 'Preferred tiles, floors, furnishings or reference photos can help clarify quantities and details.' },
        { title: 'Access and logistics', text: 'Site access, available inspection times and practical constraints relating to floors, shared areas and deliveries.' },
      ];

  const sequence = isBg
    ? [
        { title: 'Преди затваряне на стените', text: 'Инсталационните трасета се уточняват преди окончателните обшивки, тавани и облицовки, за да се ограничат ненужните преработки.' },
        { title: 'Преди довършителните покрития', text: 'Проверява се състоянието на основите; замазки, шпакловки и хидроизолация се изпълняват според избраната система и необходимата технологична последователност.' },
        { title: 'Преди предаване', text: 'Завършващите връзки, монтажите и детайлите се преглеждат спрямо договорения обхват. Конкретните дейности и последователност се уточняват за всеки обект.' },
      ]
    : [
        { title: 'Before walls are closed', text: 'Installation routes are coordinated before wall linings, ceilings and final finishes to reduce unnecessary rework.' },
        { title: 'Before finishing layers', text: 'Substrates are assessed, with screeds, fillers and waterproofing applied in a sequence suitable for the selected materials.' },
        { title: 'Before handover', text: 'Junctions, fittings and finishing details are reviewed against the agreed scope. The actual workflow is determined for each property.' },
      ];

  return (
    <div className={`py-16 md:py-24 ${lang === 'bg' ? 'bg-[#13182c]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className={`text-4xl md:text-5xl font-noah-bold mb-4 ${lang === 'bg' ? 'text-white' : 'text-gray-900'}`}>
            {lang === 'bg' ? 'Как работим при ремонт в София' : 'How we work on renovations in Sofia'}
          </h1>
          <p className={`text-lg max-w-3xl mx-auto leading-relaxed ${lang === 'bg' ? 'text-white/80' : 'text-gray-600'}`}>
            {lang === 'bg'
              ? 'Следваме ясен процес от първоначалния оглед и офертата до изпълнението по етапи и финалното предаване на обекта.'
              : 'We follow a clear process from the initial site visit and quotation through staged execution and final handover.'}
          </p>
        </div>

        <div className="space-y-12">
          {steps.map((step, index) => (
            <AnimatedDiv key={step.number} className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0" aria-hidden="true">
                <div className="w-20 h-20 bg-[#388644] rounded-full flex items-center justify-center">
                  <span className="text-white text-3xl font-bold">{step.number}</span>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden md:block w-1 h-24 bg-[#388644] mx-auto mt-4" />
                )}
              </div>

              <div className="flex-1">
                <h2 className={`text-2xl md:text-3xl font-semibold mb-4 ${lang === 'bg' ? 'text-white' : 'text-gray-900'}`}>
                  {step.title}
                </h2>
                <p className={`text-lg leading-relaxed ${lang === 'bg' ? 'text-white/90' : 'text-gray-600'}`}>
                  {step.description}
                </p>
              </div>
            </AnimatedDiv>
          ))}
        </div>

        <section aria-labelledby="prepare-renovation-visit" className="mt-16 md:mt-20">
          <h2 id="prepare-renovation-visit" className={`text-2xl font-noah-bold md:text-4xl ${isBg ? 'text-white' : 'text-gray-900'}`}>
            {isBg ? 'Какво е полезно да подготвите преди огледа?' : 'What should you prepare before a site visit?'}
          </h2>
          <p className={`mt-3 max-w-4xl leading-relaxed ${isBg ? 'text-white/75' : 'text-gray-600'}`}>
            {isBg
              ? 'За да обсъдим реалния обхват на ремонта, не е нужно да имате готов проект за всеки детайл. Следната информация улеснява първоначалния разговор:'
              : 'You do not need a fully designed project to discuss your renovation. The following information helps make the first conversation useful:'}
          </p>
          <ul className="mt-6 grid gap-4 md:grid-cols-2">
            {preparationItems.map((item) => (
              <li key={item.title} className={`rounded-2xl border p-5 ${isBg ? 'border-white/10 bg-[#1a2342]' : 'border-gray-200 bg-gray-50'}`}>
                <h3 className={`font-semibold ${isBg ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${isBg ? 'text-white/70' : 'text-gray-600'}`}>{item.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section aria-labelledby="renovation-coordination" className="mt-12 md:mt-16">
          <h2 id="renovation-coordination" className={`text-2xl font-noah-bold md:text-3xl ${isBg ? 'text-white' : 'text-gray-900'}`}>
            {isBg ? 'Как координираме свързаните ремонтни дейности' : 'How renovation tasks are coordinated'}
          </h2>
          <div className="mt-6 grid gap-4 lg:grid-cols-3">
            {sequence.map((item) => (
              <div key={item.title} className={`rounded-2xl border p-5 ${isBg ? 'border-white/10 bg-[#1a2342]' : 'border-gray-200 bg-gray-50'}`}>
                <h3 className={`font-semibold ${isBg ? 'text-white' : 'text-gray-900'}`}>{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${isBg ? 'text-white/70' : 'text-gray-600'}`}>{item.text}</p>
              </div>
            ))}
          </div>
        </section>

        <section className={`mt-12 rounded-2xl border p-6 md:mt-16 md:p-8 ${isBg ? 'border-white/10 bg-[#1a2342] text-white' : 'border-gray-200 bg-gray-50 text-gray-900'}`}>
          <h2 className="text-2xl font-semibold">{isBg ? 'Вижте услугите и реалните изпълнения' : 'Explore our services and completed projects'}</h2>
          <p className={`mt-3 max-w-4xl leading-relaxed ${isBg ? 'text-white/75' : 'text-gray-600'}`}>
            {isBg
              ? 'За конкретна оферта са важни обемът и състоянието на обекта. Можете да разгледате дейностите, снимките от изпълнените обекти и ориентировъчните цени, преди да ни изпратите запитване.'
              : 'The scope and current condition of the property shape the quotation. Browse the service details, completed site photographs and indicative pricing before contacting us.'}
          </p>
          <nav aria-label={isBg ? 'Полезни връзки при планиране на ремонт' : 'Useful renovation planning links'} className="mt-5 flex flex-wrap gap-x-6 gap-y-4">
            <Link href="/services/remont-na-apartament" className="font-semibold text-[#62b946] hover:underline">{isBg ? 'Ремонт на апартамент' : 'Apartment renovation'} →</Link>
            <Link href="/services/bani" className="font-semibold text-[#62b946] hover:underline">{isBg ? 'Ремонт на баня' : 'Bathroom renovation'} →</Link>
            <Link href="/projects/zavarshena-banya" className="font-semibold text-[#62b946] hover:underline">{isBg ? 'Етапи от реален ремонт на баня' : 'Actual bathroom renovation stages'} →</Link>
            <Link href="/prices" className="font-semibold text-[#62b946] hover:underline">{isBg ? 'Ориентировъчни цени' : 'Indicative prices'} →</Link>
            <Link href="/contacts" className="font-semibold text-[#62b946] hover:underline">{isBg ? 'Заяви оглед' : 'Request a site visit'} →</Link>
          </nav>
        </section>
      </div>
    </div>
  );
}

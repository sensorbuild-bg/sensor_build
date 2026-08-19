'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import AnimatedDiv from '@/components/AnimatedDiv';

export default function RemontNaApartamentClient() {
  const { lang } = useLanguage();
  const isBg = lang === 'bg';

  const stages = isBg
    ? [
        {
          title: 'Оглед и планиране',
          text: 'Започваме с оглед на място, уточняване на желаните промени и подреждане на ремонтните дейности в логична последователност.',
        },
        {
          title: 'Демонтаж и подготовка',
          text: 'При необходимост изпълняваме демонтажни и подготвителни работи, защита на запазваните елементи и подготовка на основите за следващите етапи.',
        },
        {
          title: 'Електро и ВиК инсталации',
          text: 'Изграждаме или преработваме електрическите и ВиК инсталациите според новото разпределение и нуждите на жилището.',
        },
        {
          title: 'Стени, тавани и подове',
          text: 'Изпълняваме гипсокартон, корекции на основите, шпакловки, замазки и подготовка за последващите довършителни работи.',
        },
        {
          title: 'Бани, плочки и настилки',
          text: 'Работим по мокрите помещения, хидроизолацията, облицовките и настилките, като следим нивата и връзките между отделните материали.',
        },
        {
          title: 'Боядисване и финално предаване',
          text: 'Завършваме с боядисване, монтаж на финални елементи, проверка на изпълненото и чисто предаване на обекта.',
        },
      ]
    : [
        {
          title: 'Site visit and planning',
          text: 'We start with an on-site visit, clarify the required changes and arrange the renovation activities in a logical sequence.',
        },
        {
          title: 'Demolition and preparation',
          text: 'Where necessary, we carry out demolition and preparation works, protect retained elements and prepare the surfaces for the next stages.',
        },
        {
          title: 'Electrical and plumbing installations',
          text: 'We build or modify the electrical and plumbing systems according to the new layout and the needs of the property.',
        },
        {
          title: 'Walls, ceilings and floors',
          text: 'We carry out drywall works, surface corrections, skimming, screeds and preparation for subsequent finishing works.',
        },
        {
          title: 'Bathrooms, tiles and flooring',
          text: 'We work on wet areas, waterproofing, tiling and flooring while coordinating levels and transitions between materials.',
        },
        {
          title: 'Painting and final handover',
          text: 'We finish with painting, installation of final elements, a review of the completed work and a clean handover.',
        },
      ];

  const includedServices = [
    {
      title: isBg ? 'Електроинсталации' : 'Electrical installations',
      href: '/services/el-instalacii',
    },
    {
      title: isBg ? 'ВиК инсталации' : 'Plumbing installations',
      href: '/services/vik-instalacii',
    },
    {
      title: isBg ? 'Гипсокартон' : 'Drywall',
      href: '/services/gipsokarton',
    },
    {
      title: isBg ? 'Шпакловки' : 'Skimming',
      href: '/services/shpaklovki',
    },
    {
      title: isBg ? 'Боядисване' : 'Painting',
      href: '/services/boyadisvane',
    },
    {
      title: isBg ? 'Ремонт на баня' : 'Bathroom renovation',
      href: '/services/bani',
    },
    {
      title: isBg ? 'Подови замазки' : 'Floor screeds',
      href: '/services/zamazki',
    },
    {
      title: isBg ? 'Подови настилки' : 'Floor coverings',
      href: '/services/podovi-nastilki',
    },
  ];

  return (
    <div className={isBg ? 'bg-[#13182c] text-white' : 'bg-white text-gray-900'}>
      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/services"
            className="inline-block mb-8 text-[#62b946] font-semibold hover:underline"
          >
            ← {isBg ? 'Назад към услугите' : 'Back to services'}
          </Link>

          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-noah-bold">
              {isBg
                ? 'Ремонт на апартамент в София'
                : 'Apartment renovation in Sofia'}
            </h1>

            <p
              className={`mt-6 text-xl md:text-2xl leading-relaxed ${
                isBg ? 'text-white/85' : 'text-gray-600'
              }`}
            >
              {isBg
                ? 'Sensor Build извършва цялостни и частични ремонти на апартаменти в София – от първоначалния оглед и подготовката до инсталациите, стените, подовете и финалното предаване.'
                : 'Sensor Build carries out complete and partial apartment renovations in Sofia, from the initial site visit and preparation to installations, walls, floors and final handover.'}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contacts"
                className="rounded-xl bg-[#388644] px-8 py-4 text-white text-lg font-semibold transition-colors hover:bg-[#2d6b35]"
              >
                {isBg ? 'Заяви оглед' : 'Request a site visit'}
              </Link>

              <Link
                href="/prices"
                className={`rounded-xl border px-8 py-4 text-lg font-semibold transition-colors ${
                  isBg
                    ? 'border-white/20 text-white hover:bg-white/10'
                    : 'border-gray-300 text-gray-900 hover:bg-gray-100'
                }`}
              >
                {isBg ? 'Виж ориентировъчни цени' : 'View indicative prices'}
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={isBg ? 'bg-[#1a2342] py-16 md:py-24' : 'bg-gray-50 py-16 md:py-24'}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-noah-bold">
              {isBg ? 'Какво включва цялостният ремонт?' : 'What does a complete renovation include?'}
            </h2>
            <p className={`mt-5 text-lg leading-relaxed ${isBg ? 'text-white/75' : 'text-gray-600'}`}>
              {isBg
                ? 'Конкретният обхват се определя след оглед, но при основен ремонт обикновено координираме няколко свързани строително-ремонтни дейности.'
                : 'The exact scope is defined after a site visit, but a full renovation usually requires coordination between several related construction and finishing activities.'}
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage, index) => (
              <AnimatedDiv
                key={stage.title}
                className={`rounded-2xl border p-6 ${
                  isBg
                    ? 'bg-[#13182c] border-white/10'
                    : 'bg-white border-gray-200'
                }`}
              >
                <div className="text-[#62b946] text-2xl font-bold mb-3">
                  {String(index + 1).padStart(2, '0')}
                </div>
                <h2 className="text-xl font-semibold mb-3">{stage.title}</h2>
                <p className={isBg ? 'text-white/75 leading-relaxed' : 'text-gray-600 leading-relaxed'}>
                  {stage.text}
                </p>
              </AnimatedDiv>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <h2 className="text-3xl md:text-5xl font-noah-bold">
                {isBg ? 'Един изпълнител, свързани етапи' : 'One contractor, coordinated stages'}
              </h2>
              <p className={`mt-6 text-lg leading-relaxed ${isBg ? 'text-white/80' : 'text-gray-600'}`}>
                {isBg
                  ? 'При ремонт на апартамент отделните дейности са пряко свързани. Разположението на ВиК влияе върху банята и кухнята, електрическите точки трябва да се съобразят с обзавеждането, а нивата на замазките и настилките трябва да се планират предварително. Затова работим по последователен план, вместо всяка дейност да се разглежда отделно.'
                  : 'During an apartment renovation, the different activities are directly connected. Plumbing affects bathrooms and kitchens, electrical points must match the furniture layout, and floor levels need to be coordinated in advance. We therefore work according to a consistent plan rather than treating every activity separately.'}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {includedServices.map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className={`rounded-xl border p-5 font-semibold transition-all hover:-translate-y-0.5 hover:border-[#62b946] ${
                    isBg
                      ? 'border-white/10 bg-[#1a2342] text-white'
                      : 'border-gray-200 bg-gray-50 text-gray-900'
                  }`}
                >
                  {service.title} <span className="text-[#62b946]">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={isBg ? 'bg-[#1a2342] py-16 md:py-24' : 'bg-gray-50 py-16 md:py-24'}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-noah-bold">
            {isBg ? 'Колко струва ремонт на апартамент?' : 'How much does an apartment renovation cost?'}
          </h2>
          <p className={`mt-6 text-lg leading-relaxed ${isBg ? 'text-white/80' : 'text-gray-600'}`}>
            {isBg
              ? 'Цената зависи от състоянието на имота, площта, необходимите демонтажи, промените по инсталациите, избраните материали и обхвата на довършителните работи. След оглед подготвяме оферта по дейности, за да е ясно какво е включено.'
              : 'The price depends on the condition and size of the property, demolition requirements, changes to installations, selected materials and the scope of finishing works. After a site visit, we prepare an itemised offer so the included work is clear.'}
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/prices"
              className="rounded-xl bg-[#388644] px-8 py-4 text-white text-lg font-semibold hover:bg-[#2d6b35] transition-colors"
            >
              {isBg ? 'Ориентировъчни цени' : 'Indicative prices'}
            </Link>
            <Link
              href="/contacts"
              className={`rounded-xl border px-8 py-4 text-lg font-semibold transition-colors ${
                isBg
                  ? 'border-white/20 text-white hover:bg-white/10'
                  : 'border-gray-300 text-gray-900 hover:bg-white'
              }`}
            >
              {isBg ? 'Свържи се с нас' : 'Contact us'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

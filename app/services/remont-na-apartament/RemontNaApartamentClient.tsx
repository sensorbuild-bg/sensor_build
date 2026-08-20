'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RemontNaApartamentClient() {
  const { lang } = useLanguage();
  const isBg = lang === 'bg';

  const includedServices = [
    { title: isBg ? 'Електроинсталации' : 'Electrical installations', href: '/services/el-instalacii' },
    { title: isBg ? 'ВиК инсталации' : 'Plumbing installations', href: '/services/vik-instalacii' },
    { title: isBg ? 'Гипсокартон' : 'Drywall', href: '/services/gipsokarton' },
    { title: isBg ? 'Шпакловки' : 'Skimming', href: '/services/shpaklovki' },
    { title: isBg ? 'Боядисване' : 'Painting', href: '/services/boyadisvane' },
    { title: isBg ? 'Ремонт на баня' : 'Bathroom renovation', href: '/services/bani' },
    { title: isBg ? 'Подови замазки' : 'Floor screeds', href: '/services/zamazki' },
    { title: isBg ? 'Подови настилки' : 'Floor coverings', href: '/services/podovi-nastilki' },
  ];

  const scope = isBg
    ? [
        { title: 'Инсталации', text: 'Електро и ВиК според новото разпределение и нуждите на жилището.' },
        { title: 'Основи и довършване', text: 'Гипсокартон, шпакловки, замазки, боядисване, плочки и настилки.' },
        { title: 'Координация', text: 'Последователно изпълнение на свързаните дейности и контрол на детайлите.' },
      ]
    : [
        { title: 'Installations', text: 'Electrical and plumbing works according to the new layout and property needs.' },
        { title: 'Surfaces and finishes', text: 'Drywall, skimming, screeds, painting, tiles and flooring.' },
        { title: 'Coordination', text: 'Sequenced execution of connected works with attention to details.' },
      ];

  return (
    <div className={isBg ? 'bg-[#13182c] text-white' : 'bg-white text-gray-900'}>
      <section className="py-10 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:gap-12">
            <div>
              <h1 className="text-3xl sm:text-4xl md:text-6xl font-noah-bold leading-tight">
                {isBg ? 'Ремонт на апартамент в София' : 'Apartment renovation in Sofia'}
              </h1>
              <p className={`mt-5 max-w-2xl text-lg md:text-xl leading-relaxed ${isBg ? 'text-white/80' : 'text-gray-600'}`}>
                {isBg
                  ? 'Цялостни и частични ремонти – от инсталациите и подготовката до завършения интериор.'
                  : 'Complete and partial renovations, from installations and preparation to the finished interior.'}
              </p>
              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <Link href="/contacts" className="rounded-xl bg-[#388644] px-7 py-3.5 text-center font-semibold text-white transition hover:bg-[#2d6b35]">
                  {isBg ? 'Заяви оглед' : 'Request a site visit'}
                </Link>
                <Link href="/projects" className={`rounded-xl border px-7 py-3.5 text-center font-semibold transition ${isBg ? 'border-white/20 text-white hover:bg-white/10' : 'border-gray-300 text-gray-900 hover:bg-gray-100'}`}>
                  {isBg ? 'Виж реални проекти' : 'View real projects'}
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative col-span-2 aspect-[16/9] overflow-hidden rounded-2xl shadow-xl">
                <Image src="/project1/main.webp" alt={isBg ? 'Ремонт на апартамент от Sensor Build' : 'Apartment renovation by Sensor Build'} fill sizes="(max-width: 1023px) 100vw, 55vw" className="object-cover" quality={75} preload />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image src="/project2/20250806_190332_main-ezgif.com-jpg-to-webp-converter.webp" alt={isBg ? 'Електроинсталация при ремонт на апартамент' : 'Electrical installation during apartment renovation'} fill sizes="(max-width: 1023px) 50vw, 28vw" className="object-cover" quality={75} />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-lg">
                <Image src="/services/gipsokarton/main-gipsokarton.webp" alt={isBg ? 'Гипсокартон при ремонт на апартамент' : 'Drywall during apartment renovation'} fill sizes="(max-width: 1023px) 50vw, 28vw" className="object-cover" quality={75} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={isBg ? 'bg-[#1a2342] py-10 md:py-14' : 'bg-gray-50 py-10 md:py-14'}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-3xl md:text-4xl font-noah-bold">
            {isBg ? 'Какво можем да поемем?' : 'What can we take care of?'}
          </h2>
          <div className="mt-7 grid gap-3 md:grid-cols-3">
            {scope.map((item) => (
              <div key={item.title} className={`rounded-2xl border p-5 ${isBg ? 'border-white/10 bg-[#13182c]' : 'border-gray-200 bg-white'}`}>
                <h3 className="text-xl font-semibold">{item.title}</h3>
                <p className={`mt-2 text-sm leading-relaxed ${isBg ? 'text-white/70' : 'text-gray-600'}`}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-10 md:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-noah-bold">
                {isBg ? 'Свързани дейности, един план' : 'Connected works, one plan'}
              </h2>
              <p className={`mt-4 text-base md:text-lg leading-relaxed ${isBg ? 'text-white/75' : 'text-gray-600'}`}>
                {isBg
                  ? 'При цялостен ремонт инсталациите, нивата, стените и настилките влияят едни на други. Затова подреждаме дейностите в логична последователност, вместо да ги разглеждаме като отделни задачи.'
                  : 'In a complete renovation, installations, levels, walls and flooring affect each other. We therefore arrange the works in a logical sequence rather than treating them as isolated tasks.'}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 sm:gap-3">
              {includedServices.map((service) => (
                <Link key={service.href} href={service.href} className={`rounded-xl border p-3 text-sm font-semibold transition hover:border-[#62b946] sm:p-4 ${isBg ? 'border-white/10 bg-[#1a2342] text-white' : 'border-gray-200 bg-gray-50 text-gray-900'}`}>
                  {service.title}<span className="ml-1 text-[#62b946]" aria-hidden="true">→</span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className={isBg ? 'bg-[#1a2342] py-10 md:py-14' : 'bg-gray-50 py-10 md:py-14'}>
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-noah-bold">
            {isBg ? 'Цена за ремонт на апартамент' : 'Apartment renovation price'}
          </h2>
          <p className={`mt-4 text-base md:text-lg leading-relaxed ${isBg ? 'text-white/75' : 'text-gray-600'}`}>
            {isBg
              ? 'Крайната цена зависи от състоянието, площта и обхвата на работите. След оглед подготвяме ясна оферта по дейности.'
              : 'The final price depends on the condition, size and scope of works. After a site visit, we prepare a clear itemised quotation.'}
          </p>
          <div className="mt-6 flex flex-col sm:flex-row justify-center gap-3">
            <Link href="/prices" className="rounded-xl border border-[#62b946] px-7 py-3.5 font-semibold text-[#62b946] transition hover:bg-[#62b946] hover:text-white">
              {isBg ? 'Ориентировъчни цени' : 'Indicative prices'}
            </Link>
            <Link href="/contacts" className="rounded-xl bg-[#388644] px-7 py-3.5 font-semibold text-white transition hover:bg-[#2d6b35]">
              {isBg ? 'Свържи се с нас' : 'Contact us'}
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

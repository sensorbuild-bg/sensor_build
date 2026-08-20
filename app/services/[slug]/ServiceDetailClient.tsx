'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { isServiceSlug, serviceSeo } from '@/lib/serviceSeo';

type ServiceItem = {
  title: string;
  desc: string;
  slug?: string;
  href?: string;
  longDesc?: string;
  images?: string[];
  content?: string[];
};

export default function ServiceDetailClient() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);

  const currentSlug = Array.isArray(slug) ? slug[0] : slug;
  const servicesData = translations[lang].services.services as ServiceItem[];
  const service = servicesData.find((item) => item.slug === currentSlug);

  const pageHeading =
    currentSlug && isServiceSlug(currentSlug)
      ? serviceSeo[currentSlug].heading[lang]
      : service?.title || '';

  const images = service?.images || [];
  const hasImages = images.length > 0;

  useEffect(() => {
    setActiveImage(0);
  }, [currentSlug]);

  if (!service) return null;

  const goToPreviousImage = () => {
    if (!hasImages) return;
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    if (!hasImages) return;
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className={`${lang === 'bg' ? 'bg-[#13182c] text-white' : 'bg-white text-gray-900'} min-h-screen`}>
      <div className="py-10 md:py-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="mx-auto max-w-4xl text-3xl sm:text-4xl md:text-5xl font-noah-bold text-center leading-tight">
            {pageHeading}
          </h1>

          {hasImages && (
            <div className="mt-7 md:mt-10">
              <div className="relative mx-auto h-[230px] w-full max-w-4xl overflow-hidden rounded-2xl border border-[#388644]/70 bg-[#0f1427] sm:h-[360px] md:h-[500px]">
                <Image
                  src={images[activeImage]}
                  alt={`${pageHeading} – изпълнение от Sensor Build`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 900px"
                  quality={75}
                  preload
                />

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goToPreviousImage}
                      aria-label={lang === 'bg' ? 'Предишна снимка' : 'Previous image'}
                      className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#13182c]/85 text-3xl text-white shadow-lg backdrop-blur transition hover:bg-[#388644] sm:left-4 sm:h-12 sm:w-12"
                    >
                      ‹
                    </button>
                    <button
                      type="button"
                      onClick={goToNextImage}
                      aria-label={lang === 'bg' ? 'Следваща снимка' : 'Next image'}
                      className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-[#13182c]/85 text-3xl text-white shadow-lg backdrop-blur transition hover:bg-[#388644] sm:right-4 sm:h-12 sm:w-12"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="mx-auto mt-3 flex max-w-4xl gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:mt-4 sm:gap-3">
                  {images.map((image, index) => (
                    <button
                      type="button"
                      key={image}
                      onClick={() => setActiveImage(index)}
                      aria-label={`${pageHeading} – снимка ${index + 1}`}
                      aria-current={activeImage === index ? 'true' : undefined}
                      className={`relative h-16 w-20 shrink-0 overflow-hidden rounded-lg border-2 bg-[#0f1427] transition sm:h-20 sm:w-28 ${
                        activeImage === index
                          ? 'border-[#62b946] opacity-100'
                          : 'border-transparent opacity-55 hover:opacity-90'
                      }`}
                    >
                      <Image src={image} alt="" fill className="object-cover" sizes="112px" quality={55} />
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          <div className="mx-auto mt-8 max-w-4xl md:mt-12">
            <p className={`text-lg md:text-xl leading-relaxed ${lang === 'bg' ? 'text-white/85' : 'text-gray-700'}`}>
              {service.longDesc || service.desc}
            </p>

            {service.content && service.content.length > 0 && (
              <section className="mt-8 md:mt-10" aria-labelledby="service-scope-heading">
                <h2 id="service-scope-heading" className="text-2xl md:text-3xl font-noah-bold">
                  {lang === 'bg' ? 'Какво включва?' : 'What is included?'}
                </h2>
                <ul className="mt-4 grid gap-3 md:grid-cols-2">
                  {service.content.map((item, index) => (
                    <li
                      key={index}
                      className={`flex gap-3 rounded-xl border p-4 text-base leading-relaxed ${
                        lang === 'bg'
                          ? 'border-white/10 bg-[#1a2342] text-white/80'
                          : 'border-gray-200 bg-gray-50 text-gray-700'
                      }`}
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#62b946]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className={`mt-9 rounded-2xl border p-5 md:mt-12 md:p-7 ${lang === 'bg' ? 'border-white/10 bg-[#1a2342]' : 'border-gray-200 bg-gray-50'}`} aria-labelledby="service-next-heading">
              <h2 id="service-next-heading" className="text-2xl font-noah-bold text-center">
                {lang === 'bg' ? 'Имате подобен обект?' : 'Have a similar project?'}
              </h2>
              <div className="mt-5 flex flex-col sm:flex-row flex-wrap justify-center gap-3">
                <Link href="/projects" className="inline-flex items-center justify-center rounded-xl border border-[#62b946] px-6 py-3 font-semibold text-[#62b946] transition hover:bg-[#62b946] hover:text-white">
                  {lang === 'bg' ? 'Виж проекти' : 'View projects'}
                </Link>
                <Link href="/contacts" className="inline-flex items-center justify-center rounded-xl bg-[#388644] px-7 py-3 font-semibold text-white transition hover:bg-[#2d6b35]">
                  {lang === 'bg' ? 'Заяви оглед' : 'Request a site visit'}
                </Link>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

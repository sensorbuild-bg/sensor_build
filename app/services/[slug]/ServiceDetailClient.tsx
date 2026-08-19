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
  const imagesKey = images.join('|');

  useEffect(() => {
    setActiveImage(0);
  }, [currentSlug]);

  useEffect(() => {
    if (!hasImages) return;

    images.forEach((src) => {
      const img = new window.Image();
      img.src = src;
    });
  }, [hasImages, imagesKey]);

  const goToPreviousImage = () => {
    if (!hasImages) return;
    setActiveImage((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNextImage = () => {
    if (!hasImages) return;
    setActiveImage((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  if (!service) {
    return (
      <div
        className={`${
          lang === 'bg'
            ? 'bg-[#13182c] text-white'
            : 'bg-white text-gray-900'
        } min-h-screen py-24`}
      >
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-4xl font-noah-bold mb-6">
            {lang === 'bg' ? 'Услугата не е намерена' : 'Service not found'}
          </h1>

          <Link
            href="/services"
            className="text-[#62b946] font-semibold hover:underline"
          >
            ← {lang === 'bg' ? 'Назад към услугите' : 'Back to services'}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`${
        lang === 'bg'
          ? 'bg-[#13182c] text-white'
          : 'bg-white text-gray-900'
      } min-h-screen`}
    >
      <div className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-noah-bold text-center mb-10">
            {pageHeading}
          </h1>

          {hasImages ? (
            <div className="mb-14">
              <div className="relative w-full max-w-4xl mx-auto h-[260px] sm:h-[380px] md:h-[520px] rounded-lg overflow-hidden border border-[#388644] bg-[#0f1427]">
                <Image
                  src={images[activeImage]}
                  alt={`${pageHeading} - изпълнение от Sensor Build`}
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 900px"
                  quality={75}
                  priority
                />

                {images.length > 1 && (
                  <>
                    <button
                      type="button"
                      onClick={goToPreviousImage}
                      aria-label={lang === 'bg' ? 'Предишна снимка' : 'Previous image'}
                      className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-lg bg-[#1a2342]/90 border border-white/10 text-white text-4xl flex items-center justify-center transition-all duration-300 hover:bg-[#62b946] hover:scale-105"
                    >
                      ‹
                    </button>

                    <button
                      type="button"
                      onClick={goToNextImage}
                      aria-label={lang === 'bg' ? 'Следваща снимка' : 'Next image'}
                      className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-lg bg-[#1a2342]/90 border border-white/10 text-white text-4xl flex items-center justify-center transition-all duration-300 hover:bg-[#62b946] hover:scale-105"
                    >
                      ›
                    </button>
                  </>
                )}
              </div>

              {images.length > 1 && (
                <div className="flex justify-center gap-3 mt-6 flex-wrap">
                  {images.map((image, index) => (
                    <button
                      type="button"
                      key={image}
                      onClick={() => setActiveImage(index)}
                      aria-label={`${pageHeading} - снимка ${index + 1}`}
                      className={`relative w-24 h-20 sm:w-32 sm:h-24 rounded-md overflow-hidden border-2 bg-[#0f1427] transition-all duration-300 ${
                        activeImage === index
                          ? 'border-[#62b946] opacity-100'
                          : 'border-transparent opacity-50 hover:opacity-90'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${pageHeading} - снимка ${index + 1}`}
                        fill
                        className="object-contain"
                        sizes="150px"
                        quality={55}
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : null}

          <div className="max-w-5xl mx-auto">
            <p
              className={`text-xl md:text-2xl leading-relaxed ${
                lang === 'bg' ? 'text-white' : 'text-gray-700'
              }`}
            >
              {service.longDesc || service.desc}
            </p>

            {service.content && service.content.length > 0 && (
              <section className="mt-12" aria-labelledby="service-scope-heading">
                <h2
                  id="service-scope-heading"
                  className="text-2xl md:text-3xl font-noah-bold mb-6"
                >
                  {lang === 'bg' ? 'Какво включва услугата?' : 'What does the service include?'}
                </h2>

                <ul className="space-y-4">
                  {service.content.map((item, index) => (
                    <li
                      key={index}
                      className={`flex gap-3 text-lg leading-relaxed ${
                        lang === 'bg' ? 'text-white/90' : 'text-gray-700'
                      }`}
                    >
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#62b946]" aria-hidden="true" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}

            <section className="mt-14" aria-labelledby="service-next-heading">
              <h2
                id="service-next-heading"
                className="text-2xl md:text-3xl font-noah-bold text-center"
              >
                {lang === 'bg' ? 'Следваща стъпка за вашия ремонт' : 'Next step for your renovation'}
              </h2>

              <div className="mt-7 flex flex-col sm:flex-row flex-wrap justify-center gap-4">
                <Link
                  href="/services/remont-na-apartament"
                  className="inline-flex items-center justify-center rounded-xl border border-[#62b946] px-7 py-4 text-[#62b946] font-semibold transition-colors hover:bg-[#62b946] hover:text-white"
                >
                  {lang === 'bg' ? 'Цялостен ремонт на апартамент' : 'Complete apartment renovation'}
                </Link>
                <Link
                  href="/projects"
                  className="inline-flex items-center justify-center rounded-xl border border-[#62b946] px-7 py-4 text-[#62b946] font-semibold transition-colors hover:bg-[#62b946] hover:text-white"
                >
                  {lang === 'bg' ? 'Виж изпълнени проекти' : 'View completed projects'}
                </Link>
                <Link
                  href="/contacts"
                  className="inline-flex items-center justify-center rounded-xl bg-[#388644] px-8 py-4 text-white font-semibold transition-colors hover:bg-[#2d6b35]"
                >
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

'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

type ServiceItem = {
  title: string;
  desc: string;
  slug?: string;
  href?: string;
  longDesc?: string;
  images?: string[];
  content?: string[];
};

export default function ServiceDetailPage() {
  const { slug } = useParams();
  const { lang } = useLanguage();
  const [activeImage, setActiveImage] = useState(0);

  const currentSlug = Array.isArray(slug) ? slug[0] : slug;

  const servicesData = translations[lang].services.services as ServiceItem[];
  const service = servicesData.find((item) => item.slug === currentSlug);

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

  const images = service.images || [];
  const hasImages = images.length > 0;

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

          <Link
            href="/services"
            className="inline-block mb-8 text-[#62b946] font-semibold hover:underline"
          >
            ← {lang === 'bg' ? 'Назад към услугите' : 'Back to services'}
          </Link>

          <h1 className="text-4xl md:text-5xl font-noah-bold text-center mb-10">
            {service.title}
          </h1>

          {hasImages ? (
            <div className="mb-14">
              <div className="relative w-full max-w-3xl mx-auto h-[260px] sm:h-[360px] md:h-[430px] rounded-lg overflow-hidden border border-[#388644]">
                <Image
                  src={images[activeImage]}
                  alt={service.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 800px"
                  priority
                />
              </div>

              {images.length > 1 && (
                <div className="flex justify-center gap-3 mt-6 flex-wrap">
                  {images.map((image, index) => (
                    <button
                      type="button"
                      key={index}
                      onClick={() => setActiveImage(index)}
                      className={`relative w-24 h-20 sm:w-32 sm:h-24 rounded-md overflow-hidden border-2 transition-all duration-300 ${
                        activeImage === index
                          ? 'border-[#62b946] opacity-100'
                          : 'border-transparent opacity-50 hover:opacity-90'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${service.title} ${index + 1}`}
                        fill
                        className="object-cover"
                        sizes="150px"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          ) : (
            <div className="max-w-3xl mx-auto mb-14 rounded-lg border border-[#388644] bg-[#1a2342] p-10 text-center">
              <p className="text-white/80">
                {lang === 'bg'
                  ? 'Снимки към тази услуга ще бъдат добавени скоро.'
                  : 'Photos for this service will be added soon.'}
              </p>
            </div>
          )}

          <div className="max-w-5xl mx-auto">
            <p
              className={`text-2xl leading-relaxed mb-10 ${
                lang === 'bg' ? 'text-white' : 'text-gray-700'
              }`}
            >
              {service.longDesc || service.desc}
            </p>

            {service.content && service.content.length > 0 && (
              <div className="space-y-5">
                {service.content.map((item, index) => (
                  <p
                    key={index}
                    className={`text-lg leading-relaxed ${
                      lang === 'bg' ? 'text-white/90' : 'text-gray-700'
                    }`}
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

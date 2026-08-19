'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { isProjectId, projectSeo } from '@/lib/projectSeo';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from '@/components/ui/carousel';
import { Card, CardContent } from '@/components/ui/card';

export default function ProjectClient() {
  const params = useParams();
  const { lang } = useLanguage();
  const projectId = parseInt(params.id as string);
  const projectKey = String(projectId);
  const t = translations[lang].projects;

  const projects = [
    t.project1,
    t.project2,
    t.project3,
    t.project4,
    t.project5,
    t.project6,
  ];

  const project = projects[projectId];
  const canonicalProject = isProjectId(projectKey)
    ? projectSeo[projectKey]
    : null;

  const images = canonicalProject?.images ?? [];

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!api) return;

    const handleSelect = () => {
      setCurrent(api.selectedScrollSnap());
    };

    handleSelect();
    api.on('select', handleSelect);

    return () => {
      api.off('select', handleSelect);
    };
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  if (!project || !canonicalProject) return null;

  const pageHeading = lang === 'bg' ? canonicalProject.title : project.title;

  return (
    <div
      className={`min-h-screen ${
        lang === 'bg' ? 'bg-[#13182c]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1
          className={`text-4xl md:text-5xl font-noah-bold mb-8 ${
            lang === 'bg' ? 'text-white' : 'text-gray-900'
          }`}
        >
          {pageHeading}
        </h1>

        {images.length > 0 && (
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <Carousel setApi={setApi} className="w-full max-w-md relative">
                <CarouselContent>
                  {images.map((image, index) => (
                    <CarouselItem key={image}>
                      <Card className="border-0 shadow-none bg-transparent">
                        <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                          <Image
                            src={image}
                            alt={`${pageHeading} - снимка ${index + 1}`}
                            width={800}
                            height={1067}
                            className="w-full h-full object-contain rounded-lg"
                            sizes="(max-width: 640px) 100vw, 448px"
                            quality={75}
                            preload={index === 0}
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {images.length > 1 && (
                  <>
                    <CarouselPrevious
                      className="absolute left-4 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center p-0 rounded-lg bg-[#13182c]/80 backdrop-blur-sm border border-white/20 shadow-lg text-white hover:bg-[#13182c] hover:scale-105 transition-all duration-300"
                    />
                    <CarouselNext
                      className="absolute right-4 top-1/2 -translate-y-1/2 h-12 w-12 flex items-center justify-center p-0 rounded-lg bg-[#13182c]/80 backdrop-blur-sm border border-white/20 shadow-lg text-white hover:bg-[#13182c] hover:scale-105 transition-all duration-300"
                    />
                  </>
                )}
              </Carousel>
            </div>

            {images.length > 1 && (
              <div className="flex justify-center gap-3 overflow-x-auto pb-2 px-4">
                {images.map((image, index) => (
                  <button
                    type="button"
                    key={image}
                    onClick={() => scrollTo(index)}
                    aria-label={`${pageHeading} - снимка ${index + 1}`}
                    className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      current === index
                        ? 'border-[#388644] scale-110 shadow-lg'
                        : 'border-transparent opacity-60 hover:opacity-100 hover:scale-105'
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`${pageHeading} - миниатюра ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="96px"
                      quality={55}
                    />
                    {current === index && (
                      <div className="absolute inset-0 bg-[#388644]/20" />
                    )}
                  </button>
                ))}
              </div>
            )}
          </div>
        )}

        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {project.content.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg leading-relaxed ${
                  lang === 'bg' ? 'text-white' : 'text-gray-700'
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/services/remont-na-apartament"
              className="rounded-xl border border-[#62b946] px-7 py-4 text-center text-[#62b946] font-semibold transition-colors hover:bg-[#62b946] hover:text-white"
            >
              {lang === 'bg' ? 'Виж ремонтните услуги' : 'View renovation services'}
            </Link>
            <Link
              href="/contacts"
              className="rounded-xl bg-[#388644] px-7 py-4 text-center text-white font-semibold transition-colors hover:bg-[#2d6b35]"
            >
              {lang === 'bg' ? 'Заяви оглед' : 'Request a site visit'}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

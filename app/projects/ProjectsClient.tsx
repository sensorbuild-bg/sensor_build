'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { projectIds, projectSeo } from '@/lib/projectSeo';

export default function ProjectsClient() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;
  const isBg = lang === 'bg';

  const projects = [
    t.project1,
    t.project2,
    t.project3,
    t.project4,
    t.project5,
    t.project6,
  ];

  return (
    <div className={`py-10 md:py-20 ${isBg ? 'bg-[#13182c]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className={`text-3xl sm:text-4xl md:text-5xl font-noah-bold ${isBg ? 'text-white' : 'text-gray-900'}`}>
            {isBg ? 'Изпълнени ремонтни проекти в София' : 'Completed renovation projects in Sofia'}
          </h1>
          <p className={`mt-4 text-base md:text-lg leading-relaxed ${isBg ? 'text-white/75' : 'text-gray-600'}`}>
            {isBg
              ? 'Реални обекти и реално изпълнение – разгледайте снимки от ремонтите и техническите дейности.'
              : 'Real sites and real execution — explore photos from renovation and technical works.'}
          </p>
        </div>

        <div className="mt-9 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:gap-6">
          {projects.map((project, index) => {
            const projectId = projectIds[index];
            const canonicalProject = projectSeo[projectId];

            return (
              <Link
                key={projectId}
                href={`/projects/${projectId}`}
                className="group relative overflow-hidden rounded-2xl shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#62b946]"
              >
                <div className="relative aspect-[16/10] sm:aspect-[4/3]">
                  <Image
                    src={canonicalProject.image}
                    alt={`${project.imageTitle} – изпълнен проект от Sensor Build`}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    quality={75}
                    preload={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-4 sm:p-5">
                    <div>
                      <h2 className="text-lg sm:text-xl font-semibold leading-snug text-white">
                        {project.imageTitle}
                      </h2>
                      <p className="mt-1 text-sm text-white/70">
                        {isBg ? 'Виж снимки и детайли' : 'View photos and details'}
                      </p>
                    </div>
                    <span className="shrink-0 text-2xl text-[#7bd567] transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="mt-10 text-center">
          <Link
            href="/contacts"
            className="inline-flex items-center justify-center rounded-xl bg-[#388644] px-7 py-3.5 font-semibold text-white transition hover:bg-[#2d6b35]"
          >
            {isBg ? 'Имате подобен обект? Заявете оглед' : 'Have a similar project? Request a site visit'}
          </Link>
        </div>
      </div>
    </div>
  );
}

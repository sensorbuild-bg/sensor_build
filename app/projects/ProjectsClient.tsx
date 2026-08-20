'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';
import { projectIds, projectSeo } from '@/lib/projectSeo';
import AnimatedDiv from '@/components/AnimatedDiv';

export default function ProjectsClient() {
  const { lang } = useLanguage();
  const t = translations[lang].projects;

  const projects = [
    t.project1,
    t.project2,
    t.project3,
    t.project4,
    t.project5,
    t.project6,
  ];

  return (
    <div
      className={`py-12 md:py-24 ${
        lang === 'bg' ? 'bg-[#13182c]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-9 md:mb-12">
          <h1
            className={`text-3xl md:text-5xl font-noah-bold mb-4 ${
              lang === 'bg' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {lang === 'bg'
              ? 'Изпълнени ремонтни проекти в София'
              : 'Completed renovation projects in Sofia'}
          </h1>
          <p
            className={`text-base md:text-lg max-w-3xl mx-auto leading-relaxed ${
              lang === 'bg' ? 'text-white/80' : 'text-gray-600'
            }`}
          >
            {lang === 'bg'
              ? 'Реални обекти на Sensor Build – ремонти, електро- и ВиК инсталации, подово отопление, гипсокартон и осветление.'
              : 'Real Sensor Build projects including renovations, electrical and plumbing installations, underfloor heating, drywall and lighting.'}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => {
            const projectId = projectIds[index];
            const canonicalProject = projectSeo[projectId];

            return (
              <AnimatedDiv key={projectId}>
                <Link
                  href={`/projects/${canonicalProject.slug}`}
                  className="relative cursor-pointer group overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow block"
                >
                  <div className="aspect-[16/10] sm:aspect-[4/3] relative overflow-hidden bg-gray-100">
                    <Image
                      src={canonicalProject.image}
                      alt={`${project.imageTitle} - изпълнен проект от Sensor Build`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                      preload={index === 0}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent" />

                    <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-4 md:p-5">
                      <h2 className="text-base md:text-xl font-semibold leading-snug text-white">
                        {project.imageTitle}
                      </h2>
                      <span
                        className="shrink-0 text-2xl text-[#7bd567] transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      >
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedDiv>
            );
          })}
        </div>
      </div>
    </div>
  );
}

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
      className={`py-16 md:py-24 ${
        lang === 'bg' ? 'bg-[#13182c]' : 'bg-white'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1
            className={`text-4xl md:text-5xl font-noah-bold mb-4 ${
              lang === 'bg' ? 'text-white' : 'text-gray-900'
            }`}
          >
            {lang === 'bg'
              ? 'Изпълнени ремонтни проекти в София'
              : 'Completed renovation projects in Sofia'}
          </h1>
          <p
            className={`text-lg max-w-3xl mx-auto leading-relaxed ${
              lang === 'bg' ? 'text-white/80' : 'text-gray-600'
            }`}
          >
            {lang === 'bg'
              ? 'Разгледайте реални обекти и изпълнени дейности на Sensor Build – ремонти, електро- и ВиК инсталации, подово отопление, гипсокартон и осветление.'
              : 'Explore real Sensor Build projects and completed works including renovations, electrical and plumbing installations, underfloor heating, drywall and lighting.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => {
            const projectId = projectIds[index];
            const canonicalProject = projectSeo[projectId];

            return (
              <AnimatedDiv key={projectId}>
                <Link
                  href={`/projects/${projectId}`}
                  className="relative cursor-pointer group rounded-lg shadow-md hover:shadow-xl transition-shadow block"
                >
                  <div className="aspect-[3/4] relative overflow-hidden bg-gray-100 rounded-lg max-w-[280px] mx-auto md:max-w-none">
                    <Image
                      src={canonicalProject.image}
                      alt={`${project.imageTitle} - изпълнен проект от Sensor Build`}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 280px, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                      preload={index === 0}
                    />
                    <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                      <span className="text-white opacity-0 group-hover:opacity-100 font-semibold bg-black/50 px-4 py-2 rounded transition-opacity">
                        {t.openProject}
                      </span>
                    </div>
                  </div>

                  <div
                    className={`mt-4 text-center ${
                      lang === 'bg' ? 'text-white' : 'text-gray-900'
                    }`}
                  >
                    <h2 className="text-xl font-semibold leading-snug break-words whitespace-normal">
                      {project.imageTitle}
                    </h2>

                    <div className="mt-4 flex justify-center">
                      <span className="inline-flex items-center justify-center rounded-lg px-5 py-2.5 text-sm font-semibold bg-[#388644] text-white shadow-md hover:bg-[#2d6b35] hover:scale-105 transform transition-all duration-300">
                        {lang === 'bg'
                          ? `Виж проект: ${project.title}`
                          : `View project: ${project.title}`}
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

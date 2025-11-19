'use client';

import { useState } from 'react';
import ProjectModal from '@/components/ProjectModal';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
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
    <div className={`py-16 md:py-24 ${lang === 'bg' ? 'bg-[#13182c]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className={`text-4xl md:text-5xl font-bold mb-4 ${lang === 'bg' ? 'text-white' : 'text-gray-900'}`}>
            {t.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              onClick={() => setSelectedProject(index)}
              className="relative cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow"
            >
              {/* Placeholder for project image */}
              <div className="aspect-video bg-gradient-to-br from-[#388644] to-[#2d6b35] flex items-center justify-center">
                <div className="text-center p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    {project.imageTitle}
                  </h3>
                  <p className="text-white/90 text-sm">{t.clickForMore}</p>
                </div>
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-opacity flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 font-semibold">
                  {t.openProject}
                </span>
              </div>
            </div>
          ))}
        </div>

        {selectedProject !== null && (
          <ProjectModal
            isOpen={selectedProject !== null}
            onClose={() => setSelectedProject(null)}
            project={projects[selectedProject]}
          />
        )}
      </div>
    </div>
  );
}

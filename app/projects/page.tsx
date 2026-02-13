"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import AnimatedDiv from "@/components/AnimatedDiv";

export default function Projects() {
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
        lang === "bg" ? "bg-[#13182c]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1
            className={`text-4xl md:text-5xl font-noah-bold mb-4 ${
              lang === "bg" ? "text-white" : "text-gray-900"
            }`}
          >
            {t.title}
          </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {projects.map((project, index) => (
            <AnimatedDiv key={index}>
              <Link
                href={`/projects/${index}`}
                className="relative cursor-pointer group overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow block"
              >
                {/* Project image or placeholder */}
                {(project as any).mainImage ? (
                  <>
                    <div className="aspect-[3/4] relative overflow-hidden bg-gray-100 rounded-lg max-w-[280px] mx-auto md:max-w-none">
                      <img
                        src={(project as any).mainImage}
                        alt={project.imageTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <span className="text-white opacity-0 group-hover:opacity-100 font-semibold bg-black bg-opacity-50 px-4 py-2 rounded transition-opacity">
                          {t.openProject}
                        </span>
                      </div>
                    </div>
                    <div
                      className={`mt-4 text-center ${
                        lang === "bg" ? "text-white" : "text-gray-900"
                      }`}
                    >
                      <h3 className="text-xl font-semibold leading-snug break-words line-clamp-2">
                        {project.imageTitle}
                      </h3>
                    </div>
                  </>
                ) : (
                  <div className="aspect-video bg-gradient-to-br from-[#388644] to-[#2d6b35] flex items-center justify-center">
                    <div className="text-center p-6">
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {project.imageTitle}
                      </h3>
                      <p className="text-white/90 text-sm">{t.clickForMore}</p>
                    </div>
                  </div>
                )}
              </Link>
            </AnimatedDiv>
          ))}
        </div>
      </div>
    </div>
  );
}

'use client';

import { useEffect, useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useLanguage } from '@/contexts/LanguageContext';
import { translations } from '@/lib/translations';

export default function ProjectPage() {
  const params = useParams();
  const router = useRouter();
  const { lang } = useLanguage();
  const projectId = parseInt(params.id as string);
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

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = (project as any).images || ((project as any).mainImage ? [(project as any).mainImage] : []);

  useEffect(() => {
    if (!project) {
      router.push('/projects');
    }
    setCurrentImageIndex(0);
  }, [project, router]);

  if (!project) {
    return null;
  }

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className={`min-h-screen ${lang === 'bg' ? 'bg-[#13182c]' : 'bg-white'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className={`mb-8 flex items-center gap-2 ${lang === 'en' ? 'text-white hover:text-gray-300' : 'text-gray-700 hover:text-gray-900'}`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          <span className="font-semibold">
            {lang === 'bg' ? 'Назад към проекти' : 'Back to projects'}
          </span>
        </button>

        {/* Project title */}
        <h1 className={`text-4xl md:text-5xl font-bold mb-8 ${lang === 'bg' ? 'text-white' : 'text-gray-900'}`}>
          {project.title}
        </h1>

        {/* Images carousel */}
        {images.length > 0 && (
          <div className="mb-12">
            <div className="flex justify-center">
              <div className="relative max-w-md w-full">
                <div className="relative aspect-[3/4] w-full flex items-center justify-center">
                  <img
                    src={images[currentImageIndex]}
                    alt={`${project.imageTitle} ${currentImageIndex + 1}`}
                    className="w-full h-full object-contain rounded-lg"
                  />
                  {images.length > 1 && (
                    <>
                      {/* Previous button */}
                      <button
                        onClick={prevImage}
                        className="absolute left-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 p-3 rounded-full transition-all shadow-lg z-10"
                        aria-label="Previous image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
                        </svg>
                      </button>
                      {/* Next button */}
                      <button
                        onClick={nextImage}
                        className="absolute right-2 top-1/2 -translate-y-1/2 bg-white bg-opacity-90 hover:bg-opacity-100 text-gray-900 p-3 rounded-full transition-all shadow-lg z-10"
                        aria-label="Next image"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                      {/* Image counter */}
                      <div className="absolute top-2 right-2 bg-white bg-opacity-90 text-gray-900 px-3 py-1.5 rounded-full text-xs font-semibold shadow-md">
                        {currentImageIndex + 1} / {images.length}
                      </div>
                      {/* Image indicators */}
                      <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-2 bg-white bg-opacity-80 px-3 py-1.5 rounded-full">
                        {images.map((_: string, index: number) => (
                          <button
                            key={index}
                            onClick={() => setCurrentImageIndex(index)}
                            className={`rounded-full transition-all ${
                              index === currentImageIndex
                                ? 'bg-gray-900 w-8 h-2'
                                : 'bg-gray-400 w-2 h-2 hover:bg-gray-600'
                            }`}
                            aria-label={`Go to image ${index + 1}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Project content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {project.content.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg leading-relaxed ${lang === 'en' ? 'text-white' : 'text-gray-700'}`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


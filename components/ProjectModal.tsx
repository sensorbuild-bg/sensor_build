'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    imageTitle: string;
    mainImage?: string;
    images?: string[];
    content: string[];
  };
}

export default function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  const { lang } = useLanguage();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  
  const images = project.images || (project.mainImage ? [project.mainImage] : []);
  
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      setCurrentImageIndex(0);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className={`rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto ${lang === 'en' ? 'bg-[#13182c]' : 'bg-white'}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`sticky top-0 border-b px-6 py-4 flex justify-between items-center ${lang === 'en' ? 'bg-[#13182c] border-[#2d3a5a]' : 'bg-white border-gray-200'}`}>
          <h2 className={`text-2xl font-bold ${lang === 'en' ? 'text-white' : 'text-gray-900'}`}>{project.title}</h2>
          <button
            onClick={onClose}
            className={`text-3xl leading-none ${lang === 'en' ? 'text-white hover:text-gray-300' : 'text-gray-500 hover:text-gray-700'}`}
          >
            ×
          </button>
        </div>
        <div className="p-6">
          {/* Images carousel */}
          {images.length > 0 && (
            <div className="mb-6">
              <div className="relative">
                <img
                  src={images[currentImageIndex]}
                  alt={`${project.imageTitle} ${currentImageIndex + 1}`}
                  className="w-full h-auto rounded-lg object-cover"
                />
                {/* Thumbnails */}
<div className="grid grid-cols-4 gap-3 mt-4">
  {images.map((img, index) => (
    <img
      key={index}
      src={img}
      onClick={() => setCurrentImageIndex(index)}
      className={`cursor-pointer rounded-md border ${
        index === currentImageIndex
          ? 'border-green-500'
          : 'border-transparent'
      }`}
      alt={`thumbnail ${index + 1}`}
    />
  ))}
</div>
                {images.length > 1 && (
                  <>
                    {/* Previous button */}
                    <button
                      onClick={prevImage}
                      className={`absolute left-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all ${lang === 'en' ? 'text-white' : 'text-white'}`}
                      aria-label="Previous image"
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
                    </button>
                    {/* Next button */}
                    <button
                      onClick={nextImage}
                      className={`absolute right-4 top-1/2 -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-70 text-white p-2 rounded-full transition-all ${lang === 'en' ? 'text-white' : 'text-white'}`}
                      aria-label="Next image"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </button>
                    {/* Image indicators */}
                    <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                      {images.map((_, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentImageIndex(index)}
                          className={`h-2 rounded-full transition-all ${
                            index === currentImageIndex
                              ? 'bg-white w-8'
                              : 'bg-white bg-opacity-50 w-2 hover:bg-opacity-75'
                          }`}
                          aria-label={`Go to image ${index + 1}`}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>
            </div>
          )}
          <div className="space-y-4">
            {project.content.map((paragraph, index) => (
              <p key={index} className={`leading-relaxed ${lang === 'en' ? 'text-white' : 'text-gray-700'}`}>
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


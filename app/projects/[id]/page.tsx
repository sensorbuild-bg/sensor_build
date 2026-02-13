"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Image from "next/image";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

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

  const images =
    (project as any).images ||
    ((project as any).mainImage ? [(project as any).mainImage] : []);

  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!project) {
      router.push("/projects");
    }
  }, [project, router]);

  useEffect(() => {
    if (!api) return;

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const scrollTo = (index: number) => {
    api?.scrollTo(index);
  };

  if (!project) return null;

  return (
    <div
      className={`min-h-screen ${
        lang === "bg" ? "bg-[#13182c]" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className={`mb-8 flex items-center gap-2 ${
            lang === "bg"
              ? "text-white hover:text-gray-300"
              : "text-gray-700 hover:text-gray-900"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-semibold">
            {lang === "bg" ? "Назад към проекти" : "Back to projects"}
          </span>
        </button>

        {/* Title */}
        <h1
          className={`text-4xl md:text-5xl font-noah-bold mb-8 ${
            lang === "bg" ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h1>

        {/* Carousel */}
        {images.length > 0 && (
          <div className="mb-12">
            <div className="flex justify-center mb-6">
              <Carousel setApi={setApi} className="w-full max-w-md relative">
                <CarouselContent>
                  {images.map((image: string, index: number) => (
                    <CarouselItem key={index}>
                      <Card className="border-0 shadow-none bg-transparent">
                        <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                          <Image
                            src={image}
                            alt={`${project.imageTitle} ${index + 1}`}
                            width={800}
                            height={1067}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                {images.length > 1 && (
                  <>
                 <CarouselPrevious
  className="absolute left-4 top-1/2 -translate-y-1/2
             h-12 w-12
             flex items-center justify-center
             p-0
             rounded-lg
             bg-[#13182c]/80 backdrop-blur-sm
             border border-white/20 shadow-lg
             text-white
             hover:bg-[#13182c] hover:scale-105
             transition-all duration-300"
/>

<CarouselNext
  className="absolute right-4 top-1/2 -translate-y-1/2
             h-12 w-12
             flex items-center justify-center
             p-0
             rounded-lg
             bg-[#13182c]/80 backdrop-blur-sm
             border border-white/20 shadow-lg
             text-white
             hover:bg-[#13182c] hover:scale-105
             transition-all duration-300"
/>
                  </>
                )}
              </Carousel>
            </div>

            {/* Thumbnails */}
            {images.length > 1 && (
              <div className="flex justify-center gap-3 overflow-x-auto pb-2 px-4">
                {images.map((image: string, index: number) => (
                  <button
                    key={index}
                    onClick={() => scrollTo(index)}
                    className={`relative flex-shrink-0 w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      current === index
                        ? "border-[#388644] scale-110 shadow-lg"
                        : "border-transparent opacity-60 hover:opacity-100 hover:scale-105"
                    }`}
                  >
                    <Image
                      src={image}
                      alt={`Thumbnail ${index + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
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

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {project.content.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg leading-relaxed ${
                  lang === "bg" ? "text-white" : "text-gray-700"
                }`}
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

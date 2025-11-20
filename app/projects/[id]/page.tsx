"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/translations";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
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

  useEffect(() => {
    if (!project) {
      router.push("/projects");
    }
  }, [project, router]);

  if (!project) {
    return null;
  }

  return (
    <div
      className={`min-h-screen ${lang === "bg" ? "bg-[#13182c]" : "bg-white"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Back button */}
        <button
          onClick={() => router.back()}
          className={`mb-8 flex items-center gap-2 ${
            lang === "en"
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

        {/* Project title */}
        <h1
          className={`text-4xl md:text-5xl font-bold mb-8 ${
            lang === "bg" ? "text-white" : "text-gray-900"
          }`}
        >
          {project.title}
        </h1>

        {/* Images carousel */}
        {images.length > 0 && (
          <div className="mb-12 flex justify-center">
            <Carousel className="w-full max-w-md">
              <CarouselContent className="-ml-0">
                {images.map((image: string, index: number) => (
                  <CarouselItem key={index} className="pl-0">
                    <div className="p-0">
                      <Card className="border-0 shadow-none bg-transparent">
                        <CardContent className="flex aspect-[3/4] items-center justify-center p-0">
                          <img
                            src={image}
                            alt={`${project.imageTitle} ${index + 1}`}
                            className="w-full h-full object-contain rounded-lg"
                          />
                        </CardContent>
                      </Card>
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
              {images.length > 1 && (
                <>
                  <CarouselPrevious className="left-4 md:left-6 bg-transparent hover:bg-transparent text-white border-0 shadow-none h-12 w-12" />
                  <CarouselNext className="right-2 md:right-2 bg-transparent hover:bg-transparent text-white border-0 shadow-none h-12 w-12" />
                </>
              )}
            </Carousel>
          </div>
        )}

        {/* Project content */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6">
            {project.content.map((paragraph, index) => (
              <p
                key={index}
                className={`text-lg leading-relaxed ${
                  lang === "en" ? "text-white" : "text-gray-700"
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

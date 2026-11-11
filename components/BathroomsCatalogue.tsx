"use client";

import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { bathroomProjects } from "@/lib/bathroomProjects";

/**
 * A scalable category: every new completed bathroom is added as another card,
 * rather than replacing the current one or duplicating page markup.
 */
export default function BathroomsCatalogue() {
  const { lang } = useLanguage();
  const isBg = lang === "bg";

  return (
    <main className={`min-h-screen ${isBg ? "bg-[#13182c] text-white" : "bg-white text-[#13182c]"}`}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:py-20 lg:px-8">
        <div className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <p className="mb-3 text-xs font-bold uppercase tracking-[.22em] text-[#62b946]">
            SENSOR BUILD
          </p>
          <h1 className="text-3xl font-noah-bold md:text-5xl">
            {isBg ? "Ремонт на бани – изпълнени обекти" : "Bathroom renovations – completed projects"}
          </h1>
          <p className={`mt-5 text-base leading-relaxed md:text-lg ${isBg ? "text-white/75" : "text-gray-600"}`}>
            {isBg
              ? "Разгледайте реални ремонти на бани от Sensor Build. Всеки обект има собствена страница със снимки, видео и 360° разходка, когато са налични."
              : "Browse real Sensor Build bathroom renovations. Each project has its own page with photos, video and a 360° tour where available."}
          </p>
        </div>

        <section aria-label={isBg ? "Завършени бани" : "Completed bathrooms"}>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {bathroomProjects.map((project) => (
              <Link
                href={project.href}
                key={project.slug}
                className={`group overflow-hidden rounded-2xl border shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${isBg ? "border-white/10 bg-[#1a2342]" : "border-gray-200 bg-white"}`}
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-[#0f1427]">
                  <Image
                    src={project.cover}
                    alt={isBg ? project.titleBg : project.titleEn}
                    fill
                    sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                    className="object-cover object-[37%_50%] transition-transform duration-500 group-hover:scale-105"
                    quality={90}
                  />
                  <span className="absolute bottom-3 left-3 rounded-full border border-white/30 bg-[#13182c]/80 px-4 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
                    {isBg ? "Видео · 360° · Снимки" : "Video · 360° · Photos"}
                  </span>
                </div>
                <div className="p-5">
                  <h2 className="text-xl font-semibold leading-snug md:text-2xl">
                    {isBg ? project.titleBg : project.titleEn}
                  </h2>
                  <p className={`mt-3 line-clamp-3 text-sm leading-relaxed ${isBg ? "text-white/70" : "text-gray-600"}`}>
                    {isBg ? project.descriptionBg : project.descriptionEn}
                  </p>
                  <div className="mt-5 flex items-center justify-between text-sm font-semibold text-[#62b946]">
                    <span>{isBg ? "Разгледай банята" : "Explore this bathroom"}</span>
                    <span className="text-xl transition-transform group-hover:translate-x-1" aria-hidden="true">→</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <aside className={`mt-12 rounded-2xl border px-6 py-8 text-center md:mt-16 ${isBg ? "border-white/10 bg-[#1a2342]" : "border-gray-200 bg-gray-50"}`}>
          <h2 className="text-2xl font-semibold">
            {isBg ? "Планирате ремонт на баня?" : "Planning a bathroom renovation?"}
          </h2>
          <p className={`mx-auto mt-3 max-w-2xl text-base ${isBg ? "text-white/75" : "text-gray-600"}`}>
            {isBg
              ? "Разкажете ни за помещението и какво искате да промените. Ще обсъдим необходимите дейности и ще организираме оглед."
              : "Tell us about your room and the changes you have in mind. We can discuss the work involved and arrange a site visit."}
          </p>
          <Link
            href="/contacts"
            className="mt-6 inline-flex rounded-xl bg-[#388644] px-7 py-3.5 font-semibold text-white transition hover:bg-[#2d6b35]"
          >
            {isBg ? "Заяви оглед" : "Request a site visit"}
          </Link>
        </aside>
      </div>
    </main>
  );
}

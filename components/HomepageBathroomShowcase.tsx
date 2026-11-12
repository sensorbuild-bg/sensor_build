"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";

const MEDIA_PATH = "/projects/bathroom";

/**
 * Homepage showcase for the real finished bathroom.
 * The video is vertical 9:16, deliberately never stretched into a wide frame.
 */
export default function HomepageBathroomShowcase() {
  const { lang } = useLanguage();
  const bg = lang === "bg";

  return (
    <section
      id="bathroom-showcase"
      aria-labelledby="bathroom-showcase-heading"
      className={`py-12 md:py-20 ${bg ? "bg-[#18203a]" : "bg-[#f5f7f4]"}`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-9 max-w-3xl text-center md:mb-12">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-[#62b946]">
            SENSOR BUILD · {bg ? "Реален обект" : "Real project"}
          </p>
          <h2
            id="bathroom-showcase-heading"
            className={`text-3xl font-noah-bold md:text-5xl ${bg ? "text-white" : "text-[#13182c]"}`}
          >
            {bg ? "Разгледайте завършената баня" : "Explore a finished bathroom"}
          </h2>
          <p className={`mt-4 text-base leading-relaxed md:text-lg ${bg ? "text-white/75" : "text-gray-600"}`}>
            {bg
              ? "Реални кадри от изпълнението ни. Разгледайте видеото, а за снимки и интерактивна 360° разходка отворете целия проект."
              : "Real footage of our work. Watch the walkthrough, then open the full project to see photos and an interactive 360° tour."}
          </p>
        </div>

        <div className="grid items-center gap-6 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
          <div className="mx-auto w-full max-w-[360px] overflow-hidden rounded-[24px] border border-white/10 bg-black shadow-[0_20px_60px_rgba(0,0,0,.25)]">
            <video
              className="block aspect-[9/16] w-full bg-[#0a0d14] object-contain"
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
              poster={`${MEDIA_PATH}/sensorbuild-bathroom-loop-poster.webp`}
              aria-label={bg ? "Видеоразходка из завършена баня" : "Walkthrough of a finished bathroom"}
            >
              <source src={`${MEDIA_PATH}/sensorbuild-bathroom-loop.webm`} type="video/webm" />
              <source src={`${MEDIA_PATH}/sensorbuild-bathroom-loop.mp4`} type="video/mp4" />
              {bg ? "Вашият браузър не поддържа видео." : "Your browser does not support video."}
            </video>
          </div>
          <div className={bg ? "text-white" : "text-[#13182c]"}>
            <p className="mb-2 text-sm font-semibold uppercase tracking-[.15em] text-[#62b946]">
              {bg ? "Видеоразходка" : "Video walkthrough"}
            </p>
            <h3 className="text-2xl font-semibold leading-snug md:text-4xl">
              {bg ? "Истински детайли. Реално изпълнение." : "Real details. Real craftsmanship."}
            </h3>
            <p className={`mt-4 max-w-lg leading-relaxed ${bg ? "text-white/75" : "text-gray-600"}`}>
              {bg
                ? "Разгледайте изпълнението отблизо – облицовките, обзавеждането и завършващите детайли в обновената баня."
                : "Take a closer look at the tiling, cabinetry and finishing details of the renovated bathroom."}
            </p>
            <Link
              href="/projects/zavarshena-banya"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#62b946] px-6 py-3 font-semibold text-[#62b946] transition hover:bg-[#62b946] hover:text-[#13182c]"
            >
              {bg ? "Виж проекта" : "View project"} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}

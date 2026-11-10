"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import RealPanoramaViewer from "@/components/RealPanoramaViewer";

const MEDIA_PATH = "/projects/bathroom";

/**
 * Homepage showcase for the real finished bathroom.
 * The video is vertical 9:16, deliberately never stretched into a wide frame.
 * The panorama is the original real 2:1 360-degree photo.
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
              ? "Реални кадри от изпълнението ни. Първо вижте кратката видеоразходка, след това разгледайте пространството на 360°."
              : "Real footage of our work. Watch the short walkthrough, then look around the bathroom in 360°."}
          </p>
        </div>

        <div className="mb-12 grid items-center gap-6 md:mb-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-12">
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
                ? "Видеото се възпроизвежда автоматично и се повтаря без прекъсване. Запазени са реалните цветове, материали и пропорции на помещението."
                : "The video plays automatically on a continuous loop, preserving the actual finishes, colours and room proportions."}
            </p>
            <Link
              href="/projects/zavarshena-banya"
              className="mt-7 inline-flex items-center gap-2 rounded-full border border-[#62b946] px-6 py-3 font-semibold text-[#62b946] transition hover:bg-[#62b946] hover:text-[#13182c]"
            >
              {bg ? "Виж проекта" : "View project"} <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>

        <div className={`mb-5 flex flex-wrap items-end justify-between gap-3 ${bg ? "text-white" : "text-[#13182c]"}`}>
          <div>
            <p className="mb-2 text-xs font-semibold uppercase tracking-[.16em] text-[#62b946]">
              {bg ? "Интерактивна разходка" : "Interactive walkthrough"}
            </p>
            <h3 className="text-2xl font-semibold md:text-3xl">
              {bg ? "Банята на 360°" : "Bathroom in 360°"}
            </h3>
          </div>
          <p className={`text-sm ${bg ? "text-white/70" : "text-gray-600"}`}>
            {bg ? "Завъртете с мишка или пръст" : "Drag with your mouse or finger"}
          </p>
        </div>

        <RealPanoramaViewer
          src={`${MEDIA_PATH}/sensorbuild-bathroom-360.webp`}
          label={bg ? "360 градусова панорама на реална баня, изпълнена от Sensor Build" : "360-degree panorama of a real Sensor Build bathroom"}
        />

        <p className={`mt-3 text-xs ${bg ? "text-white/55" : "text-gray-500"}`}>
          {bg
            ? "360° кадърът е от реално заснемане. Възможни са съединителни шевове от първоначалната панорама."
            : "The 360° photo is captured on site. Some original panorama stitching seams may remain."}
        </p>
      </div>
    </section>
  );
}

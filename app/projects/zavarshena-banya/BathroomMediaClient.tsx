"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import RealPanoramaViewer from "@/components/RealPanoramaViewer";
import RealBathroomGallery from "@/components/RealBathroomGallery";
import { getBathroomProject } from "@/lib/bathroomProjects";
import { useLanguage } from "@/contexts/LanguageContext";

const project = getBathroomProject("zavarshena-banya")!;
const VIDEO_WEBM = project.videoWebm;
const VIDEO_MP4 = project.videoMp4;
const POSTER = project.videoPoster;
const PANORAMA = project.panorama;

export default function BathroomMediaClient() {
  const { lang } = useLanguage();
  const isBg = lang === "bg";
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <main className={isBg ? "min-h-screen bg-[#13182c] text-white" : "min-h-screen bg-white text-[#13182c]"}>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <Link
          href="/services/bani"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#62b946] hover:underline"
        >
          <span aria-hidden="true">←</span>
          {isBg ? "Всички бани" : "All bathrooms"}
        </Link>

        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-[#7bd567]">
            SENSOR BUILD
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {isBg ? project.titleBg : project.titleEn}
          </h1>
          <p className={`mt-4 text-base leading-relaxed md:text-lg ${isBg ? "text-white/75" : "text-gray-600"}`}>
            {isBg ? project.descriptionBg : project.descriptionEn}
          </p>
        </div>

        <section
          aria-labelledby="bathroom-renovation-heading"
          className={`mb-12 rounded-2xl border p-5 sm:p-7 md:mb-14 md:p-9 ${isBg ? "border-white/10 bg-[#1a2342]" : "border-gray-200 bg-gray-50"}`}
        >
          <p className="mb-2 text-xs font-semibold uppercase tracking-[.18em] text-[#62b946]">
            {isBg ? "Изпълнени дейности" : "Completed works"}
          </p>
          <h2 id="bathroom-renovation-heading" className="text-2xl font-semibold md:text-3xl">
            {isBg ? "Основен ремонт на баня – от къртенето до последния детайл" : "Complete bathroom renovation – from demolition to the final detail"}
          </h2>
          <div className={`mt-5 space-y-4 text-base leading-relaxed ${isBg ? "text-white/80" : "text-gray-700"}`}>
            {(isBg ? project.detailsBg : project.detailsEn).map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
        </section>

        <section aria-labelledby="bathroom-video-title" className="mb-14">
          <div className="mb-5 flex items-center justify-between gap-3">
            <h2 id="bathroom-video-title" className="text-2xl font-semibold">
              {isBg ? "Видеоразходка" : "Video walkthrough"}
            </h2>
            <span className={`text-xs ${isBg ? "text-white/60" : "text-gray-500"}`}>
              {isBg ? "Повтаря се автоматично" : "Automatically loops"}
            </span>
          </div>
          <div className="mx-auto w-full max-w-[420px] overflow-hidden rounded-2xl border border-white/10 bg-[#0e1424] shadow-2xl">
            {!videoFailed ? (
              <video
                autoPlay
                loop
                muted
                playsInline
                preload="metadata"
                controls={false}
                poster={POSTER}
                onCanPlay={() => setVideoLoaded(true)}
                onError={() => setVideoFailed(true)}
                className="aspect-[9/16] w-full object-contain"
                aria-label={isBg ? "Видео от завършена баня на Sensor Build" : "Sensor Build finished bathroom video"}
              >
                <source src={VIDEO_WEBM} type="video/webm" />
                <source src={VIDEO_MP4} type="video/mp4" />
              </video>
            ) : (
              <div className="flex aspect-[9/16] items-center justify-center px-6 text-center text-sm text-white/80">
                {isBg ? "Видеото все още не е качено в този преглед." : "The video has not yet been uploaded to this preview."}
              </div>
            )}
          </div>
          {videoLoaded && !videoFailed && (
            <p className={`mt-3 text-center text-xs ${isBg ? "text-white/55" : "text-gray-500"}`}>
              {isBg ? "Автоматично пускане · Без звук · Непрекъснато повтаряне · WebM/MP4" : "Autoplay · Muted · Continuous loop · WebM/MP4"}
            </p>
          )}
        </section>

        <section aria-labelledby="bathroom-360-title" className="mb-12">
          <h2 id="bathroom-360-title" className="mb-3 text-2xl font-semibold">
            {isBg ? "Разгледай банята на 360°" : "Explore the bathroom in 360°"}
          </h2>
          <p className={`mb-6 text-sm ${isBg ? "text-white/70" : "text-gray-600"}`}>
            {isBg
              ? "Задръж и завърти с мишка или пръст. За по-детайлен оглед използвай бутона за цял екран."
              : "Drag to look around with a mouse or finger; use full screen for a closer look."}
          </p>
          <RealPanoramaViewer
            src={PANORAMA}
            label={isBg ? "Реална 360° панорама на завършената баня" : "Real 360° panorama of the completed bathroom"}
          />
          <p className={`mt-3 text-xs ${isBg ? "text-white/55" : "text-gray-500"}`}>
            {isBg
              ? "Панорамата е заснета на реалния обект. Възможни са шевове от първоначалното 360° заснемане."
              : "Captured at the actual site. Some original stitching artifacts may remain."}
          </p>
        </section>

        <RealBathroomGallery project={project} isBg={isBg} />

        <section aria-labelledby="bathroom-before-after-heading" className="mt-12 mb-12 md:mt-16">
          <h2 id="bathroom-before-after-heading" className="text-2xl font-semibold md:text-3xl">
            {isBg ? "Преди и след ремонта" : "Before and after the renovation"}
          </h2>
          <p className={`mt-3 max-w-3xl text-sm leading-relaxed ${isBg ? "text-white/70" : "text-gray-600"}`}>
            {isBg
              ? "Истински снимки от същата баня преди и след основния ремонт. Ракурсите не са напълно еднакви, затова ги показваме една до друга, без изкуствено наслагване."
              : "Authentic photos of the same bathroom before and after the renovation. The camera angles differ, so the photos are shown side by side rather than artificially overlaid."}
          </p>
          <div className="mt-7 space-y-8 md:space-y-12">
            {project.beforeAfterPairs.map((pair) => (
              <figure key={pair.before} className={`overflow-hidden rounded-2xl border ${isBg ? "border-white/10 bg-[#1a2342]" : "border-gray-200 bg-gray-50"}`}>
                <figcaption className="px-4 py-4 text-base font-semibold sm:px-6 md:text-lg">
                  {isBg ? pair.titleBg : pair.titleEn}
                </figcaption>
                <div className="grid gap-3 p-3 pt-0 sm:grid-cols-2 sm:gap-4 sm:p-5 sm:pt-0">
                  {[
                    { src: pair.before, name: isBg ? "Преди ремонта" : "Before renovation" },
                    { src: pair.after, name: isBg ? "След ремонта" : "After renovation" },
                  ].map((photo) => (
                    <div key={photo.src} className="overflow-hidden rounded-xl bg-[#0c1120]">
                      <div className="relative aspect-[3/4]">
                        <Image
                          src={photo.src}
                          alt={`${photo.name} – ${isBg ? pair.titleBg : pair.titleEn}, Sensor Build`}
                          fill
                          sizes="(max-width: 639px) 100vw, 50vw"
                          className="object-contain"
                          quality={95}
                        />
                      </div>
                      <p className="border-t border-white/10 px-4 py-3 text-center text-sm font-semibold text-white">
                        {photo.name}
                      </p>
                    </div>
                  ))}
                </div>
              </figure>
            ))}
          </div>
        </section>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/contacts"
            className="rounded-xl bg-[#388644] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#2d6b35]"
          >
            {isBg ? "Заяви оглед" : "Request a visit"}
          </Link>
          <Link
            href="/services/bani"
            className={`rounded-xl border px-6 py-3 text-center font-semibold transition ${isBg ? "border-white/25 hover:bg-white/10" : "border-gray-300 hover:bg-gray-100"}`}
          >
            {isBg ? "Други бани" : "More bathrooms"}
          </Link>
        </div>
      </div>
    </main>
  );
}

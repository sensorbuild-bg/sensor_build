"use client";

import { useState } from "react";
import Link from "next/link";
import RealPanoramaViewer from "@/components/RealPanoramaViewer";
import { useLanguage } from "@/contexts/LanguageContext";

const VIDEO = "/projects/bathroom/sensorbuild-bathroom-loop.mp4";
const POSTER = "/projects/bathroom/sensorbuild-bathroom-loop-poster.jpg";
const PANORAMA = "/projects/bathroom/sensorbuild-bathroom-360.jpg";

/**
 * Draft-only showcase. Media binaries must exist under public/projects/bathroom
 * before the project is linked from /projects or promoted from preview.
 */
export default function BathroomMediaClient() {
  const { lang } = useLanguage();
  const isBg = lang === "bg";
  const [videoFailed, setVideoFailed] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <main className={isBg ? "min-h-screen bg-[#13182c] text-white" : "min-h-screen bg-white text-[#13182c]"}>
      <div className="mx-auto max-w-6xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <Link
          href="/projects"
          className="mb-7 inline-flex items-center gap-2 text-sm font-semibold text-[#62b946] hover:underline"
        >
          <span aria-hidden="true">←</span>
          {isBg ? "Всички проекти" : "All projects"}
        </Link>

        <div className="mb-8 max-w-3xl">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[.2em] text-[#7bd567]">
            SENSOR BUILD
          </p>
          <h1 className="text-3xl font-semibold tracking-tight md:text-5xl">
            {isBg ? "Завършена баня – видео и 360° разходка" : "Finished bathroom – video and 360° tour"}
          </h1>
          <p className={`mt-4 text-base leading-relaxed md:text-lg ${isBg ? "text-white/75" : "text-gray-600"}`}>
            {isBg
              ? "Реални кадри от изпълнения обект – без генерирани елементи и без промяна на разпределението."
              : "Real footage of the completed work, with no generated elements or alterations to the layout."}
          </p>
        </div>

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
                <source src={VIDEO} type="video/mp4" />
              </video>
            ) : (
              <div className="flex aspect-[9/16] items-center justify-center px-6 text-center text-sm text-white/80">
                {isBg ? "Видеото все още не е качено в този преглед." : "The video has not yet been uploaded to this preview."}
              </div>
            )}
          </div>
          {videoLoaded && !videoFailed && (
            <p className={`mt-3 text-center text-xs ${isBg ? "text-white/55" : "text-gray-500"}`}>
              {isBg ? "Автоматично пускане · Без звук · Непрекъснато повтаряне" : "Autoplay · Muted · Seamless loop"}
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

        <div className="flex flex-wrap gap-3">
          <Link
            href="/contacts"
            className="rounded-xl bg-[#388644] px-6 py-3 text-center font-semibold text-white transition hover:bg-[#2d6b35]"
          >
            {isBg ? "Заяви оглед" : "Request a visit"}
          </Link>
          <Link
            href="/projects"
            className={`rounded-xl border px-6 py-3 text-center font-semibold transition ${isBg ? "border-white/25 hover:bg-white/10" : "border-gray-300 hover:bg-gray-100"}`}
          >
            {isBg ? "Други проекти" : "More projects"}
          </Link>
        </div>
      </div>
    </main>
  );
}

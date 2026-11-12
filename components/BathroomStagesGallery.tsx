"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { BathroomRenovationStage } from "@/lib/bathroomProjects";

type Props = {
  stages: BathroomRenovationStage[];
  isBg: boolean;
};

/** Photographic record of the actual renovation, ordered chronologically. */
export default function BathroomStagesGallery({ stages, isBg }: Props) {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (openedIndex === null) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenedIndex(null);
      if (event.key === "ArrowLeft") {
        setOpenedIndex((index) => index === null ? null : (index - 1 + stages.length) % stages.length);
      }
      if (event.key === "ArrowRight") {
        setOpenedIndex((index) => index === null ? null : (index + 1) % stages.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [openedIndex, stages.length]);

  if (stages.length === 0) return null;

  const openedStage = openedIndex === null ? null : stages[openedIndex];

  return (
    <section aria-labelledby="bathroom-stages-heading" className="mt-12 mb-12 md:mt-16">
      <h2 id="bathroom-stages-heading" className="text-2xl font-semibold md:text-3xl">
        {isBg ? "Етапи на ремонта на банята" : "Bathroom renovation stages"}
      </h2>
      <p className={`mt-3 max-w-3xl text-sm leading-relaxed ${isBg ? "text-white/70" : "text-gray-600"}`}>
        {isBg
          ? "Снимки от изпълнението в последователност – от къртенето и новите инсталации, през обшивката и хидроизолацията до готовата баня. Натиснете снимка за по-голям изглед."
          : "Photos showing the work in order – from demolition and new pipework, through wall lining and waterproofing to the finished bathroom. Select a photo to enlarge it."}
      </p>

      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {stages.map((stage, index) => (
          <figure
            key={stage.src}
            className={`overflow-hidden rounded-2xl border ${isBg ? "border-white/10 bg-[#1a2342]" : "border-gray-200 bg-gray-50"}`}
          >
            <button
              type="button"
              onClick={() => setOpenedIndex(index)}
              aria-label={isBg ? `Увеличи снимка от етап ${index + 1}: ${stage.titleBg}` : `Enlarge photo of stage ${index + 1}: ${stage.titleEn}`}
              className="group block w-full text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#62b946]"
            >
              <div className="relative aspect-[3/4] overflow-hidden bg-[#0e1424]">
                <Image
                  src={stage.src}
                  alt={isBg ? stage.altBg : stage.altEn}
                  fill
                  sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 33vw"
                  quality={75}
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
            </button>
            <figcaption className="flex items-center gap-3 p-4">
              <span className="shrink-0 text-sm font-bold text-[#62b946]">{String(index + 1).padStart(2, "0")}</span>
              <span className="text-base font-semibold">{isBg ? stage.titleBg : stage.titleEn}</span>
            </figcaption>
          </figure>
        ))}
      </div>

      {openedStage && openedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={isBg ? "Увеличена снимка от ремонта" : "Enlarged renovation photo"}
          className="fixed inset-0 z-[120] flex flex-col bg-[#0a0e17]/95 p-4 text-white backdrop-blur-sm md:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpenedIndex(null);
          }}
        >
          <div className="flex shrink-0 items-center justify-between gap-3">
            <span className="text-sm font-semibold">{openedIndex + 1} / {stages.length}</span>
            <button
              type="button"
              autoFocus
              onClick={() => setOpenedIndex(null)}
              className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold hover:bg-white/20"
            >
              {isBg ? "Затвори ×" : "Close ×"}
            </button>
          </div>
          <div className="relative my-4 min-h-0 flex-1">
            <Image
              src={openedStage.src}
              alt={isBg ? openedStage.altBg : openedStage.altEn}
              fill
              sizes="100vw"
              quality={90}
              className="object-contain"
            />
          </div>
          <div className="mx-auto flex w-full max-w-4xl shrink-0 items-center justify-between gap-4">
            <button
              type="button"
              onClick={() => setOpenedIndex((openedIndex - 1 + stages.length) % stages.length)}
              aria-label={isBg ? "Предишен етап" : "Previous stage"}
              className="rounded-lg border border-white/25 px-4 py-2 hover:bg-white/15"
            >
              ←
            </button>
            <p className="max-w-xl text-center text-sm leading-relaxed">
              {isBg ? openedStage.titleBg : openedStage.titleEn}
            </p>
            <button
              type="button"
              onClick={() => setOpenedIndex((openedIndex + 1) % stages.length)}
              aria-label={isBg ? "Следващ етап" : "Next stage"}
              className="rounded-lg border border-white/25 px-4 py-2 hover:bg-white/15"
            >
              →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

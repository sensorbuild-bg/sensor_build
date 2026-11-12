"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import type { BathroomProject } from "@/lib/bathroomProjects";

type Props = { project: BathroomProject; isBg: boolean };

/** Responsive image gallery with keyboard-accessible lightbox. */
export default function RealBathroomGallery({ project, isBg }: Props) {
  const [openedIndex, setOpenedIndex] = useState<number | null>(null);
  const photos = project.gallery;

  useEffect(() => {
    if (openedIndex === null) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpenedIndex(null);
      if (event.key === "ArrowLeft") {
        setOpenedIndex((old) => (old === null ? null : (old - 1 + photos.length) % photos.length));
      }
      if (event.key === "ArrowRight") {
        setOpenedIndex((old) => (old === null ? null : (old + 1) % photos.length));
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    const oldOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = oldOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [openedIndex, photos.length]);

  return (
    <section aria-labelledby="bathroom-gallery-heading" className="mt-12 md:mt-16">
      <h2 id="bathroom-gallery-heading" className="text-2xl font-semibold md:text-3xl">
        {isBg ? "Галерия от завършената баня" : "Finished bathroom photo gallery"}
      </h2>
      <p className={`mt-2 text-sm ${isBg ? "text-white/65" : "text-gray-600"}`}>
        {isBg
          ? "Снимки от завършената баня. Натиснете снимка, за да я увеличите."
          : "Photos of the completed bathroom. Select a photo to enlarge it."}
      </p>

      <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 md:gap-5">
        {photos.map((photo, index) => (
          <button
            key={photo.src}
            type="button"
            onClick={() => setOpenedIndex(index)}
            aria-label={isBg ? `Отвори снимка ${index + 1} от галерията` : `Open gallery photo ${index + 1}`}
            className="group relative aspect-[3/4] overflow-hidden rounded-xl border border-white/10 bg-[#0e1424] shadow-lg transition hover:border-[#62b946] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#62b946]"
          >
            <Image
              src={photo.src}
              alt={isBg ? photo.altBg : photo.altEn}
              fill
              sizes="(max-width: 640px) 50vw, (max-width: 1023px) 33vw, 360px"
              className="object-cover transition duration-500 group-hover:scale-105"
              quality={85}
            />
            <span className="absolute bottom-3 right-3 rounded-lg bg-black/65 px-2.5 py-1.5 text-xs font-semibold text-white backdrop-blur-sm">
              {index + 1} / {photos.length}
            </span>
          </button>
        ))}
      </div>

      {openedIndex !== null && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={isBg ? "Голям изглед на снимка" : "Photo lightbox"}
          className="fixed inset-0 z-[120] flex flex-col bg-[#0a0e17]/95 p-4 backdrop-blur-sm md:p-8"
          onClick={(event) => {
            if (event.target === event.currentTarget) setOpenedIndex(null);
          }}
        >
          <div className="flex shrink-0 items-center justify-between gap-3 text-white">
            <span className="text-sm font-semibold">
              {openedIndex + 1} / {photos.length}
            </span>
            <button
              type="button"
              autoFocus
              onClick={() => setOpenedIndex(null)}
              aria-label={isBg ? "Затвори" : "Close"}
              className="rounded-full border border-white/30 bg-white/10 px-4 py-2 text-sm font-semibold transition hover:bg-white/20"
            >
              {isBg ? "Затвори ×" : "Close ×"}
            </button>
          </div>
          <div className="relative my-4 min-h-0 flex-1">
            <Image
              key={photos[openedIndex].src}
              src={photos[openedIndex].src}
              alt={isBg ? photos[openedIndex].altBg : photos[openedIndex].altEn}
              fill
              sizes="100vw"
              className="object-contain"
              quality={95}
            />
          </div>
          <div className="mx-auto flex w-full max-w-4xl shrink-0 items-center justify-between gap-4 text-white">
            <button
              type="button"
              onClick={() => setOpenedIndex((openedIndex - 1 + photos.length) % photos.length)}
              aria-label={isBg ? "Предишна снимка" : "Previous photo"}
              className="rounded-lg border border-white/25 px-4 py-2 transition hover:bg-white/15"
            >
              ←
            </button>
            <p className="max-w-xl text-center text-xs leading-relaxed text-white/80 sm:text-sm">
              {isBg ? photos[openedIndex].altBg : photos[openedIndex].altEn}
            </p>
            <button
              type="button"
              onClick={() => setOpenedIndex((openedIndex + 1) % photos.length)}
              aria-label={isBg ? "Следваща снимка" : "Next photo"}
              className="rounded-lg border border-white/25 px-4 py-2 transition hover:bg-white/15"
            >
              →
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

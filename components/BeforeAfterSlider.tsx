"use client";

import { useState } from "react";
import Image from "next/image";
import type { BathroomComparison } from "@/lib/bathroomProjects";

type Props = {
  pair: BathroomComparison;
  isBg: boolean;
};

/**
 * Only use genuine before and after photos from the same viewpoint.
 * Intentionally not displayed until both photos have been supplied.
 */
export default function BeforeAfterSlider({ pair, isBg }: Props) {
  const [position, setPosition] = useState(50);

  return (
    <figure className="mx-auto w-full max-w-4xl">
      <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-[#0e1424]">
        <Image
          src={pair.after}
          alt={isBg ? "След ремонта" : "After renovation"}
          fill
          sizes="(max-width: 768px) 100vw, 896px"
          className="object-cover"
        />
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <Image
            src={pair.before}
            alt={isBg ? "Преди ремонта" : "Before renovation"}
            fill
            sizes="(max-width: 768px) 100vw, 896px"
            className="object-cover"
          />
        </div>
        <span
          className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white shadow-[0_0_5px_#000]"
          style={{ left: `${position}%` }}
        />
        <span className="pointer-events-none absolute bottom-4 left-4 rounded-lg bg-[#13182c]/80 px-3 py-2 text-sm font-semibold text-white">
          {isBg ? "Преди" : "Before"}
        </span>
        <span className="pointer-events-none absolute bottom-4 right-4 rounded-lg bg-[#13182c]/80 px-3 py-2 text-sm font-semibold text-white">
          {isBg ? "След" : "After"}
        </span>
        <input
          type="range"
          min={0}
          max={100}
          step={1}
          value={position}
          onChange={(event) => setPosition(Number(event.currentTarget.value))}
          aria-label={isBg ? "Сравни преди и след ремонта" : "Compare before and after renovation"}
          className="absolute inset-0 z-20 h-full w-full cursor-ew-resize opacity-0"
        />
      </div>
      <figcaption className="mt-3 text-center text-sm">
        {isBg ? pair.titleBg : pair.titleEn}
      </figcaption>
    </figure>
  );
}

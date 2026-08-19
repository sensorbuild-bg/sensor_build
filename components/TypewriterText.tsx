"use client";

import { useEffect, useRef, useState } from "react";

export default function TypewriterText({
  text,
  speed = 70,
  delay = 0,
}: {
  text: string;
  speed?: number;
  delay?: number;
}) {
  const [visibleLength, setVisibleLength] = useState(0);
  const lastLengthRef = useRef(0);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (prefersReducedMotion) {
      lastLengthRef.current = text.length;
      setVisibleLength(text.length);
      return;
    }

    lastLengthRef.current = 0;
    setVisibleLength(0);

    // Не допускаме старите големи delay стойности да създават празно чакане.
    const effectiveDelay = Math.min(Math.max(delay, 0), 80);
    const safeSpeed = Math.max(speed, 12);
    let animationFrame = 0;
    let startTime: number | null = null;

    const animate = (timestamp: number) => {
      if (startTime === null) startTime = timestamp;

      const elapsed = timestamp - startTime;

      if (elapsed < effectiveDelay) {
        animationFrame = requestAnimationFrame(animate);
        return;
      }

      const nextLength = Math.min(
        text.length,
        Math.floor((elapsed - effectiveDelay) / safeSpeed) + 1
      );

      // React се обновява само когато реално трябва да се покаже нов символ.
      // Така няма натрупване на setInterval таймери и визуални тласъци.
      if (nextLength !== lastLengthRef.current) {
        lastLengthRef.current = nextLength;
        setVisibleLength(nextLength);
      }

      if (nextLength < text.length) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrame);
  }, [text, speed, delay]);

  const displayedText = text.slice(0, visibleLength);

  return (
    <span className="inline-grid max-w-full align-top">
      {/*
        Пълният текст резервира крайните ширина и височина от първия кадър.
        Така центрираният текст не се мести и не сменя редовете докато се изписва.
      */}
      <span
        className="invisible col-start-1 row-start-1 whitespace-pre-wrap"
        aria-hidden="true"
      >
        {text}
      </span>

      <span
        className="col-start-1 row-start-1 whitespace-pre-wrap"
        aria-label={text}
      >
        {displayedText}
        {visibleLength < text.length && (
          <span className="typewriter-cursor" aria-hidden="true">
            |
          </span>
        )}
      </span>
    </span>
  );
}

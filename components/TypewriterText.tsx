"use client";

import { useState, useEffect } from "react";

export default function TypewriterText({ 
  text, 
  speed = 70, 
  delay = 0 
}: { 
  text: string; 
  speed?: number; 
  delay?: number;
}) {
  const [displayed, setDisplayed] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    setDisplayed(""); // Reset when text changes
    setIsComplete(false);
    let intervalId: NodeJS.Timeout | null = null;

    const timeout = setTimeout(() => {
      intervalId = setInterval(() => {
        setDisplayed(text.slice(0, i));
        i++;
        if (i > text.length) {
          setIsComplete(true);
          if (intervalId) clearInterval(intervalId);
        }
      }, speed);
    }, delay);

    return () => {
      clearTimeout(timeout);
      if (intervalId) clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  return (
    <span className="whitespace-pre-wrap">
      {displayed}
      {!isComplete && <span className="animate-pulse">|</span>}
    </span>
  );
}


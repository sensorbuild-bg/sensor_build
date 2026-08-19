import type { CSSProperties } from "react";

export default function TypewriterText({
  text,
  speed = 70,
  delay = 0,
}: {
  text: string;
  speed?: number;
  delay?: number;
}) {
  const duration = Math.max(text.length * speed, 450);

  const style = {
    "--typewriter-duration": `${duration}ms`,
    "--typewriter-delay": `${delay}ms`,
  } as CSSProperties;

  return (
    <span className="typewriter-reveal whitespace-pre-wrap" style={style}>
      {text}
    </span>
  );
}

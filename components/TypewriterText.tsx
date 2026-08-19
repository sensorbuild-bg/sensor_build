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

  // Запазваме ефекта, но не допускаме дълго празно изчакване.
  // Така подадените стари delay стойности няма да държат празен контейнер секунди наред.
  const effectiveDelay = Math.min(delay, 120);

  const style = {
    "--typewriter-duration": `${duration}ms`,
    "--typewriter-delay": `${effectiveDelay}ms`,
  } as CSSProperties;

  return (
    <span className="typewriter-reveal whitespace-pre-wrap" style={style}>
      {text}
    </span>
  );
}

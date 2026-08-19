export default function TypewriterText({
  text,
}: {
  text: string;
  speed?: number;
  delay?: number;
}) {
  return <span className="whitespace-pre-wrap">{text}</span>;
}

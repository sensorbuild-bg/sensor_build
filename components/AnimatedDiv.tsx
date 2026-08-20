interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedDiv({ children, className = "" }: AnimatedDivProps) {
  return <div className={`animate-fadeInUpSoft ${className}`}>{children}</div>;
}

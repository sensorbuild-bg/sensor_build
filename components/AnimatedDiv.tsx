"use client";

import { motion } from "framer-motion";

interface AnimatedDivProps {
  children: React.ReactNode;
  className?: string;
}

export default function AnimatedDiv({ children, className = "" }: AnimatedDivProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}   // стартови стойности
      whileInView={{ opacity: 1, y: 0 }}    // финални стойности когато е видим
      viewport={{ once: true, amount: 0.2 }} // активира се веднъж, когато 20% от елемента е видим
      transition={{ duration: 0.5, ease: "easeOut" }} // време и easing
      className={className}
    >
      {children}
    </motion.div>
  );
}


'use client';

"use client";

import { usePathname } from "next/navigation";
import BackButton from "@/components/BackButton";
import { useLanguage } from "@/contexts/LanguageContext";

export default function GlobalBackButton() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  // ❌ да не се показва на началната страница
  if (pathname === "/") return null;

  const label = lang === "bg" ? "← Назад" : "← Back";

  return (
    <div className="mx-auto max-w-7xl px-4 pt-6">
      <BackButton label={label} />
    </div>
  );
}

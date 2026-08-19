"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BackButton() {
  const pathname = usePathname();
  const { lang } = useLanguage();

  const parentPage = pathname.startsWith("/projects/")
    ? {
        href: "/projects",
        label: lang === "bg" ? "Назад към проектите" : "Back to projects",
      }
    : pathname.startsWith("/services/")
      ? {
          href: "/services",
          label: lang === "bg" ? "Назад към услугите" : "Back to services",
        }
      : null;

  if (!parentPage) return null;

  return (
    <nav
      aria-label={lang === "bg" ? "Навигация към предходно ниво" : "Parent navigation"}
      className="mx-auto max-w-7xl px-4 pt-6"
    >
      <Link
        href={parentPage.href}
        className="inline-flex items-center gap-2 rounded-xl border-2 border-[#388644] px-4 py-2 font-semibold text-[#62b946] transition-colors duration-300 hover:bg-[#388644] hover:text-white"
      >
        ← {parentPage.label}
      </Link>
    </nav>
  );
}

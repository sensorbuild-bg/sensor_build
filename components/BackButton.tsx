"use client";

import { usePathname, useRouter } from "next/navigation";
import { useLanguage } from "@/contexts/LanguageContext";

export default function BackButton() {
  const pathname = usePathname();
  const router = useRouter();
  const { lang } = useLanguage();

  // true когато си в /projects/[id] (например /projects/0, /projects/5 и т.н.)
  const isProjectDetails =
    pathname.startsWith("/projects/") && pathname !== "/projects";

  const label = isProjectDetails
    ? lang === "bg"
      ? "Назад към проекти"
      : "Back to projects"
    : lang === "bg"
    ? "Назад"
    : "Back";

  const handleClick = () => {
    if (isProjectDetails) {
      router.push("/projects");
    } else {
      router.back();
    }
  };

  return (
    <button
      onClick={handleClick}
      className="inline-flex items-center gap-2 rounded-xl border-2 border-[#388644] px-4 py-2 text-[#388644] font-semibold hover:bg-[#388644] hover:text-white transition-colors duration-300"
    >
      ← {label}
    </button>
  );
}

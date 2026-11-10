import type { Metadata } from "next";
import { getBathroomProject } from "@/lib/bathroomProjects";
import BathroomMediaClient from "./BathroomMediaClient";

const project = getBathroomProject("zavarshena-banya")!;

export const metadata: Metadata = {
  title: "Основен ремонт на баня – видео, снимки и 360° | Sensor Build",
  description:
    "Основен ремонт на баня от къртене до монтаж на мебели и санитария: ВиК, електроинсталации, плочки 60 × 30 и 90 × 15 см и шестоъгълен декор в душ зоната.",
  alternates: { canonical: project.href },
  openGraph: {
    title: "Основен ремонт на баня – изпълнен проект | Sensor Build",
    description:
      "Реален основен ремонт на баня с ВиК, електроинсталации, шестоъгълни плочки в душ зоната и преход към дървесен декор. Видео, снимки и 360°.",
    url: project.href,
    type: "article",
    images: [{ url: project.cover, alt: "Завършена баня с мраморни и дървесни декори" }],
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Услуги", item: "https://www.sensorbuild.bg/services" },
    { "@type": "ListItem", position: 2, name: "Бани", item: "https://www.sensorbuild.bg/services/bani" },
    { "@type": "ListItem", position: 3, name: project.titleBg, item: `https://www.sensorbuild.bg${project.href}` },
  ],
};

export default function FinishedBathroomPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData).replace(/</g, "\\u003c") }}
      />
      <BathroomMediaClient />
    </>
  );
}

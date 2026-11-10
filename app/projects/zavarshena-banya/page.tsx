import type { Metadata } from "next";
import { getBathroomProject } from "@/lib/bathroomProjects";
import BathroomMediaClient from "./BathroomMediaClient";

const project = getBathroomProject("zavarshena-banya")!;

export const metadata: Metadata = {
  title: "Завършена баня – видео, снимки и 360° оглед | Sensor Build",
  description:
    "Разгледайте завършена баня с мраморни и дървесни декори от Sensor Build. Видеоразходка, интерактивна 360° панорама, снимки и детайли от изпълнението.",
  alternates: { canonical: project.href },
  openGraph: {
    title: "Завършена баня – реален обект | Sensor Build",
    description:
      "Реална завършена баня: видео, 360° панорама и снимки. Вижте изпълнението на Sensor Build.",
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

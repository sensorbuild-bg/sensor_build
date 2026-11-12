import type { Metadata } from "next";
import { getBathroomProject } from "@/lib/bathroomProjects";
import BathroomMediaClient from "./BathroomMediaClient";

const project = getBathroomProject("zavarshena-banya")!;

export const metadata: Metadata = {
  title: "Основен ремонт на баня в София – реализиран обект",
  description:
    "Основен ремонт на баня от къртене до монтаж на мебели и санитария: предстенна обшивка, хидроизолация, ВиК, електроинсталации и облицовки с мраморен и дървесен декор.",
  alternates: { canonical: project.href },
  openGraph: {
    title: "Основен ремонт на баня в София – изпълнен проект | Sensor Build",
    description:
      "Реален ремонт на баня с предстенна обшивка, хидроизолация, ВиК и електроинсталации, шестоъгълни плочки в душ зоната и дървесен декор. Видео, снимки и 360°.",
    url: project.href,
    type: "article",
    images: [{ url: project.cover, alt: "Завършена баня с мраморни и дървесни декори" }],
  },
};

const projectUrl = `https://www.sensorbuild.bg${project.href}`;
const projectImages = [
  project.cover,
  ...project.gallery.map((photo) => photo.src),
  ...project.beforeAfterPairs.flatMap((pair) => [pair.before, pair.after]),
  ...project.renovationStages.map((stage) => stage.src),
].filter((image, index, all) => all.indexOf(image) === index);

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      "@id": `${projectUrl}#breadcrumb`,
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Услуги", item: "https://www.sensorbuild.bg/services" },
        { "@type": "ListItem", position: 2, name: "Бани", item: "https://www.sensorbuild.bg/services/bani" },
        { "@type": "ListItem", position: 3, name: project.titleBg, item: projectUrl },
      ],
    },
    {
      "@type": "CreativeWork",
      "@id": `${projectUrl}#project`,
      url: projectUrl,
      name: "Основен ремонт на баня в София – завършен проект",
      description: project.descriptionBg,
      image: projectImages.map((image) => `https://www.sensorbuild.bg${image}`),
      creator: {
        "@type": "GeneralContractor",
        "@id": "https://www.sensorbuild.bg/#business",
        name: "Sensor Build",
      },
      about: {
        "@type": "Service",
        name: "Цялостен ремонт на баня",
        url: "https://www.sensorbuild.bg/services/bani",
      },
    },
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

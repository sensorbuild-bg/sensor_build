import type { Metadata } from 'next';
import { projectIds, projectSeo } from '@/lib/projectSeo';
import { bathroomProjects } from '@/lib/bathroomProjects';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Ремонтни проекти в София',
  description:
    'Реализирани ремонти в София от Sensor Build – завършена баня със снимки „Преди/След“, електро- и ВиК инсталации, подово отопление, гипсокартон и осветление.',
  alternates: {
    canonical: '/projects',
  },
  openGraph: {
    title: 'Ремонтни проекти в София | Sensor Build',
    description:
      'Реални изпълнени обекти и етапи на работа от Sensor Build в София.',
    url: '/projects',
    type: 'website',
  },
};

// Match the six projects actually visible on the public Projects page.
const showcasedProjects = [
  ...bathroomProjects.map((bathroom) => ({
    name: bathroom.titleBg,
    url: `https://www.sensorbuild.bg${bathroom.href}`,
    image: `https://www.sensorbuild.bg${bathroom.cover}`,
  })),
  ...projectIds.slice(1).map((id) => ({
    name: projectSeo[id].title,
    url: `https://www.sensorbuild.bg/projects/${projectSeo[id].slug}`,
    image: `https://www.sensorbuild.bg${projectSeo[id].image}`,
  })),
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Изпълнени ремонтни проекти в София – Sensor Build',
  itemListElement: showcasedProjects.map((project, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: project.name,
    url: project.url,
    image: project.image,
  })),
};

export default function ProjectsPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <ProjectsClient />
    </>
  );
}

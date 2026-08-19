import type { Metadata } from 'next';
import { projectIds, projectSeo } from '@/lib/projectSeo';
import ProjectsClient from './ProjectsClient';

export const metadata: Metadata = {
  title: 'Ремонтни проекти в София',
  description:
    'Разгледайте изпълнени ремонтни проекти на Sensor Build в София – електро- и ВиК инсталации, подово отопление, гипсокартон, осветление и довършителни работи.',
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

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Изпълнени проекти на Sensor Build',
  itemListElement: projectIds.map((id, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: projectSeo[id].title,
    url: `https://www.sensorbuild.bg/projects/${id}`,
    image: `https://www.sensorbuild.bg${projectSeo[id].image}`,
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

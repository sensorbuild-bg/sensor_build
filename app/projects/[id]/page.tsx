import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isProjectId, projectIds, projectSeo } from '@/lib/projectSeo';
import ProjectClient from './ProjectClient';

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projectIds.map((id) => ({ id }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;

  if (!isProjectId(id)) {
    return {
      title: 'Проектът не е намерен',
      robots: { index: false, follow: true },
    };
  }

  const seo = projectSeo[id];

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/projects/${id}`,
    },
    openGraph: {
      title: `${seo.title} | Sensor Build`,
      description: seo.description,
      url: `/projects/${id}`,
      type: 'article',
      images: [
        {
          url: seo.image,
          alt: seo.title,
        },
      ],
    },
  };
}

export default async function ProjectPage({ params }: PageProps) {
  const { id } = await params;

  if (!isProjectId(id)) notFound();

  const seo = projectSeo[id];
  const projectUrl = `https://www.sensorbuild.bg/projects/${id}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Проекти',
            item: 'https://www.sensorbuild.bg/projects',
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: seo.title,
            item: projectUrl,
          },
        ],
      },
      {
        '@type': 'CreativeWork',
        '@id': `${projectUrl}#project`,
        url: projectUrl,
        name: seo.title,
        description: seo.description,
        image: `https://www.sensorbuild.bg${seo.image}`,
        creator: {
          '@id': 'https://www.sensorbuild.bg/#business',
        },
        about: {
          '@type': 'Place',
          name: 'София, България',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <ProjectClient />
    </>
  );
}

import type { Metadata } from 'next';
import { notFound, permanentRedirect } from 'next/navigation';
import { projectIds, projectSeo, resolveProjectId } from '@/lib/projectSeo';
import ProjectClient from './ProjectClient';

type PageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return projectIds.map((id) => ({ id: projectSeo[id].slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id: identifier } = await params;
  const projectId = resolveProjectId(identifier);

  if (!projectId) {
    return {
      title: 'Проектът не е намерен',
      robots: { index: false, follow: true },
    };
  }

  const seo = projectSeo[projectId];
  const canonicalPath = `/projects/${seo.slug}`;

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title: `${seo.title} | Sensor Build`,
      description: seo.description,
      url: canonicalPath,
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
  const { id: identifier } = await params;
  const projectId = resolveProjectId(identifier);

  if (!projectId) notFound();

  const seo = projectSeo[projectId];

  if (identifier !== seo.slug) {
    permanentRedirect(`/projects/${seo.slug}`);
  }

  const projectUrl = `https://www.sensorbuild.bg/projects/${seo.slug}`;

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
        image: seo.images.map(
          (image) => `https://www.sensorbuild.bg${image}`
        ),
        creator: {
          '@type': 'GeneralContractor',
          '@id': 'https://www.sensorbuild.bg/#business',
          name: 'Sensor Build',
          url: 'https://www.sensorbuild.bg/',
        },
        locationCreated: {
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

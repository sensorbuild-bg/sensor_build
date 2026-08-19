import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { isServiceSlug, serviceSeo, serviceSlugs } from '@/lib/serviceSeo';
import ServiceDetailClient from './ServiceDetailClient';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;

  if (!isServiceSlug(slug)) {
    return {
      title: 'Страницата не е намерена',
      robots: { index: false, follow: true },
    };
  }

  const seo = serviceSeo[slug];

  return {
    title: seo.title,
    description: seo.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
    robots: seo.index
      ? undefined
      : {
          index: false,
          follow: true,
        },
    openGraph: {
      title: `${seo.title} | Sensor Build`,
      description: seo.description,
      url: `/services/${slug}`,
      type: 'website',
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isServiceSlug(slug)) notFound();

  const seo = serviceSeo[slug];

  const breadcrumbData = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Услуги',
        item: 'https://www.sensorbuild.bg/services',
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: seo.title,
        item: `https://www.sensorbuild.bg/services/${slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(breadcrumbData).replace(/</g, '\\u003c'),
        }}
      />
      <ServiceDetailClient />
    </>
  );
}

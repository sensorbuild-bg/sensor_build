import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { business } from '@/lib/business';
import { bathroomProjects } from '@/lib/bathroomProjects';
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
      ...(slug === 'bani' ? {
        images: [
          {
            url: bathroomProjects[0].cover,
            alt: 'Ремонт на баня в София – завършен обект на Sensor Build',
          },
        ],
      } : {}),
    },
  };
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const { slug } = await params;

  if (!isServiceSlug(slug)) notFound();

  const seo = serviceSeo[slug];
  const serviceUrl = `${business.url}/services/${slug}`;

  const structuredData = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'BreadcrumbList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            name: 'Услуги',
            item: `${business.url}/services`,
          },
          {
            '@type': 'ListItem',
            position: 2,
            name: seo.title,
            item: serviceUrl,
          },
        ],
      },
      {
        '@type': 'Service',
        '@id': `${serviceUrl}#service`,
        url: serviceUrl,
        name: seo.heading.bg,
        serviceType: seo.heading.bg,
        description: seo.description,
        provider: {
          '@type': 'GeneralContractor',
          '@id': `${business.url}/#business`,
          name: business.name,
          legalName: business.legalName,
          url: `${business.url}/`,
          telephone: business.phoneE164,
          email: business.email,
          address: {
            '@type': 'PostalAddress',
            streetAddress: business.address.street,
            addressLocality: business.address.city,
            postalCode: business.address.postalCode,
            addressCountry: business.address.countryCode,
          },
        },
        areaServed: {
          '@type': 'City',
          name: business.address.city,
        },
      },
      ...(slug === 'bani'
        ? [
            {
              '@type': 'ItemList',
              '@id': `${serviceUrl}#completed-bathrooms`,
              name: 'Завършени ремонти на бани – Sensor Build',
              itemListElement: bathroomProjects.map((bathroom, index) => ({
                '@type': 'ListItem',
                position: index + 1,
                name: bathroom.titleBg,
                url: `${business.url}${bathroom.href}`,
                image: `${business.url}${bathroom.cover}`,
              })),
            },
          ]
        : []),
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
      <ServiceDetailClient />
    </>
  );
}

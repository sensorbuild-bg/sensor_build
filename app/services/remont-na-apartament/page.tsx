import type { Metadata } from 'next';
import RemontNaApartamentClient from './RemontNaApartamentClient';

const pageUrl = 'https://www.sensorbuild.bg/services/remont-na-apartament';

export const metadata: Metadata = {
  title: 'Ремонт на апартамент в София',
  description:
    'Цялостен и частичен ремонт на апартамент в София – ВиК, електроинсталации, гипсокартон, шпакловки, боядисване, бани, замазки и настилки.',
  alternates: {
    canonical: '/services/remont-na-apartament',
  },
  openGraph: {
    title: 'Ремонт на апартамент в София | Sensor Build',
    description:
      'Цялостни и частични ремонти на апартаменти в София с ясен план, координирани етапи и оферта по дейности.',
    url: '/services/remont-na-apartament',
    type: 'website',
    images: [
      {
        url: '/project1/main.webp',
        alt: 'Ремонт на апартамент в София - Sensor Build',
      },
    ],
  },
};

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
          item: 'https://www.sensorbuild.bg/services',
        },
        {
          '@type': 'ListItem',
          position: 2,
          name: 'Ремонт на апартамент в София',
          item: pageUrl,
        },
      ],
    },
    {
      '@type': 'Service',
      '@id': `${pageUrl}#service`,
      url: pageUrl,
      name: 'Ремонт на апартамент в София',
      serviceType: 'Цялостен и частичен ремонт на апартамент',
      description:
        'Цялостни и частични ремонти на апартаменти в София, включително ВиК и електроинсталации, гипсокартон, шпакловки, боядисване, бани, замазки и настилки.',
      provider: {
        '@id': 'https://www.sensorbuild.bg/#business',
      },
      areaServed: {
        '@type': 'City',
        name: 'София',
      },
    },
  ],
};

export default function RemontNaApartamentPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <RemontNaApartamentClient />
    </>
  );
}

import type { Metadata } from 'next';
import { indexedServiceSlugs, serviceSeo } from '@/lib/serviceSeo';
import ServicesClient from './ServicesClient';

export const metadata: Metadata = {
  title: 'Ремонтни услуги в София',
  description:
    'Строителни и ремонтни услуги в София – цялостни ремонти, гипсокартон, шпакловки, боядисване, ВиК, електроинсталации, бани, настилки, замазки и подово отопление.',
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: 'Ремонтни услуги в София | Sensor Build',
    description:
      'Цялостни и частични ремонти в София с електро- и ВиК инсталации, гипсокартон, шпакловки, боядисване, бани и настилки.',
    url: '/services',
    type: 'website',
  },
};

const serviceItems = [
  {
    name: 'Ремонт на апартамент в София',
    url: 'https://www.sensorbuild.bg/services/remont-na-apartament',
  },
  ...indexedServiceSlugs.map((slug) => ({
    name: serviceSeo[slug].heading.bg,
    url: `https://www.sensorbuild.bg/services/${slug}`,
  })),
];

const structuredData = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Ремонтни услуги на Sensor Build в София',
  itemListElement: serviceItems.map((service, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: service.name,
    url: service.url,
  })),
};

export default function ServicesPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(structuredData).replace(/</g, '\\u003c'),
        }}
      />
      <ServicesClient />
    </>
  );
}

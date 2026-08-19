import type { Metadata } from 'next';
import RemontNaApartamentClient from './RemontNaApartamentClient';

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

export default function RemontNaApartamentPage() {
  return <RemontNaApartamentClient />;
}

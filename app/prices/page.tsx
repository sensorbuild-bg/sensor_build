import type { Metadata } from 'next';
import PricesClient from './PricesClient';

export const metadata: Metadata = {
  title: 'Цени за ремонт в София',
  description:
    'Ориентировъчни цени за освежителен и основен ремонт в София. Вижте какво включват дейностите и заявете оглед за индивидуална оферта.',
  alternates: {
    canonical: '/prices',
  },
  openGraph: {
    title: 'Цени за ремонт в София | Sensor Build',
    description:
      'Ориентировъчни цени за ремонт в София и ясна оферта по дейности след оглед на обекта.',
    url: '/prices',
    type: 'website',
  },
};

export default function PricesPage() {
  return <PricesClient />;
}
